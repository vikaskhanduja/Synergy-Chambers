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
  Clock,
  Landmark,
  FileText
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

  const criminalStatutes = PRACTICE_AREAS.filter(p => 
    ['white-collar-crimes', 'criminal-litigation'].includes(p.id)
  );
  const commercialCivil = PRACTICE_AREAS.filter(p => 
    ['civil-litigation', 'arbitration-adr', 'property-disputes', 'corporate-commercial'].includes(p.id)
  );
  const administrativeTribunal = PRACTICE_AREAS.filter(p => 
    ['service-matters', 'matrimonial', 'labour-employment'].includes(p.id)
  );

  return (
    <>
      {/* GIGW 3.0 Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content (Alt + 1)
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top Institutional Compliance & Registry Bar */}
        <div className="bg-forest-950 text-ink-300 text-[11px] py-1.5 border-b border-forest-850 px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            
            {/* Left: Official Chambers Seat */}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-chalk-50 font-medium">
                <MapPin className="w-3.5 h-3.5 text-aurum-400" aria-hidden="true" />
                <span>Chamber 238, Patiala House Courts</span>
                <span className="text-ink-500 font-normal">| New Delhi 110001</span>
              </span>
              <span className="text-forest-750">/</span>
              <span className="text-ink-400">
                Regional Division: <strong className="text-chalk-100 font-medium">Chandigarh • Haryana</strong>
              </span>
            </div>

            {/* Right: GIGW Accessibility & Court Hours */}
            <div className="flex items-center gap-5">
              {/* Text Sizing Controls */}
              <div className="flex items-center gap-1" role="group" aria-label="Text Size Controls">
                <span className="text-[10px] uppercase tracking-wider text-ink-500 mr-1 flex items-center gap-1">
                  <Type className="w-3 h-3 text-aurum-400" aria-hidden="true" />
                  <span>Size:</span>
                </span>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('sm')}
                  className={`px-1.5 py-0.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                    textSize === 'sm' ? 'bg-aurum-500 text-forest-950 font-bold' : 'text-ink-300 hover:text-white'
                  }`}
                  aria-label="Small text"
                  aria-pressed={textSize === 'sm'}
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('md')}
                  className={`px-1.5 py-0.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                    textSize === 'md' ? 'bg-aurum-500 text-forest-950 font-bold' : 'text-ink-300 hover:text-white'
                  }`}
                  aria-label="Standard text"
                  aria-pressed={textSize === 'md'}
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('lg')}
                  className={`px-1.5 py-0.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                    textSize === 'lg' ? 'bg-aurum-500 text-forest-950 font-bold' : 'text-ink-300 hover:text-white'
                  }`}
                  aria-label="Large text"
                  aria-pressed={textSize === 'lg'}
                >
                  A+
                </button>
              </div>

              <span className="w-px h-3 bg-forest-800" />

              {/* High Contrast Toggle */}
              <button
                type="button"
                onClick={onToggleHighContrast}
                className={`flex items-center gap-1 text-[11px] px-2 py-0.5 transition-colors cursor-pointer ${
                  isHighContrast ? 'bg-aurum-500 text-forest-950 font-bold' : 'text-ink-300 hover:text-white'
                }`}
                aria-label="Toggle High Contrast"
                aria-pressed={isHighContrast}
              >
                <Eye className="w-3 h-3 text-aurum-400" aria-hidden="true" />
                <span>Contrast</span>
              </button>

              <span className="w-px h-3 bg-forest-800" />

              {/* Court Hours */}
              <span className="flex items-center gap-1 text-[10.5px] text-ink-400">
                <Clock className="w-3 h-3 text-aurum-400" aria-hidden="true" />
                <span>10:00 AM – 7:00 PM (Court Days)</span>
              </span>
            </div>

          </div>
        </div>

        {/* Main Editorial Header Bar */}
        <nav 
          role="navigation"
          aria-label="Primary Navigation"
          className={`transition-all duration-300 border-b ${
            isScrolled 
              ? 'bg-forest-900/95 backdrop-blur-md border-forest-800 shadow-md py-3.5' 
              : 'bg-forest-900 border-forest-850 py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Chambers Seal & Wordmark */}
            <a 
              href="#" 
              className="flex items-center gap-3.5 group text-decoration-none"
              aria-label="Synergy Chambers - Home"
            >
              <div className="w-10 h-10 border border-aurum-500/50 bg-forest-950 flex items-center justify-center text-aurum-400 group-hover:border-aurum-400 transition-colors shadow-sm">
                <Scale className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-aurum-200 transition-colors leading-tight">
                  SYNERGY CHAMBERS
                </span>
                <span className="text-[9.5px] tracking-[0.24em] uppercase text-aurum-400 font-semibold mt-0.5">
                  Advocates &amp; Solicitors • Patiala House Courts
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a 
                href="#about" 
                className="text-xs uppercase tracking-widest font-semibold text-ink-200 hover:text-aurum-400 transition-colors"
              >
                The Chambers
              </a>

              <a 
                href="#why-us" 
                className="text-xs uppercase tracking-widest font-semibold text-ink-200 hover:text-aurum-400 transition-colors"
              >
                Principles
              </a>

              {/* Practice Areas Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setIsPracticesOpen(true)}
                onMouseLeave={() => setIsPracticesOpen(false)}
              >
                <a 
                  href="#practices"
                  className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-ink-200 hover:text-aurum-400 transition-colors py-2"
                  aria-expanded={isPracticesOpen}
                  aria-haspopup="true"
                >
                  <span>Practice Areas</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPracticesOpen ? 'rotate-180 text-aurum-400' : ''}`} />
                </a>

                {/* Practice Areas Mega Drawer */}
                {isPracticesOpen && (
                  <div className="absolute top-full -left-24 w-[720px] bg-forest-950 border border-forest-800 shadow-2xl p-7 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div>
                      <div className="flex items-center gap-2 pb-2 mb-3 border-b border-forest-800 text-aurum-400">
                        <Landmark className="w-3.5 h-3.5" />
                        <h4 className="text-[10.5px] font-bold uppercase tracking-wider">
                          Criminal &amp; Statutory
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {criminalStatutes.map(p => (
                          <li key={p.id}>
                            <button
                              onClick={() => {
                                onSelectPractice(p.id);
                                setIsPracticesOpen(false);
                              }}
                              className="text-left w-full group block cursor-pointer"
                            >
                              <span className="text-xs text-chalk-50 group-hover:text-aurum-400 font-medium transition-colors block">
                                {p.title}
                              </span>
                              <span className="text-[11px] text-ink-500 group-hover:text-ink-300 transition-colors block line-clamp-1">
                                {p.subtitle}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 pb-2 mb-3 border-b border-forest-800 text-aurum-400">
                        <Scale className="w-3.5 h-3.5" />
                        <h4 className="text-[10.5px] font-bold uppercase tracking-wider">
                          Commercial &amp; ADR
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {commercialCivil.map(p => (
                          <li key={p.id}>
                            <button
                              onClick={() => {
                                onSelectPractice(p.id);
                                setIsPracticesOpen(false);
                              }}
                              className="text-left w-full group block cursor-pointer"
                            >
                              <span className="text-xs text-chalk-50 group-hover:text-aurum-400 font-medium transition-colors block">
                                {p.title}
                              </span>
                              <span className="text-[11px] text-ink-500 group-hover:text-ink-300 transition-colors block line-clamp-1">
                                {p.subtitle}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 pb-2 mb-3 border-b border-forest-800 text-aurum-400">
                        <FileText className="w-3.5 h-3.5" />
                        <h4 className="text-[10.5px] font-bold uppercase tracking-wider">
                          Tribunals &amp; Family
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {administrativeTribunal.map(p => (
                          <li key={p.id}>
                            <button
                              onClick={() => {
                                onSelectPractice(p.id);
                                setIsPracticesOpen(false);
                              }}
                              className="text-left w-full group block cursor-pointer"
                            >
                              <span className="text-xs text-chalk-50 group-hover:text-aurum-400 font-medium transition-colors block">
                                {p.title}
                              </span>
                              <span className="text-[11px] text-ink-500 group-hover:text-ink-300 transition-colors block line-clamp-1">
                                {p.subtitle}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-span-3 pt-3 border-t border-forest-800 flex items-center justify-between text-[11px] text-ink-400">
                      <span>Full trial preparation, anticipatory bail &amp; appellate review</span>
                      <a 
                        href="#practices" 
                        onClick={() => setIsPracticesOpen(false)}
                        className="text-aurum-400 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>View Practice Registry</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="#advocates" 
                className="text-xs uppercase tracking-widest font-semibold text-ink-200 hover:text-aurum-400 transition-colors"
              >
                Advocates &amp; Counsel
              </a>

              <a 
                href="#jurisdictions" 
                className="text-xs uppercase tracking-widest font-semibold text-ink-200 hover:text-aurum-400 transition-colors"
              >
                Courts
              </a>

              <a 
                href="#location" 
                className="text-xs uppercase tracking-widest font-semibold text-ink-200 hover:text-aurum-400 transition-colors"
              >
                Chamber 238
              </a>
            </div>

            {/* Direct Consultation Action */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-aurum-500 text-aurum-400 hover:bg-aurum-500 hover:text-forest-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm group"
              >
                <span>Privileged Docket</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 border border-forest-800 text-ink-200 hover:text-white hover:border-aurum-500 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-forest-950 border-b border-forest-850 px-5 py-6 space-y-5 animate-in slide-in-from-top-4 duration-200">
            {/* Mobile Accessibility Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-forest-850 text-xs">
              <span className="text-ink-400">Accessibility:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onChangeTextSize('sm')}
                  className={`px-2 py-1 text-xs border ${textSize === 'sm' ? 'bg-aurum-500 text-forest-950 font-bold border-aurum-500' : 'border-forest-800 text-ink-200'}`}
                >
                  A-
                </button>
                <button
                  onClick={() => onChangeTextSize('md')}
                  className={`px-2 py-1 text-xs border ${textSize === 'md' ? 'bg-aurum-500 text-forest-950 font-bold border-aurum-500' : 'border-forest-800 text-ink-200'}`}
                >
                  A
                </button>
                <button
                  onClick={() => onChangeTextSize('lg')}
                  className={`px-2 py-1 text-xs border ${textSize === 'lg' ? 'bg-aurum-500 text-forest-950 font-bold border-aurum-500' : 'border-forest-800 text-ink-200'}`}
                >
                  A+
                </button>
                <button
                  onClick={onToggleHighContrast}
                  className={`px-2.5 py-1 text-xs border ml-1 ${isHighContrast ? 'bg-aurum-500 text-forest-950 font-bold border-aurum-500' : 'border-forest-800 text-ink-200'}`}
                >
                  Contrast
                </button>
              </div>
            </div>

            {/* Mobile Links */}
            <div className="space-y-3 text-sm">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-ink-200 hover:text-aurum-400 font-medium py-1 transition-colors"
              >
                The Chambers &amp; Patiala House Seat
              </a>
              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-ink-200 hover:text-aurum-400 font-medium py-1 transition-colors"
              >
                Principles of Advocacy
              </a>
              <a
                href="#practices"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-ink-200 hover:text-aurum-400 font-medium py-1 transition-colors"
              >
                Practice Domains &amp; Special Statutes
              </a>
              <a
                href="#advocates"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-ink-200 hover:text-aurum-400 font-medium py-1 transition-colors"
              >
                Advocates &amp; Counsel Roster
              </a>
              <a
                href="#jurisdictions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-ink-200 hover:text-aurum-400 font-medium py-1 transition-colors"
              >
                Courts &amp; Judicial Jurisdictions
              </a>
              <a
                href="#location"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-ink-200 hover:text-aurum-400 font-medium py-1 transition-colors"
              >
                Chamber 238 Location &amp; Access
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="pt-3 border-t border-forest-850">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-aurum-500 text-forest-950 font-bold text-xs uppercase tracking-wider text-center cursor-pointer"
              >
                Submit Privileged Docket Brief
              </button>
            </div>
          </div>
        )}

      </header>
    </>
  );
};
