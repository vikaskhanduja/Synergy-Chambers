import React, { useState } from 'react';
import { ArrowRight, Phone, Send, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  const [contactInput, setContactInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      onOpenConsultation();
    }, 600);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <span className="text-xs font-bold uppercase tracking-wider text-[#088395] block">
          Patiala House Chambers 238 • Urgent Filings
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Facing a High-Stakes Legal Trial or Urgent Remand Hearing?
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Connect directly with arguing counsel at Synergy Chambers for immediate bail listings, stay petitions, and strategic courtroom representation.
        </p>

        {/* Centered Pill Form (Matches Screenshot Bottom CTA Form) */}
        <div className="max-w-xl mx-auto pt-4">
          {submitted ? (
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-full text-xs font-bold text-[#088395] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#088395]" />
              <span>Redirecting to the confidential case briefing docket...</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 bg-white p-2 rounded-full border border-slate-300 shadow-md">
              <input
                type="text"
                required
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                placeholder="Enter your phone number or email address..."
                className="w-full px-5 py-3 text-xs text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#088395] hover:bg-[#05626e] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-500 mt-3">
            Strictly confidential under Sections 126–129 of the Indian Evidence Act, 1872.
          </p>
        </div>

      </div>
    </section>
  );
};
