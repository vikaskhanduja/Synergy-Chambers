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
  Check,
  Landmark,
  FileText,
  ChevronRight,
  SlidersHorizontal,
  TableProperties,
  BookOpen
} from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectPractice: (id: string) => void;
  onOpenConsultationWithPractice?: (practiceId: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ 
  onSelectPractice,
  onOpenConsultationWithPractice
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePracticeId, setActivePracticeId] = useState<string>('criminal-litigation');
  const [viewMode, setViewMode] = useState<'dossier' | 'matrix'>('dossier');

  const categories = [
    { id: 'all', label: 'All Practice Domains', count: 9 },
    { id: 'criminal-special', label: 'Criminal & Special Statutes', count: 2 },
    { id: 'corporate-regulatory', label: 'Corporate, White-Collar & NCLT', count: 3 },
    { id: 'civil-adr', label: 'Civil, Property & Arbitration', count: 2 },
    { id: 'service-family', label: 'Administrative & Family', count: 2 },
  ];

  const filteredPractices = PRACTICE_AREAS.filter((practice) => {
    const matchesSearch = 
      practice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.keyServices.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      practice.courtRepresentation.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'criminal-special') {
      return matchesSearch && (practice.id === 'criminal-litigation' || practice.id === 'white-collar-crimes');
    }
    if (selectedCategory === 'corporate-regulatory') {
      return matchesSearch && (practice.id === 'corporate-commercial' || practice.id === 'white-collar-crimes' || practice.id === 'labour-employment');
    }
    if (selectedCategory === 'civil-adr') {
      return matchesSearch && (practice.id === 'civil-litigation' || practice.id === 'arbitration-adr' || practice.id === 'property-disputes');
    }
    if (selectedCategory === 'service-family') {
      return matchesSearch && (practice.id === 'service-matters' || practice.id === 'matrimonial');
    }
    return matchesSearch;
  });

  const activePractice = PRACTICE_AREAS.find(p => p.id === activePracticeId) || PRACTICE_AREAS[0];

  return (
    <section 
      id="practices" 
      aria-labelledby="practices-heading"
      className="py-24 lg:py-32 bg-atelier-bone text-atelier-black border-b border-atelier-sand relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Archival Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-16 border-b border-atelier-sand/80 text-[10.5px] uppercase tracking-loose-editorial font-bold text-atelier-taupe">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-atelier-bronze rounded-full" aria-hidden="true" />
            <span className="text-atelier-carbon">Statutory Remit &amp; Practice Registry</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Special Acts • Trial Defense • Appellate Review</span>
            <span className="hidden md:inline text-atelier-sand">|</span>
            <span className="hidden md:inline">9 Established Practice Divisions</span>
          </div>
        </div>

        {/* Section Header with View Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <h2 
              id="practices-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.15] font-medium tracking-tight text-atelier-black"
            >
              The Jurisprudential Folio.<br />
              <span className="italic font-normal text-atelier-slate">
                Dedicated advocacy across specialized statutory courts and commercial benches.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-atelier-slate leading-relaxed font-normal">
              An institutional portfolio encompassing economic crimes, special prosecution defence, high-value commercial arbitration, property trials, and constitutional writ litigation.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center border border-atelier-sand bg-atelier-fog p-1 self-start lg:self-auto shrink-0 shadow-sm">
            <button
              onClick={() => setViewMode('dossier')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'dossier'
                  ? 'bg-atelier-carbon text-atelier-bone shadow-xs'
                  : 'text-atelier-slate hover:text-atelier-black'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Dossier View</span>
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-atelier-carbon text-atelier-bone shadow-xs'
                  : 'text-atelier-slate hover:text-atelier-black'
              }`}
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>Registry Matrix</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 mb-10 border-b border-atelier-sand">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-atelier-carbon text-atelier-bone border-atelier-carbon shadow-xs'
                    : 'bg-atelier-fog text-atelier-slate border-atelier-sand hover:border-atelier-taupe hover:text-atelier-black'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-atelier-taupe absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search statutes, courts, remit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-atelier-fog border border-atelier-sand text-atelier-black placeholder:text-atelier-taupe focus:outline-none focus:border-atelier-bronze"
            />
          </div>
        </div>

        {/* VIEW MODE A: Split Architectural Dossier (Left Folio Index / Right Briefing Dossier) */}
        {viewMode === 'dossier' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Practice Selector Ledger */}
            <div className="lg:col-span-5 space-y-2 max-h-[720px] overflow-y-auto pr-1">
              {filteredPractices.length === 0 ? (
                <div className="p-8 text-center bg-atelier-fog border border-atelier-sand text-atelier-slate text-xs">
                  No practice domains match your query.
                </div>
              ) : (
                filteredPractices.map((practice, index) => {
                  const isSelected = practice.id === activePractice.id;
                  return (
                    <div
                      key={practice.id}
                      onClick={() => setActivePracticeId(practice.id)}
                      className={`p-5 border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-atelier-fog border-atelier-bronze shadow-sm'
                          : 'bg-atelier-bone/60 border-atelier-sand/80 hover:bg-atelier-fog hover:border-atelier-taupe'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className={`text-[10px] uppercase font-bold tracking-loose-editorial ${
                          isSelected ? 'text-atelier-bronze' : 'text-atelier-taupe'
                        }`}>
                          DOMAIN {String(index + 1).padStart(2, '0')}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                          isSelected ? 'rotate-90 text-atelier-bronze' : 'text-atelier-taupe'
                        }`} />
                      </div>
                      
                      <h3 className="font-serif text-lg font-medium text-atelier-black">
                        {practice.title}
                      </h3>
                      
                      <p className="text-xs text-atelier-slate line-clamp-2 mt-1">
                        {practice.subtitle}
                      </p>
                    </div>
                  );
                })
              )}
            </div>

            {/* Right Active Briefing Dossier */}
            <div className="lg:col-span-7">
              <div className="bg-atelier-fog border border-atelier-sand p-8 sm:p-10 shadow-sm relative">
                
                {/* Dossier Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 mb-8 border-b border-atelier-sand">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-loose-editorial text-atelier-bronze block mb-1">
                      CHAMBERS PRACTICE DOSSIER // REF-{activePractice.id.toUpperCase().slice(0, 8)}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-atelier-black">
                      {activePractice.title}
                    </h3>
                    <p className="text-sm font-medium text-atelier-slate mt-1">
                      {activePractice.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectPractice(activePractice.id)}
                    className="self-start px-3.5 py-1.5 bg-atelier-bone border border-atelier-sand hover:border-atelier-bronze text-atelier-black text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Statutory Detail
                  </button>
                </div>

                {/* Narrative Summary */}
                <div className="space-y-4 mb-8">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-atelier-bronze block">
                    Jurisprudential Scope &amp; Legal Framework
                  </span>
                  <p className="text-sm text-atelier-carbon leading-relaxed">
                    {activePractice.fullDesc}
                  </p>
                </div>

                {/* Scope of Legal Services Ledger */}
                <div className="space-y-3 mb-8 pt-6 border-t border-atelier-sand/80">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-atelier-bronze block">
                    Key Legal Services &amp; Procedural Actions
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePractice.keyServices.map((service, sIdx) => (
                      <div key={sIdx} className="p-3 bg-atelier-bone border border-atelier-sand/70 text-xs text-atelier-carbon flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-atelier-bronze shrink-0 mt-0.5" />
                        <span className="leading-snug">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Court Forums */}
                <div className="space-y-3 mb-8 pt-6 border-t border-atelier-sand/80">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-atelier-bronze block">
                    Courts &amp; Appearance Forums
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activePractice.courtRepresentation.map((court, cIdx) => (
                      <span 
                        key={cIdx}
                        className="px-2.5 py-1 text-[11px] bg-atelier-bone border border-atelier-sand text-atelier-slate font-medium"
                      >
                        {court}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Docket Action Bar */}
                <div className="pt-6 border-t border-atelier-sand flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-atelier-taupe italic font-serif">
                    Chambers representation governed by Bar Council of India standards.
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-atelier-carbon hover:bg-atelier-black text-atelier-bone text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Brief Chambers on this Matter</span>
                    <ArrowRight className="w-3.5 h-3.5 text-atelier-gold" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* VIEW MODE B: Full Broadsheet Registry Matrix */}
        {viewMode === 'matrix' && (
          <div className="border border-atelier-sand bg-atelier-fog overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-atelier-sand bg-atelier-bone text-[10px] uppercase tracking-loose-editorial font-bold text-atelier-taupe">
                    <th className="py-4 px-6">Domain</th>
                    <th className="py-4 px-6">Specialty &amp; Subtitle</th>
                    <th className="py-4 px-6">Key Statues &amp; Remit</th>
                    <th className="py-4 px-6">Courts of Appearance</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-atelier-sand/70 text-xs">
                  {filteredPractices.map((practice, pIdx) => (
                    <tr 
                      key={practice.id}
                      className="hover:bg-atelier-bone/60 transition-colors"
                    >
                      <td className="py-5 px-6 font-serif text-sm font-medium text-atelier-black whitespace-nowrap">
                        <span className="text-[10px] text-atelier-taupe block font-sans uppercase">
                          No. {String(pIdx + 1).padStart(2, '0')}
                        </span>
                        {practice.title}
                      </td>
                      <td className="py-5 px-6 text-atelier-slate max-w-xs">
                        {practice.subtitle}
                      </td>
                      <td className="py-5 px-6 text-atelier-carbon max-w-sm">
                        <div className="space-y-1">
                          {practice.keyServices.slice(0, 3).map((s, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 bg-atelier-bronze rounded-full" />
                              <span>{s}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-5 px-6 text-atelier-slate text-[11px]">
                        {practice.courtRepresentation.slice(0, 2).join(' • ')}
                      </td>
                      <td className="py-5 px-6 text-right whitespace-nowrap">
                        <button
                          onClick={() => onSelectPractice(practice.id)}
                          className="px-3 py-1.5 bg-atelier-bone hover:bg-atelier-carbon hover:text-atelier-bone border border-atelier-sand text-atelier-black text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          View Dossier
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
