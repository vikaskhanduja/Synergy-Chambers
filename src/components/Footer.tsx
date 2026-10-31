import React from 'react';
import { 
  Scale, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUp,
  Building,
  ShieldAlert,
  Landmark
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
      className="bg-atelier-carbon text-atelier-sand pt-20 pb-12 border-t border-atelier-sand/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Broadsheet Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-atelier-sand/20">
          
          {/* Brand & Registered Chambers Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 border border-atelier-sand/30 bg-atelier-slate/40 flex items-center justify-center text-atelier-gold">
                <span className="font-serif text-lg font-bold">SC</span>
              </div>
              <div>
                <span className="font-serif text-xl font-normal tracking-wide text-atelier-bone block">
                  SYNERGY CHAMBERS
                </span>
                <span className="text-[10px] tracking-loose-editorial uppercase text-atelier-gold font-bold block">
                  Advocates &amp; Legal Counselors
                </span>
              </div>
            </div>

            <p className="text-xs text-atelier-sand/80 leading-relaxed font-light">
              {FIRM_DETAILS.mission}
            </p>

            <div className="space-y-3 text-xs text-atelier-sand/80 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-atelier-gold shrink-0 mt-0.5" />
                <span>{FIRM_DETAILS.establishedLocation}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-atelier-gold shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-atelier-gold transition-colors">
                  {FIRM_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Landmark className="w-4 h-4 text-atelier-gold shrink-0" />
                <span>Regional Divisions: Chandigarh High Court • Haryana District Courts</span>
              </div>
            </div>
          </div>

          {/* Practice Areas Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold text-atelier-bone uppercase tracking-loose-editorial border-b border-atelier-sand/20 pb-2">
              Practice Domains
            </h4>
            <ul className="space-y-2 text-xs">
              {PRACTICE_AREAS.map((practice) => (
                <li key={practice.id}>
                  <a 
                    href="#practices" 
                    className="text-atelier-sand/80 hover:text-atelier-gold transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-atelier-gold" />
                    <span>{practice.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Benches & Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-bold text-atelier-bone uppercase tracking-loose-editorial border-b border-atelier-sand/20 pb-2">
              Bench Corridors
            </h4>
            <ul className="space-y-2 text-xs text-atelier-sand/80">
              <li>
                <a href="#about" className="hover:text-atelier-gold transition-colors">
                  Patiala House Chamber 238
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-atelier-gold transition-colors">
                  Delhi High Court &amp; Sessions
                </a>
              </li>
              <li>
                <a href="#advocates" className="hover:text-atelier-gold transition-colors">
                  Punjab &amp; Haryana High Court
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-atelier-gold transition-colors">
                  Haryana District Benches
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-atelier-gold transition-colors">
                  Special Economic Tribunals
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-atelier-gold transition-colors">
                  Spatial Access &amp; Maps
                </a>
              </li>
            </ul>
          </div>

          {/* BCI Regulatory Compliance & Mandate */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold text-atelier-bone uppercase tracking-loose-editorial border-b border-atelier-sand/20 pb-2">
              Statutory Governance
            </h4>
            <div className="p-4 bg-atelier-slate/30 border border-atelier-sand/20 space-y-2.5 text-xs text-atelier-sand/80">
              <div className="flex items-center gap-2 text-atelier-gold text-[10.5px] font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>BCI Rule 36 Compliance</span>
              </div>
              <p className="leading-relaxed text-[11.5px]">
                Pursuant to the Bar Council of India regulations, this platform is maintained exclusively for informational purposes upon independent visitor request.
              </p>
              <div className="pt-2 flex flex-col gap-1.5 text-[11px]">
                <button
                  onClick={onOpenDisclaimer}
                  className="text-left text-atelier-gold hover:underline font-semibold cursor-pointer"
                >
                  Statutory Disclaimer Document →
                </button>
                <button
                  onClick={onOpenPrivacy}
                  className="text-left text-atelier-gold hover:underline font-semibold cursor-pointer"
                >
                  Attorney-Client Privilege Notice →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Accessibility */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-atelier-sand/60">
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>© {new Date().getFullYear()} Synergy Chambers. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Chamber No. 238, Patiala House Courts, New Delhi</span>
            <span className="hidden sm:inline">•</span>
            <span>Advocates Act, 1961 Compliance</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-atelier-slate/40 hover:bg-atelier-slate/70 border border-atelier-sand/20 text-atelier-bone text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
              aria-label="Scroll to top of document"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-atelier-gold" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
