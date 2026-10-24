# Sehar Faiz: Official Website (Next.js)

A single-page Next.js (App Router, TypeScript) website. The design, blue colours and layout are the same as the original HTML site. No API keys, database or paid services are needed.

## Prerequisites
Install **Node.js 20 LTS or newer** from https://nodejs.org. Check in PowerShell:
```powershell
node -v
npm -v
```

## Run locally (PowerShell)
1. Right-click the ZIP → **Extract All…**
2. Open PowerShell in the extracted folder (adjust the path):
```powershell
cd "$HOME\Downloads\sehar-faiz-portfolio"
npm install
npm run dev
```
3. Open http://localhost:3000. Stop the server with `Ctrl + C`.

If PowerShell blocks `npm`, run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, or use Command Prompt.

## Production build
```powershell
npm run typecheck
npm run build
npm run start
```

## WhatsApp buttons
There are three, and all open a chat with your number: the **Chat on WhatsApp** button in the top section, **Message on WhatsApp** in Contact, and the floating green button. The contact form also sends its message through WhatsApp. Change the number or the pre-filled message in `lib/config.ts`.

## Where things are
- `app/page.tsx`: all page content (about, services, timeline, FAQ, contact)
- `app/tailwind.css` and `app/globals.css`: styles and colours (indigo `#4f46e5`, cyan `#06b6d4`)
- `components/SiteScripts.tsx`: menu, scroll effects, counters, FAQ and contact form behaviour
- `public/`: the two illustrations

## Deploy to Vercel
Push the folder to GitHub, then import it at https://vercel.com/new. The defaults work and no environment variables are needed.
