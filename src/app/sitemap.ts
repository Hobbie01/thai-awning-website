import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/services/awning",
    "/services/slide-awning",
    "/services/steel-roof",
    "/projects",
    ...projects.map((project) => `/projects/${project.slug}`),
    "/about",
    "/contact",
  ].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
