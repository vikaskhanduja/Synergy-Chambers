import React, { useState } from 'react';
import { 
  Scale, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  Clock,
  ArrowRight
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-100">
      
      {/* Top Teal Utility Bar (Matches Screenshot Top Strip) */}
      <div className="bg-[#088395] text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-6 text-[11.5px]">
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-teal-200" />
              <span>Chamber No. 238, Patiala House Courts, New Delhi</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-teal-200" />
              <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-teal-100">
                {FIRM_DETAILS.email}
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-200" />
              <span>Mon – Sat: 9:30 AM – 7:30 PM</span>
            </div>
          </div>

          {/* Accessibility Controls & Helpline */}
          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1 bg-black/15 px-2 py-0.5 rounded border border-white/20">
              <span className="text-[10px] text-teal-100 font-semibold uppercase pr-1">Text:</span>
              <button
                onClick={() => onChangeTextSize('sm')}
                className={`px-1 rounded hover:bg-white/20 transition-colors ${textSize === 'sm' ? 'font-bold underline' : ''}`}
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => onChangeTextSize('md')}
                className={`px-1 rounded hover:bg-white/20 transition-colors ${textSize === 'md' ? 'font-bold underline' : ''}`}
                aria-label="Default font size"
              >
                A
              </button>
              <button
                onClick={() => onChangeTextSize('lg')}
                className={`px-1 rounded hover:bg-white/20 transition-colors ${textSize === 'lg' ? 'font-bold underline' : ''}`}
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>

            <button
              onClick={onToggleHighContrast}
              className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/15 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer text-[11px]"
              aria-label="Toggle high contrast mode"
            >
              <span>{isHighContrast ? 'Normal' : 'Contrast'}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenConsultation();
              }}
              className="font-semibold underline hover:text-teal-100"
            >
              Urgent Bail / Remand Helpline
            </a>
          </div>

        </div>
      </div>

      {/* Main White Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#088395] to-[#05626e] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="font-sans text-xl font-extrabold tracking-tight text-slate-900 block leading-tight">
                SYNERGY <span className="text-[#088395]">CHAMBERS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold block">
                Advocates &amp; Solicitors
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-slate-700">
            <a href="#" className="text-[#088395] hover:text-[#05626e] transition-colors">
              Home
            </a>
            
            <a href="#about" className="hover:text-[#088395] transition-colors">
              About Us
            </a>

            {/* Practice Areas Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setPracticeDropdownOpen(!practiceDropdownOpen)}
                onMouseEnter={() => setPracticeDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-[#088395] transition-colors cursor-pointer py-2"
                aria-expanded={practiceDropdownOpen}
              >
                <span>Practice Areas</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#088395] transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div 
                onMouseLeave={() => setPracticeDropdownOpen(false)}
                className={`absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-xl shadow-xl py-3 px-2 z-50 transition-all duration-200 ${
                  practiceDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1">
                  Key Legal Domains
                </div>
                {PRACTICE_AREAS.slice(0, 6).map((practice) => (
                  <button
                    key={practice.id}
                    onClick={() => {
                      onSelectPractice(practice.id);
                      setPracticeDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-teal-50 hover:text-[#088395] rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{practice.title}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#088395]" />
                  </button>
                ))}
                <div className="pt-2 mt-2 border-t border-slate-100 px-3">
                  <a
                    href="#practices"
                    onClick={() => setPracticeDropdownOpen(false)}
                    className="text-xs font-bold text-[#088395] hover:underline flex items-center gap-1"
                  >
                    <span>View All 9 Practice Domains</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <a href="#advocates" className="hover:text-[#088395] transition-colors">
              Our Advocates
            </a>

            <a href="#jurisdictions" className="hover:text-[#088395] transition-colors">
              Courts &amp; Benches
            </a>

            <a href="#location" className="hover:text-[#088395] transition-colors">
              Chamber 238
            </a>

            <a href="#contact" className="hover:text-[#088395] transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#088395] hover:bg-[#05626e] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-[#088395]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-[#088395]"
          >
            About Us
          </a>
          <a
            href="#practices"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-[#088395]"
          >
            Practice Areas
          </a>
          <a
            href="#advocates"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-[#088395]"
          >
            Advocates Roster
          </a>
          <a
            href="#jurisdictions"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-[#088395]"
          >
            Courts &amp; Tribunals
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-[#088395]"
          >
            Chamber 238 Location
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-full bg-[#088395] hover:bg-[#05626e] text-white text-xs font-bold uppercase tracking-wider text-center"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
