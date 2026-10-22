"use client";
import Image from "next/image";
import { useState } from "react";

// Remote merchant-CDN image. Loads the CDN URL directly (no optimizer round trip) and, if it ever fails,
// shows a neutral labelled box instead of a broken-image icon.
export default function RemoteImage({ src, alt = "", width = 800, height = 800, className = "", sizes, priority = false }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div role="img" aria-label={alt} className={`${className} flex items-center justify-center bg-slate-200 px-4 text-center text-sm text-slate-600`}>
        {alt}
      </div>
    );
  }

  return (
    <Image
      unoptimized
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
