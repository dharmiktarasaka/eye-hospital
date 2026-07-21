import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import LensClaritySimulator from '../components/simulators/LensClaritySimulator';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { Sparkles, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const CataractCentrePage = () => {
  return (
    <>
      <SEOHead
        title="Cataract Care & Surgery Centre in Ahmedabad"
        description="Explore Micro-Incision Cataract Surgery (MICS), premium multifocal & toric intraocular lens (IOL) implants, and lens clarity simulation at Lumora Eye Institute."
        path="/cataract-centre"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'Cataract Centre' }]} />

          <div className="bg-navy text-white rounded-3xl p-8 md:p-12 space-y-4 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold text-cyan-bright uppercase tracking-widest bg-cyan-iris/20 px-3 py-1 rounded-full">
              Centre of Excellence • Cataract & Lens Implants
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Cataract Care & Surgery Consultation in Ahmedabad
            </h1>
            <p className="text-base text-silver-soft max-w-3xl leading-relaxed">
              Advanced stitch-free Micro-Incision Cataract Surgery (MICS) with customized intraocular lens (IOL) selection designed to restore vibrant colors and distance clarity.
            </p>
            <div className="pt-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-iris to-violet-prism text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Cataract Evaluation</span>
              </Link>
            </div>
          </div>

          <LensClaritySimulator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-navy/10 space-y-4">
              <h3 className="font-heading font-bold text-xl text-navy">Micro-Incision Cataract Surgery (MICS)</h3>
              <p className="text-xs sm:text-sm text-navy/75 leading-relaxed">
                MICS dissolves the cloudy natural lens using ultrasonic energy through micro-incisions under 2.2mm, followed by implantation of a flexible foldable IOL without stitches.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-navy/10 space-y-4">
              <h3 className="font-heading font-bold text-xl text-navy">Custom Intraocular Lens (IOL) Options</h3>
              <ul className="space-y-2 text-xs text-navy/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-iris" />
                  <span><strong>Monofocal IOLs:</strong> Clear distance focus (reading glasses typically needed up close).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-iris" />
                  <span><strong>Toric IOLs:</strong> Corrects pre-existing corneal astigmatism.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-iris" />
                  <span><strong>Trifocal / EDOF IOLs:</strong> Provides seamless focus across distance, intermediate (computer), and near distances.</span>
                </li>
              </ul>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default CataractCentrePage;
