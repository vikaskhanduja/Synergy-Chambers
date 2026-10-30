import React from 'react';
import { 
  Scale, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUp,
  Building,
  Clock,
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
    <footer 
      role="contentinfo"
      aria-label="Firm Footer & Compliance Directory"
      className="bg-[#070D16] text-[#CBD5E1] pt-16 pb-12 border-t border-[#142135]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#142135]">
          
          {/* Brand & Registered Chambers Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#B8934E]/50 bg-[#0C1626] flex items-center justify-center text-[#B8934E]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-white block">
                  SYNERGY CHAMBERS
                </span>
                <span className="text-[9.5px] tracking-[0.22em] uppercase text-[#B8934E] font-semibold block">
                  Advocates &amp; Solicitors
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8A95A5] leading-relaxed font-light">
              {FIRM_DETAILS.mission}
            </p>

            <div className="space-y-2.5 text-xs text-[#8A95A5] pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8934E] shrink-0 mt-0.5" />
                <span>{FIRM_DETAILS.establishedLocation}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B8934E] shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-[#B8934E] transition-colors">
                  {FIRM_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-[#B8934E] shrink-0" />
                <span>Regional Benches: Chandigarh • Haryana District Courts</span>
              </div>
            </div>
          </div>

          {/* Practice Areas Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Practice Domains
            </h4>
            <ul className="space-y-2 text-xs">
              {PRACTICE_AREAS.map((practice) => (
                <li key={practice.id}>
                  <a 
                    href="#practices" 
                    className="hover:text-[#B8934E] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#B8934E]" />
                    <span>{practice.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Benches & Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Chambers Directory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#B8934E] transition-colors">
                  The Firm &amp; Foundation
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#B8934E] transition-colors">
                  Chambers Pillars
                </a>
              </li>
              <li>
                <a href="#advocates" className="hover:text-[#B8934E] transition-colors">
                  Advocates &amp; Leadership
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-[#B8934E] transition-colors">
                  Judicial Jurisdictions
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#B8934E] transition-colors">
                  Patiala House Location
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B8934E] transition-colors">
                  Schedule Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Regulatory & Accessibility Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Statutory Governance
            </h4>
            <p className="text-xs text-[#8A95A5] leading-relaxed font-light">
              Synergy Chambers complies strictly with Rule 36 of the Bar Council of India Rules. The firm does not solicit legal representation or advertise legal services.
            </p>
            <div className="pt-2 space-y-2.5 text-xs">
              <button
                onClick={onOpenDisclaimer}
                className="text-[#B8934E] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Bar Council Disclaimer</span>
              </button>
              <button
                onClick={onOpenPrivacy}
                className="text-[#B8934E] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Client Privilege &amp; Confidentiality Policy</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A95A5]">
          <div>
            &copy; {new Date().getFullYear()} Synergy Chambers. All rights reserved. Registered Chamber 238, Patiala House Courts, New Delhi.
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#main-content" 
              className="text-[#8A95A5] hover:text-white transition-colors"
            >
              Skip to Content
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#B8934E] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top of page"
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
