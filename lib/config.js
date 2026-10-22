// Central, non-secret configuration for the landing page.

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NS9WPWW9";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-S1PX5XK4Q5";

export const FLAGS = {
  // NEXT_PUBLIC_SHOW_REVIEW_BADGE=false hides the rating badge. Default: shown (only if the data below is valid).
  showReviewBadge: process.env.NEXT_PUBLIC_SHOW_REVIEW_BADGE !== "false",
};

// Third-party rating, read from the public Trustpilot profile of teswaybike.com on Oct 20, 2026.
// Update value/count/asOf when you refresh it. The badge renders nothing unless all fields are valid.
export const RATING = {
  value: 4.3,
  count: 66,
  max: 5,
  source: "Trustpilot",
  url: "https://dk.trustpilot.com/review/teswaybike.com",
  asOf: "Oct 20, 2026",
};

/** True when the rating data is complete and the badge flag is on. Badge and JSON-LD both use this. */
export function ratingIsValid() {
  const r = RATING ?? {};
  return Boolean(
    FLAGS?.showReviewBadge &&
      Number.isFinite(r.value) && Number.isFinite(r.max) && r.max > 0 && r.value > 0 && r.value <= r.max &&
      Number.isFinite(r.count) && r.count > 0 &&
      typeof r.url === "string" && r.url.startsWith("https://") && r.source
  );
}

// Promotion shown in the banner. Updated to Prime Day Deals using the uploaded local asset.
export const PROMO = {
  id: "prime-day",
  name: "Prime Day Deals",
  code: "PRIME100",
  codeOff: "$100",
  headlineOff: "Extra $100 Off",
  asOf: "Oct 20, 2026",
  image: "https://teswaybike.com/cdn/shop/files/TESWAY_X7_AWD_Electric_Mountain_Bike_3600W_Dual_Motors.webp?v=1773229763&width=900",
  imageAlt: "TESWAY Prime Day Deals featuring X7 Pro, X7 AWD, X5 AWD and C5 Cargo models",
};

// Video published on the merchant's own YouTube channel (TESWAY), Sep 27, 2026.
export const VIDEO = {
  id: "Bombxbz4JD8",
  title: "One TESWAY. Endless possibilities",
  watchUrl: "https://www.youtube.com/watch?v=Bombxbz4JD8",
  badge: "🔥 Watch the TESWAY X5 & X7 AWD in Action",
};

// Brevo hosted-form endpoint. Override with NEXT_PUBLIC_BREVO_FORM_ACTION if the form is ever regenerated.
export const NEWSLETTER_ACTION =
  process.env.NEXT_PUBLIC_BREVO_FORM_ACTION ||
  "https://f5f5fd24.sibforms.com/serve/MUIFADOD_PFMzGFX7BwoVlxJ-JJ8JtNs3ha9V8puiaP9u7pcJdcOaW8xBXJZcieH3XZQg2I5nFeX5KTXv06I7XKpHlIX6VW9vJ0pX-ZEBjxBaZcjxy8TwCxTv8heFrclsBe7j930AqGcCXNG_cywUzeAu-Alzy1KeEBhr7nFLmb7G2J3CoLiWr3md_JQ1WHXDXUjS-WN5B2jv72hww==";

export const SOCIALS = [
  { id: "facebook", label: "PrimeGearLab on Facebook", href: "https://www.facebook.com/primegearlab/" },
  { id: "x", label: "PrimeGearLab on X", href: "https://x.com/primegearlab" },
  { id: "instagram", label: "PrimeGearLab on Instagram", href: "https://www.instagram.com/primegearlab/" },
  { id: "pinterest", label: "PrimeGearLab on Pinterest", href: "https://www.pinterest.com/primegearlab/" },
];

// Real customer photos only. Each entry needs: src (direct image URL), alt, sourceUrl (where the photo was
// published) and verified: true. While this list is empty the gallery section is not rendered.
export const CUSTOMER_PHOTOS = [];

// Official TESWAY X7 AWD product images from https://teswaybike.com/products/tesway-x7-awd (read Oct 20, 2026).
// Captions restate the merchant's own product copy. Used when CUSTOMER_PHOTOS is empty.
const f = (file) => `https://teswaybike.com/cdn/shop/files/${file}`;
export const DETAIL_IMAGES = [
  {
    src: f("TESWAY_X7_AWD_Electric_Mountain_Bike_3600W_Dual_Motors.webp?v=1773229763&width=900"),
    alt: "TESWAY X7 AWD electric mountain bike with 3600W dual motors",
    title: "Dual motors",
    caption: "Dual 2000W motors, 3600W peak power and 200 N·m of torque, listed up to 38 MPH.",
  },
  {
    src: f("Tesway_Long_Range_Ebike_for_Hunting.webp?v=1773230004&width=900"),
    alt: "TESWAY X7 AWD long-range e-bike on a hunting trip",
    title: "Long-range battery",
    caption: "52V 60Ah battery, listed at up to 200 miles on pedal assist, with 8A fast charging.",
  },
  {
    src: f("Tesway_52V_60AH_Full_suspension_Electric_Bike.webp?v=1773230157&width=900"),
    alt: "TESWAY X7 AWD full-suspension electric bike",
    title: "Full suspension",
    caption: "Front and rear suspension with a 120mm dual-crown fork for rough terrain.",
  },
  {
    src: f("11_1ebb23f9-d1c4-4d98-84fc-c0292a563fa4.webp?v=1773281048&width=900"),
    alt: "TESWAY X7 AWD with 4-piston hydraulic disc brakes",
    title: "4-piston hydraulic brakes",
    caption: "Front and rear 4-piston hydraulic disc brakes with 203 mm rotors.",
  },
  {
    src: f("Tires_5c65ff5a-aa3d-4cb3-aa54-2b29d9733883.webp?v=1784193031&width=900"),
    alt: "Close-up of TESWAY X7 AWD 20 by 4.0 inch Kenda fat tires",
    title: "Fat all-terrain tires",
    caption: "20 x 4.0 inch Kenda fat tires with reflective sidewalls.",
  },
  {
    src: f("TESWAY_X7_AWD_60ah_long_range_ebike_for_camping.webp?v=1773231205&width=1200"),
    alt: "TESWAY X7 AWD long-range e-bike set up for camping",
    title: "Built for the trip",
    caption: "Listed up to 200 miles of range with all-wheel-drive traction on sand, gravel and wet surfaces.",
  },
];
