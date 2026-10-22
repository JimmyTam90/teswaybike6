import CTAButton from "./CTAButton";
import { PRODUCTS, SPEC_ROWS } from "@/lib/products";

const shortName = (p) => (p?.name ?? "").replace("TESWAY ", "").split(" ").slice(0, 2).join(" ");

export default function CompareTable() {
  const products = PRODUCTS ?? [];
  return (
    <section id="compare" className="scroll-mt-24 border-y border-slate-200 bg-white py-12 text-slate-900" aria-labelledby="compare-title">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="compare-title" className="text-2xl font-extrabold sm:text-3xl text-slate-900">Compare specifications</h2>
        <p className="mt-2 text-slate-600">Scroll sideways on small screens. Specs are as listed by the merchant.</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <caption className="sr-only">TESWAY e-bike specification comparison</caption>
            <thead className="bg-ink text-white">
              <tr>
                <th scope="col" className="sticky left-0 bg-ink px-4 py-3 font-bold text-white">Spec</th>
                {products.map((p) => (
                  <th scope="col" key={p?.id} className="px-4 py-3 font-bold text-white">{shortName(p)}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-800">
              {(SPEC_ROWS ?? []).map(([label, key]) => (
                <tr key={key} className="border-t border-slate-200 odd:bg-slate-50 even:bg-white">
                  <th scope="row" className="sticky left-0 bg-inherit px-4 py-3 font-bold text-slate-900">{label}</th>
                  {products.map((p) => (
                    <td key={p?.id} className="px-4 py-3 text-slate-700 font-medium">
                      {key === "price" ? `${p?.price ?? "—"} (reg. ${p?.regular ?? "—"})` : p?.specs?.[key] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-slate-200 bg-white">
                <th scope="row" className="sticky left-0 bg-white px-4 py-3 font-bold text-slate-900">Details</th>
                {products.map((p) => (
                  <td key={p?.id} className="px-4 py-3">
                    <CTAButton type="product" k={p?.id} ctaId={`compare-${p?.id ?? "unknown"}`} variant="outline" className="min-h-11 px-4 py-2 text-sm">View</CTAButton>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
