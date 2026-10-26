import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Lock,
  ArrowRight,
  AlertTriangle
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
    honeypot: '' // spam protection trap
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
      errs.message = 'Please provide brief details of your matter (minimum 15 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Spam bot honeypot detection
    if (formData.honeypot) {
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomRef = 'SC-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceNumber(randomRef);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FDFBF7] text-navy-950 relative border-b border-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>Confidential Inquiry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            For legal inquiries, court representation, or preliminary consultation, reach out to Synergy Chambers. Our team reviews all matters with complete professional confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Chamber Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-charcoal-200 shadow-subtle space-y-6">
              <h3 className="font-serif text-2xl font-bold text-navy-950">
                Principal Chambers
              </h3>
              
              <div className="space-y-5 text-sm text-charcoal-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-50 border border-gold-500/30 flex items-center justify-center text-navy-900 shrink-0">
                    <MapPin className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-navy-950 block">Address</span>
                    <span className="text-charcoal-800 font-medium">{FIRM_DETAILS.establishedLocation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-50 border border-gold-500/30 flex items-center justify-center text-navy-900 shrink-0">
                    <Mail className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-navy-950 block">Electronic Mail</span>
                    <a 
                      href={`mailto:${FIRM_DETAILS.email}`}
                      className="text-gold-600 hover:text-gold-700 font-medium transition-colors"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-50 border border-gold-500/30 flex items-center justify-center text-navy-900 shrink-0">
                    <Clock className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-navy-950 block">Chambers Hours</span>
                    <span className="text-charcoal-800">{FIRM_DETAILS.hours}</span>
                    <span className="text-xs text-charcoal-500 block mt-0.5">Emergency Bail &amp; Injunction Desk available</span>
                  </div>
                </div>
              </div>

              {/* Confidentiality Commitment */}
              <div className="p-4 rounded-xl bg-navy-50/80 border border-navy-100 flex items-start gap-3 text-xs text-charcoal-700">
                <Lock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Advocate-Client Privilege:</strong> All communications transmitted through this portal are held in strict legal confidence pursuant to Section 126 of the Indian Evidence Act.
                </span>
              </div>
            </div>

            {/* Regional Presence Summary */}
            <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-7 border border-gold-500/20 shadow-md space-y-3">
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span>Regional Bench Availability</span>
              </h4>
              <p className="text-xs text-charcoal-300 leading-relaxed">
                Matter can be filed and represented before:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-center">
                <div className="bg-navy-900 p-2 rounded-lg border border-navy-800 text-xs font-semibold text-charcoal-100">
                  New Delhi
                </div>
                <div className="bg-navy-900 p-2 rounded-lg border border-navy-800 text-xs font-semibold text-charcoal-100">
                  Chandigarh
                </div>
                <div className="bg-navy-900 p-2 rounded-lg border border-navy-800 text-xs font-semibold text-charcoal-100">
                  Haryana
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-charcoal-200 shadow-subtle relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy-950">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-charcoal-600 max-w-md mx-auto mt-2">
                      Thank you for contacting Synergy Chambers. An advocate will review your matter and contact you promptly.
                    </p>
                  </div>
                  <div className="inline-block bg-charcoal-100 px-4 py-2 rounded-lg text-xs font-mono text-charcoal-800 border border-charcoal-200">
                    Matter Tracking Ref: <strong>{referenceNumber}</strong>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
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
                      }}
                      className="text-xs font-semibold text-navy-900 hover:text-gold-600 underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot field for bot filtering */}
                  <input
                    type="text"
                    name="website_field"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="flex items-center justify-between border-b border-charcoal-100 pb-4">
                    <h3 className="font-serif text-xl font-bold text-navy-950">
                      Consultation Request Form
                    </h3>
                    <span className="text-[11px] text-charcoal-500">* Required Fields</span>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors({ ...errors, firstName: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 text-navy-950 ${
                          errors.firstName ? 'border-red-400 bg-red-50/20' : 'border-charcoal-300'
                        }`}
                        placeholder="e.g. Rahul"
                      />
                      {errors.firstName && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, lastName: e.target.value });
                          if (errors.lastName) setErrors({ ...errors, lastName: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 text-navy-950 ${
                          errors.lastName ? 'border-red-400 bg-red-50/20' : 'border-charcoal-300'
                        }`}
                        placeholder="e.g. Sharma"
                      />
                      {errors.lastName && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 text-navy-950 ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-charcoal-300'
                        }`}
                        placeholder="name@example.com"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 text-navy-950 ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-charcoal-300'
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Practice Area & Jurisdiction Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                        Nature of Legal Matter
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border border-charcoal-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 text-navy-950"
                      >
                        {PRACTICE_AREAS.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                        Preferred Bench / Location
                      </label>
                      <select
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border border-charcoal-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 text-navy-950"
                      >
                        <option value="delhi">New Delhi (Patiala House Courts / High Court)</option>
                        <option value="chandigarh">Chandigarh (High Court / CAT)</option>
                        <option value="haryana">Haryana (District &amp; Sessions Courts)</option>
                        <option value="supreme-court">Supreme Court of India</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgent matter toggle */}
                  <div className="p-3.5 rounded-xl bg-gold-50/60 border border-gold-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-gold-700 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-navy-950 block">Urgent Court Listing or Bail Matter</span>
                        <span className="text-[11px] text-charcoal-600">Requires emergency advocate review within 24 hours</span>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isUrgent}
                        onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-charcoal-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-charcoal-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold-600"></div>
                    </label>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Summary of Legal Matter *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 text-navy-950 ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-charcoal-300'
                      }`}
                      placeholder="Please outline the key dispute, relevant court forum, or legal relief sought..."
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-md bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-gold-500/20 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Reviewing and Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Confidential Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-charcoal-400">
                    By submitting, you acknowledge that transmission does not automatically create an advocate-client retainer until formal acceptance.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
