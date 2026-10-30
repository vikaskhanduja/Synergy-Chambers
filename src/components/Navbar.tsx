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
  Phone,
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

  // Categorize practice areas for the mega-menu
  const criminalSpecial = PRACTICE_AREAS.filter(p => 
    ['white-collar-crime', 'ndps-act-defence', 'pocso-act-trials', 'criminal-appeals-writs'].includes(p.id)
  );
  const civilCommercial = PRACTICE_AREAS.filter(p => 
    ['civil-litigation', 'commercial-arbitration', 'matrimonial-family', 'service-employment', 'customs-pmla-regulatory'].includes(p.id)
  );

  return (
    <>
      {/* GIGW 3.0 Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content (Alt + 1)
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top Institutional Compliance & Accessibility Bar */}
        <div className="bg-[#09111E] text-[#B8C2CC] text-[11px] py-1.5 border-b border-[#142135] px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            
            {/* Left: Court Chambers Seat */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[#E6E1D6]">
                <MapPin className="w-3.5 h-3.5 text-[#B8934E]" aria-hidden="true" />
                <span className="font-semibold text-white">Chamber 238, Patiala House Courts</span>
                <span className="text-[#8A95A5]">| New Delhi 110001</span>
              </span>
              <span className="text-[#36475E]">/</span>
              <span className="text-[#8A95A5]">
                Regional Benches: <strong className="text-[#D6D0C4] font-medium">Chandigarh • Haryana</strong>
              </span>
            </div>

            {/* Right: GIGW Accessibility Controls */}
            <div className="flex items-center gap-5">
              {/* Text Size Switcher */}
              <div className="flex items-center gap-1" role="group" aria-label="Text Size Controls">
                <span className="text-[10px] uppercase tracking-wider text-[#8A95A5] mr-1 flex items-center gap-1">
                  <Type className="w-3 h-3 text-[#B8934E]" aria-hidden="true" />
                  <span>Text:</span>
                </span>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('sm')}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                    textSize === 'sm' 
                      ? 'bg-[#B8934E] text-[#09111E] font-bold' 
                      : 'text-[#B8C2CC] hover:text-white'
                  }`}
                  aria-label="Small font size"
                  aria-pressed={textSize === 'sm'}
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('md')}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                    textSize === 'md' 
                      ? 'bg-[#B8934E] text-[#09111E] font-bold' 
                      : 'text-[#B8C2CC] hover:text-white'
                  }`}
                  aria-label="Standard font size"
                  aria-pressed={textSize === 'md'}
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTextSize('lg')}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                    textSize === 'lg' 
                      ? 'bg-[#B8934E] text-[#09111E] font-bold' 
                      : 'text-[#B8C2CC] hover:text-white'
                  }`}
                  aria-label="Large font size"
                  aria-pressed={textSize === 'lg'}
                >
                  A+
                </button>
              </div>

              <span className="w-px h-3 bg-[#1C2C44]" />

              {/* High Contrast Toggle */}
              <button
                type="button"
                onClick={onToggleHighContrast}
                className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  isHighContrast 
                    ? 'bg-[#B8934E] text-[#09111E] font-bold' 
                    : 'text-[#B8C2CC] hover:text-white'
                }`}
                aria-label="Toggle High Contrast Mode"
                aria-pressed={isHighContrast}
              >
                <Eye className="w-3 h-3 text-[#B8934E]" aria-hidden="true" />
                <span>Contrast</span>
              </button>

              <span className="w-px h-3 bg-[#1C2C44]" />

              {/* Court Hours */}
              <span className="flex items-center gap-1 text-[10.5px] text-[#8A95A5]">
                <Clock className="w-3 h-3 text-[#B8934E]" aria-hidden="true" />
                <span>10:00 AM – 7:00 PM</span>
              </span>
            </div>

          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav 
          role="navigation"
          aria-label="Main Navigation"
          className={`transition-all duration-300 border-b ${
            isScrolled 
              ? 'bg-[#09111E]/95 backdrop-blur-md border-[#142135] shadow-lg py-3' 
              : 'bg-[#09111E] border-[#142135] py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Chambers Insignia & Brand Name */}
            <a 
              href="#" 
              className="flex items-center gap-3.5 group text-decoration-none"
              aria-label="Synergy Chambers - Home"
            >
              <div className="w-10 h-10 rounded border border-[#B8934E]/50 bg-[#0F1C30] flex items-center justify-center text-[#B8934E] group-hover:border-[#B8934E] transition-colors shadow-sm">
                <Scale className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#F3EFE6] transition-colors leading-tight">
                  SYNERGY CHAMBERS
                </span>
                <span className="text-[9.5px] tracking-[0.24em] uppercase text-[#B8934E] font-semibold mt-0.5">
                  Advocates &amp; Solicitors • New Delhi
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a 
                href="#about" 
                className="text-xs uppercase tracking-widest font-semibold text-[#CBD5E1] hover:text-[#B8934E] transition-colors"
              >
                The Firm
              </a>

              <a 
                href="#why-us" 
                className="text-xs uppercase tracking-widest font-semibold text-[#CBD5E1] hover:text-[#B8934E] transition-colors"
              >
                Chambers Pillars
              </a>

              {/* Practice Areas Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setIsPracticesOpen(true)}
                onMouseLeave={() => setIsPracticesOpen(false)}
              >
                <a 
                  href="#practices"
                  className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#CBD5E1] hover:text-[#B8934E] transition-colors py-2"
                  aria-expanded={isPracticesOpen}
                  aria-haspopup="true"
                >
                  <span>Practice Areas</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPracticesOpen ? 'rotate-180 text-[#B8934E]' : ''}`} />
                </a>

                {/* Mega-menu Panel */}
                {isPracticesOpen && (
                  <div className="absolute top-full -left-20 w-[640px] bg-[#0C1626] border border-[#1A2840] shadow-2xl p-6 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div>
                      <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#1A2840]">
                        <Landmark className="w-3.5 h-3.5 text-[#B8934E]" />
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#B8934E]">
                          Criminal &amp; Statutory Defence
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {criminalSpecial.map(practice => (
                          <li key={practice.id}>
                            <button
                              onClick={() => {
                                onSelectPractice(practice.id);
                                setIsPracticesOpen(false);
                              }}
                              className="text-left w-full group py-1 block cursor-pointer"
                            >
                              <span className="text-xs text-[#E2E8F0] group-hover:text-[#B8934E] font-medium transition-colors block">
                                {practice.title}
                              </span>
                              <span className="text-[11px] text-[#8A95A5] group-hover:text-[#CBD5E1] transition-colors block line-clamp-1">
                                {practice.subtitle}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-[#1A2840]">
                        <FileText className="w-3.5 h-3.5 text-[#B8934E]" />
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#B8934E]">
                          Civil, Commercial &amp; Writs
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {civilCommercial.map(practice => (
                          <li key={practice.id}>
                            <button
                              onClick={() => {
                                onSelectPractice(practice.id);
                                setIsPracticesOpen(false);
                              }}
                              className="text-left w-full group py-1 block cursor-pointer"
                            >
                              <span className="text-xs text-[#E2E8F0] group-hover:text-[#B8934E] font-medium transition-colors block">
                                {practice.title}
                              </span>
                              <span className="text-[11px] text-[#8A95A5] group-hover:text-[#CBD5E1] transition-colors block line-clamp-1">
                                {practice.subtitle}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-span-2 pt-3 border-t border-[#1A2840] flex items-center justify-between text-[11px] text-[#8A95A5]">
                      <span>Trial preparation, bail hearings &amp; appellate briefs</span>
                      <a 
                        href="#practices" 
                        onClick={() => setIsPracticesOpen(false)}
                        className="text-[#B8934E] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>Full Practice Index</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="#advocates" 
                className="text-xs uppercase tracking-widest font-semibold text-[#CBD5E1] hover:text-[#B8934E] transition-colors"
              >
                Advocates &amp; Counsel
              </a>

              <a 
                href="#jurisdictions" 
                className="text-xs uppercase tracking-widest font-semibold text-[#CBD5E1] hover:text-[#B8934E] transition-colors"
              >
                Jurisdictions
              </a>

              <a 
                href="#location" 
                className="text-xs uppercase tracking-widest font-semibold text-[#CBD5E1] hover:text-[#B8934E] transition-colors"
              >
                Patiala House Seat
              </a>
            </div>

            {/* Direct Consultation Action */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#B8934E] text-[#B8934E] hover:bg-[#B8934E] hover:text-[#09111E] font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm group"
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
                className="p-2 rounded border border-[#1A2840] text-[#CBD5E1] hover:text-white hover:border-[#B8934E] transition-colors"
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
          <div className="lg:hidden bg-[#09111E] border-b border-[#142135] px-5 py-6 space-y-5 animate-in slide-in-from-top-4 duration-200">
            {/* Mobile Accessibility Strip */}
            <div className="flex items-center justify-between pb-4 border-b border-[#142135] text-xs">
              <span className="text-[#8A95A5]">Accessibility:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onChangeTextSize('sm')}
                  className={`px-2 py-1 text-xs rounded border ${textSize === 'sm' ? 'bg-[#B8934E] text-[#09111E] font-bold border-[#B8934E]' : 'border-[#1C2C44] text-[#CBD5E1]'}`}
                >
                  A-
                </button>
                <button
                  onClick={() => onChangeTextSize('md')}
                  className={`px-2 py-1 text-xs rounded border ${textSize === 'md' ? 'bg-[#B8934E] text-[#09111E] font-bold border-[#B8934E]' : 'border-[#1C2C44] text-[#CBD5E1]'}`}
                >
                  A
                </button>
                <button
                  onClick={() => onChangeTextSize('lg')}
                  className={`px-2 py-1 text-xs rounded border ${textSize === 'lg' ? 'bg-[#B8934E] text-[#09111E] font-bold border-[#B8934E]' : 'border-[#1C2C44] text-[#CBD5E1]'}`}
                >
                  A+
                </button>
                <button
                  onClick={onToggleHighContrast}
                  className={`px-2.5 py-1 text-xs rounded border ml-1 ${isHighContrast ? 'bg-[#B8934E] text-[#09111E] font-bold border-[#B8934E]' : 'border-[#1C2C44] text-[#CBD5E1]'}`}
                >
                  Contrast
                </button>
              </div>
            </div>

            {/* Mobile Links List */}
            <div className="space-y-3 text-sm">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#CBD5E1] hover:text-[#B8934E] font-medium py-1 transition-colors"
              >
                The Firm &amp; Patiala House Chambers
              </a>
              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#CBD5E1] hover:text-[#B8934E] font-medium py-1 transition-colors"
              >
                Chambers Pillars &amp; Standards
              </a>
              <a
                href="#practices"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#CBD5E1] hover:text-[#B8934E] font-medium py-1 transition-colors"
              >
                Practice Domains &amp; Special Statutes
              </a>
              <a
                href="#advocates"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#CBD5E1] hover:text-[#B8934E] font-medium py-1 transition-colors"
              >
                Advocates &amp; Leadership Directory
              </a>
              <a
                href="#jurisdictions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#CBD5E1] hover:text-[#B8934E] font-medium py-1 transition-colors"
              >
                Courts &amp; Judicial Jurisdictions
              </a>
              <a
                href="#location"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#CBD5E1] hover:text-[#B8934E] font-medium py-1 transition-colors"
              >
                Chamber 238 Location &amp; Access
              </a>
            </div>

            {/* Mobile Contact Action */}
            <div className="pt-3 border-t border-[#142135]">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded bg-[#B8934E] text-[#09111E] font-bold text-xs uppercase tracking-wider text-center cursor-pointer"
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
