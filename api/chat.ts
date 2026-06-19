import { GROQ_URL, groqRequestInit, sanitizeMessages } from '../src/lib/chatKnowledge';

// Vercel Edge Function — streams Groq chat completions while keeping the API key
// server-side. Set GROQ_API_KEY in your hosting provider's environment settings.
export const config = { runtime: 'edge' };

const json = (obj: unknown, status: number) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return json({ error: 'METHOD_NOT_ALLOWED' }, 405);

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return json({ error: 'MISSING_KEY' }, 500);

  let payload: { messages?: unknown };
  try {
    payload = await req.json();
  } catch {
    return json({ error: 'BAD_REQUEST' }, 400);
  }

  const messages = sanitizeMessages(payload?.messages);
  if (!messages.length) return json({ error: 'BAD_REQUEST' }, 400);

  const upstream = await fetch(GROQ_URL, groqRequestInit(apiKey, messages));
  if (!upstream.ok || !upstream.body) return json({ error: 'UPSTREAM' }, 502);

  // Pass the SSE stream straight through to the browser.
  return new Response(upstream.body, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
    },
  });
}
