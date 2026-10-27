import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  MapPin, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight
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
      <div className="bg-navy-950 text-charcoal-400 text-[11px] py-1.5 border-b border-navy-850 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-charcoal-300 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Chamber 238, Patiala House Courts, New Delhi</span>
            </span>
            <span className="text-navy-750">|</span>
            <a 
              href={`mailto:${FIRM_DETAILS.email}`} 
              className="flex items-center gap-1.5 text-charcoal-300 hover:text-gold-300 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{FIRM_DETAILS.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] bg-navy-900 px-2.5 py-0.5 rounded text-gold-400 border border-gold-500/20 font-medium whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              Bar Council Rule 36 Compliant
            </span>
            <span className="text-charcoal-400 text-[10.5px] tracking-wide whitespace-nowrap hidden lg:inline">
              Principal Seat: Delhi • Benches: Chandigarh &amp; Haryana
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/98 backdrop-blur-md shadow-elevated border-b border-navy-850 py-2.5 sm:py-3' 
          : 'bg-navy-950/95 backdrop-blur-sm border-b border-navy-850/70 py-3 sm:py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Chambers Seal Identity */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-navy-900 border border-gold-500/35 flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-all shadow-subtle shrink-0">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display text-sm sm:text-base font-bold tracking-wider text-white whitespace-nowrap leading-tight">
                SYNERGY CHAMBERS
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-gold-400 font-semibold whitespace-nowrap leading-none mt-0.5">
                Advocates &amp; Solicitors
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7">
            <a 
              href="#about" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
            >
              The Firm
            </a>

            <a 
              href="#why-us" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
            >
              Distinction
            </a>

            {/* Practice Areas Dropdown */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setIsPracticesOpen(true)}
              onMouseLeave={() => setIsPracticesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors cursor-pointer whitespace-nowrap"
                aria-expanded={isPracticesOpen}
              >
                <span>Practices</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPracticesOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>

              {isPracticesOpen && (
                <div className="absolute top-full -left-20 w-[480px] bg-navy-950 border border-gold-500/30 rounded-2xl shadow-elevated p-3.5 grid grid-cols-2 gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-navy-850 flex items-center justify-between text-[11px] text-charcoal-400">
                    <span className="font-semibold uppercase tracking-wider text-gold-400">9 Legal Domains</span>
                    <a href="#practices" className="hover:text-gold-300 flex items-center gap-1 font-medium">
                      <span>View All</span>
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
                      className="text-left p-2 rounded-xl hover:bg-navy-900 border border-transparent hover:border-gold-500/20 transition-all group/item"
                    >
                      <span className="text-xs font-semibold text-charcoal-100 group-hover/item:text-gold-300 block truncate">
                        {practice.title}
                      </span>
                      <span className="text-[10.5px] text-charcoal-400 truncate block mt-0.5">
                        {practice.subtitle}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#founders" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
            >
              Founders
            </a>

            <a 
              href="#regional-team" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
            >
              Benches
            </a>

            <a 
              href="#jurisdictions" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
            >
              Jurisdictions
            </a>

            <a 
              href="#location" 
              className="text-xs uppercase tracking-wider text-charcoal-300 hover:text-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
            >
              Location
            </a>
          </div>

          {/* Consultation CTA Trigger */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs tracking-wider uppercase transition-all shadow-subtle hover:shadow-premium cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>Consult Counsel</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-900 text-charcoal-200 hover:text-white border border-navy-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-b border-navy-850 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 text-xs font-semibold tracking-wider uppercase text-charcoal-200">
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

            <div className="pt-3 border-t border-navy-850 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-subtle cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center text-[11px] text-charcoal-400">
                <span>Chamber 238, Patiala House Courts, New Delhi</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
