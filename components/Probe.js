"use client";
import { useEffect, useState } from "react";

const d = (e) => {
  const cs = getComputedStyle(e), r = e.getBoundingClientRect();
  const cls = typeof e.className === "string" ? e.className.split(" ").slice(0, 3).join(".") : "";
  const src = e.currentSrc || e.src || e.href || "";
  return `${e.tagName.toLowerCase()}${e.id ? "#" + e.id : ""}${cls ? "." + cls : ""} [${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}x${Math.round(r.height)}] pos=${cs.position} z=${cs.zIndex} bg=${cs.backgroundColor}${src ? " src=" + src.slice(0, 90) : ""}`;
};

// TEMPORARY: open any page with ?probe=1 to print what sits under the top-left corner. Remove after debugging.
export default function Probe() {
  const [text, setText] = useState("");
  useEffect(() => {
    const x = new URLSearchParams(window.location.search).get("x");
    if (x) document.documentElement.setAttribute("data-x", x.split(",").join(" "));
  }, []);
  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("probe")) return undefined;
    const t = setTimeout(() => {
      const out = [];
      [[10, 60], [80, 120], [150, 190]].forEach(([x, y]) => {
        out.push(`@${x},${y}`);
        document.elementsFromPoint(x, y).slice(0, 6).forEach((e) => out.push("  " + d(e)));
      });
      out.push("--- body children");
      [...document.body.children].forEach((e) => out.push("  " + d(e)));
      out.push("--- html children");
      [...document.documentElement.children].forEach((e) => out.push("  " + e.tagName.toLowerCase()));
      out.push("--- iframes/canvas/video/svg-root-level");
      document.querySelectorAll("iframe,canvas,video,body>img,body>svg").forEach((e) => out.push("  " + d(e)));
      out.push("--- squares 120-220px near top-left");
      document.querySelectorAll("*").forEach((e) => {
        const r = e.getBoundingClientRect();
        if (r.left < 20 && r.top < 120 && r.width > 100 && r.width < 240 && Math.abs(r.width - r.height) < 25) out.push("  " + d(e));
      });
      out.push(`inner ${innerWidth}x${innerHeight} dpr ${devicePixelRatio} scrollY ${scrollY}`);
      out.push("ua " + navigator.userAgent);
      setText(out.join("\n"));
    }, 2500);
    return () => clearTimeout(t);
  }, []);
  if (!text) return null;
  return <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", fontSize: 10, padding: 10, background: "#111", color: "#9f9", margin: 0 }}>{text}</pre>;
}
