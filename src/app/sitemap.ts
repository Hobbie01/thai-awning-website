import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/services/awning",
    "/services/slide-awning",
    "/services/steel-roof",
    "/projects",
    "/projects/striped-awning-suan-phueng",
    "/about",
    "/contact",
  ].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
