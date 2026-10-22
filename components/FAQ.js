"use client";
import { useState } from "react";
import { SITE } from "@/lib/site";

const FAQS = [
  { q: "Is PrimeGearLab the TESWAY store?", a: "No. PrimeGearLab is an independent publisher. Purchases are completed on the merchant's website, which opens in a new tab when you tap a button." },
  { q: "What happens when I tap a button?", a: "The merchant's site opens in a new tab and this page stays open, so you can come back and keep comparing." },
  { q: "How far can these bikes go on a charge?", a: "The merchant lists a max range of up to 200 miles for the 52V 60AH models and 70-100 miles for the X9 Ultra. Actual range depends on rider weight, terrain, speed and assist level." },
  { q: "How long does shipping take?", a: "The merchant lists free shipping with delivery in 3-7 business days, and its X7 AWD page says orders ship from its Los Angeles warehouse in the United States, typically arriving within 3-5 business days. Confirm the details for your address at checkout." },
  { q: "Is there a warranty?", a: "The merchant lists a 2-year warranty covering product defects or malfunctions. Read the merchant's warranty policy for full terms." },
  { q: "Are the prices and savings final?", a: `No. Prices are as listed on the merchant site on ${SITE.dataDate} and can change. The merchant's checkout shows the current price.` },
  { q: "How long will the Black Friday offers last?", a: "Promotions and discount codes, including PRIME100, are set by the merchant and can change or end at any time. Which models a code covers is listed on the merchant's pages. The merchant's checkout shows what applies to your order." },
  { q: "Is the X7 AWD safety certified?", a: "The merchant states that the X7 AWD e-bike system is UL 2849 certified by TÜV and that its battery pack is UL 2271 certified. Check each model's page on the merchant site for its own certifications." },
  { q: "What about returns and support?", a: "Return terms are set by the merchant. Review its return and refund policy before ordering. The merchant also lists live chat customer service on its site." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-12" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-2xl font-extrabold sm:text-3xl text-white">Frequently asked questions</h2>
      <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-lg">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <h3>
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900 hover:text-brand transition-colors cursor-pointer"
                >
                  <span>{f.q}</span>
                  <span aria-hidden="true" className="text-xl font-bold text-brand">{isOpen ? "−" : "+"}</span>
                </button>
              </h3>
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-5 pb-5 text-slate-700 leading-relaxed">
                {f.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
