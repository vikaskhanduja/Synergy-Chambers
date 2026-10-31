import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

export const ConsultationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: 'civil-litigation',
    jurisdiction: 'delhi',
    isUrgent: false,
    message: '',
    honeypot: '' // spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s\-()]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Please provide a valid contact number (8-15 digits)';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a brief summary of your legal matter (minimum 15 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomRef = 'SC-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceNumber(randomRef);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      practiceArea: 'civil-litigation',
      jurisdiction: 'delhi',
      isUrgent: false,
      message: '',
      honeypot: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setReferenceNumber('');
  };

  return (
    <section 
      id="contact" 
      aria-labelledby="consultation-heading"
      className="py-20 lg:py-28 bg-chalk-50 text-ink-900 border-b border-chalk-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-aurum-600" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-aurum-700">
              Privileged &amp; Confidential Intake
            </span>
          </div>
          <h2 
            id="consultation-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-950 leading-tight"
          >
            Submit Privileged Case Particulars
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed font-normal">
            Transmit initial case particulars directly to our litigation desk. All transmissions are evaluated under strict statutory confidentiality protocols pursuant to Section 126 of the Indian Evidence Act, 1872.
          </p>
        </div>

        {/* Main Grid: Sidebar + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Chambers Secretarial Roster */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="border border-chalk-300 bg-white p-7 sm:p-8 space-y-6 shadow-subtle">
              <h3 className="font-serif text-xl font-bold text-forest-950 pb-3 border-b border-chalk-200">
                Litigation Chambers Directory
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-chalk-100 border border-chalk-300 text-aurum-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-aurum-700 block">
                      Physical Chambers:
                    </span>
                    <span className="text-forest-950 font-medium block mt-0.5">
                      {FIRM_DETAILS.establishedLocation}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-chalk-100 border border-chalk-300 text-aurum-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-aurum-700 block">
                      Official Docket Communications:
                    </span>
                    <a 
                      href={`mailto:${FIRM_DETAILS.email}`} 
                      className="text-forest-950 hover:text-aurum-700 font-medium block mt-0.5"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-chalk-100 border border-chalk-300 text-aurum-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-aurum-700 block">
                      Chambers Hours:
                    </span>
                    <span className="text-ink-700 block mt-0.5">
                      {FIRM_DETAILS.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Regional Benches note */}
              <div className="pt-4 border-t border-chalk-200 text-xs text-ink-600 bg-chalk-100 p-3.5 border border-chalk-200">
                <span className="font-bold text-forest-950 block mb-1">Regional Benches:</span>
                • Chandigarh High Court &amp; Central Administrative Tribunal (CAT)<br />
                • Haryana District Courts (Gurugram, Rewari, Karnal, Panipat)
              </div>
            </div>

            {/* BCI Privileged Notice Plaque */}
            <div className="p-6 bg-forest-950 text-white border border-forest-800 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-aurum-400">
                <ShieldCheck className="w-4 h-4 text-aurum-400" />
                <span>Statutory Privilege Notice</span>
              </div>
              <p className="text-xs text-ink-200 leading-relaxed font-light">
                Communications transmitted through this intake portal do not automatically create an advocate-client relationship. Formal legal representation is established upon conflict verification, preliminary evaluation, and execution of a legal engagement vakalatnama.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Docket Form */}
          <div className="lg:col-span-7">
            <div className="border border-chalk-300 bg-white p-8 sm:p-10 shadow-subtle">
              
              {isSubmitted ? (
                /* Success Receipt Screen */
                <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-chalk-100 text-aurum-700 border border-chalk-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-aurum-700" />
                  </div>

                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-widest text-aurum-700 block mb-1">
                      Case Docket Successfully Registered
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                      Transmission Confirmed
                    </h3>
                  </div>

                  <div className="p-4 bg-chalk-100 border border-chalk-300 max-w-sm mx-auto">
                    <span className="text-[10.5px] text-ink-600 block uppercase tracking-wider font-semibold">
                      Privileged Reference Identifier
                    </span>
                    <span className="font-mono text-xl font-bold text-forest-950 block mt-1 tracking-wider">
                      {referenceNumber}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-600 max-w-md mx-auto leading-relaxed">
                    Your particulars have been logged for preliminary review by designated chamber counsel. An acknowledgment has been transmitted to <strong className="text-forest-950">{formData.email}</strong>.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-950 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-aurum-400" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Intake Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Anti-spam honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_input">Do not fill this</label>
                    <input 
                      id="hp_input"
                      type="text" 
                      value={formData.honeypot} 
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} 
                      tabIndex={-1} 
                    />
                  </div>

                  {/* Form header description */}
                  <div className="border-b border-chalk-200 pb-4">
                    <h3 className="font-serif text-2xl font-bold text-forest-950">
                      Case Brief &amp; Particulars
                    </h3>
                    <p className="text-xs text-ink-600 mt-1">
                      Fields marked with <span className="text-rose-600">*</span> are mandatory for docket evaluation.
                    </p>
                  </div>

                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first-name" className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                        First Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? 'first-name-err' : undefined}
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors({ ...errors, firstName: '' });
                        }}
                        placeholder="e.g. Rajesh"
                        className={`w-full px-3.5 py-2 text-xs bg-white border text-ink-900 placeholder:text-ink-400 focus:outline-none transition-colors ${
                          errors.firstName 
                            ? 'border-rose-400 focus:border-rose-500' 
                            : 'border-chalk-300 focus:border-aurum-600'
                        }`}
                      />
                      {errors.firstName && (
                        <p id="first-name-err" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.firstName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="last-name" className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                        Last Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? 'last-name-err' : undefined}
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, lastName: e.target.value });
                          if (errors.lastName) setErrors({ ...errors, lastName: '' });
                        }}
                        placeholder="e.g. Sharma"
                        className={`w-full px-3.5 py-2 text-xs bg-white border text-ink-900 placeholder:text-ink-400 focus:outline-none transition-colors ${
                          errors.lastName 
                            ? 'border-rose-400 focus:border-rose-500' 
                            : 'border-chalk-300 focus:border-aurum-600'
                        }`}
                      />
                      {errors.lastName && (
                        <p id="last-name-err" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.lastName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-err' : undefined}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="client@domain.com"
                        className={`w-full px-3.5 py-2 text-xs bg-white border text-ink-900 placeholder:text-ink-400 focus:outline-none transition-colors ${
                          errors.email 
                            ? 'border-rose-400 focus:border-rose-500' 
                            : 'border-chalk-300 focus:border-aurum-600'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-err" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                        Contact Phone <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-err' : undefined}
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2 text-xs bg-white border text-ink-900 placeholder:text-ink-400 focus:outline-none transition-colors ${
                          errors.phone 
                            ? 'border-rose-400 focus:border-rose-500' 
                            : 'border-chalk-300 focus:border-aurum-600'
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-err" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Practice Area & Bench */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="practice-area" className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                        Practice Domain
                      </label>
                      <select
                        id="practice-area"
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-white border border-chalk-300 text-ink-900 focus:outline-none focus:border-aurum-600 cursor-pointer"
                      >
                        {PRACTICE_AREAS.map((practice) => (
                          <option key={practice.id} value={practice.id}>
                            {practice.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="jurisdiction-select" className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                        Primary Judicial Forum
                      </label>
                      <select
                        id="jurisdiction-select"
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-white border border-chalk-300 text-ink-900 focus:outline-none focus:border-aurum-600 cursor-pointer"
                      >
                        <option value="delhi">New Delhi (Patiala House / Delhi High Court / Supreme Court)</option>
                        <option value="chandigarh">Chandigarh (Punjab &amp; Haryana High Court / CAT / MACT)</option>
                        <option value="haryana">Haryana District Courts (Gurugram / Rewari / Karnal / Panipat)</option>
                        <option value="tribunal">Specialized Tribunal (NCLT / NCLAT / PMLA / AFT)</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgency Checkbox */}
                  <div className="p-3.5 bg-chalk-100 border border-aurum-300">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isUrgent}
                        onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                        className="mt-0.5 border-chalk-300 text-aurum-700 focus:ring-aurum-600 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-forest-950 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-aurum-700" />
                          <span>Urgent Matter (Impending Arrest, Bail Hearing, or Interim Injunction within 48 Hours)</span>
                        </span>
                        <span className="text-[11px] text-ink-600 block mt-0.5">
                          Expedites your docket to the litigation desk for priority review.
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* Summary Message */}
                  <div>
                    <label htmlFor="case-summary" className="block text-xs font-bold uppercase tracking-wider text-forest-950 mb-1.5">
                      Case Summary &amp; Legal Relief Sought <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="case-summary"
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'summary-err' : undefined}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Outline key facts, case status (pre-filing, investigation, summons, charge-sheet, appeal), FIR or case number if applicable, and relief sought..."
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border text-ink-900 placeholder:text-ink-400 focus:outline-none transition-colors resize-y ${
                        errors.message 
                          ? 'border-rose-400 focus:border-rose-500' 
                          : 'border-chalk-300 focus:border-aurum-600'
                      }`}
                    />
                    {errors.message && (
                      <p id="summary-err" className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-forest-950 hover:bg-forest-900 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-60 shadow-sm"
                    >
                      {isSubmitting ? (
                        <span>Registering Case Docket...</span>
                      ) : (
                        <>
                          <span>Transmit Case Intake Docket</span>
                          <Send className="w-3.5 h-3.5 text-aurum-400" />
                        </>
                      )}
                    </button>
                    <span className="text-[10.5px] text-ink-500 block mt-2.5">
                      Confidentiality guaranteed under Sections 126–129 of the Indian Evidence Act, 1872.
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
