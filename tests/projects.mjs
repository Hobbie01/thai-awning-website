import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { projects, getProject, getProjectCover } from "../src/lib/projects.ts";

assert.ok(projects.length > 3, "portfolio contains multiple distinct installation jobs");
assert.equal(new Set(projects.map((project) => project.slug)).size, projects.length, "unique case URLs");
assert.ok(getProject("striped-awning-suan-phueng"), "existing case URL retained");
assert.equal(getProject("does-not-exist"), undefined);
const imageOwners = new Map();
const coverOwners = new Set();
for (const project of projects) {
  assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(project.title.length > 10 && project.description.length > 30, `useful case content: ${project.slug}`);
  assert.ok(project.images.length > 0, `cover image: ${project.slug}`);
  assert.ok(["awning", "roof", "sliding"].includes(project.category));
  assert.ok(["awning", "steel-roof", "slide-awning"].includes(project.serviceSlug));
  assert.ok(!project.location || project.location.trim().length > 0, "locations are optional, never blank labels");
  if (project.sourceUrl) assert.ok(new URL(project.sourceUrl).hostname.endsWith("facebook.com"), "original Facebook source");
  assert.deepEqual(getProjectCover(project), project.coverImage ?? project.images[0], "cover selection preserves original fallback");
  if (project.coverImage) {
    assert.match(project.coverImage.src, /^\/images\/enhanced\/.+\.webp$/, "AI covers are stored separately");
    assert.ok(project.coverImage.alt.length > 10, "descriptive cover alt text");
    assert.ok(!project.images.some((image) => image.src === project.coverImage.src), "AI cover must never enter the original gallery");
    assert.ok(!coverOwners.has(project.coverImage.src), "one cover belongs to one actual job");
    coverOwners.add(project.coverImage.src);
    await access(new URL(`../public${project.coverImage.src}`, import.meta.url));
  }
  for (const image of project.images) {
    assert.ok(image.alt.length > 10 && image.caption.length > 5, `accessible caption: ${project.slug}`);
    assert.match(image.src, /^\/images\/work\/.+\.webp$/);
    assert.ok(!imageOwners.has(image.src), `photo must identify one job: ${image.src}`);
    imageOwners.set(image.src, project.slug);
    await access(new URL(`../public${image.src}`, import.meta.url));
  }
}
console.log(`PASS ${projects.length} distinct projects, ${imageOwners.size} original images, ${coverOwners.size} separate AI covers, valid case content and assets`);
