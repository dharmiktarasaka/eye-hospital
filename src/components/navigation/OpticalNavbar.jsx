import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Calendar, ChevronDown, Eye, Sparkles } from 'lucide-react';
import UtilityBar from './UtilityBar';
import MegaMenu from './MegaMenu';
import MobileOpticalMenu from './MobileOpticalMenu';

export const OpticalNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMega(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <UtilityBar />

      {/* Main Floating Optical Navbar Capsule */}
      <div className={`px-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <nav
          className={`max-w-7xl mx-auto rounded-full transition-all duration-500 prism-border ${
            isScrolled
              ? 'bg-pearl/95 backdrop-blur-xl shadow-lg border-cyan-iris/30 py-2.5 px-6'
              : 'glass-capsule py-3 px-8'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-full bg-navy flex items-center justify-center border border-cyan-iris shadow-md group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 rounded-full bg-cyan-iris/20 animate-ping opacity-25"></div>
                <Eye className="w-5 h-5 text-cyan-iris group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg md:text-xl tracking-tight text-navy group-hover:text-cyan-iris transition-colors">
                  Lumora <span className="text-cyan-iris font-semibold">Eye</span>
                </span>
                <span className="text-[10px] text-navy/60 font-medium tracking-widest uppercase -mt-1">
                  Vision Care Institute
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links Middle */}
            <div className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-navy">
              {/* Conditions Mega Trigger */}
              <div
                className="relative py-2 cursor-pointer group"
                onMouseEnter={() => setActiveMega('conditions')}
                onMouseLeave={() => setActiveMega(null)}
              >
                <div className="flex items-center space-x-1 hover:text-cyan-iris transition-colors">
                  <Link to="/conditions">Conditions</Link>
                  <ChevronDown className="w-3.5 h-3.5 text-cyan-iris" />
                </div>
                {activeMega === 'conditions' && (
                  <MegaMenu category="conditions" onClose={() => setActiveMega(null)} />
                )}
              </div>

              {/* Centres Mega Trigger */}
              <div
                className="relative py-2 cursor-pointer group"
                onMouseEnter={() => setActiveMega('centres')}
                onMouseLeave={() => setActiveMega(null)}
              >
                <div className="flex items-center space-x-1 hover:text-cyan-iris transition-colors">
                  <span>Centres</span>
                  <ChevronDown className="w-3.5 h-3.5 text-cyan-iris" />
                </div>
                {activeMega === 'centres' && (
                  <MegaMenu category="centres" onClose={() => setActiveMega(null)} />
                )}
              </div>

              <Link to="/cataract-centre" className="hover:text-cyan-iris transition-colors py-2 relative">
                Cataract
              </Link>
              <Link to="/retina-centre" className="hover:text-cyan-iris transition-colors py-2">
                Retina
              </Link>
              <Link to="/lasik" className="hover:text-cyan-iris transition-colors py-2">
                LASIK
              </Link>
              <Link to="/paediatric-eye-care" className="hover:text-cyan-iris transition-colors py-2">
                Children's Care
              </Link>
              <Link to="/doctors" className="hover:text-cyan-iris transition-colors py-2">
                Specialists
              </Link>
              <Link to="/about" className="hover:text-cyan-iris transition-colors py-2">
                About
              </Link>
            </div>

            {/* Right Action CTA */}
            <div className="flex items-center space-x-3">
              <Link
                to="/book-appointment"
                className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-navy to-cyan-iris hover:from-cyan-iris hover:to-violet-prism text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-cyan-iris/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Eye Test</span>
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-full bg-navy/5 text-navy hover:bg-navy/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Overlay Menu */}
      <MobileOpticalMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default OpticalNavbar;
