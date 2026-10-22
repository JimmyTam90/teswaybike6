import RemoteImage from "./RemoteImage";
import { CUSTOMER_PHOTOS, DETAIL_IMAGES } from "@/lib/config";

// Customer mode: shown only when real, sourced, verified photos exist in CUSTOMER_PHOTOS.
// Fallback mode: official TESWAY X7 AWD product images with the merchant's own captions.
export default function PhotoGallery() {
  const customer = (CUSTOMER_PHOTOS ?? []).filter((p) => p?.src && p?.sourceUrl && p?.verified === true).slice(0, 6);

  if (customer.length > 0) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="gallery-title">
        <h2 id="gallery-title" className="text-2xl font-extrabold sm:text-3xl">Shared by Verified Tesway Riders</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {customer.map((p) => (
            <figure key={p.src} className="w-[calc(50%-0.5rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white lg:w-[calc(33.333%-0.7rem)]">
              <RemoteImage src={p.src} alt={p.alt ?? "Photo shared by a TESWAY rider"} width={800} height={800} sizes="(min-width: 1024px) 360px, 50vw" className="h-48 w-full object-cover sm:h-56" />
              <figcaption className="flex items-center justify-between gap-2 px-3 py-2 text-xs text-slate-600">
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800">Verified Buyer</span>
                <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">Source</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }

  const items = (DETAIL_IMAGES ?? []).filter((p) => p?.src).slice(0, 6);
  if (items.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="text-2xl font-extrabold sm:text-3xl">TESWAY AWD In-Detail &amp; Action Gallery</h2>
      <p className="mt-2 max-w-2xl text-slate-600">Official product images from the merchant&apos;s X7 AWD page, with the details that matter on the road.</p>
      {/* Card DOM order: IMAGE -> TITLE -> CAPTION */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {items.map((p) => (
          <figure key={p.src} className="flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
            <div className="bg-slate-100">
              <RemoteImage src={p.src} alt={p.alt ?? p.title ?? "TESWAY e-bike detail"} width={900} height={675} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
            </div>
            <figcaption className="px-5 py-4">
              <h3 className="font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-500">Images and specs from teswaybike.com. Not customer photos.</p>
    </section>
  );
}
