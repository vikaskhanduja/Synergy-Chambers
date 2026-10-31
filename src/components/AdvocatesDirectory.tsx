import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
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
      aria-labelledby="advocates-heading"
      className="py-20 lg:py-28 bg-chalk-100 border-b border-chalk-200 text-ink-900"
    >
      {/* Anchor targets for legacy links */}
      <div id="founders" className="sr-only" />
      <div id="regional-team" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-aurum-600" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-aurum-700">
                Advocates &amp; Court Counsel
              </span>
            </div>
            <h2 
              id="advocates-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-950 leading-tight"
            >
              Chambers Leadership &amp; Counsel Roster
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed font-normal">
              Directed by our founding trial advocates at Patiala House Courts in New Delhi, and reinforced by dedicated counsel across the High Court of Punjab &amp; Haryana and district sessions benches.
            </p>
          </div>

          {/* Quick Roster Ledger */}
          <div className="flex items-center gap-6 p-4 bg-white border border-chalk-300 shadow-subtle self-start lg:self-auto shrink-0">
            <div>
              <span className="block font-serif text-2xl font-bold text-forest-950">9</span>
              <span className="text-[10px] text-ink-500 uppercase tracking-wider font-semibold">Advocates</span>
            </div>
            <div className="w-px h-8 bg-chalk-200" />
            <div>
              <span className="block font-serif text-2xl font-bold text-forest-950">3</span>
              <span className="text-[10px] text-ink-500 uppercase tracking-wider font-semibold">Regional Benches</span>
            </div>
            <div className="w-px h-8 bg-chalk-200" />
            <div>
              <span className="block font-serif text-2xl font-bold text-forest-950">100%</span>
              <span className="text-[10px] text-ink-500 uppercase tracking-wider font-semibold">Direct Briefing</span>
            </div>
          </div>
        </div>

        {/* Directory Controls: Bench Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-chalk-300">
          
          {/* Bench Filter Navigation */}
          <div 
            role="tablist" 
            aria-label="Filter counsel by bench"
            className="flex flex-wrap items-center gap-2"
          >
            <button
              role="tab"
              aria-selected={activeBench === 'all'}
              onClick={() => setActiveBench('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                activeBench === 'all'
                  ? 'bg-forest-950 text-white border-forest-950'
                  : 'bg-white text-ink-600 border-chalk-300 hover:text-forest-950 hover:border-forest-950'
              }`}
            >
              All Advocates ({allAdvocates.length})
            </button>
            <button
              role="tab"
              aria-selected={activeBench === 'founders'}
              onClick={() => setActiveBench('founders')}
              className={`px-3.5 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                activeBench === 'founders'
                  ? 'bg-forest-950 text-white border-forest-950'
                  : 'bg-white text-ink-600 border-chalk-300 hover:text-forest-950 hover:border-forest-950'
              }`}
            >
              Founding Partners • Delhi ({FOUNDERS.length})
            </button>
            <button
              role="tab"
              aria-selected={activeBench === 'chandigarh'}
              onClick={() => setActiveBench('chandigarh')}
              className={`px-3.5 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                activeBench === 'chandigarh'
                  ? 'bg-forest-950 text-white border-forest-950'
                  : 'bg-white text-ink-600 border-chalk-300 hover:text-forest-950 hover:border-forest-950'
              }`}
            >
              Chandigarh High Court ({CHANDIGARH_TEAM.length})
            </button>
            <button
              role="tab"
              aria-selected={activeBench === 'haryana'}
              onClick={() => setActiveBench('haryana')}
              className={`px-3.5 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                activeBench === 'haryana'
                  ? 'bg-forest-950 text-white border-forest-950'
                  : 'bg-white text-ink-600 border-chalk-300 hover:text-forest-950 hover:border-forest-950'
              }`}
            >
              Haryana District Practice ({HARYANA_TEAM.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-aurum-600 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by advocate, statute or forum..."
              aria-label="Search counsel directory"
              className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-chalk-300 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-aurum-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-ink-400 hover:text-ink-900"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Advocates Cards Grid */}
        {filteredAdvocates.length === 0 ? (
          <div className="text-center py-16 bg-white border border-chalk-300 p-8 shadow-subtle">
            <UserCheck className="w-10 h-10 text-aurum-600 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-forest-950 mb-1">
              No Advocates Match Your Search
            </h3>
            <p className="text-xs text-ink-600 max-w-md mx-auto mb-4">
              We couldn't find any advocate matching "{searchQuery}". Try searching for specific practice areas such as PMLA, NDPS, POCSO, Service Law, or Civil Litigation.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveBench('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-forest-950 bg-chalk-100 border border-chalk-300 hover:border-forest-950 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdvocates.map((advocate) => {
              const isFounder = advocate.benchCategory === 'founders';

              return (
                <div
                  key={advocate.id}
                  className="bg-white border border-chalk-300 hover:border-aurum-600 transition-colors duration-200 flex flex-col justify-between shadow-subtle"
                >
                  <div>
                    {/* Top Architectural Card Banner */}
                    <div className="p-6 sm:p-7 pb-4 border-b border-chalk-200">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border ${
                          isFounder
                            ? 'bg-forest-950 text-aurum-400 border-forest-950'
                            : 'bg-chalk-100 text-ink-600 border-chalk-200'
                        }`}>
                          {advocate.role}
                        </span>
                        <span className="text-[11px] text-ink-500 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-aurum-600 shrink-0" />
                          <span className="truncate max-w-[140px]">{advocate.location.split('(')[0].trim()}</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-forest-950 leading-tight">
                        {advocate.name}
                      </h3>

                      {/* Bar Admissions / Benches */}
                      {advocate.barAdmissions && advocate.barAdmissions.length > 0 && (
                        <div className="flex items-center gap-1.5 mt-2 text-xs text-ink-600">
                          <ShieldCheck className="w-3.5 h-3.5 text-aurum-600 shrink-0" />
                          <span className="truncate font-medium">{advocate.barAdmissions.join(' • ')}</span>
                        </div>
                      )}
                    </div>

                    {/* Qualifications & Bio Details */}
                    <div className="p-6 sm:p-7 pt-4 space-y-4">
                      
                      {/* Academic Credentials */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-aurum-700 block">
                          Qualifications &amp; Education
                        </span>
                        {advocate.qualifications.slice(0, 2).map((qual, qIdx) => (
                          <div key={qIdx} className="text-xs text-ink-700 flex items-start gap-2">
                            <BookOpen className="w-3.5 h-3.5 text-aurum-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{qual}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bio Excerpt */}
                      <p className="text-xs sm:text-[13px] text-ink-600 leading-relaxed line-clamp-3">
                        {advocate.bio}
                      </p>

                      {/* Practice Focus Chips */}
                      {advocate.practiceFocus && advocate.practiceFocus.length > 0 && (
                        <div className="pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-aurum-700 block mb-2">
                            Practice Specialties
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {advocate.practiceFocus.slice(0, 3).map((focus, fIdx) => (
                              <span 
                                key={fIdx}
                                className="text-[11px] px-2 py-0.5 bg-chalk-50 text-ink-700 border border-chalk-200"
                              >
                                {focus}
                              </span>
                            ))}
                            {advocate.practiceFocus.length > 3 && (
                              <span className="text-[11px] px-2 py-0.5 bg-chalk-100 text-ink-500">
                                +{advocate.practiceFocus.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Notable trial highlights (if any) */}
                      {advocate.notableHighlights && advocate.notableHighlights.length > 0 && (
                        <div className="pt-3 border-t border-chalk-200 space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-forest-950 block">
                            Trial Experience Highlight
                          </span>
                          <div className="text-xs text-ink-700 font-medium flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-aurum-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{advocate.notableHighlights[0]}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 sm:p-7 pt-4 bg-chalk-50 border-t border-chalk-200 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectLawyer(advocate.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-950 hover:text-aurum-700 transition-colors cursor-pointer"
                    >
                      <span>Full Curriculum Vitae</span>
                      <ChevronRight className="w-3.5 h-3.5 text-aurum-600" />
                    </button>
                    <button
                      onClick={onOpenConsultation}
                      className="px-3 py-1.5 text-xs font-semibold text-ink-600 hover:text-forest-950 border border-transparent hover:border-chalk-300 transition-colors cursor-pointer"
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
        <div className="mt-14 p-6 sm:p-8 bg-white border border-chalk-300 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-serif text-xl font-bold text-forest-950">
              Integrated Multi-Jurisdiction Trial Coordination
            </h4>
            <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
              Matters requiring coordinated filings between New Delhi trial courts and the Punjab &amp; Haryana High Court are briefed simultaneously through our integrated chambers docket system.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-950 hover:bg-forest-900 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            <span>Request Chambers Briefing</span>
            <ArrowRight className="w-4 h-4 text-aurum-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
