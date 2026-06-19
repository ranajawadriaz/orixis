# Orixis, Company Website

The official website for **Orixis**, a technology studio building AI agents, custom web
platforms and mobile apps that help businesses automate, scale and grow.

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (primary design system)
- **Material UI** (chatbot widget, inputs, accents)
- **Framer Motion** (scroll + UI animations)
- **react-icons** (technology brand logos)
- **React Three Fiber / three.js** (interactive 3D robot)
- **Groq** (AI assistant, `llama-3.3-70b-versatile`)

## Getting started

```sh
# 1. Install dependencies
npm install

# 2. Add your environment variables
cp .env.example .env
#   then set GROQ_API_KEY in .env

# 3. Start the dev server
npm run dev
```

The app runs on http://localhost:8080.

## Environment variables

| Variable         | Description                                                       |
| ---------------- | ---------------------------------------------------------------- |
| `GROQ_API_KEY`   | Groq API key for the AI assistant ("Ori"). **Server-side only.** |

The key is used exclusively on the server, the [`api/chat.ts`](api/chat.ts) serverless
function in production, and an equivalent Vite dev middleware locally. It is **not** prefixed
with `VITE_`, so Vite never inlines it into the public client bundle. The browser only ever
talks to `/api/chat`; it never sees the key. Safe to push this repo public.

**Where to put the key**

- **Local dev:** add `GROQ_API_KEY=...` to a local `.env` file (already gitignored).
- **Production (Vercel):** Project → Settings → **Environment Variables** → add
  `GROQ_API_KEY`. The `api/` folder deploys automatically as an Edge Function, and
  [`vercel.json`](vercel.json) handles SPA routing.
- **Netlify / others:** set `GROQ_API_KEY` in the dashboard and port `api/chat.ts` to the
  platform's function format (it's ~30 lines and host-agnostic apart from the handler signature).

> Tip: since this key was shared in plain text, consider rotating it in the Groq console
> before going live.

## Project structure

- `src/pages/`, one file per route (Home, Services, Products, Case Studies, About, Careers, Contact).
- `src/components/`, shared UI: `Navbar`, `Footer`, `Chatbot`, the `robot/` 3D showcase, motion helpers.
- `src/lib/site.ts`, single source of truth for contact details + WhatsApp/email helpers.
- `src/lib/chatbot.ts`, Groq streaming client + the assistant's system prompt.
- `src/contexts/ThemeContext.tsx`, light/dark theme (light by default).

## Contact

WhatsApp / Phone: **+92 301 1119707** · Email: **ranajawadriaz.work@gmail.com**

## Credits

3D robot model by [@Quaternius](https://www.patreon.com/quaternius) (CC0 1.0 Public Domain).
