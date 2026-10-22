import { SITE } from "@/lib/site";

// Legal pages are noindex, so only the landing page is listed.
export default function sitemap() {
  return [{ url: SITE.baseUrl, priority: 1 }];
}
