"use client";
import { useEffect } from "react";

// Workaround for a WebKit (iOS Safari / Chrome iOS / in-app browsers) bug where the first paint tile at the
// top-left of the page is left unpainted (black/white square). Any style change forces WebKit to repaint
// (see WebKit bug 283907: "toggling any CSS property makes it reappear"). We nudge a few times after load,
// when the tab becomes visible again, and on the first touch/scroll. The change lasts one frame and is invisible.
// Disable for debugging with ?norepaint=1.
export default function RepaintNudge() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("norepaint")) return undefined;
    const root = document.documentElement;
    const nudge = () => {
      root.style.opacity = "0.999";
      void root.offsetHeight; // force style + layout flush
      requestAnimationFrame(() => {
        root.style.opacity = "";
        window.scrollBy(0, 0);
      });
    };
    const timers = [0, 100, 300, 800, 1800].map((ms) => setTimeout(nudge, ms));
    const onShow = () => nudge();
    const onVis = () => document.visibilityState === "visible" && nudge();
    let once = false;
    const onFirst = () => { if (!once) { once = true; nudge(); } };
    window.addEventListener("load", onShow);
    window.addEventListener("pageshow", onShow);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("touchstart", onFirst, { passive: true, once: true });
    window.addEventListener("scroll", onFirst, { passive: true, once: true });
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", onShow);
      window.removeEventListener("pageshow", onShow);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("scroll", onFirst);
    };
  }, []);
  return null;
}
