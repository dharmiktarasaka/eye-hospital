import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { diagnosticsData } from '../data/diagnosticsData';
import { Calendar, ArrowRight } from 'lucide-react';

export const DiagnosticsPage = () => {
  return (
    <>
      <SEOHead
        title="Advanced Eye Diagnostics Suite"
        description="Explore advanced diagnostic tools including Spectral-Domain OCT, Corneal Topography, Visual Field Perimetry, and Digital Fundus Photography."
        path="/diagnostics"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'Diagnostics Suite' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Clinical Diagnostic Equipment
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Advanced Diagnostic Facilities
            </h1>
            <p className="text-sm text-navy/70">
              High-resolution optical coherence tomography, non-contact tonometry, and corneal topography imaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnosticsData.map((diag) => (
              <div key={diag.id} className="bg-white rounded-3xl p-6 border border-navy/10 space-y-4 shadow-sm hover:shadow-xl transition-all">
                <img src={diag.image} alt={diag.title} className="w-full h-48 object-cover rounded-2xl" />
                <span className="text-[11px] bg-cyan-iris/10 text-cyan-iris font-bold px-2.5 py-1 rounded-full">
                  {diag.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-navy">{diag.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed">{diag.purpose}</p>
                <div className="pt-2 border-t border-navy/10 text-xs text-navy/80 space-y-1">
                  <p><strong>Duration:</strong> {diag.duration}</p>
                  <p><strong>Preparation:</strong> {diag.preparation}</p>
                </div>
              </div>
            ))}
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default DiagnosticsPage;
