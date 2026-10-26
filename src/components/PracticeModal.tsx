import React from 'react';
import { X, CheckCircle2, Building2, Scale, ArrowRight } from 'lucide-react';
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
  if (!practice) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-gold-500/30 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-navy-900 text-white p-6 sm:p-8 flex items-start justify-between border-b border-navy-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
              Practice Area Overview
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {practice.title}
            </h3>
            <p className="text-sm text-gold-300 font-medium mt-1">
              {practice.subtitle}
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Detailed Narrative */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-navy-900 mb-2">
              Legal Framework &amp; Scope
            </h4>
            <p className="text-charcoal-700 text-sm leading-relaxed">
              {practice.fullDesc}
            </p>
          </div>

          {/* Key Services Offered */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-navy-900 mb-3">
              Core Legal Services &amp; Representation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {practice.keyServices.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-navy-50/50 border border-charcoal-100 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Courts & Tribunals Represented */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-navy-900 mb-3 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-gold-600" />
              <span>Courts &amp; Tribunals of Appearance</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {practice.courtRepresentation.map((court, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-charcoal-100 text-charcoal-800 text-xs font-medium border border-charcoal-200"
                >
                  {court}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-charcoal-50 p-5 sm:p-6 border-t border-charcoal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-charcoal-500 text-center sm:text-left">
            Have a matter regarding {practice.title}? Connect with our chambers.
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
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-navy-900 hover:bg-navy-850 text-gold-400 font-semibold text-xs tracking-wider uppercase transition-all shadow-md w-1/2 sm:w-auto"
            >
              <span>Consult Advocates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
