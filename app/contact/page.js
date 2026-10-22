import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata = { title: "Contact Us | PrimeGearLab", robots: { index: false, follow: true }, alternates: { canonical: `${SITE.baseUrl}/contact` } };

export default function Page() {
  return (
    <LegalLayout title="Contact Us">
      <p>Questions about this website? Email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p>For orders, shipping, returns or warranty claims, contact the merchant directly. {SITE.name} does not sell or ship products.</p>
    </LegalLayout>
  );
}
