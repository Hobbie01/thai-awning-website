import assert from "node:assert/strict";
import { customerReviews, reviewsSnapshot } from "../src/lib/reviews.ts";

const base = process.env.SMOKE_BASE_URL || "http://localhost:3000";
const response = await fetch(new URL("/", base), { signal: AbortSignal.timeout(30000) });
assert.equal(response.status, 200, "home page loads");
const html = await response.text();
const section = html.match(/<section\b[^>]*id="reviews"[\s\S]*?<\/section>/)?.[0];
assert.ok(section, "reviews are server-rendered and directly linkable");
assert.ok(section.includes("เสียงจากลูกค้าบน Google Maps"));
assert.equal((section.match(/<blockquote>/g) || []).length, 3, "three actual review excerpts");
assert.match(section, /<strong>5\.0<\/strong>/, "verified overall 5.0 rating");
assert.match(section, /จาก (?:<!-- -->)?14(?:<!-- -->)? รีวิวบน Google Maps/, "verified overall review count, distinct from displayed excerpts");
assert.ok(section.includes("ข้อความบางส่วนจากรีวิว"), "excerpt disclosure");
assert.ok(section.includes("ข้อมูล ณ"), "dated snapshot, not a live feed");
assert.match(section, /<time dateTime="2026-10-25">25 ตุลาคม 2569<\/time>/i, "verified snapshot date");
assert.equal(reviewsSnapshot.checkedAt, "2026-10-25");
assert.equal(reviewsSnapshot.rating, 5);
assert.equal(reviewsSnapshot.totalReviews, 14);
assert.equal(customerReviews.length, 3);
for (const review of customerReviews) {
  assert.ok(section.includes(`<cite>${review.author}</cite>`), `attributed to ${review.author}`);
  assert.ok(section.includes(review.excerpt), `original excerpt from ${review.author}`);
  assert.equal(review.rating, 5);
}
assert.equal((section.match(/aria-label="5 จาก 5 ดาว"/g) || []).length, 4, "accessible stars on summary and three cards");
const sourceLinks = [...section.matchAll(/<a\b[^>]*>/g)].map((match) => match[0]);
assert.equal(sourceLinks.length, 4, "three review sources and one all-reviews link");
for (const link of sourceLinks) {
  assert.ok(link.includes(`href="${reviewsSnapshot.sourceUrl}"`), "real original Maps URL");
  assert.ok(link.includes('target="_blank"') && link.includes('rel="noopener noreferrer"'));
}
const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
function checkSchema(value) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) { value.forEach(checkSchema); return; }
  const types = [value["@type"]].flat();
  assert.ok(!types.includes("AggregateRating") && !types.includes("Review") && !value.aggregateRating, "no self-serving review structured data");
  Object.values(value).forEach(checkSchema);
}
schemas.forEach(checkSchema);
console.log("PASS three attributed Google Maps excerpts, verified 5.0/14 snapshot/date, accessible stars, real source links and no review schema");
