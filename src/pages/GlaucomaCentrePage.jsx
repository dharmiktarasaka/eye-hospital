import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { ShieldCheck, Calendar, Eye, CheckCircle2 } from 'lucide-react';

export const GlaucomaCentrePage = () => {
  return (
    <>
      <SEOHead
        title="Glaucoma Screening & Eye Pressure Assessment in Ahmedabad"
        description="Glaucoma screening, intraocular pressure (IOP) measurement, visual field perimetry, OCT optic nerve head analysis, and Selective Laser Trabeculoplasty (SLT)."
        path="/glaucoma-centre"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'Glaucoma Centre' }]} />

          <div className="bg-navy text-white rounded-3xl p-8 md:p-12 space-y-4 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold text-gold-lens uppercase tracking-widest bg-gold-lens/20 px-3 py-1 rounded-full">
              Optic Nerve & IOP Management
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Glaucoma Screening & Optic Nerve Assessment
            </h1>
            <p className="text-base text-silver-soft max-w-3xl leading-relaxed">
              Early detection and long-term optic nerve monitoring using applanation tonometry, automated visual field perimetry, and non-invasive Selective Laser Trabeculoplasty (SLT).
            </p>
            <div className="pt-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-navy to-cyan-iris border border-cyan-iris/40 text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Glaucoma Screening</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-navy/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-cyan-iris/20 text-cyan-iris flex items-center justify-center font-bold">1</div>
              <h3 className="font-heading font-bold text-lg text-navy">Non-Contact Tonometry (IOP)</h3>
              <p className="text-xs text-navy/70">Measures fluid pressure inside the eye to identify elevated risk levels.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-navy/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-violet-prism/20 text-violet-prism flex items-center justify-center font-bold">2</div>
              <h3 className="font-heading font-bold text-lg text-navy">Visual Field Perimetry</h3>
              <p className="text-xs text-navy/70">Maps peripheral visual sensitivities to detect silent optic nerve changes.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-navy/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-gold-lens/20 text-gold-lens flex items-center justify-center font-bold">3</div>
              <h3 className="font-heading font-bold text-lg text-navy">Selective Laser Trabeculoplasty</h3>
              <p className="text-xs text-navy/70">Non-invasive laser therapy to enhance fluid outflow and lower eye pressure.</p>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default GlaucomaCentrePage;
