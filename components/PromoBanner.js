"use client";
import { useState } from "react";
import CTAButton from "./CTAButton";
import { PROMO } from "@/lib/config";

export default function PromoBanner() {
  const [copied, setCopied] = useState(false);

  if (!PROMO?.code) return null;

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(PROMO.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="promo" className="on-dark scroll-mt-24 bg-ink text-white" aria-labelledby="promo-title">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 md:grid-cols-2 md:items-center p-4 gap-6">
          <div className="w-full overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center">
            <img
              src={PROMO.image}
              alt={PROMO.imageAlt ?? "TESWAY e-bike promotion"}
              className="w-full h-auto max-h-[320px] object-cover rounded-xl shadow-md"
              loading="lazy"
            />
          </div>
          <div className="p-2 sm:p-4">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-300">Merchant promotion</p>
            <h2 id="promo-title" className="mt-2 text-2xl font-extrabold sm:text-3xl">TESWAY {PROMO.name}</h2>
            <ul className="mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold">
              <li className="rounded-full bg-brand px-3 py-1 text-white">Up to $1,000 off select e-bikes</li>
              <li className="rounded-full border border-slate-600 px-3 py-1 flex items-center gap-2">
                <span>{PROMO.codeOff} off with code</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 rounded border border-dashed border-blue-400 bg-white px-2 py-0.5 text-ink font-extrabold hover:bg-blue-50 active:scale-95 transition-all cursor-pointer"
                >
                  <code>{PROMO.code}</code>
                  <span className="text-[10px] uppercase font-bold text-brand ml-1">
                    {copied ? "Copied! ✓" : "Copy"}
                  </span>
                </button>
              </li>
            </ul>
            <div className="mt-4 space-y-3 text-slate-300">
              <p>
                The merchant&apos;s banner lists {PROMO.name} savings of up to $1,000. Its X7 AWD
                page lists code {PROMO.code} for {PROMO.codeOff} off at checkout, plus a free 2-year extended warranty
                (motor, battery, frame) and a free 7-piece accessory kit on a limited-time basis.
              </p>
              <p className="text-sm text-slate-400">
                The code, gifts and prices are set by the merchant and can change or end. Confirm at checkout. As listed on {PROMO.asOf}.
              </p>
            </div>
            <CTAButton type="collection" k="prime-day" ctaId="promo-banner" className="mt-6 w-full sm:w-auto">
              See Prime Day Deals
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
