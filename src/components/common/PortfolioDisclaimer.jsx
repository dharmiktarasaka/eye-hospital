import React from 'react';
import { ShieldAlert, ExternalLink } from 'lucide-react';

export const PortfolioDisclaimer = () => {
  return (
    <div className="bg-navy border-b border-cyan-iris/20 text-silver-soft text-xs py-2 px-4">
      <div className="max-w-7xl mx-mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="w-3.5 h-3.5 text-gold-lens flex-shrink-0" />
          <span>
            <strong className="text-white">Portfolio Concept:</strong> Lumora Eye Institute is a fictional website created by <strong className="text-cyan-iris">TARASAKA DIGITAL Solutions</strong> (Ahmedabad, India).
          </span>
        </div>
        <div className="flex items-center space-x-4 text-[11px]">
          <span className="hidden md:inline text-silver-medium">Serving healthcare clients remotely across India & Global Markets</span>
          <a
            href="https://tarasaka.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-lens hover:text-white transition-colors underline flex items-center gap-1 font-medium"
          >
            Agency Details <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDisclaimer;
