import React, { useEffect } from 'react';
import { X, CheckCircle2, Building2, ArrowRight, Scale, Landmark } from 'lucide-react';
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
      className="fixed inset-0 z-50 overflow-y-auto bg-forest-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="practice-modal-title"
    >
      <div 
        className="bg-white border border-chalk-300 max-w-3xl w-full shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-forest-950 text-white p-6 sm:p-8 flex items-start justify-between border-b border-forest-850">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-aurum-400 font-bold mb-1.5">
              <Scale className="w-3.5 h-3.5" />
              <span>Chambers Practice Mandate</span>
            </div>
            <h3 id="practice-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {practice.title}
            </h3>
            <p className="text-sm text-aurum-300 font-medium mt-1">
              {practice.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-forest-900 hover:bg-forest-800 text-ink-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close practice dossier modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-ink-900">
          
          {/* Statutory Overview */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-aurum-700 mb-2">
              Jurisprudential Framework &amp; Scope
            </h4>
            <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-normal">
              {practice.fullDesc}
            </p>
          </div>

          {/* Scope of Legal Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-aurum-700 mb-3">
              Services &amp; Litigation Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {practice.keyServices.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-700 bg-chalk-50 p-3 border border-chalk-200">
                  <CheckCircle2 className="w-4 h-4 text-aurum-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Court Appearances */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-aurum-700 mb-3">
              Regular Court &amp; Tribunal Appearances
            </h4>
            <div className="flex flex-wrap gap-2">
              {practice.courtRepresentation.map((court, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-chalk-100 text-ink-800 text-xs font-medium border border-chalk-300"
                >
                  <Landmark className="w-3.5 h-3.5 text-aurum-600" />
                  <span>{court}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-chalk-100 border-t border-chalk-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-ink-500 text-center sm:text-left">
            Privileged evaluation by designated chamber trial counsel.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 border border-chalk-300 bg-white text-ink-900 hover:text-forest-950 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close Dossier
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-forest-950 hover:bg-forest-900 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Consult on this Matter</span>
              <ArrowRight className="w-4 h-4 text-aurum-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
