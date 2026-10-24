# ผ้าใบกันสาดช่างตู่

เว็บไซต์บริการติดตั้งผ้าใบกันสาด ผ้าใบรางสไลด์ และโครงหลังคา ใช้ Next.js App Router พร้อมภาพผลงานจริงจาก Facebook ของช่างตู่

## Run locally

Use Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production verification:

```sh
npm run check
npm run build
npm start
npm run test:smoke
```

`lint` is a read-only Biome lint check; `typecheck` runs TypeScript. The smoke script requires a running server and verifies the eight public routes, HTML metadata, canonical URLs, structured data, sitemap, robots, 404 responses, the legacy redirect and a real optimized image. To test another server, set `SMOKE_BASE_URL` to its origin.

## Canonical production domain

The default is `https://thai-awning-website.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` **before building** when deploying to a different domain. It must be an HTTPS origin, without credentials, path, query or fragment. This controls metadata, structured data, sitemap and robots. Use the same environment variable when running smoke checks against that build.

```powershell
$env:NEXT_PUBLIC_SITE_URL = 'https://your-domain.example'
npm run build
$env:SMOKE_BASE_URL = 'http://localhost:3000'
npm run test:smoke
```

Approved public routes: `/`, `/services/awning`, `/services/slide-awning`, `/services/steel-roof`, `/projects`, `/projects/striped-awning-suan-phueng`, `/about`, `/contact`. The old `/services/tent-and-awning-roof` redirects with HTTP 301 to `/services/steel-roof`.

## Content and assets

Business contact values and image mappings live in `src/lib/site.ts`. Preserve verified work details when changing copy: only the Suan Phueng project currently has a confirmed location. Avoid unverified prices, reviews, addresses, service-radius or guarantees. The Organization JSON-LD deliberately omits these claims.

Local images live in `public/images/work`; Next Image serves optimized variants without allowing arbitrary remote sources. Local IBM Plex Sans Thai fonts (Thai subset, weights 400/500/600/700) are supplied by [Fontsource](https://fontsource.org/fonts/ibm-plex-sans-thai), under the bundled [SIL Open Font License](public/fonts/OFL.txt). Latin characters use the interface's system fallback font.

Framework is pinned to Next 15.5.28 following the [official October 14, 2026 security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026). Review dependency advisories when upgrading and repeat production smoke checks.
`postcss` and `postcss-selector-parser` overrides keep transitive CSS tooling on patched releases while retaining Tailwind 3; verify CSS output when changing these overrides.
