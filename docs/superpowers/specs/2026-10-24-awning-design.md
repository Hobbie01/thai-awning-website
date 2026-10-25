# Approved Changtu website design
User approved eight Image Gen page concepts and instructed implementation, with real project photography throughout.
Concepts: ../output/awning-concept/website-design-v2 (absolute parent workspace path; not repository). Read corresponding PNG using view_image before implementation.
Pages: /, /services/awning, /services/slide-awning, /services/steel-roof, /projects, /projects/striped-awning-suan-phueng, /about, /contact.
Preserve navy #132D46 yellow #F7C64A ivory #FAF8F2; airy Thai typography; awning icon wordmark; header navigation; split photographic hero; strong phone and LINE CTAs; FAQ and footer. User's REAL PHOTOS constraint overrides concept AI illustrations. Use real assets paths below, crop with CSS, do not introduce fabricated jobs. No fake reviews, statistics, prices, addresses, guarantees, time claims or free offers.
Phone 092-412-7392; LINE https://line.me/ti/p/4S-iTBNXxF ; Facebook https://www.facebook.com/changtuphab
Real asset contract: /images/work/striped-awning.webp (yellow hood on stone house; focus center 42%); /images/work/installation.webp (two workers under yellow hood); /images/work/steel-frame.webp (actual steel framing work); /images/work/metal-roof.webp (actual completed metal roof); /images/work/sliding-canvas.webp (actual rail canvas from Facebook if available, otherwise source video still of verified sliding roof).
Only Suan Phueng case has verified location. Avoid invented business address, radius or schedules.
Implementation: existing Next 15 App Router + React + TypeScript + Tailwind. Server-render page text; small client header/filter only. Locally hosted Thai font preferred. HTML text, not image screenshot UI.
SEO: metadata per route, correct Thai language, canonical production URL via environment override/default existing Vercel domain, OG, sitemap, robots, safe Organization schema, breadcrumbs, legacy redirect. No LocalBusiness requiring invented street address.
Header nav: หน้าแรก / บริการ (link /#services) / ผลงาน / เกี่ยวกับเรา / ติดต่อเรา; phone. Home hero: ติดตั้งผ้าใบกันสาด / และโครงหลังคา / โดยช่างตู่; CTA ปรึกษางานติดตั้ง / ดูผลงานติดตั้ง. Match accepted content but remove unverified "ฟรี". Footer phone/LINE/Facebook. Mobile menu fully operable, accessible focus.

