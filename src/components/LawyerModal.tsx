import React, { useEffect } from 'react';
import { 
  X, 
  MapPin, 
  BookOpen, 
  Check, 
  ShieldCheck, 
  ArrowRight,
  Landmark,
  Scale
} from 'lucide-react';
import { Lawyer } from '../data/firmData';

interface LawyerModalProps {
  lawyer: Lawyer | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const LawyerModal: React.FC<LawyerModalProps> = ({ 
  lawyer, 
  onClose,
  onOpenConsultation 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (lawyer) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lawyer, onClose]);

  if (!lawyer) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-atelier-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lawyer-modal-name"
    >
      <div 
        className="bg-atelier-bone border border-atelier-sand max-w-2xl w-full shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-atelier-carbon text-atelier-bone p-6 sm:p-8 flex items-start justify-between border-b border-atelier-sand/20">
          <div>
            <span className="text-[10px] uppercase tracking-loose-editorial text-atelier-gold font-bold block mb-1">
              {lawyer.role}
            </span>
            <h3 id="lawyer-modal-name" className="font-serif text-2xl sm:text-3xl font-normal text-atelier-bone">
              {lawyer.name}
            </h3>
            <p className="text-xs text-atelier-sand/80 mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-atelier-gold" />
              <span>{lawyer.location}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-atelier-slate/40 hover:bg-atelier-slate text-atelier-sand hover:text-atelier-bone transition-colors cursor-pointer border border-atelier-sand/20"
            aria-label="Close advocate profile modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-atelier-black bg-atelier-fog">
          
          {/* Qualifications & Bar Admissions */}
          <div className="p-4 bg-atelier-bone border border-atelier-sand/80 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-loose-editorial text-atelier-bronze block">
              Academic Credentials &amp; Bar Admissions
            </span>
            <div className="flex flex-wrap gap-2 text-xs text-atelier-carbon font-medium">
              {lawyer.qualifications.map((q, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-atelier-fog border border-atelier-sand">
                  {q}
                </span>
              ))}
            </div>
            <div className="pt-2 border-t border-atelier-sand/60 text-xs text-atelier-slate">
              <strong className="text-atelier-black">Bar Admissions:</strong> {lawyer.barAdmissions?.join(' • ') || lawyer.qualifications[1] || 'Enrolled Advocate'}
            </div>
          </div>

          {/* Detailed Biography */}
          <div className="space-y-2">
            <span className="text-[10.5px] font-bold uppercase tracking-loose-editorial text-atelier-bronze block">
              Judicial Biography &amp; Practice Focus
            </span>
            <p className="text-xs sm:text-sm text-atelier-carbon leading-relaxed font-normal">
              {lawyer.bio}
            </p>
          </div>

          {/* Specialized Practice Remit */}
          {lawyer.practiceFocus && (
            <div className="space-y-2.5">
              <span className="text-[10.5px] font-bold uppercase tracking-loose-editorial text-atelier-bronze block">
                Practice Remit &amp; Court Benches
              </span>
              <div className="flex flex-wrap gap-2">
                {lawyer.practiceFocus.map((focus, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 text-xs bg-atelier-bone border border-atelier-sand text-atelier-slate font-medium"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Evidentiary Privilege Notice */}
          <div className="p-3.5 bg-atelier-bone border border-atelier-sand/80 flex items-center gap-2.5 text-xs text-atelier-slate">
            <ShieldCheck className="w-4 h-4 text-atelier-bronze shrink-0" />
            <span>Advocate-client consultations strictly privileged under Sections 126–129 of the Indian Evidence Act.</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-atelier-bone p-5 sm:p-6 border-t border-atelier-sand flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-atelier-taupe font-serif italic text-center sm:text-left">
            Rule 36, Bar Council of India Rules.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-atelier-slate hover:text-atelier-black transition-colors cursor-pointer"
            >
              Close Profile
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-atelier-carbon hover:bg-atelier-black text-atelier-bone text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Brief Chambers</span>
              <ArrowRight className="w-3.5 h-3.5 text-atelier-gold" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
