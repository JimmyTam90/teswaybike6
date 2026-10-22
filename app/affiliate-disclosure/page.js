import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata = { title: "Affiliate Disclosure | PrimeGearLab", robots: { index: false, follow: true }, alternates: { canonical: `${SITE.baseUrl}/affiliate-disclosure` } };

export default function Page() {
  return (
    <LegalLayout title="Affiliate Disclosure">
      <p>{SITE.disclaimer}</p>
      <p>{SITE.name} is an independent publisher and affiliate recommendation site. Links to the TESWAY website (teswaybike.com) on this page are affiliate links. If you buy after clicking one, we may earn a commission from the merchant. The price you pay is not increased.</p>
      <p>{SITE.name} is not the merchant and is not the TESWAY website. Product details shown here are taken from the merchant&apos;s public listings and may change.</p>
      <p>Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
    </LegalLayout>
  );
}
