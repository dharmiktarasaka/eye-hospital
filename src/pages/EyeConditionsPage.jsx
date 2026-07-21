import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import EyeConcernFinder from '../components/interactive/EyeConcernFinder';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';

export const EyeConditionsPage = () => {
  return (
    <>
      <SEOHead
        title="Eye Conditions Directory"
        description="Searchable eye conditions directory covering Cataract, Diabetic Retinopathy, Glaucoma, Dry Eye, Refractive Errors, Squint, and Retinal Detachment."
        path="/conditions"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={[{ label: 'Eye Conditions' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Ocular Health Directory
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Eye Conditions & Symptom Directory
            </h1>
            <p className="text-sm text-navy/70">
              Educational overview of common and complex eye conditions affecting visual acuity, retinal health, and ocular comfort.
            </p>
          </div>

          <EyeConcernFinder />
          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default EyeConditionsPage;
