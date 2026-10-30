import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Clock, 
  Lock, 
  AlertTriangle,
  RotateCcw,
  Scale
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
    honeypot: '' // anti-bot honeypot
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
      aria-label="Confidential Consultation & Legal Docket"
      className="py-20 lg:py-28 bg-chambers-parchment-100 text-chambers-navy-950 relative border-b border-chambers-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-chambers-stone-300 text-chambers-gold-800 text-[11px] font-bold uppercase tracking-wider mb-4 shadow-chambers-subtle">
            <Lock className="w-3.5 h-3.5 text-chambers-gold-700" />
            <span>Privileged &amp; Confidential Intake</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-chambers-navy-950 mb-4 leading-tight">
            Schedule a Confidential Legal Consultation
          </h2>
          <p className="text-base sm:text-lg text-chambers-stone-700 leading-relaxed font-normal">
            Transmit initial case particulars directly to our legal team. All transmissions are received under strict advocate-client confidentiality protocols and evaluated by designated chamber counsel.
          </p>
        </div>

        {/* Main Grid: Info Sidebar + Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Chambers Contacts & Protocol Notices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Chambers Info Card */}
            <div className="bg-white rounded-2xl p-7 border border-chambers-stone-200/90 shadow-chambers-card space-y-5">
              <h3 className="font-serif text-xl font-bold text-chambers-navy-950 pb-3 border-b border-chambers-stone-200">
                Primary Litigation Chambers
              </h3>

              <div className="space-y-4 text-xs text-chambers-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-chambers-parchment-100 text-chambers-gold-700 flex items-center justify-center shrink-0 border border-chambers-stone-200 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-chambers-navy-950 block text-[11px] uppercase tracking-wider">
                      Physical Chambers:
                    </span>
                    <span className="text-chambers-stone-900 block mt-0.5 font-medium">
                      {FIRM_DETAILS.establishedLocation}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-chambers-parchment-100 text-chambers-gold-700 flex items-center justify-center shrink-0 border border-chambers-stone-200 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-chambers-navy-950 block text-[11px] uppercase tracking-wider">
                      Docket Transmissions:
                    </span>
                    <a 
                      href={`mailto:${FIRM_DETAILS.email}`} 
                      className="text-chambers-gold-800 hover:underline block mt-0.5 font-medium"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-chambers-parchment-100 text-chambers-gold-700 flex items-center justify-center shrink-0 border border-chambers-stone-200 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-chambers-navy-950 block text-[11px] uppercase tracking-wider">
                      Consultation Hours:
                    </span>
                    <span className="text-chambers-stone-800 block mt-0.5">
                      {FIRM_DETAILS.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Regional Bench Presence Note */}
              <div className="pt-4 border-t border-chambers-stone-200 text-xs text-chambers-stone-600 bg-chambers-parchment-50 p-3.5 rounded-xl border border-chambers-stone-200">
                <span className="font-bold text-chambers-navy-950 block mb-1">Regional Chambers Benches:</span>
                • High Court of Punjab &amp; Haryana, Chandigarh (CAT &amp; Tribunals)<br />
                • Haryana District Courts (Karnal, Rewari, Gurugram, Panipat)
              </div>
            </div>

            {/* BCI Privileged Notice Plaque */}
            <div className="bg-chambers-navy-950 text-white rounded-2xl p-6 border border-chambers-navy-850 shadow-chambers-card space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-chambers-gold-400">
                <ShieldCheck className="w-4 h-4 text-chambers-gold-400" />
                <span>Statutory Privilege Notice</span>
              </div>
              <p className="text-xs text-chambers-stone-300 leading-relaxed font-light">
                Communications transmitted through this intake portal do not automatically create an advocate-client relationship. Confidential legal counsel is formally established upon preliminary case evaluation and execution of a legal engagement memorandum.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Docket Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-chambers-stone-200/90 shadow-chambers-card">
              
              {isSubmitted ? (
                /* Success Receipt Screen */
                <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-chambers-gold-700 block mb-1">
                      Docket Successfully Registered
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-chambers-navy-950">
                      Transmission Confirmed
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl bg-chambers-parchment-100 border border-chambers-stone-200 max-w-sm mx-auto">
                    <span className="text-[11px] text-chambers-stone-600 block uppercase tracking-wider">
                      Privileged Reference Identifier
                    </span>
                    <span className="font-mono text-xl font-bold text-chambers-navy-950 block mt-1 tracking-wider">
                      {referenceNumber}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-chambers-stone-600 max-w-md mx-auto leading-relaxed">
                    Your brief has been assigned to designated chamber counsel. You will receive an acknowledgment at <strong className="text-chambers-navy-950">{formData.email}</strong> within one court working day.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-chambers-parchment-200 hover:bg-chambers-parchment-300 text-chambers-navy-950 text-xs font-bold transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Docket Inquiry</span>
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
                  <div className="border-b border-chambers-stone-200 pb-4">
                    <h3 className="font-serif text-2xl font-bold text-chambers-navy-950">
                      Case Particulars &amp; Brief Intake
                    </h3>
                    <p className="text-xs text-chambers-stone-600 mt-1">
                      Fields marked with <span className="text-rose-600">*</span> are mandatory for docket evaluation.
                    </p>
                  </div>

                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first-name" className="block text-xs font-bold uppercase tracking-wider text-chambers-navy-950 mb-1.5">
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
                        className={`w-full px-4 py-2.5 text-xs bg-white border rounded-xl text-chambers-stone-900 placeholder:text-chambers-stone-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.firstName 
                            ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500' 
                            : 'border-chambers-stone-300 focus:ring-chambers-gold-500/30 focus:border-chambers-gold-600'
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
                      <label htmlFor="last-name" className="block text-xs font-bold uppercase tracking-wider text-chambers-navy-950 mb-1.5">
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
                        className={`w-full px-4 py-2.5 text-xs bg-white border rounded-xl text-chambers-stone-900 placeholder:text-chambers-stone-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.lastName 
                            ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500' 
                            : 'border-chambers-stone-300 focus:ring-chambers-gold-500/30 focus:border-chambers-gold-600'
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
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-chambers-navy-950 mb-1.5">
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
                        placeholder="rajesh.sharma@domain.com"
                        className={`w-full px-4 py-2.5 text-xs bg-white border rounded-xl text-chambers-stone-900 placeholder:text-chambers-stone-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500' 
                            : 'border-chambers-stone-300 focus:ring-chambers-gold-500/30 focus:border-chambers-gold-600'
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
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-chambers-navy-950 mb-1.5">
                        Contact Phone / Mobile <span className="text-rose-600">*</span>
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
                        className={`w-full px-4 py-2.5 text-xs bg-white border rounded-xl text-chambers-stone-900 placeholder:text-chambers-stone-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone 
                            ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500' 
                            : 'border-chambers-stone-300 focus:ring-chambers-gold-500/30 focus:border-chambers-gold-600'
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

                  {/* Practice Area & Bench Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="practice-area" className="block text-xs font-bold uppercase tracking-wider text-chambers-navy-950 mb-1.5">
                        Practice Domain
                      </label>
                      <select
                        id="practice-area"
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-white border border-chambers-stone-300 rounded-xl text-chambers-stone-900 focus:outline-none focus:ring-2 focus:ring-chambers-gold-500/30 focus:border-chambers-gold-600 transition-all cursor-pointer"
                      >
                        {PRACTICE_AREAS.map((practice) => (
                          <option key={practice.id} value={practice.id}>
                            {practice.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="jurisdiction-select" className="block text-xs font-bold uppercase tracking-wider text-chambers-navy-950 mb-1.5">
                        Primary Forum / Jurisdiction
                      </label>
                      <select
                        id="jurisdiction-select"
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-white border border-chambers-stone-300 rounded-xl text-chambers-stone-900 focus:outline-none focus:ring-2 focus:ring-chambers-gold-500/30 focus:border-chambers-gold-600 transition-all cursor-pointer"
                      >
                        <option value="delhi">New Delhi (Patiala House / Delhi High Court / Supreme Court)</option>
                        <option value="chandigarh">Chandigarh (Punjab &amp; Haryana High Court / CAT / MACT)</option>
                        <option value="haryana">Haryana District Courts (Gurugram / Rewari / Karnal / Panipat)</option>
                        <option value="tribunal">Specialized Tribunal (NCLT / NCLAT / PMLA / AFT)</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgency Checkbox */}
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isUrgent}
                        onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                        className="mt-0.5 rounded border-amber-300 text-amber-700 focus:ring-amber-500 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                          <span>Urgent Matter (Impending Arrest, Bail Hearing, or Interim Injunction within 48 Hours)</span>
                        </span>
                        <span className="text-[11px] text-amber-800 block mt-0.5">
                          Expedites your docket to the chamber litigation desk for priority review.
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* Summary Message */}
                  <div>
                    <label htmlFor="case-summary" className="block text-xs font-bold uppercase tracking-wider text-chambers-navy-950 mb-1.5">
                      Case Summary / Nature of Legal Dispute <span className="text-rose-600">*</span>
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
                      placeholder="Outline key facts, case stage (pre-filing, chargesheet, summons, appeal), existing FIR/case number if any, and relief sought..."
                      className={`w-full px-4 py-3 text-xs bg-white border rounded-xl text-chambers-stone-900 placeholder:text-chambers-stone-400 focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.message 
                          ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500' 
                          : 'border-chambers-stone-300 focus:ring-chambers-gold-500/30 focus:border-chambers-gold-600'
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-chambers-navy-950 hover:bg-chambers-navy-900 text-chambers-gold-300 font-bold text-xs uppercase tracking-wider shadow-chambers-subtle hover:shadow-chambers-card transition-all cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Registering Case Docket...</span>
                      ) : (
                        <>
                          <span>Transmit Case Intake Docket</span>
                          <Send className="w-4 h-4 text-chambers-gold-400" />
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-chambers-stone-500 block mt-2.5">
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
