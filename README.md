# The Seer's S.I.G.H.T.

Creative signal archive — writing, music, artwork, and software.

Static front-end (`index.html`, `styles.css`, `script.js`, `signal-seal.svg`) with an optional Express server (`server.js`) that serves the site and exposes Printful API endpoints.

## Run locally

```bash
npm install
npm start        # http://localhost:3000
```

`/api/health` reports Printful configuration status. See `.env.example` for the optional `PRINTFUL_*` variables — the front-end works without them.

## Deploy (Vercel)

The site is static at the repo root; Vercel serves `index.html` directly. The Express endpoints (`/api/printful/*`) are not yet wired as Vercel serverless functions — the front-end doesn't call them today.
