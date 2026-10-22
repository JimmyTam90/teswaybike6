import Link from "next/link";

const BASE = "/" + (process.env.NEXT_PUBLIC_BASE_PATH || "tesway-ebike").replace(/^\/+|\/+$/g, "");

// logo-v2.png: 384x363, opaque (flattened on #020617), ~65KB. The old 1254x1254 transparent PNG (791KB)
// downscaled to ~32px caused a black square tile on iOS Safari. Keep the file small and opaque.
export default function Logo({ priority = false, className = "h-10 w-auto" }) {
  return (
    <Link href="/" aria-label="PrimeGearLab home" className="inline-flex shrink-0 items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/logo-v2.png`}
        alt="PrimeGearLab - Independent Lab"
        width={384}
        height={363}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={`${className} block`}
      />
    </Link>
  );
}
