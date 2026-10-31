import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Send,
  Building2,
  Scale
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: 'criminal-litigation',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.email || !inquiryData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      onOpenConsultation();
    }, 800);
  };

  return (
    <section className="relative min-h-[620px] lg:min-h-[680px] flex items-center bg-slate-900 text-white overflow-hidden">
      
      {/* Background Image with Dark Blue Corporate Overlay (Matches Screenshot) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920')`
        }}
      >
        {/* Dual gradient overlay for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/70" />
        <div className="absolute inset-0 bg-[#088395]/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Headline & Chambers Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Blue Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#088395]/30 border border-[#088395]/50 text-teal-300 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Scale className="w-3.5 h-3.5" />
              <span>Chamber No. 238 • Patiala House Courts</span>
            </div>

            {/* Massive Bold Headline (Style directly matches screenshot) */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              We Help Clients Navigate Complex Legal Disputes <span className="text-teal-400">Smarter</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
              High-stakes criminal defense, PMLA financial investigations, NDPS special trials, and High Court appellate advocacy. Grounded at Patiala House Courts in New Delhi with direct arguing counsel presence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#about"
                className="px-7 py-3.5 rounded-md bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Learn More
              </a>
              <a
                href="#practices"
                className="px-7 py-3.5 rounded-md bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Our Practice Areas
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Zero Associate Filter</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Immediate Remand &amp; Bail Intervention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Sec. 126 Evidence Act Privilege</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Semi-Transparent Consultation Card (Directly from Screenshot) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/75 backdrop-blur-md border border-white/20 rounded-2xl p-7 sm:p-8 shadow-2xl text-white">
              
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
                    Confidential Legal Docket
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-300">
                    <Lock className="w-3 h-3 text-teal-400" />
                    <span>Privileged</span>
                  </div>
                </div>
                <h3 className="font-sans text-2xl font-bold text-white mt-1">
                  Book a Consultation
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Connect directly with our courtroom trial advocates.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-teal-900/40 border border-teal-500/50 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-teal-300 mx-auto" />
                  <h4 className="font-bold text-white text-base">Inquiry Initiated</h4>
                  <p className="text-xs text-slate-200">
                    Redirecting to the comprehensive case briefing docket...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="hero-name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="hero-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-teal-400 focus:bg-white/15 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        required
                        placeholder="client@mail.com"
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-teal-400 focus:bg-white/15 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="hero-phone" className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="hero-phone"
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-teal-400 focus:bg-white/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-practice" className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Legal Domain / Matter Type
                    </label>
                    <select
                      id="hero-practice"
                      value={inquiryData.practice}
                      onChange={(e) => setInquiryData({ ...inquiryData, practice: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-white/20 text-white text-xs focus:outline-none focus:border-teal-400"
                    >
                      {PRACTICE_AREAS.map((practice) => (
                        <option key={practice.id} value={practice.id} className="bg-slate-900 text-white">
                          {practice.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-lg bg-[#088395] hover:bg-[#0aa1b7] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Request Legal Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-center text-slate-400 pt-1">
                    Rule 36 Bar Council of India compliant • Information strictly confidential.
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
