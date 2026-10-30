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
  CheckCircle2,
  Landmark,
  FileText,
  SlidersHorizontal,
  ChevronRight
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
  const [viewMode, setViewMode] = useState<'dossier' | 'table'>('dossier');

  const categories = [
    { id: 'all', label: 'All Practice Domains', count: 9 },
    { id: 'criminal-special', label: 'Criminal & Special Statutes', count: 2 },
    { id: 'corporate-regulatory', label: 'Corporate, White-Collar & NCLT', count: 3 },
    { id: 'civil-adr', label: 'Civil, Property & Arbitration', count: 2 },
    { id: 'service-family', label: 'Administrative, Service & Family', count: 2 },
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
      className="py-20 lg:py-28 bg-[#FDFCF9] text-[#1E2530] border-b border-[#E5E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#B8934E]" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C6D33]">
                Practice Areas &amp; Special Statutes
              </span>
            </div>
            <h2 
              id="practices-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#09111E] leading-tight"
            >
              Legal Practice Registry
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5B6778] leading-relaxed font-normal">
              An institutional portfolio of specialized courtroom advocacy, regulatory defence, commercial dispute resolution, and high court appellate representation.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center border border-[#DCD6C8] bg-white p-1 self-start md:self-auto">
            <button
              onClick={() => setViewMode('dossier')}
              className={`px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'dossier' 
                  ? 'bg-[#09111E] text-white' 
                  : 'text-[#5B6778] hover:text-[#09111E]'
              }`}
            >
              Dossier Explorer
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                viewMode === 'table' 
                  ? 'bg-[#09111E] text-white' 
                  : 'text-[#5B6778] hover:text-[#09111E]'
              }`}
            >
              Index Directory
            </button>
          </div>
        </div>

        {/* Practice Category Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E5E0D8]">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#09111E] text-white border-[#09111E]'
                    : 'bg-white text-[#5B6778] border-[#DCD6C8] hover:border-[#09111E] hover:text-[#09111E]'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#8C6D33] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by statute or remedy..."
              aria-label="Search practice areas"
              className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-[#DCD6C8] text-[#1E2530] placeholder:text-[#8A95A5] focus:outline-none focus:border-[#8C6D33] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8A95A5] hover:text-[#1E2530]"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* View Mode: Interactive Master-Detail Dossier */}
        {viewMode === 'dossier' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Master List */}
            <div className="lg:col-span-5 space-y-2 max-h-[720px] overflow-y-auto pr-1">
              {filteredPractices.map((practice, pIdx) => {
                const isActive = practice.id === activePractice.id;
                return (
                  <button
                    key={practice.id}
                    onClick={() => setActivePracticeId(practice.id)}
                    className={`w-full text-left p-4 sm:p-5 border transition-all cursor-pointer block ${
                      isActive 
                        ? 'bg-[#09111E] text-white border-[#09111E] shadow-sm' 
                        : 'bg-white text-[#1E2530] border-[#E5E0D8] hover:border-[#B8934E]/60 hover:bg-[#FBF9F5]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        isActive ? 'text-[#B8934E]' : 'text-[#8C6D33]'
                      }`}>
                        Section {pIdx + 1 < 10 ? `0${pIdx + 1}` : pIdx + 1}
                      </span>
                      <span className={`text-[11px] ${isActive ? 'text-[#CBD5E1]' : 'text-[#5B6778]'}`}>
                        {practice.courtRepresentation[0]?.split('(')[0]?.trim()}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      {practice.title}
                    </h3>

                    <p className={`text-xs mt-1 line-clamp-1 ${
                      isActive ? 'text-[#CBD5E1]' : 'text-[#5B6778]'
                    }`}>
                      {practice.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Expansive Active Dossier */}
            <div className="lg:col-span-7">
              <div className="border border-[#DCD6C8] bg-white p-7 sm:p-9 space-y-6 shadow-sm sticky top-28">
                
                {/* Dossier Header */}
                <div className="pb-6 border-b border-[#E5E0D8]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10.5px] uppercase font-bold tracking-[0.2em] text-[#8C6D33]">
                      Practice Mandate
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 bg-[#F5F2EB] text-[#09111E] border border-[#DCD6C8] font-semibold">
                      Chambers Docket
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#09111E] leading-tight">
                    {activePractice.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-[#8C6D33] mt-1.5">
                    {activePractice.subtitle}
                  </p>
                </div>

                {/* Jurisprudential Scope */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#09111E]">
                    Jurisprudential Mandate &amp; Scope
                  </h4>
                  <p className="text-xs sm:text-sm text-[#364152] leading-relaxed">
                    {activePractice.fullDesc}
                  </p>
                </div>

                {/* Scope of Legal Services */}
                <div className="space-y-2.5 pt-4 border-t border-[#E5E0D8]">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#09111E]">
                    Services &amp; Courtroom Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#364152]">
                    {activePractice.keyServices.map((service, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 bg-[#FDFCF9] p-2.5 border border-[#E5E0D8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D33] shrink-0 mt-0.5" />
                        <span className="leading-snug">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Appearance Forums */}
                <div className="space-y-2 pt-4 border-t border-[#E5E0D8]">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#09111E]">
                    Courts &amp; Appearance Forums
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activePractice.courtRepresentation.map((court, cIdx) => (
                      <span 
                        key={cIdx}
                        className="text-[11px] px-2.5 py-1 bg-[#F5F2EB] text-[#1E2530] border border-[#DCD6C8]"
                      >
                        {court}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectPractice(activePractice.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#09111E] hover:bg-[#142135] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Full Statutory Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B8934E]" />
                  </button>

                  <a
                    href="#contact"
                    className="text-xs font-semibold text-[#8C6D33] hover:text-[#09111E] transition-colors"
                  >
                    Submit Case Particulars on this Area →
                  </a>
                </div>

              </div>
            </div>

          </div>
        ) : (
          /* View Mode: Index Table Directory */
          <div className="border border-[#DCD6C8] bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#09111E] text-white uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3.5 px-5">Domain &amp; Title</th>
                    <th className="py-3.5 px-5">Substantive Scope</th>
                    <th className="py-3.5 px-5">Appearance Benches</th>
                    <th className="py-3.5 px-5 text-right">Dossier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  {filteredPractices.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FDFCF9] transition-colors">
                      <td className="py-4 px-5">
                        <span className="font-serif text-base font-bold text-[#09111E] block">
                          {p.title}
                        </span>
                        <span className="text-[11px] text-[#8C6D33] block mt-0.5">
                          {p.subtitle}
                        </span>
                      </td>
                      <td className="py-4 px-5 max-w-md text-[#5B6778] leading-relaxed">
                        {p.shortDesc}
                      </td>
                      <td className="py-4 px-5 text-[#364152]">
                        {p.courtRepresentation.slice(0, 2).join(' • ')}
                      </td>
                      <td className="py-4 px-5 text-right">
                        <button
                          onClick={() => onSelectPractice(p.id)}
                          className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#09111E] hover:text-[#8C6D33] border border-[#DCD6C8] hover:border-[#8C6D33] bg-white transition-colors cursor-pointer"
                        >
                          View
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
