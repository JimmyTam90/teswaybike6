import { NextResponse } from "next/server";
import { resolveBySlug } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

// Clean outbound redirect: /api/out/<slug> -> allow-listed merchant URL (with ?ref=pwcheysy intact).
export function GET(_request, { params }) {
  const url = resolveBySlug(params?.slug);
  if (!url) return new NextResponse("Not found", { status: 404 });
  const res = NextResponse.redirect(url, 302);
  res.headers.set("Cache-Control", "no-store");
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}
