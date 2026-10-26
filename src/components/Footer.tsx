import React from 'react';
import { 
  Scale, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUp,
  Building,
  Clock
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
    <footer className="bg-navy-950 text-charcoal-300 pt-16 pb-12 border-t border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-850">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-base font-bold tracking-wider text-white block">
                  SYNERGY CHAMBERS
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase text-gold-400 font-semibold block mt-0.5">
                  Advocates &amp; Solicitors
                </span>
              </div>
            </div>

            <p className="text-xs text-charcoal-400 leading-relaxed font-light">
              {FIRM_DETAILS.mission}
            </p>

            <div className="space-y-2.5 text-xs text-charcoal-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{FIRM_DETAILS.establishedLocation}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-gold-300 transition-colors">
                  {FIRM_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-gold-400 shrink-0" />
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
                    className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-gold-500" />
                    <span>{practice.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Network Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Chambers
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">
                  The Firm &amp; History
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-300 transition-colors">
                  Four Pillars of Advocacy
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-gold-300 transition-colors">
                  Founding Advocates
                </a>
              </li>
              <li>
                <a href="#regional-team" className="hover:text-gold-300 transition-colors">
                  Chandigarh Chambers
                </a>
              </li>
              <li>
                <a href="#regional-team" className="hover:text-gold-300 transition-colors">
                  Haryana District Network
                </a>
              </li>
              <li>
                <a href="#jurisdictions" className="hover:text-gold-300 transition-colors">
                  Judicial Jurisdictions
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-gold-300 transition-colors">
                  Patiala House Location
                </a>
              </li>
            </ul>
          </div>

          {/* Consultation & Office Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Chamber Conferences
            </h4>
            <p className="text-xs text-charcoal-400 leading-relaxed font-light">
              Prior appointment recommended for preliminary case conferences and document vetting.
            </p>
            <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-850 space-y-2">
              <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Working Hours:</span>
              </div>
              <p className="text-xs text-charcoal-300">
                {FIRM_DETAILS.hours}
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="w-full py-2.5 px-4 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-bold uppercase tracking-wider transition-all shadow-subtle cursor-pointer"
            >
              Request Consultation
            </button>
          </div>

        </div>

        {/* Statutory Compliance & Disclaimer */}
        <div className="pt-8 pb-6 border-b border-navy-850 text-[11px] text-charcoal-400 leading-relaxed">
          <p>
            <strong className="text-charcoal-300">Bar Council of India Disclaimer:</strong> As per the rules of the Bar Council of India, advocates and law firms are prohibited from soliciting work or advertising. The contents of this website are intended solely for informational purposes and should not be construed as legal advice. Visiting this website or submitting an inquiry does not establish an advocate-client relationship.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <div>
            &copy; {new Date().getFullYear()} Synergy Chambers. Advocates &amp; Solicitors. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button 
              onClick={onOpenDisclaimer} 
              className="hover:text-gold-400 transition-colors cursor-pointer"
            >
              BCI Disclaimer
            </button>
            <button 
              onClick={onOpenPrivacy} 
              className="hover:text-gold-400 transition-colors cursor-pointer"
            >
              Confidentiality Policy
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-900 hover:bg-navy-850 text-gold-400 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
