import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { Calendar, Eye, CheckCircle2 } from 'lucide-react';

export const CorneaCentrePage = () => {
  return (
    <>
      <SEOHead
        title="Cornea & Dry Eye Care Centre in Ahmedabad"
        description="Corneal topography, Keratoconus C3R cross-linking, dry eye diagnostics, and ocular surface health at Lumora Eye Institute."
        path="/cornea-centre"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'Cornea Centre' }]} />

          <div className="bg-navy text-white rounded-3xl p-8 md:p-12 space-y-4 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold text-cyan-bright uppercase tracking-widest bg-cyan-iris/20 px-3 py-1 rounded-full">
              Ocular Surface & Corneal Institute
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Cornea & Dry Eye Care Centre in Ahmedabad
            </h1>
            <p className="text-base text-silver-soft max-w-3xl leading-relaxed">
              3D corneal topography elevation mapping, Keratoconus C3R collagen cross-linking, and tear film meibography for dry eye disease.
            </p>
            <div className="pt-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-iris to-violet-prism text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Cornea Checkup</span>
              </Link>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default CorneaCentrePage;
