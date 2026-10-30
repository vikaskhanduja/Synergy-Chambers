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
  Eye,
  Type,
  Sun,
  Moon,
  Clock,
  Phone
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onSelectPractice: (id: string) => void;
  onSelectLawyer: (id: string) => void;
  textSize: 'sm' | 'md' | 'lg';
  onChangeTextSize: (size: 'sm' | 'md' | 'lg') => void;
  isHighContrast: boolean;
  onToggleHighContrast: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation,
  onSelectPractice,
  textSize,
  onChangeTextSize,
  isHighContrast,
  onToggleHighContrast
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
    <>
      {/* GIGW 3.0 Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content (Alt + 1)
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top GIGW 3.0 Accessibility & Statutory Compliance Bar */}
        <div className="bg-chambers-navy-950 text-chambers-stone-400 text-[11px] py-1.5 border-b border-chambers-navy-850 px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            
            {/* Location & Contact Information */}
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-chambers-stone-300 whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 text-chambers-gold-400 shrink-0" aria-hidden="true" />
                <span>{FIRM_DETAILS.establishedLocation}</span>
              </span>
              <span className="text-chambers-navy-750" aria-hidden="true">|</span>
              <a 
                href={`mailto:${FIRM_DETAILS.email}`} 
                className="flex items-center gap-1.5 text-chambers-stone-300 hover:text-chambers-gold-300 transition-colors whitespace-nowrap focus-visible:ring-1"
                aria-label={`Send email to ${FIRM_DETAILS.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-chambers-gold-400 shrink-0" aria-hidden="true" />
                <span>{FIRM_DETAILS.email}</span>
              </a>
            </div>

            {/* GIGW 3.0 Accessibility Controls & Statutory Badge */}
            <div className="flex items-center space-x-5">
              
              {/* Text Size Accessibility Controls */}
              <div className="flex items-center space-x-1 border-r border-chambers-navy-800 pr-4 text-[10px]" aria-label="Text size controls">
                <span className="text-chambers-stone-500 mr-1.5 font-medium">Text:</span>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('sm')}
                  className={`px-1.5 py-0.5 rounded font-bold transition-all ${
                    textSize === 'sm' 
                      ? 'bg-chambers-gold-500 text-chambers-navy-950' 
                      : 'text-chambers-stone-400 hover:text-white'
                  }`}
                  aria-label="Decrease text size"
                  title="Smaller font size"
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('md')}
                  className={`px-1.5 py-0.5 rounded font-bold transition-all ${
                    textSize === 'md' 
                      ? 'bg-chambers-gold-500 text-chambers-navy-950' 
                      : 'text-chambers-stone-400 hover:text-white'
                  }`}
                  aria-label="Default text size"
                  title="Normal font size"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('lg')}
                  className={`px-1.5 py-0.5 rounded font-bold transition-all ${
                    textSize === 'lg' 
                      ? 'bg-chambers-gold-500 text-chambers-navy-950' 
                      : 'text-chambers-stone-400 hover:text-white'
                  }`}
                  aria-label="Increase text size"
                  title="Larger font size"
                >
                  A+
                </button>
              </div>

              {/* High Contrast Mode Toggle */}
              <button
                type="button"
                onClick={onToggleHighContrast}
                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10.5px] transition-all ${
                  isHighContrast
                    ? 'bg-chambers-gold-400 text-chambers-navy-950 font-bold'
                    : 'text-chambers-stone-300 hover:text-white'
                }`}
                aria-pressed={isHighContrast}
                title="Toggle High Contrast Mode (WCAG 2.1 AA)"
              >
                <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{isHighContrast ? 'Standard' : 'Contrast'}</span>
              </button>

              {/* BCI Statutory Compliance Badge */}
              <span className="inline-flex items-center gap-1.5 text-[10.5px] bg-chambers-navy-900 px-2.5 py-0.5 rounded text-chambers-gold-300 border border-chambers-gold-500/20 font-medium whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-chambers-gold-400 shrink-0" aria-hidden="true" />
                <span>BCI Rule 36 Compliant</span>
              </span>
            </div>

          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav 
          className={`transition-all duration-300 ${
            isScrolled 
              ? 'bg-chambers-navy-950/98 backdrop-blur-md shadow-elevated border-b border-chambers-navy-850 py-2.5 sm:py-3' 
              : 'bg-chambers-navy-950/95 backdrop-blur-sm border-b border-chambers-navy-850/80 py-3 sm:py-4'
          }`}
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            
            {/* Logo & Stately Chambers Insignia */}
            <a 
              href="#" 
              className="flex items-center gap-3.5 shrink-0 group focus-visible:ring-2 focus-visible:ring-chambers-gold-400 rounded-lg p-1"
              aria-label="Synergy Chambers - Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-chambers-navy-900 border border-chambers-gold-500/35 flex items-center justify-center text-chambers-gold-400 group-hover:border-chambers-gold-400 transition-all shadow-subtle shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-chambers-gold-500/5 group-hover:bg-chambers-gold-500/15 transition-colors" />
                <Scale className="w-5 h-5 sm:w-5 sm:h-5 text-chambers-gold-400 group-hover:scale-105 transition-transform relative z-10" aria-hidden="true" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-base sm:text-lg font-bold tracking-wider text-white whitespace-nowrap leading-tight">
                  SYNERGY CHAMBERS
                </span>
                <span className="text-[9.5px] tracking-[0.24em] uppercase text-chambers-gold-400 font-semibold whitespace-nowrap leading-none mt-0.5">
                  Advocates &amp; Solicitors
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              <a 
                href="#about" 
                className="text-xs uppercase tracking-wider text-chambers-stone-300 hover:text-chambers-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
              >
                The Firm
              </a>

              <a 
                href="#why-us" 
                className="text-xs uppercase tracking-wider text-chambers-stone-300 hover:text-chambers-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
              >
                Distinction
              </a>

              {/* Practices Dropdown Menu */}
              <div 
                className="relative py-1"
                onMouseEnter={() => setIsPracticesOpen(true)}
                onMouseLeave={() => setIsPracticesOpen(false)}
              >
                <button 
                  type="button"
                  className="flex items-center gap-1 text-xs uppercase tracking-wider text-chambers-stone-300 hover:text-chambers-gold-300 font-semibold transition-colors cursor-pointer whitespace-nowrap focus-visible:ring-1"
                  aria-expanded={isPracticesOpen}
                  aria-haspopup="true"
                >
                  <span>Practice Areas</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPracticesOpen ? 'rotate-180 text-chambers-gold-400' : ''}`} aria-hidden="true" />
                </button>

                {isPracticesOpen && (
                  <div 
                    className="absolute top-full -left-20 w-[520px] bg-chambers-navy-950 border border-chambers-gold-500/30 rounded-2xl shadow-elevated p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                    role="menu"
                    aria-label="Practice Areas Submenu"
                  >
                    <div className="col-span-2 pb-2 mb-1 border-b border-chambers-navy-850 flex items-center justify-between text-[11px] text-chambers-stone-400">
                      <span className="font-semibold uppercase tracking-wider text-chambers-gold-400">Legal Practice Domains</span>
                      <a 
                        href="#practices" 
                        onClick={() => setIsPracticesOpen(false)}
                        className="hover:text-chambers-gold-300 flex items-center gap-1 font-medium"
                      >
                        <span>View All (9)</span>
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </a>
                    </div>
                    {PRACTICE_AREAS.map((practice) => (
                      <button
                        type="button"
                        key={practice.id}
                        onClick={() => {
                          onSelectPractice(practice.id);
                          setIsPracticesOpen(false);
                        }}
                        className="text-left p-2.5 rounded-xl hover:bg-chambers-navy-900 border border-transparent hover:border-chambers-gold-500/20 transition-all group/item cursor-pointer"
                        role="menuitem"
                      >
                        <span className="text-xs font-semibold text-chambers-stone-100 group-hover/item:text-chambers-gold-300 block truncate">
                          {practice.title}
                        </span>
                        <span className="text-[10.5px] text-chambers-stone-400 truncate block mt-0.5">
                          {practice.subtitle}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a 
                href="#advocates" 
                className="text-xs uppercase tracking-wider text-chambers-stone-300 hover:text-chambers-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
              >
                Advocates &amp; Benches
              </a>

              <a 
                href="#jurisdictions" 
                className="text-xs uppercase tracking-wider text-chambers-stone-300 hover:text-chambers-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
              >
                Jurisdictions
              </a>

              <a 
                href="#location" 
                className="text-xs uppercase tracking-wider text-chambers-stone-300 hover:text-chambers-gold-300 font-semibold transition-colors whitespace-nowrap py-1"
              >
                Patiala House
              </a>
            </div>

            {/* Direct Consultation Request CTA */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-chambers-gold-500 hover:bg-chambers-gold-600 text-chambers-navy-950 font-bold text-xs tracking-wider uppercase transition-all shadow-subtle hover:shadow-premium cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-chambers-navy-900 text-chambers-stone-200 hover:text-white border border-chambers-navy-800 transition-colors cursor-pointer"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>

          </div>

          {/* Mobile Drawer Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-chambers-navy-950/98 backdrop-blur-xl border-b border-chambers-navy-850 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
              
              {/* Mobile Accessibility Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-chambers-navy-850 text-xs">
                <span className="text-chambers-stone-400">Accessibility:</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center space-x-1">
                    <button
                      type="button"
                      onClick={() => onChangeTextSize('sm')}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${textSize === 'sm' ? 'bg-chambers-gold-500 text-chambers-navy-950' : 'text-chambers-stone-300'}`}
                    >
                      A-
                    </button>
                    <button
                      type="button"
                      onClick={() => onChangeTextSize('md')}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${textSize === 'md' ? 'bg-chambers-gold-500 text-chambers-navy-950' : 'text-chambers-stone-300'}`}
                    >
                      A
                    </button>
                    <button
                      type="button"
                      onClick={() => onChangeTextSize('lg')}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${textSize === 'lg' ? 'bg-chambers-gold-500 text-chambers-navy-950' : 'text-chambers-stone-300'}`}
                    >
                      A+
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={onToggleHighContrast}
                    className="px-2 py-0.5 rounded text-[11px] border border-chambers-navy-800 text-chambers-gold-400"
                  >
                    Contrast
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-3 text-xs font-semibold tracking-wider uppercase text-chambers-stone-200">
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-1 hover:text-chambers-gold-400 transition-colors"
                >
                  The Firm
                </a>
                <a 
                  href="#why-us" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-1 hover:text-chambers-gold-400 transition-colors"
                >
                  Distinction &amp; Pillars
                </a>
                <a 
                  href="#practices" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-1 hover:text-chambers-gold-400 transition-colors"
                >
                  Practice Areas (9)
                </a>
                <a 
                  href="#advocates" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-1 hover:text-chambers-gold-400 transition-colors"
                >
                  Advocates Directory
                </a>
                <a 
                  href="#jurisdictions" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-1 hover:text-chambers-gold-400 transition-colors"
                >
                  Courts &amp; Tribunals
                </a>
                <a 
                  href="#location" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-1 hover:text-chambers-gold-400 transition-colors"
                >
                  Patiala House Location
                </a>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-chambers-navy-850 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 rounded-lg bg-chambers-gold-500 hover:bg-chambers-gold-600 text-chambers-navy-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-subtle cursor-pointer"
                >
                  <span>Request Confidential Consultation</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <div className="text-center text-[11px] text-chambers-stone-400">
                  <span>Chamber No. 238, Patiala House Courts, New Delhi</span>
                </div>
              </div>

            </div>
          )}
        </nav>
      </header>
    </>
  );
};
