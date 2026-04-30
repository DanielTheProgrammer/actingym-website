# ActinGym Website Mock

A first-pass marketing website mock for `actingym.com`.

The mock is intentionally source-led:

- App/product context comes from `/Users/daniel/GIT_WS/ai-acting-analysis`.
- Website research lives in `docs/website-design-research.md`.
- The visual direction uses the existing ActinGym icon, splash asset, and fonts.

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Publish

This repo exports a static Next site to `out/` and deploys it to GitHub Pages
from `.github/workflows/deploy.yml`.

Custom domain placeholder:

```text
actingym.com
```
