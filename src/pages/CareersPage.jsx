import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export const CareersPage = () => {
  return (
    <>
      <SEOHead title="Careers & Opportunities" description="Careers at Lumora Eye Institute placeholder page." path="/careers" />
      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Careers' }]} />
          <h1 className="font-heading text-3xl font-extrabold text-navy">Careers & Clinical Fellowships</h1>
          <p className="text-sm text-navy/70 max-w-2xl">
            This is a fictional portfolio page representing career opportunities in ophthalmology, optometry, and patient care management.
          </p>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
