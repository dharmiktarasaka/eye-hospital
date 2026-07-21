import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { treatmentsData } from '../data/treatmentsData';
import { CheckCircle2, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export const TreatmentDetailPage = () => {
  const { id } = useParams();
  const treatment = treatmentsData.find((t) => t.id === id) || treatmentsData[0];

  return (
    <>
      <SEOHead
        title={`${treatment.title} Overview`}
        description={treatment.description}
        path={`/treatments/${treatment.id}`}
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs
            items={[
              { label: 'Treatments', link: '/treatments' },
              { label: treatment.title }
            ]}
          />

          <div className="bg-navy text-white rounded-3xl p-8 md:p-12 space-y-4 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold text-cyan-bright uppercase tracking-widest bg-cyan-iris/20 px-3 py-1 rounded-full">
              {treatment.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              {treatment.title}
            </h1>
            <p className="text-base text-silver-soft max-w-2xl">{treatment.tagline}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy/10 space-y-3">
                <h2 className="font-heading font-bold text-xl text-navy">Procedure Overview</h2>
                <p className="text-sm text-navy/80 leading-relaxed font-medium">
                  {treatment.description}
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy/10 space-y-4">
                <h3 className="font-heading font-bold text-lg text-navy">Key Clinical Advantages</h3>
                <div className="space-y-2 text-xs sm:text-sm text-navy/80">
                  {treatment.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-iris flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy/10 space-y-4">
                <h3 className="font-heading font-bold text-lg text-navy">General Step-by-Step Pathway</h3>
                <div className="space-y-3">
                  {treatment.procedureSteps.map((step, idx) => (
                    <div key={idx} className="p-4 bg-pearl rounded-2xl flex items-center space-x-3 text-xs text-navy/80 font-medium">
                      <span className="w-6 h-6 rounded-full bg-cyan-iris text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-navy/10 space-y-4">
                <h3 className="font-heading font-bold text-lg text-navy">Schedule Treatment Consultation</h3>
                <p className="text-xs text-navy/70">
                  {treatment.consultationNotice}
                </p>
                <Link
                  to="/book-appointment"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-navy to-cyan-iris text-white py-3 rounded-xl text-xs font-bold"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>
              </div>

              <MedicalDisclaimer variant="compact" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentDetailPage;
