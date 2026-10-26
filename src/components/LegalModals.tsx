import React from 'react';
import { X, Shield, Lock } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface LegalModalsProps {
  type: 'disclaimer' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full shadow-elevated border border-[#E8E4DB] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-navy-950 text-white p-6 sm:p-7 flex items-center justify-between border-b border-navy-850">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-navy-900 border border-gold-500/30 text-gold-400 flex items-center justify-center">
              {type === 'disclaimer' ? <Shield className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {type === 'disclaimer' ? 'Legal Disclaimer & Statutory Compliance' : 'Privacy & Client Data Policy'}
              </h3>
              <p className="text-xs text-gold-400 font-medium">Synergy Chambers (Advocates &amp; Solicitors)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-navy-900 hover:bg-navy-850 text-charcoal-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed max-h-[65vh] overflow-y-auto font-normal">
          {type === 'disclaimer' ? (
            <>
              <p>
                This website is intended solely for informational purposes and in strict conformity with Rule 36 of the Bar Council of India Rules.
              </p>
              <h4 className="font-bold text-navy-950 uppercase tracking-wider text-xs pt-2">No Solicitation or Advertisement</h4>
              <p>
                The information provided on this website does not constitute legal advice, solicitation, advertisement, or personal inducement of any nature whatsoever. The reader or visitor should not act upon this information without seeking formal, independent legal counsel.
              </p>
              <h4 className="font-bold text-navy-950 uppercase tracking-wider text-xs pt-2">No Advocate-Client Relationship</h4>
              <p>
                Neither this website nor the transmission of inquiries through contact forms, emails, or phone numbers creates an advocate-client relationship. Such a relationship is only established upon formal mutual agreement and execution of a Vakalatnama or formal engagement retainer.
              </p>
              <h4 className="font-bold text-navy-950 uppercase tracking-wider text-xs pt-2">Limitation of Liability</h4>
              <p>
                Synergy Chambers disclaims all liability for any loss or damage arising directly or indirectly from reliance on any information contained on this website.
              </p>
            </>
          ) : (
            <>
              <p>
                Synergy Chambers is committed to maintaining the utmost confidentiality and privacy of prospective and current clients.
              </p>
              <h4 className="font-bold text-navy-950 uppercase tracking-wider text-xs pt-2">Professional Secrecy &amp; Privilege</h4>
              <p>
                All information and case documentation shared with Synergy Chambers is protected under Section 126 of the Indian Evidence Act (Advocate-Client Privilege) and relevant professional ethics standards.
              </p>
              <h4 className="font-bold text-navy-950 uppercase tracking-wider text-xs pt-2">Collection of Information</h4>
              <p>
                We collect personal information (such as your name, email address, telephone number, and brief description of your matter) solely when you voluntarily submit it via our consultation request portal.
              </p>
              <h4 className="font-bold text-navy-950 uppercase tracking-wider text-xs pt-2">Use of Information</h4>
              <p>
                Information collected is used strictly to evaluate conflict of interest, determine case feasibility, and communicate directly with you regarding your legal inquiry. We never sell, rent, or disclose personal data to third parties.
              </p>
              <h4 className="font-bold text-navy-950 uppercase tracking-wider text-xs pt-2">Contact for Data Requests</h4>
              <p>
                For questions regarding data retention or to request deletion of your inquiry records, please email <a href={`mailto:${FIRM_DETAILS.email}`} className="text-gold-700 font-semibold">{FIRM_DETAILS.email}</a>.
              </p>
            </>
          )}
        </div>

        <div className="bg-[#FAF8F3] p-4 sm:p-5 border-t border-[#E8E4DB] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-md bg-navy-900 text-gold-300 hover:bg-navy-850 transition-colors uppercase tracking-wider"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
