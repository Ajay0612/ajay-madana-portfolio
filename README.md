# Ajay Madana Portfolio

Production-ready React, TypeScript, and Vite portfolio for GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Production test

```bash
npm run build
npm run preview
```

## GitHub Pages

This project is configured for:

```txt
https://ajay0612.github.io/ajay-madana-portfolio/
```

The repository base path is set in `vite.config.ts`:

```ts
base: "/ajay-madana-portfolio/"
```

Pushing to `main` automatically deploys through GitHub Actions. Enable GitHub Pages with:

```txt
Settings -> Pages -> Source -> GitHub Actions
```

## Deploy

```bash
git add .
git commit -m "Redesign portfolio"
git push origin main
```
