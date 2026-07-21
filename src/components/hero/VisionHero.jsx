import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck, Eye, Sparkles, Activity, CheckCircle2 } from 'lucide-react';
import FocusLensEffect from './FocusLensEffect';

export const VisionHero = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      className="relative min-h-[90vh] bg-navy-dark text-white overflow-hidden flex items-center py-12 md:py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image Layer with Selective Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80"
          alt="Advanced Eye Examination and Ophthalmology Care at Lumora Eye Institute"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity filter blur-[2px] scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/90 to-navy-dark/70"></div>
        <div className="absolute inset-0 bg-iris-radial opacity-70"></div>
      </div>

      {/* Interactive Movable Optical Lens Layer */}
      <FocusLensEffect mousePos={mousePos} isMobile={isMobile} />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-navy/80 border border-cyan-iris/40 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-bright shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-gold-lens animate-pulse" />
              <span>Advanced Vision Care Institute • Ahmedabad, India</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
              Advanced Eye Care for <br />
              <span className="bg-gradient-to-r from-cyan-bright via-cyan-iris to-violet-prism bg-clip-text text-transparent">
                Every Stage of Vision
              </span>
            </h1>

            {/* Positioning & Supporting Subtitle */}
            <p className="text-base sm:text-lg text-silver-soft max-w-2xl leading-relaxed font-normal">
              Explore comprehensive ophthalmology, micro-incision cataract care, retina services, glaucoma management, LASIK, paediatric eye checkups, and diagnostic consultation experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/book-appointment"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-iris to-violet-prism hover:from-cyan-bright hover:to-cyan-iris text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-cyan-iris/30 hover:shadow-cyan-bright/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Eye Consultation</span>
              </Link>

              <Link
                to="/conditions"
                className="inline-flex items-center space-x-2 bg-navy-light/80 hover:bg-navy-light border border-cyan-iris/40 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300"
              >
                <span>Explore Eye Services</span>
                <ArrowRight className="w-4 h-4 text-cyan-bright" />
              </Link>
            </div>

            {/* Quick Guarantees & Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cyan-iris/20 text-xs text-silver-soft">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-iris" />
                <span>MICS Cataract Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-violet-prism" />
                <span>OCT Retina Imaging</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-lens" />
                <span>Contoura LASIK</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Centre Cards & Quick Access Box */}
          <div className="lg:col-span-5 relative">
            <div className="glass-capsule-dark p-6 md:p-8 rounded-3xl space-y-5 border border-cyan-iris/30 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-cyan-iris/20 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-iris/20 border border-cyan-iris flex items-center justify-center">
                    <Eye className="w-5 h-5 text-cyan-bright" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">Centres of Excellence</h3>
                    <p className="text-xs text-silver-medium">Dedicated Ophthalmology Depts</p>
                  </div>
                </div>
                <span className="text-[10px] bg-cyan-iris/20 text-cyan-bright px-2.5 py-1 rounded-full font-mono">
                  4 SPECIALTIES
                </span>
              </div>

              {/* Floating Department Cards */}
              <div className="space-y-3">
                <Link
                  to="/cataract-centre"
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-navy-dark/60 hover:bg-navy-light/60 border border-cyan-iris/20 hover:border-cyan-iris/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-iris group-hover:scale-125 transition-transform"></span>
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-white group-hover:text-cyan-bright transition-colors">
                        Cataract Centre
                      </h4>
                      <p className="text-xs text-silver-medium">Micro-Incision & Lens Implants</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-silver-medium group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  to="/retina-centre"
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-navy-dark/60 hover:bg-navy-light/60 border border-violet-prism/20 hover:border-violet-prism/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-violet-prism group-hover:scale-125 transition-transform"></span>
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-white group-hover:text-violet-prism transition-colors">
                        Retina & Diabetic Eye Care
                      </h4>
                      <p className="text-xs text-silver-medium">OCT Scanning & Laser Therapy</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-silver-medium group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  to="/lasik"
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-navy-dark/60 hover:bg-navy-light/60 border border-gold-lens/20 hover:border-gold-lens/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-lens group-hover:scale-125 transition-transform"></span>
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-white group-hover:text-gold-lens transition-colors">
                        LASIK & Refractive Surgery
                      </h4>
                      <p className="text-xs text-silver-medium">Contoura Vision & Glasses Removal</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-silver-medium group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  to="/paediatric-eye-care"
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-navy-dark/60 hover:bg-navy-light/60 border border-coral-light/20 hover:border-coral-light/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-coral-light group-hover:scale-125 transition-transform"></span>
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-white group-hover:text-coral-light transition-colors">
                        Children's Eye Care
                      </h4>
                      <p className="text-xs text-silver-medium">Squint & Amblyopia Therapy</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-silver-medium group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionHero;
