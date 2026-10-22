import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section className="on-dark bg-brand py-12 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to see current TESWAY deals?</h2>
        <p className="mt-3 font-medium text-blue-50">Check live pricing, colors and availability on the merchant&apos;s site.</p>
        <CTAButton type="collection" k="black-friday" ctaId="final" variant="light" className="mt-6 w-full sm:w-auto">Shop Black Friday Deals</CTAButton>
      </div>
    </section>
  );
}
