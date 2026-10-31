import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  BookOpen, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  Scale, 
  ChevronRight,
  UserCheck,
  Award,
  ExternalLink
} from 'lucide-react';
import { 
  FOUNDERS, 
  CHANDIGARH_TEAM, 
  HARYANA_TEAM, 
  Lawyer 
} from '../data/firmData';

interface AdvocatesDirectoryProps {
  onSelectLawyer: (id: string) => void;
  onOpenConsultation: () => void;
}

type BenchFilter = 'all' | 'founders' | 'chandigarh' | 'haryana';

export const AdvocatesDirectory: React.FC<AdvocatesDirectoryProps> = ({ 
  onSelectLawyer,
  onOpenConsultation 
}) => {
  const [activeBench, setActiveBench] = useState<BenchFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine all lawyers with explicit bench grouping metadata
  const allAdvocates = useMemo(() => {
    const list: (Lawyer & { benchCategory: BenchFilter; benchLabel: string })[] = [
      ...FOUNDERS.map(l => ({ ...l, benchCategory: 'founders' as BenchFilter, benchLabel: 'Founding Partner • Patiala House Delhi' })),
      ...CHANDIGARH_TEAM.map(l => ({ ...l, benchCategory: 'chandigarh' as BenchFilter, benchLabel: 'Appellate Counsel • High Court Chandigarh' })),
      ...HARYANA_TEAM.map(l => ({ ...l, benchCategory: 'haryana' as BenchFilter, benchLabel: 'District Sessions • Haryana Benches' }))
    ];
    return list;
  }, []);

  // Filter advocates based on active bench and search query
  const filteredAdvocates = useMemo(() => {
    return allAdvocates.filter(advocate => {
      const matchesBench = activeBench === 'all' || advocate.benchCategory === activeBench;
      if (!matchesBench) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchName = advocate.name.toLowerCase().includes(query);
      const matchRole = advocate.role.toLowerCase().includes(query);
      const matchLocation = advocate.location.toLowerCase().includes(query);
      const matchPractice = advocate.practiceFocus?.some(p => p.toLowerCase().includes(query));
      const matchQual = advocate.qualifications.some(q => q.toLowerCase().includes(query));

      return matchName || matchRole || matchLocation || matchPractice || matchQual;
    });
  }, [allAdvocates, activeBench, searchQuery]);

  return (
    <section 
      id="advocates" 
      aria-labelledby="advocates-heading"
      className="py-24 lg:py-32 bg-atelier-fog border-b border-atelier-sand text-atelier-black relative"
    >
      <div id="founders" className="sr-only" />
      <div id="regional-team" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Archival Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-16 border-b border-atelier-sand/80 text-[10.5px] uppercase tracking-loose-editorial font-bold text-atelier-taupe">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-atelier-bronze rounded-full" aria-hidden="true" />
            <span className="text-atelier-carbon">The Chambers Roll &amp; Bar Admissions</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Enrolled Advocates • Bar Council of Delhi &amp; Punjab/Haryana</span>
            <span className="hidden md:inline text-atelier-sand">|</span>
            <span className="hidden md:inline">9 Advocates of Record</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <h2 
              id="advocates-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.15] font-medium tracking-tight text-atelier-black"
            >
              Chambers Leadership &amp; Counsel Roster.<br />
              <span className="italic font-normal text-atelier-slate">
                Directed by trial barristers at Patiala House, reinforced across High Court &amp; Sessions benches.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-atelier-slate leading-relaxed font-normal">
              Every counsel in our chambers maintains regular physical standing before their designated benches, ensuring uncompromised courtroom advocacy from trial remands to constitutional appeals.
            </p>
          </div>

          {/* Quick Roster Ledger */}
          <div className="flex items-center gap-6 p-4 bg-atelier-bone border border-atelier-sand shadow-sm self-start lg:self-auto shrink-0">
            <div>
              <span className="block font-serif text-3xl font-medium text-atelier-black">9</span>
              <span className="text-[10px] text-atelier-taupe uppercase tracking-wider font-semibold">Active Advocates</span>
            </div>
            <div className="w-px h-8 bg-atelier-sand" />
            <div>
              <span className="block font-serif text-3xl font-medium text-atelier-bronze">3</span>
              <span className="text-[10px] text-atelier-taupe uppercase tracking-wider font-semibold">Bench Corridors</span>
            </div>
          </div>
        </div>

        {/* Bench Filter & Registry Lookup Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 mb-12 border-b border-atelier-sand">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Counsel (9)' },
              { id: 'founders', label: 'Patiala House Founders (3)' },
              { id: 'chandigarh', label: 'High Court Chandigarh (2)' },
              { id: 'haryana', label: 'District Benches Haryana (4)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveBench(tab.id as BenchFilter)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  activeBench === tab.id
                    ? 'bg-atelier-carbon text-atelier-bone border-atelier-carbon shadow-xs'
                    : 'bg-atelier-fog text-atelier-slate border-atelier-sand hover:border-atelier-taupe hover:text-atelier-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-atelier-taupe absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search counsel by name, seat, or focus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-atelier-bone border border-atelier-sand text-atelier-black placeholder:text-atelier-taupe focus:outline-none focus:border-atelier-bronze"
            />
          </div>
        </div>

        {/* SECTION 1: THE FOUNDING PARTNERS (Editorial Presentation) */}
        {(activeBench === 'all' || activeBench === 'founders') && (
          <div className="mb-16">
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-atelier-sand">
              <span className="text-[11px] uppercase tracking-loose-editorial font-bold text-atelier-bronze">
                Founding Partners &amp; Patiala House Directorate
              </span>
              <span className="text-xs text-atelier-taupe">
                Chamber No. 238, New Delhi
              </span>
            </div>

            <div className="space-y-8">
              {FOUNDERS.filter(f => {
                if (!searchQuery.trim()) return true;
                const q = searchQuery.toLowerCase().trim();
                return f.name.toLowerCase().includes(q) || f.role.toLowerCase().includes(q) || f.practiceFocus?.some(p => p.toLowerCase().includes(q));
              }).map((founder) => (
                <div 
                  key={founder.id}
                  className="bg-atelier-bone border border-atelier-sand p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Portrait Column */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="aspect-[4/5] bg-atelier-sand/30 border border-atelier-sand overflow-hidden relative group">
                      <img
                        src={founder.imageUrl}
                        alt={`Portrait of ${founder.name}, ${founder.role} at Synergy Chambers`}
                        className="w-full h-full object-cover grayscale-[15%] contrast-[105%] group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-atelier-carbon/90 text-atelier-bone text-[9.5px] uppercase tracking-widest font-bold px-2 py-0.5 border border-atelier-sand/30">
                        Founding Partner
                      </div>
                    </div>

                    <div className="p-3 bg-atelier-fog border border-atelier-sand/80 space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-taupe block">
                        Bar Enrollment:
                      </span>
                      <span className="text-xs font-semibold text-atelier-black block">
                        {founder.barAdmissions?.join(' • ') || 'Bar Council of Delhi'}
                      </span>
                      <span className="text-[11px] text-atelier-slate block">
                        {founder.location}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Bio Column */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="pb-4 border-b border-atelier-sand">
                      <span className="text-[11px] uppercase tracking-loose-editorial font-bold text-atelier-bronze block mb-1">
                        {founder.role}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl font-normal text-atelier-black">
                        {founder.name}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-atelier-slate">
                        {founder.qualifications.map((q, qIdx) => (
                          <span key={qIdx} className="font-medium">
                            {q}{qIdx < founder.qualifications.length - 1 ? ' •' : ''}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm sm:text-[15px] text-atelier-carbon leading-relaxed font-normal">
                      {founder.bio}
                    </p>

                    {/* Specialized Practice Remit */}
                    {founder.practiceFocus && (
                      <div className="space-y-2.5 pt-2">
                        <span className="text-[10.5px] uppercase font-bold tracking-wider text-atelier-taupe block">
                          Courtroom Practice Remit &amp; Focus:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {founder.practiceFocus.map((focus, fIdx) => (
                            <span 
                              key={fIdx}
                              className="px-2.5 py-1 text-xs bg-atelier-fog border border-atelier-sand text-atelier-slate font-medium"
                            >
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action */}
                    <div className="pt-4 border-t border-atelier-sand flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <button
                        onClick={() => onSelectLawyer(founder.id)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-atelier-carbon hover:bg-atelier-black text-atelier-bone text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer self-start"
                      >
                        <span>Examine Full Profile &amp; Credentials</span>
                        <ArrowRight className="w-3.5 h-3.5 text-atelier-gold" />
                      </button>

                      <a
                        href="#contact"
                        className="text-xs font-bold uppercase tracking-wider text-atelier-bronze hover:underline"
                      >
                        Request Case Briefing
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: REGIONAL HIGH COURT & DISTRICT COUNSEL (Archival Broadsheet Roll) */}
        {(activeBench === 'all' || activeBench === 'chandigarh' || activeBench === 'haryana') && (
          <div>
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-atelier-sand">
              <span className="text-[11px] uppercase tracking-loose-editorial font-bold text-atelier-bronze">
                Regional High Court &amp; District Sessions Counsel
              </span>
              <span className="text-xs text-atelier-taupe">
                Chandigarh Appellate Division • Haryana Trial Benches
              </span>
            </div>

            <div className="border border-atelier-sand bg-atelier-bone overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-atelier-sand bg-atelier-fog text-[10px] uppercase tracking-loose-editorial font-bold text-atelier-taupe">
                      <th className="py-4 px-6">Counsel</th>
                      <th className="py-4 px-6">Role &amp; Jurisdiction</th>
                      <th className="py-4 px-6">Bar Enrollment</th>
                      <th className="py-4 px-6">Qualifications &amp; Remit</th>
                      <th className="py-4 px-6 text-right">Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-atelier-sand/70 text-xs">
                    {[...CHANDIGARH_TEAM, ...HARYANA_TEAM].filter(counsel => {
                      if (activeBench === 'chandigarh' && !CHANDIGARH_TEAM.some(c => c.id === counsel.id)) return false;
                      if (activeBench === 'haryana' && !HARYANA_TEAM.some(c => c.id === counsel.id)) return false;

                      if (!searchQuery.trim()) return true;
                      const q = searchQuery.toLowerCase().trim();
                      return (
                        counsel.name.toLowerCase().includes(q) ||
                        counsel.role.toLowerCase().includes(q) ||
                        counsel.location.toLowerCase().includes(q) ||
                        counsel.practiceFocus?.some(p => p.toLowerCase().includes(q))
                      );
                    }).map((counsel) => (
                      <tr 
                        key={counsel.id}
                        className="hover:bg-atelier-fog transition-colors"
                      >
                        <td className="py-5 px-6 font-serif text-base font-medium text-atelier-black whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <img
                              src={counsel.imageUrl}
                              alt={counsel.name}
                              className="w-10 h-10 object-cover rounded-none border border-atelier-sand grayscale"
                              loading="lazy"
                            />
                            <div>
                              <span>{counsel.name}</span>
                              <span className="block text-[10px] text-atelier-taupe uppercase font-sans">
                                {counsel.location}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-atelier-slate">
                          <span className="font-semibold text-atelier-carbon block">{counsel.role}</span>
                          <span className="text-[11px] text-atelier-taupe">{counsel.location}</span>
                        </td>
                        <td className="py-5 px-6 font-mono text-[11px] text-atelier-carbon whitespace-nowrap">
                          {counsel.barAdmissions?.join(' • ') || 'Punjab & Haryana Bar'}
                        </td>
                        <td className="py-5 px-6 text-atelier-slate max-w-xs">
                          <div className="space-y-1">
                            <span className="block text-[11px] font-medium text-atelier-black">
                              {counsel.qualifications.join(' • ')}
                            </span>
                            {counsel.practiceFocus && (
                              <span className="block text-[10.5px] text-atelier-taupe">
                                {counsel.practiceFocus.slice(0, 3).join(', ')}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-5 px-6 text-right whitespace-nowrap">
                          <button
                            onClick={() => onSelectLawyer(counsel.id)}
                            className="px-3.5 py-1.5 bg-atelier-fog hover:bg-atelier-carbon hover:text-atelier-bone border border-atelier-sand text-atelier-black text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Examine Roll
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
