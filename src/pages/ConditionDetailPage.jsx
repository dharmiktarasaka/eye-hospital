import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { conditionsData } from '../data/conditionsData';
import { CheckCircle2, ArrowRight, Calendar, AlertTriangle, HelpCircle } from 'lucide-react';

export const ConditionDetailPage = () => {
  const { id } = useParams();
  const condition = conditionsData.find((c) => c.id === id) || conditionsData[0];

  return (
    <>
      <SEOHead
        title={`${condition.title} Guide`}
        description={condition.shortDesc}
        path={`/conditions/${condition.id}`}
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs
            items={[
              { label: 'Eye Conditions', link: '/conditions' },
              { label: condition.title }
            ]}
          />

          {/* Condition Detail Hero Header */}
          <div className="bg-navy text-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 md:p-12 space-y-4">
                <span className="text-xs font-bold text-cyan-bright uppercase tracking-widest bg-cyan-iris/20 px-3 py-1 rounded-full">
                  {condition.category} • {condition.urgency}
                </span>
                <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                  {condition.title}
                </h1>
                <p className="text-base text-silver-soft leading-relaxed">
                  {condition.tagline}
                </p>
                <div className="pt-2">
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-iris to-violet-prism text-white text-xs font-bold px-6 py-3 rounded-full shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Condition Evaluation</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 h-72 lg:h-full relative">
                <img
                  src={condition.image}
                  alt={condition.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Clinical Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              
              {/* Overview Box */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy/10 space-y-3">
                <h2 className="font-heading font-bold text-xl text-navy">General Condition Overview</h2>
                <p className="text-sm text-navy/80 leading-relaxed font-medium">
                  {condition.shortDesc}
                </p>
                <p className="text-xs text-navy/70 leading-relaxed">
                  {condition.treatmentOverview}
                </p>
              </div>

              {/* Symptoms List */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy/10 space-y-4">
                <h3 className="font-heading font-bold text-lg text-navy">Common Clinical Signs & Symptoms</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-navy/80">
                  {condition.symptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-iris flex-shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diagnostic Process */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy/10 space-y-4">
                <h3 className="font-heading font-bold text-lg text-navy">How Ophthalmologists Diagnose {condition.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-navy/80">
                  {condition.diagnosticProcess.map((diag, idx) => (
                    <div key={idx} className="p-3 bg-pearl rounded-xl border border-navy/10 flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-full bg-cyan-iris/20 text-cyan-iris font-bold flex items-center justify-center text-[11px]">
                        {idx + 1}
                      </span>
                      <span>{diag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {condition.faqs && condition.faqs.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy/10 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-navy flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-iris" />
                    <span>Condition FAQs</span>
                  </h3>
                  <div className="space-y-3">
                    {condition.faqs.map((faq, idx) => (
                      <div key={idx} className="p-4 bg-pearl rounded-2xl space-y-1">
                        <h4 className="font-heading font-bold text-xs text-navy">{faq.question}</h4>
                        <p className="text-xs text-navy/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Quick Action */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-navy-dark text-white p-6 rounded-3xl border border-cyan-iris/30 space-y-4">
                <h3 className="font-heading font-bold text-lg text-white">Need an Eye Evaluation?</h3>
                <p className="text-xs text-silver-soft">
                  Schedule a clinical checkup with an ophthalmology specialist at Lumora Eye Institute in Ahmedabad.
                </p>
                <Link
                  to="/book-appointment"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-iris to-violet-prism py-3 rounded-xl text-xs font-bold text-white"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
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

export default ConditionDetailPage;
