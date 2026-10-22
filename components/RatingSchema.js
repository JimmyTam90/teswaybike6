export default function RatingSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "TESWAY E-Bikes",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1280"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
