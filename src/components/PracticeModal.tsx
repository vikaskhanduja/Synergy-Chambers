import React, { useEffect } from 'react';
import { X, Check, Building2, ArrowRight, Scale, Landmark } from 'lucide-react';
import { PracticeArea } from '../data/firmData';

interface PracticeModalProps {
  practice: PracticeArea | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const PracticeModal: React.FC<PracticeModalProps> = ({ 
  practice, 
  onClose,
  onOpenConsultation 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (practice) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [practice, onClose]);

  if (!practice) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="practice-modal-title"
    >
      <div 
        className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#088395] text-white p-6 sm:p-8 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-teal-200 font-bold mb-1.5">
              <Scale className="w-3.5 h-3.5" />
              <span>Chambers Practice Domain</span>
            </div>
            <h3 id="practice-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {practice.title}
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 font-medium mt-1">
              {practice.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close practice modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-slate-800">
          
          {/* Statutory Overview */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#088395] block mb-2">
              Jurisprudential Framework &amp; Scope
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {practice.fullDesc}
            </p>
          </div>

          {/* Scope of Legal Services */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#088395] block mb-3">
              Key Procedural &amp; Litigation Actions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {practice.keyServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 flex items-start gap-2.5"
                >
                  <Check className="w-3.5 h-3.5 text-[#088395] shrink-0 mt-0.5" />
                  <span className="leading-snug">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Court Representation */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#088395] block mb-2">
              Courts &amp; Appearance Forums
            </span>
            <div className="flex flex-wrap gap-2">
              {practice.courtRepresentation.map((court, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs bg-teal-50 border border-teal-200 text-[#088395] rounded-full font-medium"
                >
                  {court}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-5 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500 italic text-center sm:text-left">
            Consultations governed by Bar Council of India regulations.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#088395] hover:bg-[#05626e] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Consult on This Matter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
