import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { Eye, Home, ArrowRight } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <>
      <SEOHead title="Page Not Found (404)" description="The page you requested could not be found." />

      <div className="min-h-[70vh] bg-pearl flex items-center justify-center py-16 px-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-navy/10 shadow-2xl max-w-lg text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-cyan-iris/20 text-cyan-iris border border-cyan-iris flex items-center justify-center mx-auto">
            <Eye className="w-10 h-10 animate-pulse" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-coral-light uppercase tracking-wider">404 Error</span>
            <h1 className="font-heading font-extrabold text-3xl text-navy">Optical Focus Lost</h1>
            <p className="text-xs text-navy/70 leading-relaxed">
              The page or clinical guide you are looking for has been moved or does not exist.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-navy to-cyan-iris text-white text-xs font-bold px-7 py-3 rounded-full shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Eye Institute Homepage</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
