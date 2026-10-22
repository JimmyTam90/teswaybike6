import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata = { title: "Terms of Service | PrimeGearLab", robots: { index: false, follow: true }, alternates: { canonical: `${SITE.baseUrl}/terms` } };

export default function Page() {
  return (
    <LegalLayout title="Terms of Service">
      <p>By using this website, you agree to these terms.</p>
      <h2>Informational content</h2>
      <p>{SITE.name} is an independent publisher. Content is provided for general information, summarizes details published by the merchant, and may become out of date. Always confirm prices, specifications, availability, shipping and policies on the merchant&apos;s website before buying.</p>
      <h2>No merchant relationship</h2>
      <p>We are not the merchant, do not sell products on this site and do not process orders. Purchases are subject to the merchant&apos;s own terms and policies.</p>
      <h2>Affiliate links</h2>
      <p>This site contains affiliate links. See our <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.</p>
      <h2>Limitation</h2>
      <p>The site is provided as is. To the extent permitted by law, we are not liable for losses arising from your use of this site or from transactions with third parties.</p>
      <h2>Contact</h2>
      <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
    </LegalLayout>
  );
}
