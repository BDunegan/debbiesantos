import React from "react";

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Debbie Santos Counseling',
          image: 'https://debbiesantos.com/logo.png',
          '@id': 'https://debbiesantos.com',
          url: 'https://debbiesantos.com',
          telephone: '(555) 123-4567',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Main St',
            addressLocality: 'College Station',
            addressRegion: 'TX',
            postalCode: '77840',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 30.6280,
            longitude: -96.3344,
          },
          openingHours: 'Mo-Fr 09:00-17:00',
          sameAs: [
            'https://www.facebook.com/bartcounseling',
          ],
        }),
      }}
    />
  );
} 