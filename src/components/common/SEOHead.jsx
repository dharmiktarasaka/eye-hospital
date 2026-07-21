import React from 'react';
import { Helmet } from 'react-helmet-async';
import JsonLd from '../../seo/JsonLd';

export const SEOHead = ({ title, description, path = "", schemaType = "Hospital", schemaData = {} }) => {
  const defaultTitle = "Eye Hospital in Ahmedabad | Lumora Eye Institute";
  const defaultDesc = "Explore comprehensive eye care, cataract services, retina care, glaucoma management, LASIK, paediatric ophthalmology, diagnostics, and consultation experiences at Lumora Eye Institute.";
  const siteUrl = "https://lumora-eye-institute.tarasaka.com";
  const currentUrl = `${siteUrl}${path}`;

  const metaTitle = title ? `${title} | Lumora Eye Institute` : defaultTitle;
  const metaDesc = description || defaultDesc;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:site_name" content="Lumora Eye Institute" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />

        {/* Local SEO & Geo Metadata */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
      </Helmet>
      <JsonLd type={schemaType} data={schemaData} />
    </>
  );
};

export default SEOHead;
