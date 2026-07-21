import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import VisionSimulator from '../components/simulators/VisionSimulator';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { Sparkles, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const LasikPage = () => {
  return (
    <>
      <SEOHead
        title="LASIK & Vision Correction Consultation in Ahmedabad"
        description="Explore blade-free Femto-LASIK, Contoura Vision 22,000 point corneal mapping, suitability screening, and visual simulation at Lumora Eye Institute."
        path="/lasik"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'LASIK & Refractive Surgery' }]} />

          <div className="bg-navy-dark text-white rounded-3xl p-8 md:p-12 space-y-4 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold text-gold-lens uppercase tracking-widest bg-gold-lens/20 px-3 py-1 rounded-full">
              Refractive Vision Correction
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              LASIK & Contoura Vision Consultation in Ahmedabad
            </h1>
            <p className="text-base text-silver-soft max-w-3xl leading-relaxed">
              Blade-free femtosecond laser vision correction guided by 22,000 corneal elevation points for freedom from eyeglasses and contact lenses.
            </p>
            <div className="pt-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-lens to-cyan-iris text-navy font-bold text-xs px-7 py-3.5 rounded-full shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book LASIK Suitability Check</span>
              </Link>
            </div>
          </div>

          <VisionSimulator />

          <div className="bg-white p-8 rounded-3xl border border-navy/10 space-y-4">
            <h3 className="font-heading font-bold text-xl text-navy">LASIK Suitability Criteria</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-navy/80">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-iris flex-shrink-0" />
                <span>Age 18+ years with stable eyeglass prescription for at least 1 year.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-iris flex-shrink-0" />
                <span>Adequate corneal thickness confirmed via topography scan.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-iris flex-shrink-0" />
                <span>Absence of active corneal infection, Keratoconus, or severe dry eye.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-iris flex-shrink-0" />
                <span>Healthy retina and normal intraocular pressure levels.</span>
              </div>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default LasikPage;
