import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  MapPin, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight,
  Gavel
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onSelectPractice: (id: string) => void;
  onSelectLawyer: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation,
  onSelectPractice,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticesOpen, setIsPracticesOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Bar: Chambers location & statutory compliance */}
      <div className="bg-navy-950 text-charcoal-400 text-xs py-2 border-b border-navy-850/80 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-charcoal-300 hover:text-gold-300 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>{FIRM_DETAILS.establishedLocation}</span>
            </span>
            <span className="text-navy-700">|</span>
            <a 
              href={`mailto:${FIRM_DETAILS.email}`} 
              className="flex items-center gap-1.5 text-charcoal-300 hover:text-gold-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{FIRM_DETAILS.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] bg-navy-900/90 px-2.5 py-0.5 rounded text-gold-400 border border-gold-500/20 font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              Bar Council of India Compliant
            </span>
            <span className="text-charcoal-400 text-[11px] tracking-wide">Delhi • Chandigarh • Haryana</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-900/98 backdrop-blur-md shadow-elevated border-b border-navy-800 py-3' 
          : 'bg-navy-900/95 backdrop-blur-sm border-b border-navy-800/60 py-3.5 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
          
          {/* Logo & Chambers Seal Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-navy-850 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:border-gold-400/60 transition-all shadow-subtle">
              <Scale className="w-5 h-5 sm:w-5 sm:h-5 text-gold-400 group-hover:scale-105 transition-transform" />
            </div>
            <div>
              <span className="font-display text-base sm:text-lg font-bold tracking-wider text-white block leading-tight">
                SYNERGY CHAMBERS
              </span>
              <span className="text-[10px] tracking-[0.24em] uppercase text-gold-400 font-semibold block mt-0.5">
                Advocates &amp; Solicitors
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              The Firm
            </a>

            {/* Practice Areas Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsPracticesOpen(true)}
              onMouseLeave={() => setIsPracticesOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
                aria-expanded={isPracticesOpen}
              >
                <span>Practice Areas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPracticesOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>

              {isPracticesOpen && (
                <div className="absolute top-full -left-20 w-[490px] bg-navy-950 border border-gold-500/25 rounded-xl shadow-elevated p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  {PRACTICE_AREAS.map((practice) => (
                    <button
                      key={practice.id}
                      onClick={() => {
                        onSelectPractice(practice.id);
                        setIsPracticesOpen(false);
                      }}
                      className="text-left p-2.5 rounded-lg hover:bg-navy-850 transition-colors group/item flex items-start gap-2.5"
                    >
                      <div className="w-7 h-7 rounded bg-navy-900 border border-gold-500/25 flex items-center justify-center text-gold-400 mt-0.5 group-hover/item:border-gold-400/60">
                        <Gavel className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal-100 group-hover/item:text-gold-300">
                          {practice.title}
                        </div>
                        <div className="text-[11px] text-charcoal-400 line-clamp-1">
                          {practice.subtitle}
                        </div>
                      </div>
                    </button>
                  ))}
                  <div className="col-span-2 pt-2.5 border-t border-navy-800/80 text-center">
                    <a 
                      href="#practices" 
                      onClick={() => setIsPracticesOpen(false)}
                      className="text-xs text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1"
                    >
                      View all 9 practice areas <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Advocates & Team Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsTeamOpen(true)}
              onMouseLeave={() => setIsTeamOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
                aria-expanded={isTeamOpen}
              >
                <span>Advocates</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isTeamOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>

              {isTeamOpen && (
                <div className="absolute top-full left-0 w-68 bg-navy-950 border border-gold-500/25 rounded-xl shadow-elevated p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a
                    href="#founders"
                    onClick={() => setIsTeamOpen(false)}
                    className="block p-2.5 rounded-lg hover:bg-navy-850 text-xs transition-colors"
                  >
                    <span className="font-semibold block text-white text-xs">Firm Founders</span>
                    <span className="text-[11px] text-charcoal-400">Akshay Chauhan • Sumit Ghartan • Hitesh Nandal</span>
                  </a>
                  <a
                    href="#team-chandigarh"
                    onClick={() => setIsTeamOpen(false)}
                    className="block p-2.5 rounded-lg hover:bg-navy-850 text-xs transition-colors"
                  >
                    <span className="font-semibold block text-white text-xs">Chandigarh Chambers</span>
                    <span className="text-[11px] text-charcoal-400">Dr. Amardeep Sandhu • Abhinav Chaudhary</span>
                  </a>
                  <a
                    href="#team-haryana"
                    onClick={() => setIsTeamOpen(false)}
                    className="block p-2.5 rounded-lg hover:bg-navy-850 text-xs transition-colors"
                  >
                    <span className="font-semibold block text-white text-xs">Haryana District Practice</span>
                    <span className="text-[11px] text-charcoal-400">Ajay Gulia • Daksh Yadav • Ankit Yadav • Mehr Chaudhary</span>
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#jurisdictions" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              Jurisdictions
            </a>

            <a 
              href="#why-us" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              Why Synergy
            </a>

            <a 
              href="#contact" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-subtle hover:shadow-premium active:scale-95"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-charcoal-300 hover:text-gold-400 hover:bg-navy-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-gold-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-t border-navy-800 px-6 py-6 space-y-4 max-h-[82vh] overflow-y-auto">
            <div className="space-y-1">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-white hover:text-gold-400 uppercase tracking-wider"
              >
                The Firm
              </a>
              <a
                href="#practices"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-white hover:text-gold-400 uppercase tracking-wider"
              >
                Practice Areas
              </a>
              <div className="pl-4 space-y-1.5 border-l border-navy-850 my-2">
                {PRACTICE_AREAS.slice(0, 5).map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectPractice(p.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-left text-xs text-charcoal-400 hover:text-gold-400 py-1"
                  >
                    • {p.title}
                  </button>
                ))}
              </div>
              <a
                href="#founders"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-white hover:text-gold-400 uppercase tracking-wider"
              >
                Founders &amp; Advocates
              </a>
              <a
                href="#team-chandigarh"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1.5 text-xs text-charcoal-300 pl-4 hover:text-gold-400"
              >
                ↳ Chandigarh Chambers
              </a>
              <a
                href="#team-haryana"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1.5 text-xs text-charcoal-300 pl-4 hover:text-gold-400"
              >
                ↳ Haryana State Practice
              </a>
              <a
                href="#jurisdictions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-white hover:text-gold-400 uppercase tracking-wider"
              >
                Court Jurisdictions
              </a>
              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-white hover:text-gold-400 uppercase tracking-wider"
              >
                Why Synergy Chambers
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-white hover:text-gold-400 uppercase tracking-wider"
              >
                Contact &amp; Location
              </a>
            </div>

            <div className="pt-4 border-t border-navy-850 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded bg-gold-500 text-navy-950 font-semibold text-center text-xs uppercase tracking-wider shadow-subtle"
              >
                Request Confidential Consultation
              </button>
              <div className="text-center text-[11px] text-charcoal-400">
                <span>{FIRM_DETAILS.establishedLocation}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
