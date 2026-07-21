import React from 'react';

/**
 * JsonLd component injects structured schema.org JSON-LD scripts
 * Complies with strict rules: No fake aggregate ratings, reviews, prices, or credentials.
 */
export const JsonLd = ({ type = 'Hospital', data = {} }) => {
  let schema = null;

  if (type === 'Hospital' || type === 'MedicalOrganization') {
    schema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Lumora Eye Institute",
      "alternateName": "Lumora Advanced Vision Care",
      "description": "Fictional eye hospital and advanced vision care institute concept created by TARASAKA DIGITAL Solutions for portfolio demonstration purposes.",
      "url": "https://lumora-eye-institute.tarasaka.com",
      "logo": "https://lumora-eye-institute.tarasaka.com/logo.png",
      "telephone": "+91 7600 583 156",
      "medicalSpecialty": "Ophthalmology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "SG Highway, Satellite (Fictional Portfolio Location)",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380015",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.0225",
        "longitude": "72.5714"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      "disclaimer": "This is a fictional eye-hospital website concept created by TARASAKA DIGITAL Solutions for portfolio and demonstration purposes."
    };
  } else if (type === 'FAQPage' && data.faqs) {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
