import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

// Flex-wrap + justify-center: any item count (2, 5, 7...) fills rows evenly; an incomplete last row is centered
// instead of leaving an empty cell. Card widths match a 1 / 2 / 3 column grid (gap-6 = 1.5rem).
export default function ProductGrid() {
  return (
    <section id="models" className="scroll-mt-24 py-12" aria-labelledby="models-title">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="models-title" className="text-2xl font-extrabold sm:text-3xl">Top TESWAY e-bike models</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Struck-through figures are regular prices listed by the merchant. Prices as listed on {SITE.dataDate}. Confirm
          current pricing at checkout.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {(PRODUCTS ?? []).map((p) => (
            <div key={p?.id} className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
