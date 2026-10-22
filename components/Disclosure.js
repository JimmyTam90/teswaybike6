import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Disclosure() {
  return (
    <section className="border-y border-slate-200 bg-white py-10" aria-labelledby="about-title">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 id="about-title" className="text-xl font-extrabold">About this page</h2>
        <p className="mt-3 text-slate-600">
          PrimeGearLab is an independent publisher, not the merchant. We summarize listings from TESWAY&apos;s US site and
          send you there to buy. Pricing, stock, shipping and returns are set by the merchant. {SITE.disclaimer}{" "}
          <Link href="/affiliate-disclosure" className="font-semibold text-brand underline">Affiliate Disclosure</Link>
        </p>
      </div>
    </section>
  );
}
