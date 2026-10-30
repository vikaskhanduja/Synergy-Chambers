import React, { useState } from 'react';
import { 
  Scale, 
  ShieldAlert, 
  Gavel, 
  Handshake, 
  Building2, 
  Home, 
  HeartHandshake, 
  Briefcase, 
  FileCheck,
  ArrowRight,
  Search,
  X,
  ChevronRight,
  CheckCircle2,
  LayoutGrid,
  Columns3
} from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectPractice: (id: string) => void;
  onOpenConsultationWithPractice?: (practiceId: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ 
  onSelectPractice 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePracticeId, setActivePracticeId] = useState<string>('white-collar-crimes');
  const [viewMode, setViewMode] = useState<'explorer' | 'grid'>('explorer');

  const getIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'Scale': return <Scale className={className} aria-hidden="true" />;
      case 'ShieldAlert': return <ShieldAlert className={className} aria-hidden="true" />;
      case 'Gavel': return <Gavel className={className} aria-hidden="true" />;
      case 'Handshake': return <Handshake className={className} aria-hidden="true" />;
      case 'Building2': return <Building2 className={className} aria-hidden="true" />;
      case 'Home': return <Home className={className} aria-hidden="true" />;
      case 'HeartHandshake': return <HeartHandshake className={className} aria-hidden="true" />;
      case 'Briefcase': return <Briefcase className={className} aria-hidden="true" />;
      case 'FileCheck': return <FileCheck className={className} aria-hidden="true" />;
      default: return <Scale className={className} aria-hidden="true" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Practice Areas', count: 9 },
    { id: 'criminal', label: 'Criminal & Trial Advocacy', count: 2 },
    { id: 'regulatory', label: 'White-Collar & Regulatory', count: 2 },
    { id: 'civil-adr', label: 'Civil, ADR & Property', count: 3 },
    { id: 'corporate', label: 'Corporate & Employment', count: 2 },
  ];

  const filteredPractices = PRACTICE_AREAS.filter((practice) => {
    const matchesSearch = 
      practice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.keyServices.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      practice.courtRepresentation.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'criminal') {
      return matchesSearch && (practice.id === 'criminal-litigation' || practice.id === 'white-collar-crimes');
    }
    if (selectedCategory === 'regulatory') {
      return matchesSearch && (practice.id === 'white-collar-crimes' || practice.id === 'service-matters');
    }
    if (selectedCategory === 'civil-adr') {
      return matchesSearch && (practice.id === 'civil-litigation' || practice.id === 'arbitration-adr' || practice.id === 'property-disputes');
    }
    if (selectedCategory === 'corporate') {
      return matchesSearch && (practice.id === 'corporate-commercial' || practice.id === 'labour-employment' || practice.id === 'matrimonial');
    }
    return matchesSearch;
  });

  const activePractice = PRACTICE_AREAS.find(p => p.id === activePracticeId) || PRACTICE_AREAS[0];

  return (
    <section 
      id="practices" 
      className="py-20 lg:py-28 bg-white text-chambers-navy-950 relative border-b border-chambers-stone-200"
      aria-labelledby="practices-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-chambers-gold-700 mb-3">
              <span className="w-6 h-[1.5px] bg-chambers-gold-500" aria-hidden="true" />
              <span>Comprehensive Legal Practice</span>
            </div>
            <h2 
              id="practices-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-chambers-navy-950 leading-tight"
            >
              Practice Areas &amp; Special Statutes
            </h2>
            <p className="text-base sm:text-lg text-chambers-stone-600 mt-4 leading-relaxed font-normal">
              Our trial advocates represent private clients, corporations, and statutory entities across verified legal domains in trial courts, High Courts, and specialized tribunals.
            </p>
          </div>

          {/* View Mode Toggle (Explorer vs Grid) */}
          <div className="hidden sm:flex items-center p-1 rounded-xl bg-chambers-parchment-100 border border-chambers-stone-200 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('explorer')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'explorer' 
                  ? 'bg-chambers-navy-950 text-chambers-gold-400 shadow-subtle' 
                  : 'text-chambers-stone-600 hover:text-chambers-navy-950'
              }`}
              aria-label="Explorer View"
            >
              <Columns3 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Interactive Explorer</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid' 
                  ? 'bg-chambers-navy-950 text-chambers-gold-400 shadow-subtle' 
                  : 'text-chambers-stone-600 hover:text-chambers-navy-950'
              }`}
              aria-label="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Full Portfolio Grid</span>
            </button>
          </div>
        </div>

        {/* Filter & Live Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-chambers-stone-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Practice Area Categories">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  const firstMatch = PRACTICE_AREAS.find(p => {
                    if (cat.id === 'all') return true;
                    if (cat.id === 'criminal') return p.id === 'criminal-litigation' || p.id === 'white-collar-crimes';
                    if (cat.id === 'regulatory') return p.id === 'white-collar-crimes' || p.id === 'service-matters';
                    if (cat.id === 'civil-adr') return p.id === 'civil-litigation' || p.id === 'arbitration-adr' || p.id === 'property-disputes';
                    if (cat.id === 'corporate') return p.id === 'corporate-commercial' || p.id === 'labour-employment' || p.id === 'matrimonial';
                    return true;
                  });
                  if (firstMatch) setActivePracticeId(firstMatch.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-chambers-navy-950 text-chambers-gold-300 shadow-subtle border border-chambers-gold-500/30'
                    : 'bg-chambers-parchment-100 text-chambers-stone-700 hover:text-chambers-navy-950 border border-chambers-stone-200 hover:border-chambers-gold-300'
                }`}
                role="tab"
                aria-selected={selectedCategory === cat.id}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  selectedCategory === cat.id ? 'bg-chambers-gold-500/20 text-chambers-gold-300' : 'bg-chambers-stone-200 text-chambers-stone-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-chambers-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by statute, court, crime..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-chambers-parchment-100 border border-chambers-stone-200 focus:border-chambers-gold-500 focus:outline-none text-xs text-chambers-stone-900 placeholder:text-chambers-stone-400 shadow-subtle transition-all"
              aria-label="Search practice areas"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-chambers-stone-400 hover:text-chambers-navy-950 p-1"
                aria-label="Clear search query"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* INTERACTIVE EXPLORER VIEW (Trilegal / JSA Style) */}
        {viewMode === 'explorer' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Practice Selector List */}
            <div className="lg:col-span-5 space-y-2.5">
              {filteredPractices.map((practice) => {
                const isActive = practice.id === activePractice.id;
                return (
                  <button
                    type="button"
                    key={practice.id}
                    onClick={() => setActivePracticeId(practice.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between cursor-pointer group ${
                      isActive 
                        ? 'bg-chambers-navy-950 text-white border-chambers-gold-500 shadow-card' 
                        : 'bg-white hover:bg-chambers-parchment-100 text-chambers-stone-800 border-chambers-stone-200 hover:border-chambers-gold-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive 
                          ? 'bg-chambers-navy-900 text-chambers-gold-400 border border-chambers-gold-500/30' 
                          : 'bg-chambers-parchment-100 text-chambers-stone-600 group-hover:text-chambers-gold-600'
                      }`}>
                        {getIcon(practice.iconName, "w-4 h-4")}
                      </div>
                      <div className="truncate">
                        <span className={`block text-xs font-bold tracking-wide truncate ${isActive ? 'text-white' : 'text-chambers-navy-950'}`}>
                          {practice.title}
                        </span>
                        <span className={`block text-[11px] truncate mt-0.5 ${isActive ? 'text-chambers-gold-300' : 'text-chambers-stone-500'}`}>
                          {practice.subtitle}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-chambers-gold-400 translate-x-1' : 'text-chambers-stone-400 group-hover:translate-x-0.5'}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Expansive Master Practice Dossier */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-chambers-stone-200 shadow-card space-y-6 relative overflow-hidden">
                
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chambers-gold-600 via-chambers-gold-400 to-chambers-gold-600" />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-chambers-stone-200">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-chambers-gold-700 block">
                      Practice Dossier
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-chambers-navy-950">
                      {activePractice.title}
                    </h3>
                    <p className="text-xs font-semibold text-chambers-gold-600">
                      {activePractice.subtitle}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-chambers-navy-950 text-chambers-gold-400 flex items-center justify-center shrink-0 shadow-subtle">
                    {getIcon(activePractice.iconName, "w-6 h-6")}
                  </div>
                </div>

                {/* Detailed Scope Description */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-bold text-chambers-stone-400 block mb-2">
                    Scope of Courtroom Representation
                  </h4>
                  <p className="text-chambers-stone-700 text-sm leading-relaxed">
                    {activePractice.fullDesc}
                  </p>
                </div>

                {/* Core Legal Services */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-bold text-chambers-stone-400 block mb-3">
                    Key Legal Services &amp; Filings
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePractice.keyServices.map((service, sIdx) => (
                      <div 
                        key={sIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-chambers-parchment-100 border border-chambers-stone-200 text-xs text-chambers-stone-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-chambers-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Appearance Forums */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-bold text-chambers-stone-400 block mb-2.5">
                    Regular Appearance Forums &amp; Courts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activePractice.courtRepresentation.map((court, cIdx) => (
                      <span 
                        key={cIdx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-chambers-parchment-100 text-chambers-stone-800 font-medium border border-chambers-stone-200"
                      >
                        {court}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-6 border-t border-chambers-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectPractice(activePractice.id)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-chambers-navy-950 hover:bg-chambers-navy-900 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-subtle"
                  >
                    <span>Examine Full Case Mandate</span>
                    <ArrowRight className="w-3.5 h-3.5 text-chambers-gold-400" aria-hidden="true" />
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-chambers-gold-700 hover:text-chambers-gold-800 transition-colors"
                  >
                    <span>Inquire About {activePractice.title} &rarr;</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* FULL GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPractices.map((practice) => (
              <div
                key={practice.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-chambers-stone-200 shadow-subtle hover:border-chambers-gold-400 hover:shadow-card-hover transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-chambers-parchment-100 border border-chambers-gold-200 flex items-center justify-center text-chambers-gold-700 group-hover:bg-chambers-navy-950 group-hover:text-chambers-gold-400 group-hover:border-chambers-navy-800 transition-colors">
                      {getIcon(practice.iconName)}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-chambers-stone-400 group-hover:text-chambers-gold-700 transition-colors">
                      Chambers Brief
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-chambers-navy-950 mb-1.5 group-hover:text-chambers-gold-700 transition-colors">
                    {practice.title}
                  </h3>
                  <p className="text-xs font-semibold text-chambers-gold-600 mb-4">
                    {practice.subtitle}
                  </p>

                  <p className="text-chambers-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {practice.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-chambers-stone-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-chambers-stone-400 block mb-2">
                      Key Appearance Forums
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {practice.courtRepresentation.slice(0, 3).map((court, cIdx) => (
                        <span 
                          key={cIdx}
                          className="text-[11px] px-2.5 py-1 rounded bg-chambers-parchment-100 text-chambers-stone-700 border border-chambers-stone-200"
                        >
                          {court}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-chambers-stone-200">
                  <button
                    type="button"
                    onClick={() => onSelectPractice(practice.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-chambers-navy-950 hover:bg-chambers-gold-500 text-chambers-gold-300 hover:text-chambers-navy-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-subtle"
                  >
                    <span>Review Case Mandate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty Search Result State */}
        {filteredPractices.length === 0 && (
          <div className="text-center py-16 bg-chambers-parchment-100 rounded-2xl border border-chambers-stone-200 p-8">
            <p className="text-chambers-stone-600 text-sm">
              No practice areas matched &quot;{searchQuery}&quot;. Please contact our chambers directly for bespoke legal matters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-5 py-2 rounded-lg bg-chambers-navy-950 text-chambers-gold-300 text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
