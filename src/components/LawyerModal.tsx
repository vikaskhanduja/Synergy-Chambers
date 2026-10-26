import React from 'react';
import { 
  X, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  ArrowRight 
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
  if (!lawyer) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-gold-500/30 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-900 text-white p-6 sm:p-8 flex items-start justify-between border-b border-navy-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
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
            className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-charcoal-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Qualifications & Bar Admissions */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-navy-900 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gold-600" />
              <span>Academic Credentials &amp; Admissions</span>
            </h4>
            <div className="space-y-1.5 bg-navy-50/60 p-4 rounded-xl border border-navy-100">
              {lawyer.qualifications.map((q, idx) => (
                <div key={idx} className="text-xs text-charcoal-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span>{q}</span>
                </div>
              ))}
              {lawyer.barAdmissions && lawyer.barAdmissions.map((b, bIdx) => (
                <div key={bIdx} className="text-xs text-charcoal-800 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-navy-700 shrink-0" />
                  <span>Admitted to: {b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Biography */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-navy-900 mb-2">
              Professional Background &amp; Court Practice
            </h4>
            <p className="text-charcoal-700 text-sm leading-relaxed whitespace-pre-line">
              {lawyer.bio}
            </p>
          </div>

          {/* Notable Highlights if present */}
          {lawyer.notableHighlights && lawyer.notableHighlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-navy-900 mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Notable Case Work &amp; Experience</span>
              </h4>
              <div className="space-y-2">
                {lawyer.notableHighlights.map((highlight, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white border border-charcoal-200 text-xs text-charcoal-800 flex items-start gap-2.5 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practice Focus Areas */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-navy-900 mb-2">
              Areas of Practice Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {lawyer.practiceFocus.map((focus, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-navy-50 text-navy-950 text-xs font-medium border border-navy-200"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-charcoal-50 p-5 sm:p-6 border-t border-charcoal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-charcoal-500 text-center sm:text-left">
            Request an in-person or virtual consultation with {lawyer.name}.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-charcoal-600 hover:text-navy-950 transition-colors w-1/2 sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md w-1/2 sm:w-auto"
            >
              <span>Consult Advocate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
