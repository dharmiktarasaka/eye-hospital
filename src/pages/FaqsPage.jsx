import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { faqsData } from '../data/faqsData';
import { Search, HelpCircle } from 'lucide-react';

export const FaqsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqsData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions (FAQs)"
        description="Find answers to 18+ common questions about eye examinations, cataract surgery, LASIK, diabetic retina checks, and appointment scheduling."
        path="/faqs"
        schemaType="FAQPage"
        schemaData={{ faqs: faqsData }}
      />

      <div className="bg-pearl py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

          <div className="space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Patient Help & Questions
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-navy/70">
              Clear answers regarding clinical examinations, cataract procedure options, LASIK suitability, and patient appointment workflows.
            </p>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-cyan-iris absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., cataract, LASIK, emergency)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-navy/15 rounded-full py-3 pl-10 pr-4 text-xs text-navy focus:outline-none focus:border-cyan-iris"
            />
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="p-6 bg-white rounded-3xl border border-navy/10 space-y-2 shadow-sm">
                <span className="text-[10px] font-bold text-cyan-iris bg-cyan-iris/10 px-2.5 py-0.5 rounded-full">{faq.category}</span>
                <h3 className="font-heading font-bold text-base text-navy flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-iris flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-navy/80 leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default FaqsPage;
