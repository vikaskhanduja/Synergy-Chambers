import React, { useEffect } from 'react';
import { 
  X, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  Building
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
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full shadow-elevated border border-[#EAE5DB] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-navy-950 text-white p-6 sm:p-8 flex items-start justify-between border-b border-navy-850">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-1">
              {lawyer.role}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {lawyer.name}
            </h3>
            <p className="text-xs text-charcoal-300 flex items-center gap-1.5 mt-2">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>{lawyer.location}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-navy-900 hover:bg-navy-850 text-charcoal-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Qualifications & Bar Admissions */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider font-bold text-navy-950 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gold-600" />
              <span>Academic Credentials &amp; Admissions</span>
            </h4>
            <div className="space-y-2 bg-[#FAF8F3] p-4 rounded-xl border border-[#EAE5DB]">
              {lawyer.qualifications.map((q, idx) => (
                <div key={idx} className="text-xs text-charcoal-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 shrink-0" />
                  <span>{q}</span>
                </div>
              ))}
              {lawyer.barAdmissions && lawyer.barAdmissions.map((b, bIdx) => (
                <div key={bIdx} className="text-xs text-charcoal-800 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>Admitted to: {b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Biography */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider font-bold text-navy-950 mb-2">
              Professional Background &amp; Court Practice
            </h4>
            <p className="text-charcoal-700 text-sm leading-relaxed whitespace-pre-line font-normal">
              {lawyer.bio}
            </p>
          </div>

          {/* Notable Highlights if present */}
          {lawyer.notableHighlights && lawyer.notableHighlights.length > 0 && (
            <div>
              <h4 className="text-[11px] uppercase tracking-wider font-bold text-navy-950 mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Notable Case Work &amp; Experience</span>
              </h4>
              <div className="space-y-2">
                {lawyer.notableHighlights.map((highlight, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FAF8F3] border border-[#EAE5DB] text-xs text-charcoal-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practice Focus Areas */}
          {lawyer.practiceFocus && lawyer.practiceFocus.length > 0 && (
            <div>
              <h4 className="text-[11px] uppercase tracking-wider font-bold text-navy-950 mb-3">
                Core Practice Focus
              </h4>
              <div className="flex flex-wrap gap-2">
                {lawyer.practiceFocus.map((focus, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-gold-50 text-gold-900 border border-gold-200 text-xs font-medium"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#FAF8F3] p-5 sm:p-6 border-t border-[#EAE5DB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-charcoal-500 text-center sm:text-left">
            Request conference with {lawyer.name}.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-charcoal-600 hover:text-navy-950 transition-colors w-1/2 sm:w-auto cursor-pointer"
            >
              Close Brief
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 w-1/2 sm:w-auto cursor-pointer shadow-subtle"
            >
              <span>Schedule Conference</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
