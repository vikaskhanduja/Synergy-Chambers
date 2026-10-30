import React, { useEffect } from 'react';
import { X, Shield, Lock, Scale } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface LegalModalsProps {
  type: 'disclaimer' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-chambers-navy-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full shadow-chambers-elevated border border-chambers-stone-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-chambers-navy-950 text-white p-6 sm:p-7 flex items-center justify-between border-b border-chambers-navy-850">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-chambers-navy-900 border border-chambers-gold-500/30 text-chambers-gold-400 flex items-center justify-center">
              {type === 'disclaimer' ? <Shield className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="legal-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-white">
                {type === 'disclaimer' ? 'Legal Disclaimer & Statutory Compliance' : 'Client Privilege & Confidentiality Policy'}
              </h3>
              <p className="text-xs text-chambers-gold-400 font-medium">Synergy Chambers (Advocates &amp; Solicitors)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-chambers-navy-900 hover:bg-chambers-navy-850 text-chambers-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close statutory dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-chambers-stone-700 leading-relaxed max-h-[65vh] overflow-y-auto font-normal">
          {type === 'disclaimer' ? (
            <>
              <p>
                <strong>Statutory Governance:</strong> This website is maintained by Synergy Chambers in strict compliance with the rules and standards of professional conduct established under the <em>Advocates Act, 1961</em> and <em>Rule 36 of the Bar Council of India Rules</em>.
              </p>
              <p>
                <strong>No Solicitation or Advertisement:</strong> The contents of this website do not constitute, and should not be construed as, an advertisement, personal communication, invitation, or solicitation of legal work. The information is provided solely for public knowledge and informational purposes upon the specific request of the user.
              </p>
              <p>
                <strong>No Advocate-Client Relationship:</strong> Transmission, receipt, or downloading of information from this site does not establish or constitute an advocate-client relationship. Visitors must seek formal legal counsel before acting on any matter.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> Synergy Chambers disclaims all liability to any person for any loss or damage caused by errors or omissions, whether arising from negligence, accident, or any other cause, in connection with information published on this website.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Advocate-Client Privilege:</strong> Synergy Chambers observes the highest standards of professional confidentiality. All communications, case materials, and factual particulars disclosed to the firm are protected under privileged communication pursuant to Sections 126–129 of the <em>Indian Evidence Act, 1872</em>.
              </p>
              <p>
                <strong>Information Handling:</strong> Any personal information or case brief details transmitted through our consultation docket are treated with strict confidentiality. Such information is accessible solely to authorized litigation advocates of Synergy Chambers evaluating the mandate.
              </p>
              <p>
                <strong>Non-Disclosure Guarantee:</strong> We do not sell, rent, commercialize, or disclose client or inquirer information to third parties, advertising platforms, or commercial databases under any circumstances.
              </p>
              <p>
                <strong>Digital Security Protocols:</strong> All digital communications and case transmissions are encrypted and preserved on secured legal practice infrastructure.
              </p>
            </>
          )}
        </div>

        <div className="p-4 sm:p-5 bg-chambers-parchment-50 border-t border-chambers-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-chambers-navy-950 text-white text-xs font-semibold hover:bg-chambers-navy-900 transition-colors cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
