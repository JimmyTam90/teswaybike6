import "./globals.css";
import Analytics from "@/components/Analytics";
import FloatingChat from "@/components/FloatingChat";
import { MERCHANT_ORIGIN } from "@/lib/affiliate";
import { SITE, OG_IMAGE } from "@/lib/site";
import { GTM_ID } from "@/lib/config";
import Gtm from "@/components/Gtm";
import Probe from "@/components/Probe";
import RepaintNudge from "@/components/RepaintNudge";

// basePath-aware icon URLs: the site lives under SITE.subpath (e.g. /tesway-ebike) behind the Hub rewrite,
// and Next does NOT add basePath to plain strings in metadata.icons or to raw <link> tags. A root-relative
// "/favicon.png" points at the Hub root (not this spoke) and 404s, so every icon URL must carry the subpath.
const ICON_V = "4"; // bump to bust browser favicon caches
const P = SITE.subpath;
const ICONS = {
  icon: [
    { url: `${P}/favicon-32.png?v=${ICON_V}`, sizes: "32x32", type: "image/png" },
    { url: `${P}/favicon-192.png?v=${ICON_V}`, sizes: "192x192", type: "image/png" },
    { url: `${P}/favicon.ico?v=${ICON_V}`, sizes: "48x48" },
  ],
  shortcut: [{ url: `${P}/favicon.ico?v=${ICON_V}` }],
  apple: [{ url: `${P}/apple-touch-icon.png?v=${ICON_V}`, sizes: "180x180", type: "image/png" }],
};

export const metadata = {
  icons: ICONS,
  metadataBase: new URL(SITE.origin),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.baseUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.baseUrl,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: OG_IMAGE, width: 1200, height: 1200, alt: "TESWAY X7 AWD dual-motor electric bike" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [OG_IMAGE],
  },
};

// ĐÃ SỬA: Bỏ viewportFit: "cover"
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0f172a" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: SITE.name, url: SITE.origin, email: SITE.email },
    { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
  ],
};

export default function RootLayout({ children }) {
  return (
    // ĐÃ SỬA: Bỏ class "scroll-smooth" khỏi thẻ html
    <html lang="en">
      <head>
        <link rel="preconnect" href={MERCHANT_ORIGIN} />
        <link rel="dns-prefetch" href={MERCHANT_ORIGIN} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>

      {/* ĐÃ SỬA: Bỏ overflow-x-hidden w-full relative min-h-screen */}
      <body className="font-sans antialiased bg-slate-950 text-white">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {children}
        <Gtm />
        <Analytics />
        <FloatingChat />
        <RepaintNudge />
        <Probe />
      </body>
    </html>
  );
}
