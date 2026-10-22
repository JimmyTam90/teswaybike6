import "./globals.css";
import Script from "next/script";
import Analytics from "@/components/Analytics";
// import FloatingChat from "@/components/FloatingChat";
import { MERCHANT_ORIGIN } from "@/lib/affiliate";
import { SITE, OG_IMAGE } from "@/lib/site";
import { GTM_ID } from "@/lib/config";

const ICON_URL = `${SITE.spokeOrigin}${SITE.subpath}/favicon.png?v=2`;

export const metadata = {
  icons: {
    icon: [{ url: ICON_URL, type: "image/png" }],
    shortcut: [{ url: ICON_URL, type: "image/png" }],
    apple: [{ url: ICON_URL, type: "image/png" }],
  },
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

        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}
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
        <Analytics />
      </body>
    </html>
  );
}
