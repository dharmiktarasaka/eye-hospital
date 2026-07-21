import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { treatmentsData } from '../data/treatmentsData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const TreatmentsPage = () => {
  return (
    <>
      <SEOHead
        title="Ophthalmology Procedures & Treatments"
        description="Explore advanced eye treatments including Micro-Incision Cataract Surgery, Contoura LASIK, Retina anti-VEGF lasers, SLT glaucoma therapy, and C3R collagen cross-linking."
        path="/treatments"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={[{ label: 'Treatments & Procedures' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Surgical & Laser Interventions
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Ophthalmology Procedures & Clinical Therapies
            </h1>
            <p className="text-sm text-navy/70">
              Overview of micro-incision cataract surgery, laser vision correction, retinal therapies, and corneal cross-linking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentsData.map((treatment) => (
              <div key={treatment.id} className="bg-white rounded-3xl p-6 border border-navy/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <img src={treatment.image} alt={treatment.title} className="w-full h-48 object-cover rounded-2xl" />
                  <span className="text-[11px] bg-cyan-iris/10 text-cyan-iris font-bold px-2.5 py-1 rounded-full">
                    {treatment.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-navy">{treatment.title}</h3>
                  <p className="text-xs text-navy/70 leading-relaxed">{treatment.description}</p>
                </div>

                <div className="pt-6 mt-4 border-t border-navy/10 flex items-center justify-between">
                  <Link to={`/treatments/${treatment.id}`} className="text-xs font-bold text-cyan-iris hover:underline flex items-center gap-1">
                    <span>Procedure Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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

export default TreatmentsPage;
