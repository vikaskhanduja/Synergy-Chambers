import React, { useState, useEffect } from 'react';
import { Shield, Check } from 'lucide-react';

export const BarCouncilDisclaimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the BCI disclaimer
    const acknowledged = localStorage.getItem('synergy_bci_disclaimer');
    if (!acknowledged) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('synergy_bci_disclaimer', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full shadow-elevated border border-[#E8E4DB] overflow-hidden text-navy-950 p-6 sm:p-8 space-y-5"
        role="dialog"
        aria-labelledby="disclaimer-title"
        aria-modal="true"
      >
        <div className="flex items-center gap-3 pb-4 border-b border-[#F0ECE2]">
          <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 id="disclaimer-title" className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
              Bar Council of India Disclaimer
            </h3>
            <p className="text-[10px] text-charcoal-500 uppercase tracking-wider font-bold">
              Statutory Compliance &amp; Professional Conduct
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-charcoal-700 leading-relaxed max-h-[50vh] overflow-y-auto pr-1">
          <p>
            As per the rules of the <strong>Bar Council of India</strong>, advocates and law firms are prohibited from soliciting work or advertising in any form or manner.
          </p>
          <p>
            By accessing this website (<span className="text-gold-700 font-semibold">synergychambers.com</span>), the user acknowledges and confirms that:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-charcoal-600">
            <li>
              You are seeking information relating to Synergy Chambers of your own accord and there has been no advertisement, personal communication, solicitation, or inducement by the firm or its members.
            </li>
            <li>
              The information provided on this website is solely available for informational purposes and should not be interpreted as legal advice.
            </li>
            <li>
              Accessing this site or transmitting communications does not create an advocate-client relationship.
            </li>
            <li>
              Synergy Chambers is not liable for any consequence of any action taken by relying on material or information provided on this website.
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t border-[#F0ECE2] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-charcoal-400 text-center sm:text-left">
            Rule 36, Bar Council of India Rules
          </span>
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-subtle flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>I Agree &amp; Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
};
