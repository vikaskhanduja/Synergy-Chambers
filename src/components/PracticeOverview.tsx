import React from 'react';
import { 
  ShieldAlert, 
  Scale, 
  Gavel, 
  Building2, 
  Home, 
  Landmark, 
  FileCheck2, 
  Briefcase,
  Award,
  Users2,
  FolderCheck,
  CheckCircle2
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';

interface PracticeOverviewProps {
  onSelectPractice: (id: string) => void;
}

export const PracticeOverview: React.FC<PracticeOverviewProps> = ({ onSelectPractice }) => {
  const domains = [
    {
      id: 'criminal-litigation',
      title: 'Criminal Trial & Bail',
      desc: 'Bail, Remand & BNS Trial Defense',
      icon: Scale,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      id: 'white-collar-crimes',
      title: 'PMLA & Financial Crimes',
      desc: 'ED, CBI & Serious Fraud Defense',
      icon: ShieldAlert,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      id: 'criminal-litigation',
      title: 'NDPS Special Trials',
      desc: 'Section 50 Compliance & Commercial Quantity',
      icon: Gavel,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      id: 'corporate-commercial',
      title: 'Corporate & NCLT',
      desc: 'IBC Insolvency & Corporate Advisory',
      icon: Building2,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    },
    {
      id: 'property-disputes',
      title: 'Civil & Property Trials',
      desc: 'Title Suits, Injunctions & Partition',
      icon: Home,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      id: 'white-collar-crimes',
      title: 'Cyber & Digital Evidence',
      desc: 'Section 65B Evidence & Cyber Fraud',
      icon: FileCheck2,
      color: 'bg-orange-50 text-orange-600 border-orange-100',
    },
    {
      id: 'civil-litigation',
      title: 'High Court Writs',
      desc: 'Articles 226 & 227 Constitutional Writs',
      icon: Landmark,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      id: 'arbitration-adr',
      title: 'Commercial Arbitration',
      desc: 'Domestic & Section 9/11/34 Petitions',
      icon: Briefcase,
      color: 'bg-teal-50 text-teal-600 border-teal-100',
    },
  ];

  const stats = [
    {
      number: '15+',
      label: 'Years at the Bar',
      sublabel: 'Dedicated Courtroom Litigation',
    },
    {
      number: '500+',
      label: 'Litigations Handled',
      sublabel: 'Across Criminal & Civil Benches',
    },
    {
      number: '10+',
      label: 'Courts & Tribunals',
      sublabel: 'Supreme Court, High Courts & Tribunals',
    },
    {
      number: '100%',
      label: 'Direct Arguing Counsel',
      sublabel: 'Zero Associate Briefing Dilution',
    },
  ];

  return (
    <div className="w-full">
      
      {/* 8-Card Grid Section (Directly matches the screenshot's 'Industries We Serve') */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Centered Title */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#088395] mb-2">
              <Scale className="w-4 h-4" />
              <span>Our Practice Domains</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Legal Practice Domains We Serve
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Comprehensive trial advocacy and special statutory defence delivered by seasoned arguing counsel.
            </p>
          </div>

          {/* 8 White Square Cards (4 columns x 2 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => onSelectPractice(item.id)}
                  className="bg-white border border-slate-200 hover:border-[#088395]/40 rounded-xl p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Pastel Icon Box */}
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#088395] transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Vibrant Teal Statistics Bar (Directly matches the screenshot's teal stats strip) */}
      <section className="bg-[#088395] text-white py-12 border-y border-[#066f7f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                {/* White Outline Circle */}
                <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center shrink-0 bg-white/10 group-hover:bg-white group-hover:text-[#088395] transition-all">
                  <span className="font-extrabold text-lg sm:text-xl">
                    {stat.number}
                  </span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-teal-100 mt-0.5">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
