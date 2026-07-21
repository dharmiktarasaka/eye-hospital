import React from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';

export const LegalPage = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = 'Legal Notice';
  let content = null;

  if (path === '/privacy') {
    title = 'Privacy Policy';
    content = (
      <div className="space-y-4 text-xs text-navy/80 leading-relaxed">
        <p>This Privacy Policy outlines how Lumora Eye Institute (a fictional healthcare website concept by TARASAKA DIGITAL Solutions) collects and handles information submitted through frontend demonstration forms.</p>
        <p>Information submitted through interactive appointment forms is processed locally for demonstration purposes only. We do not sell or share patient data with third-party advertisers.</p>
      </div>
    );
  } else if (path === '/terms') {
    title = 'Terms of Service';
    content = (
      <div className="space-y-4 text-xs text-navy/80 leading-relaxed">
        <p>Welcome to Lumora Eye Institute website concept. By viewing or using this website, you acknowledge that Lumora Eye Institute is a fictional portfolio project created by TARASAKA DIGITAL Solutions.</p>
        <p>All appointment confirmations, doctor qualifications, clinical numbers, and diagnostic tool outputs are simulated demonstrations.</p>
      </div>
    );
  } else if (path === '/disclaimer') {
    title = 'Medical Disclaimer';
    content = (
      <div className="space-y-4 text-xs text-navy/80 leading-relaxed">
        <p>The content provided on this website, including symptom guides, treatment descriptions, visual clarity simulators, and FAQs, is for general health awareness and web design demonstration purposes only.</p>
        <p>It does not constitute medical diagnosis or individual clinical advice. Always consult a licensed ophthalmologist for personal visual concerns or ocular emergencies.</p>
      </div>
    );
  } else if (path === '/accessibility') {
    title = 'Accessibility Statement';
    content = (
      <div className="space-y-4 text-xs text-navy/80 leading-relaxed">
        <p>Lumora Eye Institute is committed to ensuring digital accessibility for people with visual impairments or disabilities. We implement WCAG 2.2 guidelines, high contrast ratios, visible focus indicators, screen reader semantics, and reduced motion options.</p>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={title} description={`${title} for Lumora Eye Institute portfolio website.`} path={path} />

      <div className="bg-pearl py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={[{ label: title }]} />

          <div className="bg-white p-8 rounded-3xl border border-navy/10 space-y-4 shadow-sm">
            <h1 className="font-heading text-3xl font-extrabold text-navy">{title}</h1>
            {content}
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default LegalPage;
