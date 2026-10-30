import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  Filter, 
  Award, 
  Scale, 
  ChevronRight,
  UserCheck
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
      ...FOUNDERS.map(l => ({ ...l, benchCategory: 'founders' as BenchFilter, benchLabel: 'Founding Partner • Delhi' })),
      ...CHANDIGARH_TEAM.map(l => ({ ...l, benchCategory: 'chandigarh' as BenchFilter, benchLabel: 'High Court Counsel • Chandigarh' })),
      ...HARYANA_TEAM.map(l => ({ ...l, benchCategory: 'haryana' as BenchFilter, benchLabel: 'District Practice • Haryana' }))
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
      aria-label="Advocates & Chambers Leadership"
      className="py-20 lg:py-28 bg-chambers-parchment-50 border-b border-chambers-stone-200 relative overflow-hidden"
    >
      {/* Anchor targets for legacy links */}
      <div id="founders" className="sr-only" />
      <div id="regional-team" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-chambers-parchment-200/70 border border-chambers-stone-300 text-chambers-gold-800 text-[11px] font-bold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5 text-chambers-gold-700" />
              <span>Advocates &amp; Legal Leadership</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chambers-navy-950 tracking-tight leading-tight">
              Our Advocates &amp; Counsel Directory
            </h2>
            <p className="mt-4 text-base sm:text-lg text-chambers-stone-700 leading-relaxed font-normal">
              Directed by our founding trial advocates at Patiala House Courts in New Delhi, and reinforced by dedicated counsel across the High Court of Punjab &amp; Haryana and district sessions benches.
            </p>
          </div>

          {/* Quick stats counter */}
          <div className="flex items-center gap-6 p-4 rounded-xl bg-white border border-chambers-stone-200 shadow-chambers-subtle self-start lg:self-auto shrink-0">
            <div>
              <span className="block font-serif text-2xl font-bold text-chambers-navy-950">9</span>
              <span className="text-[11px] text-chambers-stone-600 font-medium uppercase tracking-wider">Advocates</span>
            </div>
            <div className="w-[1px] h-8 bg-chambers-stone-200" />
            <div>
              <span className="block font-serif text-2xl font-bold text-chambers-navy-950">3</span>
              <span className="text-[11px] text-chambers-stone-600 font-medium uppercase tracking-wider">Regional Benches</span>
            </div>
            <div className="w-[1px] h-8 bg-chambers-stone-200" />
            <div>
              <span className="block font-serif text-2xl font-bold text-chambers-navy-950">100%</span>
              <span className="text-[11px] text-chambers-stone-600 font-medium uppercase tracking-wider">Trial Experience</span>
            </div>
          </div>
        </div>

        {/* Directory Controls: Bench Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-chambers-stone-200">
          
          {/* Bench Filter Navigation */}
          <div 
            role="tablist" 
            aria-label="Filter counsel by bench"
            className="flex flex-wrap items-center bg-chambers-parchment-200/80 p-1 rounded-xl border border-chambers-stone-300 gap-1"
          >
            <button
              role="tab"
              aria-selected={activeBench === 'all'}
              onClick={() => setActiveBench('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeBench === 'all'
                  ? 'bg-chambers-navy-950 text-white shadow-sm'
                  : 'text-chambers-stone-700 hover:text-chambers-navy-950 hover:bg-white/60'
              }`}
            >
              All Advocates ({allAdvocates.length})
            </button>
            <button
              role="tab"
              aria-selected={activeBench === 'founders'}
              onClick={() => setActiveBench('founders')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeBench === 'founders'
                  ? 'bg-chambers-navy-950 text-white shadow-sm'
                  : 'text-chambers-stone-700 hover:text-chambers-navy-950 hover:bg-white/60'
              }`}
            >
              Founding Partners • Delhi ({FOUNDERS.length})
            </button>
            <button
              role="tab"
              aria-selected={activeBench === 'chandigarh'}
              onClick={() => setActiveBench('chandigarh')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeBench === 'chandigarh'
                  ? 'bg-chambers-navy-950 text-white shadow-sm'
                  : 'text-chambers-stone-700 hover:text-chambers-navy-950 hover:bg-white/60'
              }`}
            >
              Chandigarh High Court ({CHANDIGARH_TEAM.length})
            </button>
            <button
              role="tab"
              aria-selected={activeBench === 'haryana'}
              onClick={() => setActiveBench('haryana')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeBench === 'haryana'
                  ? 'bg-chambers-navy-950 text-white shadow-sm'
                  : 'text-chambers-stone-700 hover:text-chambers-navy-950 hover:bg-white/60'
              }`}
            >
              Haryana District Practice ({HARYANA_TEAM.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-chambers-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by advocate, statute or forum..."
              aria-label="Search counsel directory"
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-chambers-stone-300 rounded-xl text-chambers-stone-900 placeholder:text-chambers-stone-500 focus:outline-none focus:ring-2 focus:ring-chambers-gold-500/30 focus:border-chambers-gold-600 transition-all shadow-chambers-subtle"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-chambers-stone-400 hover:text-chambers-stone-700 cursor-pointer font-bold"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Advocates Cards Grid */}
        {filteredAdvocates.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-chambers-stone-200 p-8 shadow-chambers-subtle">
            <UserCheck className="w-10 h-10 text-chambers-stone-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-chambers-navy-950 mb-1">
              No Advocates Match Your Search
            </h3>
            <p className="text-xs text-chambers-stone-600 max-w-md mx-auto mb-4">
              We couldn't find any advocate matching "{searchQuery}". Try searching for specific practice areas such as PMLA, NDPS, POCSO, Service Law, or Civil Litigation.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveBench('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-chambers-gold-800 bg-chambers-parchment-200 rounded-lg hover:bg-chambers-parchment-300 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredAdvocates.map((advocate) => {
              const isFounder = advocate.benchCategory === 'founders';

              return (
                <div
                  key={advocate.id}
                  className="group bg-white rounded-2xl border border-chambers-stone-200/90 shadow-chambers-card hover:border-chambers-gold-500/60 hover:shadow-chambers-elevated transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Top Architectural Card Banner */}
                    <div className="p-6 sm:p-7 pb-4 border-b border-chambers-stone-100">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${
                          isFounder
                            ? 'bg-chambers-navy-950 text-chambers-gold-400 border-chambers-navy-800'
                            : 'bg-chambers-parchment-100 text-chambers-stone-700 border-chambers-stone-200'
                        }`}>
                          {advocate.role}
                        </span>
                        <span className="text-[11px] text-chambers-stone-500 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-chambers-gold-600 shrink-0" />
                          <span className="truncate max-w-[140px]">{advocate.location.split('(')[0].trim()}</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-chambers-navy-950 group-hover:text-chambers-gold-800 transition-colors leading-tight">
                        {advocate.name}
                      </h3>

                      {/* Bar Admissions / Benches */}
                      {advocate.barAdmissions && advocate.barAdmissions.length > 0 && (
                        <div className="flex items-center gap-1.5 mt-2 text-xs text-chambers-stone-600">
                          <ShieldCheck className="w-3.5 h-3.5 text-chambers-gold-600 shrink-0" />
                          <span className="truncate font-medium">{advocate.barAdmissions.join(' • ')}</span>
                        </div>
                      )}
                    </div>

                    {/* Qualifications & Bio Details */}
                    <div className="p-6 sm:p-7 pt-4 space-y-4">
                      
                      {/* Academic Credentials */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-chambers-stone-500 block">
                          Qualifications &amp; Education
                        </span>
                        {advocate.qualifications.slice(0, 2).map((qual, qIdx) => (
                          <div key={qIdx} className="text-xs text-chambers-stone-800 flex items-start gap-2">
                            <BookOpen className="w-3.5 h-3.5 text-chambers-gold-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{qual}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bio Excerpt */}
                      <p className="text-xs sm:text-[13px] text-chambers-stone-600 leading-relaxed line-clamp-3">
                        {advocate.bio}
                      </p>

                      {/* Practice Focus Chips */}
                      {advocate.practiceFocus && advocate.practiceFocus.length > 0 && (
                        <div className="pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-chambers-stone-500 block mb-2">
                            Practice Domains
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {advocate.practiceFocus.slice(0, 3).map((focus, fIdx) => (
                              <span 
                                key={fIdx}
                                className="text-[11px] px-2.5 py-0.5 rounded-full bg-chambers-parchment-100 text-chambers-stone-700 border border-chambers-stone-200 font-medium"
                              >
                                {focus}
                              </span>
                            ))}
                            {advocate.practiceFocus.length > 3 && (
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-chambers-parchment-200 text-chambers-stone-600 font-medium">
                                +{advocate.practiceFocus.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Notable trial highlights (if any) */}
                      {advocate.notableHighlights && advocate.notableHighlights.length > 0 && (
                        <div className="pt-3 border-t border-chambers-stone-100 space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-chambers-gold-800 block">
                            Trial Experience
                          </span>
                          <div className="text-xs text-chambers-stone-800 font-medium flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-chambers-gold-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{advocate.notableHighlights[0]}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 sm:p-7 pt-4 bg-chambers-parchment-50/60 border-t border-chambers-stone-200 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectLawyer(advocate.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-chambers-navy-950 group-hover:text-chambers-gold-800 transition-colors cursor-pointer"
                    >
                      <span>Full Profile &amp; Case Mandates</span>
                      <ChevronRight className="w-3.5 h-3.5 text-chambers-gold-600 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={onOpenConsultation}
                      className="px-3 py-1.5 text-[11px] font-semibold text-chambers-stone-700 hover:text-chambers-navy-950 rounded-lg hover:bg-white border border-transparent hover:border-chambers-stone-300 transition-colors cursor-pointer"
                    >
                      Consult
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Chambers Coordination Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-chambers-stone-200 shadow-chambers-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-serif text-lg font-bold text-chambers-navy-950">
              Integrated Multi-Jurisdiction Trial Coordination
            </h4>
            <p className="text-xs sm:text-sm text-chambers-stone-600 leading-relaxed">
              Matters requiring coordinated filings between New Delhi trial courts and the Punjab &amp; Haryana High Court are briefed simultaneously through our integrated chambers docket system.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-chambers-navy-950 hover:bg-chambers-navy-900 text-chambers-gold-300 text-xs font-semibold shadow-chambers-subtle transition-all cursor-pointer shrink-0"
          >
            <span>Request Chambers Briefing</span>
            <ArrowRight className="w-4 h-4 text-chambers-gold-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
