import React from 'react';

interface SEOProps {
  title: string;
  location: string;
}

export const SEO: React.FC<SEOProps> = ({ title, location }) => {
  const siteName = "Estate Architect";
  const fullTitle = `${siteName} | Best Property Dealer in ${location} | No. 1 Real Estate`;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": siteName,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location,
      "streetAddress": "1200 Architect Plaza"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "128"
    }
  };

  return (
    <>
      <title>{fullTitle}</title>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </>
  );
};
