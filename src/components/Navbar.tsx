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
  Phone,
  ExternalLink
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Bar: Chambers location, statutory compliance & contact */}
      <div className="bg-navy-950 text-charcoal-400 text-xs py-2 border-b border-navy-850/80 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-charcoal-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Chamber 238, Patiala House Courts, New Delhi</span>
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

          <div className="flex items-center space-x-5">
            <span className="inline-flex items-center gap-1.5 text-[11px] bg-navy-900 px-2.5 py-0.5 rounded text-gold-400 border border-gold-500/20 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              Bar Council Rule 36 Compliant
            </span>
            <span className="text-charcoal-400 text-[11px] tracking-wide">
              Principal Seat: Delhi • Benches: Chandigarh &amp; Haryana
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/98 backdrop-blur-md shadow-elevated border-b border-navy-850 py-3' 
          : 'bg-navy-950/92 backdrop-blur-sm border-b border-navy-850/60 py-3.5 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
          
          {/* Logo & Chambers Seal Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-navy-900 border border-gold-500/35 flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-all shadow-subtle relative overflow-hidden">
              <div className="absolute inset-0 bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors" />
              <Scale className="w-5 h-5 sm:w-5 sm:h-5 text-gold-400 group-hover:scale-110 transition-transform relative z-10" />
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
          <div className="hidden lg:flex items-center space-x-7">
            <a 
              href="#about" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              The Firm
            </a>

            <a 
              href="#why-us" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              Distinction
            </a>

            {/* Practice Areas Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsPracticesOpen(true)}
              onMouseLeave={() => setIsPracticesOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors cursor-pointer"
                aria-expanded={isPracticesOpen}
              >
                <span>Practice Areas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPracticesOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>

              {isPracticesOpen && (
                <div className="absolute top-full -left-24 w-[520px] bg-navy-950 border border-gold-500/30 rounded-2xl shadow-elevated p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-2 pb-2 mb-1 border-b border-navy-850 flex items-center justify-between text-[11px] text-charcoal-400">
                    <span className="font-semibold uppercase tracking-wider text-gold-400">Courts &amp; Legal Domains</span>
                    <a href="#practices" className="hover:text-gold-300 flex items-center gap-1 font-medium">
                      <span>View All (9)</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  {PRACTICE_AREAS.map((practice) => (
                    <button
                      key={practice.id}
                      onClick={() => {
                        onSelectPractice(practice.id);
                        setIsPracticesOpen(false);
                      }}
                      className="text-left p-2.5 rounded-xl hover:bg-navy-900 border border-transparent hover:border-gold-500/20 transition-all group/item"
                    >
                      <span className="text-xs font-semibold text-charcoal-100 group-hover/item:text-gold-300 block line-clamp-1">
                        {practice.title}
                      </span>
                      <span className="text-[11px] text-charcoal-400 line-clamp-1 block mt-0.5">
                        {practice.subtitle}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#founders" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              Founders
            </a>

            <a 
              href="#regional-team" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              Regional Benches
            </a>

            <a 
              href="#jurisdictions" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              Jurisdictions
            </a>

            <a 
              href="#location" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors"
            >
              Location
            </a>
          </div>

          {/* Consultation CTA Trigger */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-subtle hover:shadow-premium cursor-pointer active:scale-95"
            >
              <span>Consult Counsel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-navy-900 text-charcoal-200 hover:text-white border border-navy-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-b border-navy-850 px-6 py-6 space-y-5 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3.5 text-sm font-semibold tracking-wider uppercase text-charcoal-200">
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-gold-400 transition-colors"
              >
                The Firm
              </a>
              <a 
                href="#why-us" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-gold-400 transition-colors"
              >
                Distinction &amp; Pillars
              </a>
              <a 
                href="#practices" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-gold-400 transition-colors"
              >
                Practice Areas
              </a>
              <a 
                href="#founders" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-gold-400 transition-colors"
              >
                Founding Advocates
              </a>
              <a 
                href="#regional-team" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-gold-400 transition-colors"
              >
                Regional Benches (Chd &amp; HR)
              </a>
              <a 
                href="#jurisdictions" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-gold-400 transition-colors"
              >
                Courts &amp; Tribunals
              </a>
              <a 
                href="#location" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 hover:text-gold-400 transition-colors"
              >
                Patiala House Location
              </a>
            </div>

            <div className="pt-4 border-t border-navy-850 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-subtle cursor-pointer"
              >
                <span>Request Confidential Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-charcoal-400 pt-2">
                <span>Chamber 238, Patiala House Courts, New Delhi</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
