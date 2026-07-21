import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { AlertCircle, Phone, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const EmergencyPage = () => {
  return (
    <>
      <SEOHead
        title="Emergency Eye Care in Ahmedabad"
        description="Urgent eye triage for sudden vision loss, chemical exposure, foreign body insertion, ocular trauma, and severe eye pain."
        path="/emergency-eye-care"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'Emergency Eye Care' }]} />

          <div className="bg-navy-dark border-2 border-coral-light/50 text-white rounded-3xl p-8 md:p-12 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center space-x-2 bg-coral-light/20 text-coral-light border border-coral-light/40 px-4 py-1.5 rounded-full text-xs font-bold">
              <AlertCircle className="w-4 h-4 animate-pulse" />
              <span>Urgent Triage & Ocular Emergency</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Emergency Eye Care Services in Ahmedabad
            </h1>

            <p className="text-base text-silver-soft max-w-3xl leading-relaxed">
              If you experience sudden vision loss, chemical splashes, ocular trauma, embedded foreign objects, or acute eye pain, immediate clinical assessment is critical.
            </p>

            <div className="p-6 bg-navy/80 rounded-2xl border border-coral-light/30 max-w-xl space-y-3">
              <p className="text-xs text-silver-soft font-bold uppercase tracking-wider">Emergency Contact Hotline (Demo):</p>
              <a href="tel:+917600583156" className="font-heading font-extrabold text-2xl text-coral-light hover:underline block">
                +91 7600 583 156
              </a>
              <p className="text-[11px] text-silver-medium">
                For urgent life-threatening or sight-threatening emergencies, visit the nearest hospital emergency casualty immediately.
              </p>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default EmergencyPage;
