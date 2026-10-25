# Changtu website Implementation Plan
> For agentic workers: use isolated branches and bounded task ownership.
**Goal:** Implement approved eight-page Thai awning website with real photos and SEO.
**Architecture:** Existing Next App Router server-rendered pages, shared design primitives and small client navigation/gallery filters.
**Tech Stack:** Next 15, React, TypeScript, Tailwind, Lucide, Node.
**Spec:** docs/superpowers/specs/2026-10-24-awning-design.md

## Global constraints
Approved navy/yellow/ivory concepts; real images only; no invented business claims. Don't merge master.
## Review focus
Mobile menu keyboard/toggle; filtered project empty states; unknown routes return 404; SEO canonical/robots consistency; real images and no slide mislabeling.

## Task 1 — shell and homepage
Files: src/app/layout.tsx, src/app/globals.css, src/app/page.tsx; src/components/site/*.
- [ ] Read approved 01-home.png and 08-contact.png.
- [ ] Build Header, Footer, shared primitives per contract below, local Thai font.
- [ ] Render exact home section order: hero, navy proof strip, services, feature project, working team/process, FAQ, CTA.
- [ ] Verify keyboard/mobile navigation and no hidden/overflow text.
- [ ] Commit on feature/t1-shell; push and open PR to dev.

## Task 2 — seven inner pages
Files: src/app/services/[slug]/*, src/app/projects/**, src/app/about/page.tsx, src/app/contact/page.tsx, src/components/project-filter.tsx, src/app/inner-pages.css.
- [ ] Read approved 02–08 concepts.
- [ ] Render 3 distinct service pages with relevant FAQs and contextual links.
- [ ] Render real portfolio + case details, about and contact; truthful filters with useful empty state.
- [ ] Metadata imports from SEO task; unknown slugs notFound.
- [ ] Verify useful text, one H1 per page and all internal destinations.
- [ ] Commit feature/t2-pages; push and open PR to dev.

## Task 3 — SEO and verification tooling
Files: src/lib/seo.ts, src/app/sitemap.ts, robots.ts, not-found.tsx, icon.svg, next.config.js, package.json/package-lock.json, tests/*, README.md, public/fonts/*.
- [ ] Write route/metadata/redirect HTTP smoke verification script first and show expected fail against baseline.
- [ ] Implement metadata helper pageMetadata(title, description, path, image?) and BreadcrumbJsonLd({items:{label,href}[]}), OrganizationJsonLd().
- [ ] Sitemap all eight production paths; robots allow; 301 legacy roof route.
- [ ] Enable Next image optimization and update scripts for typecheck/lint/check; maintain current framework compatible patched versions.
- [ ] npm build, route/SEO smoke once integration is ready.
- [ ] Commit feature/t3-seo; push and open PR to dev.

## Shared component contract (Task 1 produces, Task 2 consumes)
src/components/site/sections.tsx exports:
- Breadcrumbs({items: {label:string,href?:string}[]})
- PageHero({title:ReactNode,description:string,image:string,alt:string,breadcrumbs?:{label:string,href?:string}[],eyebrow?:string,imagePosition?:string})
- ContactCta()
- Faq({items:{question:string,answer:string}[],title?:string})
- ServiceCards({exclude?:string})
- WorkPhoto({src:string,alt:string,className?:string,priority?:boolean,position?:string})
- ButtonLink({href:string,children:ReactNode,variant?:"primary"|"outline"|"navy",external?:boolean,className?:string})
Common CSS classes Task 1 must provide: .container .section .section-heading .section-lead .split .grid-three .card .card-body .eyebrow .text-link .photo-frame .prose .button-row .section-soft .section-navy.
PageHero uses one H1, breadcrumbs, title/desc left and image right; two CTA links. Main layout owns header/footer and <main id="main-content">.
Site constants src/lib/site.ts created baseline: site (name,phone,phoneHref,line,facebook,url); images (awning,installation,steel,roof,sliding); services {slug,title,description,image,alt}[].

## Integration
- [ ] PM review every task diff, merge to dev only after review; ask agents to fix own findings.
- [ ] Check build, TypeScript, lint, all 8 routes metadata plus redirect/404 and optimized image URL.
- [ ] Browser/IAB desktop and 390px mobile navigation, FAQ, portfolio filter, contact destinations.
- [ ] view_image accepted concept AND actual saved screenshot; record five-point fidelity comparison.
- [ ] Final dev→master PR for user's review; never merge master.

