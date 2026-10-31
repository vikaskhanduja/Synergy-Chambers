import React, { useState } from 'react';
import { 
  Send, 
  Check, 
  AlertCircle, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle,
  RotateCcw,
  FileText,
  Lock
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

export const ConsultationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: 'criminal-litigation',
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
      practiceArea: 'criminal-litigation',
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
      className="py-24 lg:py-32 bg-atelier-bone text-atelier-black border-b border-atelier-sand relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Archival Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-16 border-b border-atelier-sand/80 text-[10.5px] uppercase tracking-loose-editorial font-bold text-atelier-taupe">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-atelier-bronze rounded-full" aria-hidden="true" />
            <span className="text-atelier-carbon">Official Case Intake Registry</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Privileged Communication • IEA Sections 126–129</span>
            <span className="hidden md:inline text-atelier-sand">|</span>
            <span className="hidden md:inline">Confidential Case Docket</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 
            id="consultation-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.15] font-medium tracking-tight text-atelier-black"
          >
            Initiate a Case Docket &amp; Legal Briefing.<br />
            <span className="italic font-normal text-atelier-slate">
              Direct communication with chambers counsel. Every disclosure strictly privileged.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-atelier-slate leading-relaxed font-normal">
            Pursuant to Bar Council of India guidelines, consultations and matter reviews are conducted strictly upon prior appointment. Please complete the confidential intake docket below to schedule an initial consultation.
          </p>
        </div>

        {/* Asymmetrical Broadsheet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start border-t border-atelier-sand pt-12">
          
          {/* Left Column: Official Chambers Dispatch Ledger */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[11px] uppercase tracking-loose-editorial font-bold text-atelier-bronze pb-3 border-b border-atelier-sand">
              Institutional Dispatch Records
            </div>

            <div className="bg-atelier-fog border border-atelier-sand p-7 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-taupe block">
                  Primary Chambers Seat
                </span>
                <span className="font-serif text-xl font-medium text-atelier-black block">
                  {FIRM_DETAILS.establishedLocation}
                </span>
                <p className="text-xs text-atelier-slate pt-1">
                  Opposite National Gallery of Modern Art, New Delhi – 110001
                </p>
              </div>

              <div className="space-y-4 text-xs pt-4 border-t border-atelier-sand">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-taupe block mb-1">
                    Direct Chambers Registry Email
                  </span>
                  <a 
                    href={`mailto:${FIRM_DETAILS.email}`}
                    className="font-semibold text-atelier-black text-sm hover:text-atelier-bronze transition-colors"
                  >
                    {FIRM_DETAILS.email}
                  </a>
                  <span className="text-[11px] text-atelier-slate block mt-0.5">
                    Formal briefs &amp; court documents may be served here.
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-taupe block mb-1">
                    Chambers Operating Hours
                  </span>
                  <span className="font-semibold text-atelier-black block">
                    {FIRM_DETAILS.hours}
                  </span>
                  <span className="text-[11px] text-atelier-slate block mt-0.5">
                    Emergency remand and bail representations available round-the-clock upon verification.
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-taupe block mb-1">
                    Regional Litigation Benches
                  </span>
                  <span className="text-atelier-carbon block leading-relaxed">
                    High Court of Punjab &amp; Haryana, Chandigarh • District &amp; Sessions Courts across Gurugram, Rewari, Karnal &amp; Panipat.
                  </span>
                </div>
              </div>

              {/* Statutory Privilege Box */}
              <div className="p-4 bg-atelier-bone border-l-2 border-atelier-bronze border-y border-r border-atelier-sand/80 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-atelier-black">
                  <Lock className="w-3.5 h-3.5 text-atelier-bronze" />
                  <span>Statutory Attorney-Client Privilege</span>
                </div>
                <p className="text-xs text-atelier-slate leading-relaxed">
                  All factual particulars, digital files, and case notes submitted via this docket are privileged communications protected under Sections 126–129 of the Indian Evidence Act, 1872.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Case Submission Form */}
          <div className="lg:col-span-7">
            <div className="border border-atelier-sand bg-atelier-fog p-8 sm:p-10 shadow-sm relative">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-6 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-atelier-carbon text-atelier-gold flex items-center justify-center mx-auto border border-atelier-sand">
                    <Check className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-loose-editorial text-atelier-bronze block mb-1">
                      DOCKET REGISTRATION CONFIRMED
                    </span>
                    <h3 className="font-serif text-3xl font-medium text-atelier-black">
                      Briefing Received &amp; Docketed
                    </h3>
                    <p className="text-sm text-atelier-slate max-w-md mx-auto mt-2 leading-relaxed">
                      Your legal matter summary has been encrypted and assigned to the relevant arguing counsel for preliminary conflict check and review.
                    </p>
                  </div>

                  <div className="p-5 bg-atelier-bone border border-atelier-sand max-w-sm mx-auto text-center space-y-1">
                    <span className="text-[10.5px] uppercase font-bold tracking-wider text-atelier-taupe block">
                      Assigned Case Reference:
                    </span>
                    <span className="font-mono text-xl font-bold text-atelier-bronze tracking-wider block">
                      {referenceNumber}
                    </span>
                    <span className="text-[11px] text-atelier-slate block">
                      Please quote this reference in all communications.
                    </span>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-atelier-carbon hover:bg-atelier-black text-atelier-bone text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-atelier-gold" />
                      <span>Submit Another Case Docket</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Honeypot Spam Trap */}
                  <input
                    type="text"
                    name="website_url_hp"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    className="sr-only"
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between pb-4 border-b border-atelier-sand">
                    <span className="text-[10px] uppercase font-bold tracking-loose-editorial text-atelier-bronze">
                      Case Filing Intake Docket
                    </span>
                    <span className="text-[10px] text-atelier-taupe uppercase font-semibold">
                      * Mandatory Fields
                    </span>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-atelier-carbon mb-1.5">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs bg-atelier-bone border text-atelier-black focus:outline-none transition-colors ${
                          errors.firstName ? 'border-red-600 bg-red-50/20' : 'border-atelier-sand focus:border-atelier-bronze'
                        }`}
                        placeholder="e.g., Vikram"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.firstName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-atelier-carbon mb-1.5">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs bg-atelier-bone border text-atelier-black focus:outline-none transition-colors ${
                          errors.lastName ? 'border-red-600 bg-red-50/20' : 'border-atelier-sand focus:border-atelier-bronze'
                        }`}
                        placeholder="e.g., Sharma"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.lastName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-atelier-carbon mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs bg-atelier-bone border text-atelier-black focus:outline-none transition-colors ${
                          errors.email ? 'border-red-600 bg-red-50/20' : 'border-atelier-sand focus:border-atelier-bronze'
                        }`}
                        placeholder="client@domain.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-atelier-carbon mb-1.5">
                        Phone / Mobile *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs bg-atelier-bone border text-atelier-black focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-600 bg-red-50/20' : 'border-atelier-sand focus:border-atelier-bronze'
                        }`}
                        placeholder="+91 98XXX XXXXX"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Practice Domain & Jurisdiction */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="practiceArea" className="block text-xs font-bold uppercase tracking-wider text-atelier-carbon mb-1.5">
                        Relevant Practice Area
                      </label>
                      <select
                        id="practiceArea"
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-atelier-bone border border-atelier-sand text-atelier-black focus:outline-none focus:border-atelier-bronze"
                      >
                        {PRACTICE_AREAS.map((practice) => (
                          <option key={practice.id} value={practice.id}>
                            {practice.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="jurisdiction" className="block text-xs font-bold uppercase tracking-wider text-atelier-carbon mb-1.5">
                        Primary Forum / Bench
                      </label>
                      <select
                        id="jurisdiction"
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-atelier-bone border border-atelier-sand text-atelier-black focus:outline-none focus:border-atelier-bronze"
                      >
                        <option value="delhi">Delhi NCR (Patiala House / Delhi HC / Special Courts)</option>
                        <option value="chandigarh">Chandigarh (High Court / CAT / AFT)</option>
                        <option value="haryana">Haryana District Courts (Gurugram / Rewari / Karnal / Panipat)</option>
                        <option value="supreme_court">Supreme Court of India (Appellate Jurisdiction)</option>
                        <option value="tribunals">Special Statutory Tribunal (NCLT / NCLAT / PMLA / SAFEMA)</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgent Relief Checkbox */}
                  <div className="p-3.5 bg-atelier-bone border border-atelier-sand/80 flex items-start gap-3">
                    <input
                      id="isUrgent"
                      type="checkbox"
                      checked={formData.isUrgent}
                      onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                      className="mt-0.5 h-4 w-4 border-atelier-sand text-atelier-carbon focus:ring-atelier-bronze cursor-pointer"
                    />
                    <label htmlFor="isUrgent" className="text-xs text-atelier-carbon cursor-pointer">
                      <strong className="text-atelier-black">Urgent Courtroom Listing / Remand Matter:</strong> Check if this matter requires emergency anticipatory bail, remand defense, or urgent stay relief within 24–48 hours.
                    </label>
                  </div>

                  {/* Matter Summary */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-atelier-carbon mb-1.5">
                      Factual Summary of the Legal Matter *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-atelier-bone border text-atelier-black focus:outline-none transition-colors ${
                        errors.message ? 'border-red-600 bg-red-50/20' : 'border-atelier-sand focus:border-atelier-bronze'
                      }`}
                      placeholder="Please summarize the essential facts, ongoing FIR/complaint details, current stage of proceedings, and specific legal relief sought..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-[11px] text-atelier-taupe font-serif italic">
                      Strictly confidential pursuant to Rule 36, Bar Council of India Rules.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-atelier-carbon hover:bg-atelier-black disabled:opacity-50 text-atelier-bone text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Encrypting &amp; Filing...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-atelier-gold" />
                          <span>Submit Legal Docket</span>
                        </>
                      )}
                    </button>
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
