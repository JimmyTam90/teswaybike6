import CTAButton from "./CTAButton";
import RemoteImage from "./RemoteImage";
import { COLLECTIONS } from "@/lib/products";

// Card DOM order: IMAGE -> TITLE -> DESCRIPTION -> CTA (no CSS order, no absolute positioning).
export default function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 border-y border-slate-200 bg-white py-12" aria-labelledby="collections-title">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="collections-title" className="text-2xl font-extrabold sm:text-3xl">Explore TESWAY collections</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {(COLLECTIONS ?? []).map((c) => {
            // Kiểm tra nếu là card đầu tiên hay các card sau để tinh chỉnh ảnh hoàn hảo nhất
            const isFirst = c?.id === "all-ebikes" || c?.id === (COLLECTIONS?.[0]?.id);
            return (
              <article key={c?.id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="bg-white p-3 border-b border-slate-100">
                  <RemoteImage
                    src={c?.image}
                    alt={c?.alt ?? c?.title ?? "TESWAY collection"}
                    width={800}
                    height={800}
                    sizes="(min-width: 768px) 360px, 100vw"
                    className={`h-48 w-full sm:h-56 rounded-xl ${
                      isFirst ? "object-contain bg-white" : "object-cover object-center"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col bg-slate-50 p-5">
                  <h3 className="text-xl font-bold text-slate-900">{c?.title ?? ""}</h3>
                  <div className="mt-2 text-sm text-slate-600">{c?.description ?? ""}</div>
                  <div className="mt-auto pt-5">
                    <CTAButton type="collection" k={c?.id} ctaId={`collection-${c?.id ?? "unknown"}`} className="w-full">
                      {c?.cta ?? "View"}
                    </CTAButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
