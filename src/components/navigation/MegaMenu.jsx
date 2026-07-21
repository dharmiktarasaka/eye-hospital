import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { centresData } from '../../data/centresData';

export const MegaMenu = ({ category, onClose }) => {
  if (category === 'conditions') {
    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[90vw] max-w-5xl z-50">
        <div className="glass-capsule-dark p-6 rounded-3xl text-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4 bg-navy-dark/80 p-5 rounded-2xl border border-cyan-iris/30">
              <div className="flex items-center space-x-2 text-cyan-iris mb-2 text-sm font-semibold">
                <Eye className="w-4 h-4" />
                <span>Eye Condition Guide</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white mb-2">Explore Ocular Symptoms</h4>
              <p className="text-xs text-silver-soft leading-relaxed mb-4">
                Comprehensive symptom analysis and specialist evaluation guides for Cataract, Retina, Glaucoma, and Cornea conditions.
              </p>
              <Link
                to="/conditions"
                onClick={onClose}
                className="inline-flex items-center text-xs font-semibold text-cyan-bright hover:text-white transition-colors space-x-1"
              >
                <span>View All 15+ Conditions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="col-span-8 grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-cyan-iris uppercase tracking-wider">Cataract & Lens</h5>
                <ul className="space-y-1.5 text-xs text-silver-soft">
                  <li><Link to="/conditions/cataract" onClick={onClose} className="hover:text-white transition-colors">Cataract Clouding</Link></li>
                  <li><Link to="/cataract-centre" onClick={onClose} className="hover:text-white transition-colors">Lens Selection Guide</Link></li>
                  <li><Link to="/treatments/mics-cataract-surgery" onClick={onClose} className="hover:text-white transition-colors">Micro-Incision Surgery</Link></li>
                </ul>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-bold text-violet-prism uppercase tracking-wider">Retina & Macula</h5>
                <ul className="space-y-1.5 text-xs text-silver-soft">
                  <li><Link to="/conditions/diabetic-retinopathy" onClick={onClose} className="hover:text-white transition-colors">Diabetic Retinopathy</Link></li>
                  <li><Link to="/retina-centre" onClick={onClose} className="hover:text-white transition-colors">Retinal Detachment</Link></li>
                  <li><Link to="/diagnostics/oct-scan" onClick={onClose} className="hover:text-white transition-colors">OCT Retinal Scanning</Link></li>
                </ul>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-bold text-gold-lens uppercase tracking-wider">Refractive & Children</h5>
                <ul className="space-y-1.5 text-xs text-silver-soft">
                  <li><Link to="/conditions/refractive-errors" onClick={onClose} className="hover:text-white transition-colors">Myopia & Astigmatism</Link></li>
                  <li><Link to="/lasik" onClick={onClose} className="hover:text-white transition-colors">LASIK & Contoura</Link></li>
                  <li><Link to="/conditions/squint-and-lazy-eye" onClick={onClose} className="hover:text-white transition-colors">Squint & Amblyopia</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (category === 'centres') {
    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[90vw] max-w-5xl z-50">
        <div className="glass-capsule-dark p-6 rounded-3xl text-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <h4 className="text-xs font-bold text-cyan-iris uppercase tracking-wider mb-4">Centres of Excellence</h4>
          <div className="grid grid-cols-4 gap-4">
            {centresData.map((centre) => (
              <Link
                key={centre.id}
                to={`/${centre.id}`}
                onClick={onClose}
                className="group p-4 rounded-2xl bg-navy-dark/90 hover:bg-navy-light/60 border border-cyan-iris/20 hover:border-cyan-iris/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={centre.image}
                    alt={centre.title}
                    className="w-full h-28 object-cover rounded-xl mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h5 className="font-heading font-bold text-sm text-white group-hover:text-cyan-bright transition-colors mb-1">
                    {centre.shortTitle}
                  </h5>
                  <p className="text-[11px] text-silver-medium line-clamp-2 leading-relaxed">
                    {centre.tagline}
                  </p>
                </div>
                <div className="mt-3 flex items-center text-xs font-semibold text-cyan-iris group-hover:translate-x-1 transition-transform">
                  <span>Explore Centre</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MegaMenu;
