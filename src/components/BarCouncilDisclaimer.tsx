import React, { useState, useEffect } from 'react';
import { Shield, Check, Scale } from 'lucide-react';

export const BarCouncilDisclaimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the BCI disclaimer
    const acknowledged = localStorage.getItem('synergy_bci_disclaimer');
    if (!acknowledged) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleAccept = () => {
    localStorage.setItem('synergy_bci_disclaimer', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-forest-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
      role="dialog"
      aria-labelledby="disclaimer-title"
      aria-modal="true"
    >
      <div 
        className="bg-white border border-chalk-300 max-w-xl w-full shadow-2xl text-ink-900 p-6 sm:p-8 space-y-5"
      >
        <div className="flex items-center gap-3.5 pb-4 border-b border-chalk-200">
          <div className="w-10 h-10 bg-forest-950 text-aurum-400 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 id="disclaimer-title" className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
              Bar Council of India Disclaimer
            </h3>
            <p className="text-[10px] text-aurum-700 uppercase tracking-wider font-bold">
              Statutory Compliance • BCI Rule 36
            </p>
          </div>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm text-ink-700 leading-relaxed max-h-[50vh] overflow-y-auto pr-2">
          <p>
            Under the statutory rules framed by the <strong>Bar Council of India</strong>, advocates and law firms are strictly prohibited from soliciting work or advertising in any form or manner.
          </p>
          <p>
            By proceeding and accessing this website (<strong className="text-forest-950">synergychambers.com</strong>), the user acknowledges and confirms that:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-ink-600">
            <li>
              You are seeking information relating to Synergy Chambers of your own accord and there has been no advertisement, personal communication, solicitation, or inducement by the firm or its advocates.
            </li>
            <li>
              The information provided on this website is made available solely for informational purposes and should not be construed or interpreted as legal advice.
            </li>
            <li>
              Accessing this site or transmitting communications does not create an advocate-client relationship.
            </li>
            <li>
              Synergy Chambers is not liable for any consequence of any action taken by relying on material or information provided on this website.
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t border-chalk-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-ink-500 text-center sm:text-left">
            Rule 36, Bar Council of India Rules
          </span>
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-forest-950 hover:bg-forest-900 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Check className="w-4 h-4 text-aurum-400" />
            <span>I Acknowledge &amp; Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
};
