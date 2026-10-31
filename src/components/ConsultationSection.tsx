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
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#088395] mb-2">
            <Mail className="w-4 h-4" />
            <span>Case Intake Registry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Initiate a Case Docket &amp; Legal Briefing
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Pursuant to Bar Council of India guidelines, consultations and matter reviews are conducted strictly upon prior appointment. Please complete the confidential intake docket below.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Chambers Dispatch Ledger */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#088395] block">
                  Primary Chambers Seat
                </span>
                <span className="text-xl font-bold text-slate-900 block">
                  {FIRM_DETAILS.establishedLocation}
                </span>
                <p className="text-xs text-slate-500 pt-1">
                  Opposite National Gallery of Modern Art, New Delhi – 110001
                </p>
              </div>

              <div className="space-y-4 text-xs pt-4 border-t border-slate-200">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                    Direct Registry Email
                  </span>
                  <a 
                    href={`mailto:${FIRM_DETAILS.email}`}
                    className="font-bold text-slate-900 text-sm hover:text-[#088395] transition-colors"
                  >
                    {FIRM_DETAILS.email}
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                    Chambers Operating Hours
                  </span>
                  <span className="font-semibold text-slate-900 block">
                    {FIRM_DETAILS.hours}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Emergency remand and bail representations available round-the-clock upon verification.
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                    Regional Litigation Benches
                  </span>
                  <span className="text-slate-700 block leading-relaxed">
                    Punjab &amp; Haryana High Court at Chandigarh • District Sessions across Gurugram, Rewari, Karnal &amp; Panipat.
                  </span>
                </div>
              </div>

              {/* Statutory Privilege Box */}
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#088395]">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Statutory Attorney-Client Privilege</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All factual particulars, files, and case notes submitted via this docket are privileged communications protected under Sections 126–129 of the Indian Evidence Act, 1872.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Case Submission Form */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 bg-white rounded-2xl p-8 sm:p-10 shadow-sm relative">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 bg-teal-50 text-[#088395] border border-teal-200 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#088395] block mb-1">
                      Docket Registration Confirmed
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      Briefing Received &amp; Docketed
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Your legal matter summary has been assigned to the relevant arguing counsel for preliminary conflict check and review.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-sm mx-auto text-center space-y-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block">
                      Assigned Case Reference:
                    </span>
                    <span className="font-mono text-xl font-bold text-[#088395] tracking-wider block">
                      {referenceNumber}
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#088395] hover:bg-[#05626e] text-white text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Docket</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-50 border text-slate-900 focus:outline-none transition-colors ${
                          errors.firstName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#088395] focus:bg-white'
                        }`}
                        placeholder="e.g. Vikram"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.firstName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-50 border text-slate-900 focus:outline-none transition-colors ${
                          errors.lastName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#088395] focus:bg-white'
                        }`}
                        placeholder="e.g. Sharma"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.lastName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-50 border text-slate-900 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#088395] focus:bg-white'
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
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone / Mobile *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-50 border text-slate-900 focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#088395] focus:bg-white'
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="practiceArea" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Relevant Practice Area
                      </label>
                      <select
                        id="practiceArea"
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#088395]"
                      >
                        {PRACTICE_AREAS.map((practice) => (
                          <option key={practice.id} value={practice.id}>
                            {practice.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="jurisdiction" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Primary Forum / Bench
                      </label>
                      <select
                        id="jurisdiction"
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#088395]"
                      >
                        <option value="delhi">Delhi NCR (Patiala House / Delhi HC)</option>
                        <option value="chandigarh">Chandigarh (High Court / CAT / AFT)</option>
                        <option value="haryana">Haryana District Courts (Gurugram / Rewari / Karnal)</option>
                        <option value="supreme_court">Supreme Court of India</option>
                        <option value="tribunals">Special Statutory Tribunal (NCLT / PMLA)</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgent Listing Checkbox */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                    <input
                      id="isUrgent"
                      type="checkbox"
                      checked={formData.isUrgent}
                      onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                      className="mt-0.5 h-4 w-4 text-[#088395] rounded border-slate-300 focus:ring-[#088395] cursor-pointer"
                    />
                    <label htmlFor="isUrgent" className="text-xs text-slate-700 cursor-pointer">
                      <strong className="text-slate-900">Urgent Remand / Bail Listing:</strong> Check if this matter requires emergency listing within 24–48 hours.
                    </label>
                  </div>

                  {/* Matter Summary */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Factual Summary of the Legal Matter *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-50 border text-slate-900 focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#088395] focus:bg-white'
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

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500 italic">
                      Strictly confidential under Rule 36, Bar Council of India Rules.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#088395] hover:bg-[#05626e] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Encrypting &amp; Filing...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
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
