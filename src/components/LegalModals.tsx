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
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#088395] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
              {type === 'disclaimer' ? <Shield className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-xl sm:text-2xl font-bold text-white">
                {type === 'disclaimer' ? 'Legal Disclaimer & Statutory Compliance' : 'Client Privilege & Confidentiality Policy'}
              </h3>
              <p className="text-xs text-teal-100 font-medium">Synergy Chambers (Advocates &amp; Solicitors)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-[65vh] overflow-y-auto font-normal">
          {type === 'disclaimer' ? (
            <>
              <p>
                <strong className="text-slate-900">Statutory Governance:</strong> This website is maintained by Synergy Chambers in strict compliance with the rules and standards of professional conduct established under the <em>Advocates Act, 1961</em> and <em>Rule 36 of the Bar Council of India Rules</em>.
              </p>
              <p>
                <strong className="text-slate-900">No Solicitation or Advertisement:</strong> The contents of this website do not constitute, and should not be construed as, an advertisement, personal communication, invitation, or solicitation of legal work. The information is provided solely for public knowledge and informational purposes upon the specific request of the user.
              </p>
              <p>
                <strong className="text-slate-900">No Advocate-Client Relationship:</strong> Transmission, receipt, or downloading of information from this site does not establish or constitute an advocate-client relationship. Visitors must seek formal legal counsel before acting on any matter.
              </p>
              <p>
                <strong className="text-slate-900">Limitation of Liability:</strong> Synergy Chambers disclaims all liability to any person for any loss or damage caused by errors or omissions, whether arising from negligence, accident, or any other cause, in connection with information published on this website.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-slate-900">Advocate-Client Privilege:</strong> Synergy Chambers observes the highest standards of professional confidentiality. All communications, case materials, and factual particulars disclosed to the firm are protected under privileged communication pursuant to Sections 126–129 of the <em>Indian Evidence Act, 1872</em>.
              </p>
              <p>
                <strong className="text-slate-900">Secure Data Processing:</strong> Information submitted via our case intake forms is utilized exclusively for conflict clearance, statutory compliance, and scheduling formal consultations. We do not sell, license, or disclose client data to external third parties.
              </p>
              <p>
                <strong className="text-slate-900">Digital Retention &amp; Destruction:</strong> Digital records relating to matters where no formal engagement ensues are systematically deleted after 90 days in accordance with chambers data governance procedures.
              </p>
            </>
          )}
        </div>

        <div className="p-5 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500 italic">
            Chamber No. 238, Patiala House Courts, New Delhi
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#088395] hover:bg-[#05626e] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
