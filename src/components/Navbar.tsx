import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
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
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const criminalMandates = PRACTICE_AREAS.filter(p => 
    ['white-collar-crimes', 'criminal-litigation'].includes(p.id)
  );
  const commercialCivil = PRACTICE_AREAS.filter(p => 
    ['civil-litigation', 'arbitration-adr', 'property-disputes', 'corporate-commercial'].includes(p.id)
  );
  const administrativeFamily = PRACTICE_AREAS.filter(p => 
    ['service-matters', 'matrimonial', 'labour-employment'].includes(p.id)
  );

  return (
    <>
      {/* GIGW 3.0 Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content (Alt + 1)
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top Minimal Institutional Court Bar */}
        <div className="bg-atelier-carbon text-atelier-sand text-[11px] py-1.5 border-b border-atelier-carbon/80 px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
            
            {/* Left: Court Chambers Seat */}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-atelier-fog font-medium">
                <MapPin className="w-3.5 h-3.5 text-atelier-gold" aria-hidden="true" />
                <span>Chamber 238, Patiala House Courts</span>
                <span className="text-atelier-taupe font-normal">| New Delhi 110001</span>
              </span>
              <span className="text-atelier-taupe">/</span>
              <span className="text-atelier-sand">
                Regional Division: <strong className="text-atelier-fog font-medium">Chandigarh • Haryana Benches</strong>
              </span>
            </div>

            {/* Right: GIGW Accessibility & Court Registry Hours */}
            <div className="flex items-center gap-5">
              {/* Text Sizing Controls */}
              <div className="flex items-center gap-1" role="group" aria-label="Text Size Controls">
                <span className="text-[10px] uppercase tracking-wider text-atelier-taupe mr-1 flex items-center gap-1">
                  <Type className="w-3 h-3 text-atelier-gold" aria-hidden="true" />
                  <span>Size:</span>
                </span>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('sm')}
                  className={`px-1.5 py-0.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                    textSize === 'sm' ? 'bg-atelier-gold text-atelier-black font-bold' : 'text-atelier-sand hover:text-white'
                  }`}
                  aria-label="Small font size"
                  aria-pressed={textSize === 'sm'}
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('md')}
                  className={`px-1.5 py-0.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                    textSize === 'md' ? 'bg-atelier-gold text-atelier-black font-bold' : 'text-atelier-sand hover:text-white'
                  }`}
                  aria-label="Default font size"
                  aria-pressed={textSize === 'md'}
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('lg')}
                  className={`px-1.5 py-0.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                    textSize === 'lg' ? 'bg-atelier-gold text-atelier-black font-bold' : 'text-atelier-sand hover:text-white'
                  }`}
                  aria-label="Large font size"
                  aria-pressed={textSize === 'lg'}
                >
                  A+
                </button>
              </div>

              <span className="w-px h-3 bg-atelier-taupe/40" />

              {/* High Contrast Toggle */}
              <button
                type="button"
                onClick={onToggleHighContrast}
                className={`flex items-center gap-1 text-[11px] px-2 py-0.5 transition-colors cursor-pointer ${
                  isHighContrast ? 'bg-atelier-gold text-atelier-black font-bold' : 'text-atelier-sand hover:text-white'
                }`}
                aria-label="Toggle High Contrast Mode"
                aria-pressed={isHighContrast}
              >
                <Eye className="w-3 h-3 text-atelier-gold" aria-hidden="true" />
                <span>Contrast</span>
              </button>

              <span className="w-px h-3 bg-atelier-taupe/40" />

              {/* Court Hours */}
              <span className="flex items-center gap-1 text-[10.5px] text-atelier-sand">
                <Clock className="w-3 h-3 text-atelier-gold" aria-hidden="true" />
                <span>10:00 AM – 7:00 PM</span>
              </span>
            </div>

          </div>
        </div>

        {/* Main Architectural Navigation Bar */}
        <nav 
          role="navigation"
          aria-label="Primary Navigation"
          className={`transition-all duration-300 border-b ${
            isScrolled 
              ? 'bg-atelier-fog/95 backdrop-blur-md border-atelier-sand shadow-atelier-subtle py-3.5' 
              : 'bg-atelier-bone border-atelier-sand/80 py-4 sm:py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Chambers Mark & Wordmark */}
            <a 
              href="#" 
              className="flex items-center gap-3.5 group text-decoration-none"
              aria-label="Synergy Chambers - Homepage"
            >
              <div className="w-10 h-10 border border-atelier-carbon bg-atelier-carbon text-atelier-gold flex items-center justify-center font-display font-bold text-sm tracking-wider shadow-sm group-hover:bg-atelier-bronze group-hover:border-atelier-bronze transition-colors">
                <span>SC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-atelier-carbon group-hover:text-atelier-bronze transition-colors leading-none">
                  SYNERGY CHAMBERS
                </span>
                <span className="text-[9px] tracking-monumental uppercase text-atelier-bronze font-semibold mt-1">
                  Advocates &amp; Solicitors • Patiala House Courts
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-loose-editorial font-semibold text-atelier-slate">
              <a 
                href="#about" 
                className="hover:text-atelier-bronze transition-colors py-1"
              >
                01. The Chambers
              </a>

              <a 
                href="#why-us" 
                className="hover:text-atelier-bronze transition-colors py-1"
              >
                02. Tenets
              </a>

              {/* Practice Areas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsPracticesOpen(true)}
                onMouseLeave={() => setIsPracticesOpen(false)}
              >
                <a 
                  href="#practices"
                  className="flex items-center gap-1 hover:text-atelier-bronze transition-colors py-1"
                  aria-expanded={isPracticesOpen}
                  aria-haspopup="true"
                >
                  <span>03. Mandates</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPracticesOpen ? 'rotate-180 text-atelier-bronze' : ''}`} />
                </a>

                {/* Practice Areas Mega Drawer */}
                {isPracticesOpen && (
                  <div className="absolute top-full -left-20 w-[680px] bg-atelier-carbon text-atelier-fog border border-atelier-sand/20 shadow-2xl p-7 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div>
                      <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-white/10 text-atelier-gold">
                        <Landmark className="w-3.5 h-3.5" />
                        <h4 className="text-[10px] font-bold uppercase tracking-wider">
                          Criminal &amp; Statutory
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {criminalMandates.map(p => (
                          <li key={p.id}>
                            <button
                              onClick={() => {
                                onSelectPractice(p.id);
                                setIsPracticesOpen(false);
                              }}
                              className="text-left w-full group block cursor-pointer"
                            >
                              <span className="text-xs text-white group-hover:text-atelier-gold font-medium transition-colors block leading-snug">
                                {p.title}
                              </span>
                              <span className="text-[10.5px] text-atelier-sand/70 group-hover:text-white transition-colors block line-clamp-1 mt-0.5">
                                {p.subtitle}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-white/10 text-atelier-gold">
                        <Scale className="w-3.5 h-3.5" />
                        <h4 className="text-[10px] font-bold uppercase tracking-wider">
                          Commercial &amp; ADR
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {commercialCivil.map(p => (
                          <li key={p.id}>
                            <button
                              onClick={() => {
                                onSelectPractice(p.id);
                                setIsPracticesOpen(false);
                              }}
                              className="text-left w-full group block cursor-pointer"
                            >
                              <span className="text-xs text-white group-hover:text-atelier-gold font-medium transition-colors block leading-snug">
                                {p.title}
                              </span>
                              <span className="text-[10.5px] text-atelier-sand/70 group-hover:text-white transition-colors block line-clamp-1 mt-0.5">
                                {p.subtitle}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-white/10 text-atelier-gold">
                        <FileText className="w-3.5 h-3.5" />
                        <h4 className="text-[10px] font-bold uppercase tracking-wider">
                          Tribunals &amp; Family
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {administrativeFamily.map(p => (
                          <li key={p.id}>
                            <button
                              onClick={() => {
                                onSelectPractice(p.id);
                                setIsPracticesOpen(false);
                              }}
                              className="text-left w-full group block cursor-pointer"
                            >
                              <span className="text-xs text-white group-hover:text-atelier-gold font-medium transition-colors block leading-snug">
                                {p.title}
                              </span>
                              <span className="text-[10.5px] text-atelier-sand/70 group-hover:text-white transition-colors block line-clamp-1 mt-0.5">
                                {p.subtitle}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-span-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-atelier-sand">
                      <span>Direct courtroom trial advocacy &amp; high court writs</span>
                      <a 
                        href="#practices" 
                        onClick={() => setIsPracticesOpen(false)}
                        className="text-atelier-gold hover:text-white font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>Full Practice Folio</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="#advocates" 
                className="hover:text-atelier-bronze transition-colors py-1"
              >
                04. The Bench
              </a>

              <a 
                href="#jurisdictions" 
                className="hover:text-atelier-bronze transition-colors py-1"
              >
                05. Forums
              </a>

              <a 
                href="#location" 
                className="hover:text-atelier-bronze transition-colors py-1"
              >
                06. Seat 238
              </a>
            </div>

            {/* Direct Action */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-atelier-carbon text-atelier-fog hover:bg-atelier-bronze font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm group"
              >
                <span>Initiate Docket</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-atelier-gold" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 border border-atelier-sand text-atelier-carbon hover:text-atelier-bronze hover:border-atelier-bronze transition-colors"
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
          <div className="lg:hidden bg-atelier-bone border-b border-atelier-sand px-5 py-6 space-y-5 animate-in slide-in-from-top-4 duration-200 shadow-xl">
            {/* Mobile Accessibility Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-atelier-sand text-xs">
              <span className="text-atelier-taupe font-medium">Text Scale:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onChangeTextSize('sm')}
                  className={`px-2 py-1 text-xs border ${textSize === 'sm' ? 'bg-atelier-carbon text-white font-bold border-atelier-carbon' : 'border-atelier-sand text-atelier-carbon'}`}
                >
                  A-
                </button>
                <button
                  onClick={() => onChangeTextSize('md')}
                  className={`px-2 py-1 text-xs border ${textSize === 'md' ? 'bg-atelier-carbon text-white font-bold border-atelier-carbon' : 'border-atelier-sand text-atelier-carbon'}`}
                >
                  A
                </button>
                <button
                  onClick={() => onChangeTextSize('lg')}
                  className={`px-2 py-1 text-xs border ${textSize === 'lg' ? 'bg-atelier-carbon text-white font-bold border-atelier-carbon' : 'border-atelier-sand text-atelier-carbon'}`}
                >
                  A+
                </button>
                <button
                  onClick={onToggleHighContrast}
                  className={`px-2.5 py-1 text-xs border ml-1 ${isHighContrast ? 'bg-atelier-carbon text-white font-bold border-atelier-carbon' : 'border-atelier-sand text-atelier-carbon'}`}
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
                className="block text-atelier-carbon hover:text-atelier-bronze font-serif font-bold text-base py-1 transition-colors"
              >
                01. The Chambers &amp; Patiala House Seat
              </a>
              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-atelier-carbon hover:text-atelier-bronze font-serif font-bold text-base py-1 transition-colors"
              >
                02. The Four Tenets of Advocacy
              </a>
              <a
                href="#practices"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-atelier-carbon hover:text-atelier-bronze font-serif font-bold text-base py-1 transition-colors"
              >
                03. Practice Folio &amp; Statutory Mandates
              </a>
              <a
                href="#advocates"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-atelier-carbon hover:text-atelier-bronze font-serif font-bold text-base py-1 transition-colors"
              >
                04. The Bench &amp; Counsel Roster
              </a>
              <a
                href="#jurisdictions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-atelier-carbon hover:text-atelier-bronze font-serif font-bold text-base py-1 transition-colors"
              >
                05. Courts &amp; Appearance Forums
              </a>
              <a
                href="#location"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-atelier-carbon hover:text-atelier-bronze font-serif font-bold text-base py-1 transition-colors"
              >
                06. Seat 238 Location &amp; Access
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="pt-3 border-t border-atelier-sand">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-atelier-carbon text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-sm hover:bg-atelier-bronze transition-colors"
              >
                Submit Privileged Brief
              </button>
            </div>
          </div>
        )}

      </header>
    </>
  );
};
