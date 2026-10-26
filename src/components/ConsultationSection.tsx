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
      errs.phone = 'Please provide a valid contact number';
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
    <section id="contact" className="py-20 lg:py-28 bg-paper-200 text-navy-950 relative border-b border-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>Privileged Communication</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6 leading-tight">
            Consult Our Chambers
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
            For urgent court filings, preliminary chamber conferences, or retainer inquiries, connect with our advocates. All communications are protected under professional legal privilege.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact & Chamber Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-charcoal-200 shadow-subtle space-y-6">
              <div className="flex items-center gap-3.5 pb-5 border-b border-charcoal-200">
                <div className="w-11 h-11 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-950">Chambers Secretariat</h3>
                  <p className="text-xs text-gold-600 font-semibold uppercase tracking-wider">Patiala House Courts</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block font-semibold text-xs uppercase tracking-wide">Principal Chambers:</strong>
                    <span>{FIRM_DETAILS.establishedLocation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block font-semibold text-xs uppercase tracking-wide">Electronic Inquiries:</strong>
                    <a href={`mailto:${FIRM_DETAILS.email}`} className="text-gold-700 hover:text-gold-800 font-medium">
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block font-semibold text-xs uppercase tracking-wide">Court &amp; Chamber Hours:</strong>
                    <span>{FIRM_DETAILS.hours}</span>
                  </div>
                </div>
              </div>

              {/* Legal Confidentiality Plaque */}
              <div className="p-4 rounded-xl bg-gold-50 border border-gold-200/80 space-y-2">
                <div className="flex items-center gap-2 text-gold-900 font-bold text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4 text-gold-700" />
                  <span>Advocate-Client Privilege</span>
                </div>
                <p className="text-xs text-charcoal-700 leading-relaxed">
                  Information submitted through this portal is safeguarded by professional confidentiality standards pursuant to Section 126 of the Indian Evidence Act.
                </p>
              </div>

              <div className="text-[11px] text-charcoal-500 pt-2 border-t border-charcoal-200">
                * Submitting an inquiry does not automatically constitute a formal vakalatnama or lawyer-client relationship until mutually accepted.
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-charcoal-200 shadow-card">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center text-gold-600 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-1">
                      Privileged Inquiry Received
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-navy-950">
                      Chambers Docket Logged
                    </h3>
                  </div>

                  <div className="p-5 rounded-xl bg-paper-100 border border-charcoal-200 max-w-md mx-auto space-y-2 text-xs">
                    <div className="text-charcoal-500">Your Confidential File Reference:</div>
                    <div className="font-mono text-xl font-bold text-navy-950 tracking-wider">
                      {referenceNumber}
                    </div>
                    <p className="text-charcoal-600 pt-2 leading-relaxed">
                      Our chambers secretariat will examine case details and conflict checks. An arguing counsel or associate advocate will get in touch with you shortly.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-navy-950 text-gold-300 hover:bg-navy-900 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-subtle"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-charcoal-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-950">
                      Confidential Case Docket Intake
                    </span>
                    <span className="text-[11px] text-charcoal-500">
                      All fields marked * are required
                    </span>
                  </div>

                  {/* Honeypot anti-spam trap */}
                  <input
                    type="text"
                    name="website_pot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors({ ...errors, firstName: '' });
                        }}
                        placeholder="e.g. Rajesh"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F7F9F5] border text-xs text-charcoal-900 focus:outline-none transition-all ${
                          errors.firstName ? 'border-red-400 focus:border-red-500' : 'border-[#E1E8E4] focus:border-gold-500'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.firstName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, lastName: e.target.value });
                          if (errors.lastName) setErrors({ ...errors, lastName: '' });
                        }}
                        placeholder="e.g. Verma"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F7F9F5] border text-xs text-charcoal-900 focus:outline-none transition-all ${
                          errors.lastName ? 'border-red-400 focus:border-red-500' : 'border-[#E1E8E4] focus:border-gold-500'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.lastName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="rajesh@domain.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F7F9F5] border text-xs text-charcoal-900 focus:outline-none transition-all ${
                          errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E1E8E4] focus:border-gold-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+91 98110 00000"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#F7F9F5] border text-xs text-charcoal-900 focus:outline-none transition-all ${
                          errors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#E1E8E4] focus:border-gold-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Practice Area & Jurisdiction Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Primary Practice Domain
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F7F9F5] border border-[#E1E8E4] text-xs text-charcoal-900 focus:border-gold-500 focus:outline-none transition-all"
                      >
                        {PRACTICE_AREAS.map((practice) => (
                          <option key={practice.id} value={practice.id}>
                            {practice.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Judicial Jurisdiction
                      </label>
                      <select
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F7F9F5] border border-[#E1E8E4] text-xs text-charcoal-900 focus:border-gold-500 focus:outline-none transition-all"
                      >
                        <option value="delhi">Delhi (Supreme Court / High Court / Patiala House / District Courts)</option>
                        <option value="chandigarh">Chandigarh (High Court &amp; Central Administrative Tribunal)</option>
                        <option value="haryana">Haryana District Courts (Karnal, Rewari, Gurugram, etc.)</option>
                        <option value="other">Other / Appellate Tribunal / NCLT</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgent Listing Notice Flag */}
                  <div className="p-3.5 rounded-xl bg-[#F7F9F5] border border-[#E1E8E4] flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="isUrgent"
                      checked={formData.isUrgent}
                      onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                      className="w-4 h-4 rounded text-gold-600 focus:ring-gold-500 border-gray-300"
                    />
                    <label htmlFor="isUrgent" className="text-xs text-charcoal-800 cursor-pointer select-none">
                      <strong className="text-navy-950 font-semibold">Priority Matter:</strong> Requires urgent listing, anticipatory bail, stay mention, or custody appearance.
                    </label>
                  </div>

                  {/* Message / Brief Description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                      Summary of Legal Matter / Case Facts *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Please outline the key facts, parties involved, current stage of the dispute, or upcoming hearing dates..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#F7F9F5] border text-xs text-charcoal-900 focus:outline-none transition-all ${
                        errors.message ? 'border-red-400 focus:border-red-500' : 'border-[#E1E8E4] focus:border-gold-500'
                      }`}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <p className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      ) : (
                        <span className="text-[11px] text-charcoal-400">
                          Strictly privileged and treated with utmost confidentiality.
                        </span>
                      )}
                      <span className="text-[11px] text-charcoal-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-subtle hover:shadow-premium flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Privileged Docket...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Privileged Consultation Brief</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
