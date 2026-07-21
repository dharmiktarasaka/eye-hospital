import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import RetinaScanSection from '../components/interactive/RetinaScanSection';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { Activity, Calendar, ShieldCheck } from 'lucide-react';

export const RetinaCentrePage = () => {
  return (
    <>
      <SEOHead
        title="Retina Specialist & Diabetic Eye Care in Ahmedabad"
        description="Vitreoretinal services, diabetic retinopathy screening, anti-VEGF injections, retinal detachment care, and OCT scanning at Lumora Eye Institute."
        path="/retina-centre"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'Retina Centre' }]} />

          <div className="bg-navy-dark text-white rounded-3xl p-8 md:p-12 space-y-4 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold text-violet-prism uppercase tracking-widest bg-violet-prism/20 px-3 py-1 rounded-full">
              Vitreoretinal & Macular Institute
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Retina Specialist & Diabetic Eye Care in Ahmedabad
            </h1>
            <p className="text-base text-silver-soft max-w-3xl leading-relaxed">
              High-definition Spectral-Domain OCT imaging, retinal photocoagulation, anti-VEGF therapy, and comprehensive screening for diabetic macular edema.
            </p>
            <div className="pt-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-prism to-cyan-iris text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Retina Examination</span>
              </Link>
            </div>
          </div>

          <RetinaScanSection />
          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default RetinaCentrePage;
