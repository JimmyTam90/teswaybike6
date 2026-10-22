import { SITE } from "@/lib/site";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [`${SITE.subpath}/api/out/`] },
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
  };
}
