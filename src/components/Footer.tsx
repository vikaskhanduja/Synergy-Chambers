import React from 'react';
import { 
  Scale, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ChevronRight, 
  ArrowUp,
  Linkedin,
  Twitter,
  Facebook,
  ShieldAlert
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenDisclaimer: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenConsultation, 
  onOpenDisclaimer,
  onOpenPrivacy
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05626e] text-white pt-16 pb-10 border-t border-[#044e58]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns (Directly Matches Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-teal-200">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sans text-xl font-extrabold tracking-tight text-white block">
                  SYNERGY <span className="text-teal-300">CHAMBERS</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-teal-100 font-semibold block">
                  Advocates &amp; Solicitors
                </span>
              </div>
            </div>

            <p className="text-xs text-teal-50/80 leading-relaxed font-normal">
              {FIRM_DETAILS.mission}
            </p>

            {/* Social Icons (Matches Screenshot) */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#05626e] flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#05626e] flex items-center justify-center text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#05626e] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-200 pb-1 border-b border-white/10">
              Practice Domains
            </h4>
            <ul className="space-y-2 text-xs">
              {PRACTICE_AREAS.slice(0, 6).map((practice) => (
                <li key={practice.id}>
                  <a 
                    href="#practices" 
                    className="text-teal-50/80 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-300" />
                    <span>{practice.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Benches */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-200 pb-1 border-b border-white/10">
              Courts &amp; Seat
            </h4>
            <ul className="space-y-2 text-xs text-teal-50/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Patiala House Chamber 238
                </a>
              </li>
              <li>
                <a href="#advocates" className="hover:text-white transition-colors">
                  Advocates Roster
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-white transition-colors">
                  Delhi High Court
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-white transition-colors">
                  Punjab &amp; Haryana High Court
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-white transition-colors">
                  Special CBI / ED Courts
                </a>
              </li>
            </ul>
          </div>

          {/* Chambers Contact & BCI Disclaimer */}
          <div className="lg:col-span-3 space-y-3 text-xs text-teal-50/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-200 pb-1 border-b border-white/10">
              Chambers Registry
            </h4>
            
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
              <span>{FIRM_DETAILS.establishedLocation}</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-300 shrink-0" />
              <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-white transition-colors">
                {FIRM_DETAILS.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-300 shrink-0" />
              <span>{FIRM_DETAILS.hours}</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDisclaimer}
                className="text-[11px] underline text-teal-200 hover:text-white block cursor-pointer"
              >
                BCI Rule 36 Statutory Disclaimer
              </button>
              <button
                onClick={onOpenPrivacy}
                className="text-[11px] underline text-teal-200 hover:text-white block cursor-pointer mt-1"
              >
                Sec. 126 Evidence Act Confidentiality Policy
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer (Matches Screenshot) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-teal-100/70">
          <div>
            © {new Date().getFullYear()} Synergy Chambers (Advocates &amp; Solicitors). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white hover:text-[#05626e] text-white text-[11px] font-semibold transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
