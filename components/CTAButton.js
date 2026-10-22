import { outSlug, resolveAffiliateUrl } from "@/lib/affiliate";
import { SITE } from "@/lib/site";

const base =
  "inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-center text-base font-bold " +
  "transition-transform duration-100 motion-reduce:transition-none active:scale-95 motion-reduce:active:scale-100";

const variants = {
  primary: "bg-brand text-white shadow-lg shadow-blue-900/20 hover:bg-brand-dark",
  light: "bg-white text-ink hover:bg-slate-100",
  outline: "border-2 border-brand text-brand hover:bg-blue-50",
};

// Every external affiliate CTA renders through this component: a native <a> that opens in a new tab and
// goes through the internal redirect route (<basePath>/api/out/<slug>), which forwards to the merchant URL
// with ?ref=pwcheysy intact. No valid destination means no CTA is rendered.
export default function CTAButton({ type = "default", k, children, variant = "primary", ctaId, className = "" }) {
  if (!resolveAffiliateUrl(type, k)) return null;
  const slug = outSlug(type, k);
  return (
    <a
      href={`${SITE.subpath}/api/out/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      data-affiliate-cta={ctaId || `${type}-${k || "default"}`}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
