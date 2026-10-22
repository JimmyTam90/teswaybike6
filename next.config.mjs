/** Hub-Spoke deployment: served publicly at https://primegearlab.com/tesway-ebike */
// Normalised public subpath: leading slash, no trailing slash (e.g. "/tesway-ebike").
const RAW_BASE = process.env.NEXT_PUBLIC_BASE_PATH || "/tesway-ebike";
const SUBPATH = "/" + RAW_BASE.replace(/^\/+|\/+$/g, "");


/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: SUBPATH,
  assetPrefix: SUBPATH,
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "teswaybike.com", pathname: "/cdn/shop/files/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Direct visits to the spoke root go to the subpath. The Hub rewrite must forward /tesway-ebike and /tesway-ebike/:path* to this spoke.
    return [{ source: "/", destination: SUBPATH, permanent: false, basePath: false }];
  },
};

export default nextConfig;
