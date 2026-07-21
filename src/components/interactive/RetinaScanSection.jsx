import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, ArrowRight, Eye, Scan, Sparkles } from 'lucide-react';

export const RetinaScanSection = () => {
  return (
    <section className="py-20 bg-navy-dark text-white relative overflow-hidden">
      {/* Background Retinal Grid Effect */}
      <div className="absolute inset-0 bg-iris-radial opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Retina Scan Visualizer */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-violet-prism/40 shadow-2xl shadow-violet-prism/20 group">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                alt="Retinal Examination and OCT Scanning Technology"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Retinal Scanning Laser Line */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-cyan-bright via-violet-prism to-cyan-bright shadow-[0_0_20px_#21A7C7] animate-pulse top-1/2 -translate-y-1/2"></div>
              
              {/* Retinal Target Reticle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-cyan-bright/60 animate-iris-rotate pointer-events-none"></div>

              {/* Status Badge */}
              <div className="absolute bottom-4 left-4 bg-navy-dark/90 border border-violet-prism/40 px-4 py-2 rounded-2xl backdrop-blur-md flex items-center space-x-2 text-xs">
                <Scan className="w-4 h-4 text-cyan-bright animate-spin" />
                <span>Spectral-Domain OCT Retinal Imaging</span>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Retinal Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-violet-prism/20 text-violet-prism border border-violet-prism/40 px-3 py-1 rounded-full text-xs font-semibold">
              <Activity className="w-3.5 h-3.5" />
              <span>Centre of Excellence • Retina & Macula</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Diabetic Retinopathy & <br />
              <span className="bg-gradient-to-r from-violet-prism to-cyan-bright bg-clip-text text-transparent">
                Macular Care Institute
              </span>
            </h2>

            <p className="text-sm sm:text-base text-silver-soft leading-relaxed font-normal">
              The retina is a delicate tissue lining the back of the eye that converts light signals into neural impulses. Chronically high blood sugar, vascular leakage, or macular degeneration require specialized early diagnostic intervention.
            </p>

            {/* Key Service Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 bg-navy/60 p-3.5 rounded-2xl border border-violet-prism/20">
                <ShieldCheck className="w-5 h-5 text-cyan-bright flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Annual Diabetic Eye Screening</h4>
                  <p className="text-xs text-silver-medium">Digital fundus photography & OCT macular edema thickness evaluation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-navy/60 p-3.5 rounded-2xl border border-violet-prism/20">
                <ShieldCheck className="w-5 h-5 text-violet-prism flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Targeted Anti-VEGF Intraocular Injections</h4>
                  <p className="text-xs text-silver-medium">Controls abnormal blood vessel growth & stabilizes macular fluid leakage.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center space-x-4">
              <Link
                to="/retina-centre"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-prism to-cyan-iris hover:from-cyan-iris hover:to-violet-prism text-white font-bold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-violet-prism/30 transition-all duration-300"
              >
                <span>Explore Retina Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/book-appointment"
                className="text-xs font-semibold text-silver-soft hover:text-cyan-bright transition-colors"
              >
                Schedule Retina Checkup →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetinaScanSection;
