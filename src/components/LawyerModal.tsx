import React, { useEffect } from 'react';
import { 
  X, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  Building,
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
      className="fixed inset-0 z-50 overflow-y-auto bg-chambers-navy-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lawyer-modal-name"
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full shadow-chambers-elevated border border-chambers-stone-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-chambers-navy-950 text-white p-6 sm:p-8 flex items-start justify-between border-b border-chambers-navy-850">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-chambers-gold-400 font-bold block mb-1">
              {lawyer.role}
            </span>
            <h3 id="lawyer-modal-name" className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {lawyer.name}
            </h3>
            <p className="text-xs text-chambers-stone-300 mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-chambers-gold-400" />
              <span>{lawyer.location}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-chambers-navy-900 hover:bg-chambers-navy-850 text-chambers-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close advocate profile modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-chambers-stone-800">
          
          {/* Qualifications & Bar Admissions */}
          <div className="p-4 rounded-xl bg-chambers-parchment-50 border border-chambers-stone-200 space-y-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-chambers-gold-800 block">
              Academic Credentials &amp; Bar Admissions
            </span>
            {lawyer.qualifications.map((qual, qIdx) => (
              <div key={qIdx} className="text-xs text-chambers-stone-800 flex items-start gap-2">
                <BookOpen className="w-3.5 h-3.5 text-chambers-gold-700 shrink-0 mt-0.5" />
                <span>{qual}</span>
              </div>
            ))}
            {lawyer.barAdmissions && (
              <div className="text-xs text-chambers-stone-800 flex items-start gap-2 pt-1 border-t border-chambers-stone-200">
                <ShieldCheck className="w-3.5 h-3.5 text-chambers-gold-700 shrink-0 mt-0.5" />
                <span className="font-semibold">{lawyer.barAdmissions.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Biographical Narrative */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-chambers-gold-800 mb-2">
              Professional Biography
            </h4>
            <p className="text-xs sm:text-sm text-chambers-stone-700 leading-relaxed font-normal">
              {lawyer.bio}
            </p>
          </div>

          {/* Practice Focus Areas */}
          {lawyer.practiceFocus && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-chambers-gold-800 mb-2.5">
                Core Practice Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {lawyer.practiceFocus.map((focus, fIdx) => (
                  <span
                    key={fIdx}
                    className="text-xs px-3 py-1 rounded-lg bg-chambers-parchment-100 text-chambers-stone-800 border border-chambers-stone-300 font-medium"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Notable Case Highlights */}
          {lawyer.notableHighlights && lawyer.notableHighlights.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-chambers-gold-800 mb-2">
                Notable Career &amp; Trial Highlights
              </h4>
              {lawyer.notableHighlights.map((hl, hlIdx) => (
                <div key={hlIdx} className="text-xs text-chambers-stone-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-chambers-gold-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-chambers-parchment-50 border-t border-chambers-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-chambers-stone-600 text-center sm:text-left">
            Direct trial briefing from Patiala House Chambers &amp; Regional Benches.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-chambers-stone-300 text-chambers-stone-700 hover:text-chambers-navy-950 hover:bg-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Close Profile
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-chambers-navy-950 hover:bg-chambers-navy-900 text-chambers-gold-300 text-xs font-bold shadow-chambers-subtle transition-all cursor-pointer"
            >
              <span>Request Briefing</span>
              <ArrowRight className="w-4 h-4 text-chambers-gold-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
