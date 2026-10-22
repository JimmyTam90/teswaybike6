// Public path. Override with NEXT_PUBLIC_BASE_PATH at build time if the Hub exposes a different subpath.
// Must match next.config.mjs. Normalised public subpath: leading slash, no trailing slash (e.g. "/tesway-ebike").
const RAW_BASE = process.env.NEXT_PUBLIC_BASE_PATH || "/tesway-ebike";
const SUBPATH = "/" + RAW_BASE.replace(/^\/+|\/+$/g, "");


export const SITE = {
  name: "PrimeGearLab",
  origin: "https://primegearlab.com",
  subpath: SUBPATH,
  baseUrl: `https://primegearlab.com${SUBPATH}`,
  spokeOrigin: "https://tesway-ebikes5.vercel.app",
  email: "contact@primegearlab.com",
  title: "TESWAY E-Bike Guide: Compare Dual-Motor and Long-Range Models | PrimeGearLab",
  description:
    "Independent guide to TESWAY electric bikes: compare dual-motor, long-range, step-thru and cargo models with up to 200 miles listed max range, then check current options at the merchant.",
  disclaimer:
    "We may receive a commission if you make a purchase through links on this page at no extra cost to you.",
  copyright:
    "© 2026 PrimeGearLab. All rights reserved. Managed & Operated in partnership with authorized media agency partners.",
  dataDate: "Oct 15, 2026",
};

// Primary featured product image (X7 AWD) used for og:image and twitter:image. Never the logo.
export const OG_IMAGE =
  "https://teswaybike.com/cdn/shop/files/2_a06c81ae-d08c-4540-b152-691d79d21436.webp?v=1782380388&width=1200";
