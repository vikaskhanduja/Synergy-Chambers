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
      className="fixed inset-0 z-50 overflow-y-auto bg-atelier-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="practice-modal-title"
    >
      <div 
        className="bg-atelier-bone border border-atelier-sand max-w-3xl w-full shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-atelier-carbon text-atelier-bone p-6 sm:p-8 flex items-start justify-between border-b border-atelier-sand/20">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-loose-editorial text-atelier-gold font-bold mb-1.5">
              <Scale className="w-3.5 h-3.5" />
              <span>Chambers Practice Dossier</span>
            </div>
            <h3 id="practice-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-atelier-bone">
              {practice.title}
            </h3>
            <p className="text-xs sm:text-sm text-atelier-sand/80 font-medium mt-1">
              {practice.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-atelier-slate/40 hover:bg-atelier-slate text-atelier-sand hover:text-atelier-bone transition-colors cursor-pointer border border-atelier-sand/20"
            aria-label="Close practice dossier modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-atelier-black bg-atelier-fog">
          
          {/* Statutory Overview */}
          <div>
            <span className="text-[10.5px] font-bold uppercase tracking-loose-editorial text-atelier-bronze block mb-2">
              Jurisprudential Framework &amp; Scope
            </span>
            <p className="text-xs sm:text-sm text-atelier-carbon leading-relaxed font-normal">
              {practice.fullDesc}
            </p>
          </div>

          {/* Scope of Legal Services */}
          <div>
            <span className="text-[10.5px] font-bold uppercase tracking-loose-editorial text-atelier-bronze block mb-3">
              Key Procedural &amp; Litigation Actions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {practice.keyServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-atelier-bone border border-atelier-sand/70 text-xs text-atelier-carbon flex items-start gap-2.5"
                >
                  <Check className="w-3.5 h-3.5 text-atelier-bronze shrink-0 mt-0.5" />
                  <span className="leading-snug">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Court Representation */}
          <div>
            <span className="text-[10.5px] font-bold uppercase tracking-loose-editorial text-atelier-bronze block mb-2">
              Courts &amp; Appearance Forums
            </span>
            <div className="flex flex-wrap gap-2">
              {practice.courtRepresentation.map((court, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs bg-atelier-bone border border-atelier-sand text-atelier-slate font-medium"
                >
                  {court}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-atelier-bone p-5 sm:p-6 border-t border-atelier-sand flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-atelier-taupe font-serif italic text-center sm:text-left">
            Consultations governed by Bar Council of India regulations.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-atelier-slate hover:text-atelier-black transition-colors cursor-pointer"
            >
              Close Dossier
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-atelier-carbon hover:bg-atelier-black text-atelier-bone text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Docket Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-atelier-gold" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
