import Image from "next/image";
import CTAButton from "./CTAButton";
import { SITE } from "@/lib/site";
// Static import: the URL automatically includes basePath/assetPrefix (/tesway-ebike) and the intrinsic
// width/height give the right aspect ratio, so the wide banner is never cropped or stretched.
import banner from "../public/images/prime-day-banner.jpg";

// DOM order: IMAGE -> TITLE -> DESCRIPTION -> CTA.
export default function PrimeDayBanner() {
  return (
    <section id="prime-day" className="on-dark scroll-mt-24 bg-ink text-white" aria-labelledby="prime-day-title">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          <Image
            unoptimized
            src={banner}
            alt="TESWAY Prime Day Deals banner showing the X9 Ultra, X7 AWD, X5 AWD and C5 AWD e-bikes beside a mountain lake"
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="block h-auto w-full"
          />
          <div className="p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-300">Merchant promotion</p>
            <h2 id="prime-day-title" className="mt-2 text-2xl font-extrabold sm:text-3xl">TESWAY Prime Day Deals</h2>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
              <li className="rounded-full bg-brand px-3 py-1 text-white">Up to $1,000 off select e-bikes</li>
              <li className="rounded-full border border-slate-600 px-3 py-1">Extra $100 off select models with code PRIME100</li>
            </ul>
            <div className="mt-4 max-w-3xl space-y-3 text-slate-300">
              <p>
                The merchant&apos;s deals page lists $1,000 off the X5 AWD, X7 AWD and C5 AWD, $850 off the X7 PRO and
                $790 off the X9 Ultra.
              </p>
              <p className="text-sm text-slate-400">
                Prices on that page can differ from the standard listings below. The promotion name and terms are the
                merchant&apos;s and can change or end. Confirm at checkout. As listed on {SITE.dataDate}.
              </p>
            </div>
            <CTAButton type="collection" k="prime-day-deals" ctaId="prime-day-banner" className="mt-6 w-full sm:w-auto">
              See Prime Day Deals
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
