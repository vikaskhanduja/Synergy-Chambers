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
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lawyer-modal-name"
    >
      <div 
        className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#088395] text-white p-6 sm:p-8 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={lawyer.imageUrl}
              alt={lawyer.name}
              className="w-16 h-16 rounded-xl object-cover border-2 border-white/40 shadow-md shrink-0"
            />
            <div>
              <span className="text-[11px] uppercase tracking-wider text-teal-200 font-bold block mb-0.5">
                {lawyer.role}
              </span>
              <h3 id="lawyer-modal-name" className="text-2xl sm:text-3xl font-extrabold text-white">
                {lawyer.name}
              </h3>
              <p className="text-xs text-teal-100 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{lawyer.location}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close advocate profile modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto text-slate-800">
          
          {/* Qualifications & Bar Admissions */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#088395] block">
              Academic Credentials &amp; Bar Admissions
            </span>
            <div className="flex flex-wrap gap-2 text-xs text-slate-700 font-medium">
              {lawyer.qualifications.map((q, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full">
                  {q}
                </span>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-200 text-xs text-slate-600">
              <strong className="text-slate-900">Bar Admissions:</strong> {lawyer.barAdmissions?.join(' • ') || lawyer.qualifications[1] || 'Enrolled Advocate'}
            </div>
          </div>

          {/* Detailed Biography */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#088395] block">
              Courtroom Biography &amp; Practice Focus
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {lawyer.bio}
            </p>
          </div>

          {/* Specialized Practice Remit */}
          {lawyer.practiceFocus && (
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#088395] block">
                Practice Remit &amp; Court Benches
              </span>
              <div className="flex flex-wrap gap-2">
                {lawyer.practiceFocus.map((focus, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-xs bg-teal-50 border border-teal-200 text-[#088395] rounded-full font-medium"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Evidentiary Privilege Notice */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2.5 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-[#088395] shrink-0" />
            <span>Advocate-client consultations strictly privileged under Sections 126–129 of the Indian Evidence Act.</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-5 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500 italic text-center sm:text-left">
            Rule 36, Bar Council of India Rules.
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
              <span>Consult with Counsel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
