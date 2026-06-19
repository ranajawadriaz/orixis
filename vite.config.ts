import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { GROQ_URL, groqRequestInit, sanitizeMessages } from "./src/lib/chatKnowledge";

/**
 * Dev-only middleware that mirrors the production /api/chat serverless function,
 * so the chatbot works with `npm run dev` without leaking the key to the client
 * (it runs in the Vite Node process and reads GROQ_API_KEY from .env).
 */
function groqDevApi(apiKey?: string): Plugin {
  return {
    name: "groq-dev-api",
    configureServer(server) {
      server.middlewares.use("/api/chat", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method Not Allowed");
          return;
        }
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", async () => {
          const send = (status: number, obj: unknown) => {
            res.statusCode = status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(obj));
          };
          try {
            if (!apiKey) return send(500, { error: "MISSING_KEY" });
            const messages = sanitizeMessages(JSON.parse(body || "{}").messages);
            if (!messages.length) return send(400, { error: "BAD_REQUEST" });

            const upstream = await fetch(GROQ_URL, groqRequestInit(apiKey, messages));
            if (!upstream.ok || !upstream.body) return send(502, { error: "UPSTREAM" });

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
            res.setHeader("Cache-Control", "no-cache, no-transform");
            const reader = upstream.body.getReader();
            for (;;) {
              const { done, value } = await reader.read();
              if (done) break;
              res.write(Buffer.from(value));
            }
            res.end();
          } catch {
            send(500, { error: "SERVER" });
          }
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load every env var (no VITE_ prefix filter) so the key stays server-side.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), groqDevApi(env.GROQ_API_KEY)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
