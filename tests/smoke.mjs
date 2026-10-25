import assert from "node:assert/strict";
import { projects } from "../src/lib/projects.ts";

const base = process.env.SMOKE_BASE_URL || "http://localhost:3000";
const canonicalBase = (process.env.NEXT_PUBLIC_SITE_URL || "https://thai-awning-website.vercel.app").replace(/\/$/, "");
const routes = ["/", "/services/awning", "/services/slide-awning", "/services/steel-roof", "/projects", ...projects.map((project) => `/projects/${project.slug}`), "/about", "/contact"];
const failures = [];
const titles = new Set();
async function check(label, fn) {
  try { await fn(); console.log(`PASS ${label}`); }
  catch (error) { failures.push(label); console.error(`FAIL ${label}: ${error.message.split("\n")[0]}`); }
}
const read = async (path, options) => {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000), ...options });
  return { response, body: await response.text() };
};
for (const route of routes) {
  await check(`HTML and SEO ${route}`, async () => {
    const { response, body } = await read(route);
    assert.equal(response.status, 200);
    assert.match(body, /<html[^>]+lang="th"/);
    assert.equal((body.match(/<h1(?:\s|>)/g) || []).length, 1, "exactly one H1");
    const title = body.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title && !/Create Next App/.test(title), "descriptive title");
    assert.ok(!titles.has(title), "unique route title"); titles.add(title);
    assert.match(body, /<meta name="description" content="[^"]{20,}"/);
    const canonicalHref = body.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    assert.ok(canonicalHref, "canonical link exists");
    assert.equal(new URL(canonicalHref).href, new URL(route, canonicalBase).href, "canonical production URL");
    assert.match(body, /property="og:image"/);
    assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(body));
    const schemas = [...body.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    assert.ok(schemas.some((item) => item["@type"] === "Organization"), "organization schema");
    if (route !== "/") assert.ok(schemas.some((item) => item["@type"] === "BreadcrumbList"), "breadcrumb schema");
    assert.match(body, /\/_next\/image\?/);
  });
}
await check("sitemap includes every public route and project", async () => {
  const { response, body } = await read("/sitemap.xml"); assert.equal(response.status, 200);
  const locations = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(locations.sort(), routes.map((route) => `${canonicalBase}${route === "/" ? "/" : route}`).sort());
});
await check("robots permits crawl and points at canonical sitemap", async () => {
  const { response, body } = await read("/robots.txt"); assert.equal(response.status, 200);
  assert.match(body, /Allow: \/(?:\r?\n|$)/); assert.ok(body.includes(`Sitemap: ${canonicalBase}/sitemap.xml`));
});
await check("legacy roof URL permanently redirects", async () => {
  const { response } = await read("/services/tent-and-awning-roof", { redirect: "manual" });
  assert.equal(response.status, 301); assert.equal(new URL(response.headers.get("location"), base).pathname, "/services/steel-roof");
});
for (const route of ["/does-not-exist", "/services/does-not-exist", "/projects/does-not-exist"]) {
  await check(`404 ${route}`, async () => { const { response } = await read(route); assert.equal(response.status, 404); });
}
await check("real optimized image returns valid binary image", async () => {
  const response = await fetch(new URL("/_next/image?url=%2Fimages%2Fwork%2Fstriped-awning.webp&w=640&q=75", base));
  assert.equal(response.status, 200); assert.match(response.headers.get("content-type") || "", /^image\//);
  assert.ok((await response.arrayBuffer()).byteLength > 1000);
});
if (failures.length) { console.error(`${failures.length} smoke checks failed`); process.exitCode = 1; }
else console.log("All smoke checks passed");
