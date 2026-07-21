import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

export const MedicalDisclaimer = ({ variant = "standard" }) => {
  if (variant === "compact") {
    return (
      <div className="bg-navy/5 border border-cyan-iris/20 rounded-xl p-4 text-xs text-navy/70 flex items-start space-x-3 my-4">
        <Info className="w-4 h-4 text-cyan-iris flex-shrink-0 mt-0.5" />
        <p>
          <strong className="font-semibold text-navy">Educational Disclaimer:</strong> Information on this website is for general health awareness and visual demonstration. It does not constitute medical diagnosis or individual treatment plans. Consult a qualified ophthalmologist for personal eye concerns.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-navy-dark text-white rounded-2xl p-6 md:p-8 border border-cyan-iris/30 shadow-xl my-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-iris/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-12 h-12 rounded-xl bg-coral-light/20 border border-coral-light/40 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-6 h-6 text-coral-light" />
        </div>
        <div className="flex-1 space-y-2">
          <h4 className="font-heading font-bold text-lg text-white">Healthcare & Medical Safety Notice</h4>
          <p className="text-sm text-silver-soft leading-relaxed">
            Eye symptoms, sudden vision changes, or ocular trauma should be evaluated by a certified ophthalmologist. Treatment suitability, procedures, recovery timelines, and visual outcomes vary significantly between individuals.
          </p>
          <p className="text-xs text-cyan-iris font-medium">
            For sudden vision loss, chemical exposure, severe eye pain, or projectile eye injury, seek immediate emergency medical care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;
