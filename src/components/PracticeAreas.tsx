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
  ChevronRight
} from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectPractice: (id: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPractice }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Gavel': return <Gavel className="w-5 h-5" />;
      case 'Handshake': return <Handshake className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5" />;
      default: return <Scale className="w-5 h-5" />;
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
    // Search filter
    const matchesSearch = 
      practice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.keyServices.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      practice.courtRepresentation.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category filter
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

  return (
    <section id="practices" className="py-20 lg:py-28 bg-white text-navy-950 relative border-b border-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>Comprehensive Legal Practice</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6 leading-tight">
            Practice Areas &amp; Court Representation
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
            Our trial advocates and solicitors represent private clients, corporations, and statutory entities across verified legal fields in trial courts, High Courts, and appellate tribunals.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-charcoal-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-navy-950 text-gold-300 shadow-subtle border border-gold-500/30'
                    : 'bg-paper-100 text-charcoal-700 hover:text-navy-950 border border-charcoal-200 hover:border-gold-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  selectedCategory === cat.id ? 'bg-gold-500/20 text-gold-300' : 'bg-charcoal-100 text-charcoal-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by crime, statute, court..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-paper-100 border border-charcoal-200 focus:border-gold-500 focus:outline-none text-xs text-charcoal-800 placeholder:text-charcoal-400 shadow-subtle transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-navy-950"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPractices.map((practice) => (
            <div
              key={practice.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-charcoal-200 shadow-subtle hover:border-gold-400 hover:shadow-card transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Card Icon & Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 group-hover:bg-navy-950 group-hover:text-gold-400 group-hover:border-navy-800 transition-colors">
                    {getIcon(practice.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-400 group-hover:text-gold-700 transition-colors">
                    Chambers Brief
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-1.5 group-hover:text-gold-700 transition-colors">
                  {practice.title}
                </h3>
                <p className="text-xs font-semibold text-gold-600 mb-4">
                  {practice.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {practice.shortDesc}
                </p>

                {/* Appearance Forums Badges */}
                <div className="space-y-1.5 pt-4 border-t border-charcoal-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-2">
                    Key Appearance Forums
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {practice.courtRepresentation.slice(0, 3).map((court, cIdx) => (
                      <span 
                        key={cIdx}
                        className="text-[11px] px-2.5 py-1 rounded bg-paper-200 text-charcoal-700 border border-charcoal-200"
                      >
                        {court}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-charcoal-200">
                <button
                  onClick={() => onSelectPractice(practice.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gold-50 hover:bg-gold-500 hover:text-navy-950 text-gold-800 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Review Scope &amp; Case Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if search returned 0 */}
        {filteredPractices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#EAE5DB] p-8">
            <p className="text-charcoal-500 text-sm">
              No specific practice area matched &quot;{searchQuery}&quot;. Please contact our chambers directly for bespoke legal matters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-5 py-2 rounded-lg bg-navy-950 text-gold-300 text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
