import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, AlertCircle, Globe, FileText, MessageSquare } from 'lucide-react';

export const UtilityBar = () => {
  return (
    <div className="bg-navy text-white text-xs py-2 px-4 border-b border-navy-light/40 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Triage / Urgent Action */}
        <div className="flex items-center space-x-4">
          <Link
            to="/emergency-eye-care"
            className="flex items-center space-x-1.5 bg-coral-light/20 text-coral-light border border-coral-light/30 px-2.5 py-1 rounded-full hover:bg-coral-light hover:text-white transition-all duration-300 font-semibold"
          >
            <AlertCircle className="w-3.5 h-3.5 animate-pulse" />
            <span>Emergency Eye Care</span>
          </Link>
          <a
            href="tel:+917600583156"
            className="hidden sm:flex items-center space-x-1 text-silver-soft hover:text-cyan-iris transition-colors"
          >
            <Phone className="w-3 h-3 text-cyan-iris" />
            <span>+91 7600 583 156 (Portfolio Contact)</span>
          </a>
        </div>

        {/* Right Utility Quick Links */}
        <div className="flex items-center space-x-4 text-silver-medium">
          <a
            href="https://wa.me/917600583156?text=Hello%20Lumora%20Eye%20Institute%20Team"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-cyan-bright transition-colors"
          >
            <MessageSquare className="w-3 h-3 text-emerald-400" />
            <span className="hidden md:inline">WhatsApp Enquiry</span>
          </a>
          <Link
            to="/international-patients"
            className="flex items-center space-x-1 hover:text-cyan-iris transition-colors"
          >
            <Globe className="w-3 h-3 text-cyan-iris" />
            <span className="hidden sm:inline">International Patients</span>
          </Link>
          <Link
            to="/book-appointment"
            className="flex items-center space-x-1 hover:text-gold-lens transition-colors"
          >
            <FileText className="w-3 h-3 text-gold-lens" />
            <span>Report Access Demo</span>
          </Link>
          <div className="hidden lg:flex items-center space-x-1 bg-navy-dark px-2 py-0.5 rounded border border-navy-light/60 text-[11px] text-silver-soft">
            <span>EN</span>
            <span className="text-navy-light">|</span>
            <span className="text-silver-medium cursor-pointer hover:text-white">GUJ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
