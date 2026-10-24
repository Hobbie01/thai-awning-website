import type { Metadata } from "next";
import { createElement } from "react";
import { images, site } from "./site";

function getSiteUrl(): URL {
  const url = new URL(site.url);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/"
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an HTTPS origin, for example https://example.com",
    );
  }
  return url;
}
export const siteUrl = getSiteUrl();
const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = images.awning,
): Metadata {
  const url = absoluteUrl(path);
  return {
    metadataBase: siteUrl,
    title: `${title} | ${site.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "th_TH",
      images: [{ url: absoluteUrl(image), alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
    robots: { index: true, follow: true },
  };
}
function jsonLd(data: Record<string, unknown>) {
  return createElement("script", {
    type: "application/ld+json",
    // Escaping '<' prevents user-controlled text from ending the script element.
    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is JSON serialized and HTML delimiters are escaped.
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  });
}
export function OrganizationJsonLd() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: absoluteUrl("/"),
    telephone: "+66924127392",
    sameAs: [site.facebook, site.line],
    image: absoluteUrl(images.awning),
  });
}
export function BreadcrumbJsonLd({
  items,
}: { items: { label: string; href: string }[] }) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  });
}
