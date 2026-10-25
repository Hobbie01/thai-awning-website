import assert from "node:assert/strict";
import { projects, getProjectCover } from "../src/lib/projects.ts";

const base = process.env.SMOKE_BASE_URL || "http://localhost:3000";
for (const project of projects) {
  const response = await fetch(new URL(`/projects/${project.slug}`, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `case loads: ${project.slug}`);
  const html = await response.text();
  const header = html.match(/<header class="container inner-case-header"[\s\S]*?<\/header>/)?.[0];
  const gallery = html.match(/<section id="original-photos"[\s\S]*?<\/section>/)?.[0];
  assert.ok(header && gallery, "cover and directly linkable original gallery exist");
  assert.ok(header.includes(encodeURIComponent(getProjectCover(project).src)), "visible hero uses selected cover");
  const metadataImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  assert.ok(metadataImage?.endsWith(getProjectCover(project).src), "SEO image matches actual case cover");
  assert.equal((gallery.match(/class="portfolio-photo-button"/g) || []).length, project.images.length, "all originals remain in gallery");
  for (const image of project.images) assert.ok(gallery.includes(encodeURIComponent(image.src)), `original retained: ${image.src}`);
  if (project.coverImage) {
    assert.ok(header.includes("ภาพปรับแต่ง"), "visible edited-photo label on cover");
    assert.ok(header.includes(`href="/projects/${project.slug}#original-photos"`), "cover links to original comparison");
    assert.ok(!gallery.includes(encodeURIComponent(project.coverImage.src)), "original gallery contains no generated cover");
  } else assert.ok(!header.includes("ภาพปรับแต่ง"), "original photo is not mislabeled");
}
console.log(`PASS ${projects.length} case covers, matching SEO, edited-photo labels and original-only galleries`);
