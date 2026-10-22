const ITEMS = [
  { title: "Dual-motor power", body: "The X5 AWD, X7 AWD and C5 AWD list 3600W peak power, and the X9 Ultra lists 4000W. The X7 AWD is listed with 200 NM of torque." },
  { title: "Up to 200 miles listed range", body: "The 52V 60AH models list a max range of up to 200 miles. Real range varies with load, terrain and assist level." },
  { title: "Higher load ratings", body: "Listed max load runs from 350 lbs to 450 lbs on the C5 AWD Cargo." },
  { title: "Shipping and warranty", body: "The merchant lists free shipping in 3-7 business days and a 2-year warranty covering product defects or malfunctions." },
];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="highlights-title">
      <h2 id="highlights-title" className="text-2xl font-extrabold sm:text-3xl">Why riders consider TESWAY</h2>
      <p className="mt-2 max-w-2xl text-slate-600">Figures below come from the merchant&apos;s own product listings.</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((i) => (
          <li key={i.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-brand">{i.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{i.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
