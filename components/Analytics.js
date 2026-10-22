"use client";
import Script from "next/script";
import { useEffect } from "react";

const GA = process.env.NEXT_PUBLIC_GA_ID;
const ADS = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Loads nothing unless real IDs are configured. Click tracking is passive: it never alters or blocks navigation.
export default function Analytics() {
  useEffect(() => {
    if (typeof document === "undefined" || (!GA && !ADS && !PIXEL)) return;
    const onClick = (e) => {
      const el = e.target instanceof Element ? e.target.closest("a[data-affiliate-cta]") : null;
      if (!el) return;
      const id = el.getAttribute("data-affiliate-cta") || "unknown";
      if (typeof window.gtag === "function") window.gtag("event", "affiliate_click", { cta_id: id });
      if (typeof window.fbq === "function") window.fbq("trackCustom", "AffiliateClick", { cta_id: id });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const gtagId = GA || ADS;
  return (
    <>
      {gtagId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());${GA ? `gtag('config','${GA}');` : ""}${ADS ? `gtag('config','${ADS}');` : ""}`}
          </Script>
        </>
      )}
      {PIXEL && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
