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
  ExternalLink,
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
      className="bg-chambers-navy-950 text-chambers-stone-300 pt-16 pb-12 border-t border-chambers-navy-850"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-chambers-navy-850">
          
          {/* Brand & Registered Chambers Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-chambers-navy-900 border border-chambers-gold-500/30 flex items-center justify-center text-chambers-gold-400">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-white block">
                  SYNERGY CHAMBERS
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-chambers-gold-400 font-semibold block">
                  Advocates &amp; Solicitors
                </span>
              </div>
            </div>

            <p className="text-xs text-chambers-stone-400 leading-relaxed font-light">
              {FIRM_DETAILS.mission}
            </p>

            <div className="space-y-2.5 text-xs text-chambers-stone-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-chambers-gold-400 shrink-0 mt-0.5" />
                <span>{FIRM_DETAILS.establishedLocation}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-chambers-gold-400 shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-chambers-gold-300 transition-colors">
                  {FIRM_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-chambers-gold-400 shrink-0" />
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
              {PRACTICE_AREAS.slice(0, 6).map((practice) => (
                <li key={practice.id}>
                  <a 
                    href="#practices" 
                    className="hover:text-chambers-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-chambers-gold-500" />
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
                <a href="#about" className="hover:text-chambers-gold-300 transition-colors">
                  About Chambers
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-chambers-gold-300 transition-colors">
                  Chambers Pillars
                </a>
              </li>
              <li>
                <a href="#advocates" className="hover:text-chambers-gold-300 transition-colors">
                  Founders &amp; Leadership
                </a>
              </li>
              <li>
                <a href="#advocates" className="hover:text-chambers-gold-300 transition-colors">
                  Regional Benches
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-chambers-gold-300 transition-colors">
                  Judicial Jurisdictions
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-chambers-gold-300 transition-colors">
                  Patiala House Location
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-chambers-gold-300 transition-colors">
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
            <p className="text-xs text-chambers-stone-400 leading-relaxed font-light">
              Synergy Chambers complies strictly with Rule 36 of the Bar Council of India Rules. The firm does not solicit legal representation or advertise legal services.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <button
                onClick={onOpenDisclaimer}
                className="text-chambers-gold-400 hover:text-chambers-gold-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Bar Council Disclaimer</span>
              </button>
              <button
                onClick={onOpenPrivacy}
                className="text-chambers-gold-400 hover:text-chambers-gold-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Client Privilege &amp; Privacy Policy</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-chambers-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Synergy Chambers. All rights reserved. Registered Patiala House Courts, New Delhi.
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#main-content" 
              className="text-chambers-stone-400 hover:text-white transition-colors"
            >
              Skip to Content
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-chambers-gold-400 hover:text-chambers-gold-300 transition-colors cursor-pointer"
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
