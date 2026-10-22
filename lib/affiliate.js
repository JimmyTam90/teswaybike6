// Central affiliate destination resolver. No component builds affiliate URLs on its own.
export const MERCHANT_ORIGIN = "https://teswaybike.com";
const MERCHANT_HOST = "teswaybike.com";
const AFFILIATE_PARAM = "ref";
const AFFILIATE_VALUE = "pwcheysy";

export const DEFAULT_AFFILIATE_URL = "https://teswaybike.com/?ref=pwcheysy";

// Product deep links (exact URLs from the project input, except where noted).
export const PRODUCT_LINKS = {
  "x7-awd": "https://teswaybike.com/products/tesway-x7-awd?ref=pwcheysy",
  "x7-pro": "https://teswaybike.com/products/tesway-x7-pro?ref=pwcheysy",
  "x5-awd": "https://teswaybike.com/products/tesway-x5-awd?ref=pwcheysy",
  "x9-ultra": "https://teswaybike.com/products/tesway-x9-ultra?ref=pwcheysy",
  // Supplied slug /products/tesway-c5-awd returned HTTP 404 when checked on Oct 15, 2026.
  // The merchant's own pages link to /products/tesway-c5-awd-cargo-ebike, so that verified slug is used.
  "c5-awd": "https://teswaybike.com/products/tesway-c5-awd-cargo-ebike?ref=pwcheysy",
};

// Collection / page deep links (exact URLs from the project input). All three pages loaded on Oct 15, 2026.
// The promo link points to the merchant's Early Black Friday page (the target of its site-wide banner).
export const COLLECTION_LINKS = {
  "all-ebikes": "https://teswaybike.com/collections/ebikes?ref=pwcheysy",
  "black-friday": "https://teswaybike.com/pages/black-friday?ref=pwcheysy",
  accessories: "https://teswaybike.com/collections/accessories?ref=pwcheysy",
};

function isValid(url) {
  try {
    const u = new URL(url);
    return (
      u.protocol === "https:" &&
      u.hostname === MERCHANT_HOST &&
      u.searchParams.get(AFFILIATE_PARAM) === AFFILIATE_VALUE
    );
  } catch {
    return false;
  }
}

/** type: "default" | "product" | "collection". Returns a validated URL or null (no CTA is rendered for null). */
export function resolveAffiliateUrl(type = "default", key) {
  let url = null;
  if (type === "product") url = PRODUCT_LINKS[key] ?? null;
  else if (type === "collection") url = COLLECTION_LINKS[key] ?? null;
  else url = DEFAULT_AFFILIATE_URL;
  return url && isValid(url) ? url : null;
}

/** Slug used in /api/out/[slug]. Product ids and collection ids never collide; "home" is the default link. */
export function outSlug(type = "default", key) {
  return type === "default" ? "home" : key;
}

/** Server side: slug -> validated merchant URL, or null. Only allow-listed slugs resolve (no open redirect). */
export function resolveBySlug(slug) {
  if (typeof slug !== "string") return null;
  if (slug === "home") return resolveAffiliateUrl("default");
  if (Object.hasOwn(PRODUCT_LINKS, slug)) return resolveAffiliateUrl("product", slug);
  if (Object.hasOwn(COLLECTION_LINKS, slug)) return resolveAffiliateUrl("collection", slug);
  return null;
}
