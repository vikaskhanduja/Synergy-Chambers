import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export const Accreditations: React.FC = () => {
  const badges = [
    {
      name: 'Bar Council of Delhi',
      code: 'BCD Enrolment',
      color: 'border-blue-600 bg-blue-50 text-blue-700',
    },
    {
      name: 'Bar Council of Punjab & Haryana',
      code: 'BCPH Enrolment',
      color: 'border-emerald-600 bg-emerald-50 text-emerald-700',
    },
    {
      name: 'Supreme Court Bar Association',
      code: 'SCBA Member',
      color: 'border-amber-600 bg-amber-50 text-amber-700',
    },
    {
      name: 'Delhi High Court Bar Association',
      code: 'DHCBA Member',
      color: 'border-cyan-600 bg-cyan-50 text-cyan-700',
    },
    {
      name: 'Patiala House Courts Bar',
      code: 'PHCBA Member',
      color: 'border-indigo-600 bg-indigo-50 text-indigo-700',
    },
    {
      name: 'New Delhi Bar Association',
      code: 'NDBA Member',
      color: 'border-rose-600 bg-rose-50 text-rose-700',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#088395] block">
            Statutory Enrolments &amp; Bar Affiliations
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mt-1">
            Recognized by Premier Bar Councils &amp; Associations
          </h3>
        </div>

        {/* 6 Shield Badge Icons (Directly Matches Screenshot Badge Strip) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-center justify-center">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className={`rounded-xl border-2 p-4 flex flex-col items-center justify-center text-center transition-all hover:scale-105 shadow-sm ${badge.color}`}
            >
              <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center mb-2 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold leading-tight block">
                {badge.name}
              </span>
              <span className="text-[10px] opacity-80 mt-1 uppercase font-semibold">
                {badge.code}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
