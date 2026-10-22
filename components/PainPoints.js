import CTAButton from "./CTAButton";
import RemoteImage from "./RemoteImage";
import { PRODUCTS } from "@/lib/products";

// Each worry is answered by one model. Facts are the merchant's listed specs; the ride-feel wording is marketing copy.
const STORIES = [
  {
    productId: "x7-awd",
    title: "Steep hills? Conquer steep inclines.",
    body: "Feel effortless hill-climbing power from dual motors. The X7 AWD lists 3600W peak power and 200 N·m of torque, and the merchant describes it as built for effortless hill climbs and smooth acceleration up to 38 MPH. The climbs that used to stop you can become part of the ride.",
    cta: "See the X7 AWD",
  },
  {
    productId: "x5-awd",
    title: "Range anxiety? Go the distance.",
    body: "A 52V 60AH battery lists up to 200 miles of max range, so long commutes and weekend adventures feel less like a gamble. The X5 AWD adds a step-thru frame for easy mounting. Range varies with load, terrain and assist level.",
    cta: "See the X5 AWD",
  },
  {
    productId: "c5-awd",
    title: "Carrying more than yourself? Load up and go.",
    body: "Built to carry more: passengers, cargo and everything in between. The C5 AWD Cargo lists a 450 lbs max load, the highest in this lineup, plus 3600W peak dual-motor power to move it.",
    cta: "See the C5 AWD Cargo",
  },
  {
    productId: "x9-ultra",
    title: "Ready to leave the pavement behind?",
    body: "Feel adrenaline-pumping dual-motor acceleration. The X9 Ultra lists 4000W peak power, 240 N·m of torque and a 43 MPH top speed (0-31 mph in 8 seconds, per the merchant), on fat tires with dual suspension for rougher ground.",
    cta: "See the X9 Ultra",
  },
];

export default function PainPoints() {
  const items = STORIES.map((s) => ({ ...s, product: (PRODUCTS ?? []).find((p) => p?.id === s.productId) })).filter((s) => s.product);
  if (items.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="pain-title">
      <h2 id="pain-title" className="text-2xl font-extrabold sm:text-3xl">What&apos;s holding you back from an e-bike?</h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        Four common worries when shopping for an electric bike, and the TESWAY model whose listed specs speak to each one.
      </p>
      {/* Card DOM order: IMAGE -> TITLE -> DESCRIPTION -> CTA */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => (
          <article key={s.productId} className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Phần ảnh: Nền trắng sạch sẽ */}
            <div className="bg-white p-3 border-b border-slate-100">
              <RemoteImage src={s.product?.image} alt={s.product?.alt ?? s.product?.name ?? "TESWAY e-bike"} width={800} height={800} sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw" className="h-48 w-full object-contain" />
            </div>
            {/* Phần nội dung chữ & nút: Tách biệt rõ ràng với nền xám nhạt (bg-slate-50) */}
            <div className="flex flex-1 flex-col bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
              <div className="mt-2 text-sm text-slate-600">{s.body}</div>
              <div className="mt-auto pt-5">
                <CTAButton type="product" k={s.productId} ctaId={`story-${s.productId}`} className="w-full">{s.cta}</CTAButton>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-slate-500">
        Ride feel and performance vary with rider weight, load, terrain, battery level and local rules. Specs are as listed
        by the merchant. Listed top speeds can exceed legal limits on public roads in some places, so check your local
        e-bike laws before riding.
      </p>
    </section>
  );
}
