"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { GTM_ID } from "@/lib/config";

// Loads Google Tag Manager. Kill switch for debugging: open any page with ?nogtm=1 to skip GTM entirely.
export default function Gtm() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(Boolean(GTM_ID) && !new URLSearchParams(window.location.search).has("nogtm"));
  }, []);
  if (!on) return null;
  return (
    <Script id="gtm-script" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}
