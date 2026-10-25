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
  Filter
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
      case 'Scale': return <Scale className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Gavel': return <Gavel className="w-6 h-6" />;
      case 'Handshake': return <Handshake className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Home': return <Home className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6" />;
      default: return <Scale className="w-6 h-6" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Practice Areas' },
    { id: 'litigation', label: 'Criminal & Trial Advocacy' },
    { id: 'regulatory', label: 'White Collar & Regulatory' },
    { id: 'civil-adr', label: 'Civil, ADR & Property' },
    { id: 'corporate', label: 'Corporate & Employment' },
  ];

  const filteredPractices = PRACTICE_AREAS.filter((practice) => {
    // Search filter
    const matchesSearch = 
      practice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.keyServices.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category filter
    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'litigation') {
      return matchesSearch && (practice.id === 'criminal-litigation' || practice.id === 'white-collar-crimes');
    }
    if (selectedCategory === 'regulatory') {
      return matchesSearch && (practice.id === 'white-collar-crimes' || practice.id === 'service-matters');
    }
    if (selectedCategory === 'civil-adr') {
      return matchesSearch && (practice.id === 'civil-litigation' || practice.id === 'arbitration-adr' || practice.id === 'property-disputes' || practice.id === 'matrimonial');
    }
    if (selectedCategory === 'corporate') {
      return matchesSearch && (practice.id === 'corporate-commercial' || practice.id === 'labour-employment' || practice.id === 'service-matters');
    }
    return matchesSearch;
  });

  return (
    <section id="practices" className="py-20 lg:py-28 bg-[#FDFBF7] text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>Comprehensive Legal Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6">
            Practice Areas &amp; Legal Advisory
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Our advocates represent private individuals, corporate leaders, and institutional clients across verified legal domains in trial courts, High Courts, and appellate tribunals.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-charcoal-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-charcoal-600 border border-charcoal-300 hover:border-gold-500 hover:text-navy-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search legal practice or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-charcoal-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 text-navy-950"
            />
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPractices.map((practice) => (
            <div
              key={practice.id}
              className="bg-white rounded-xl p-7 border border-charcoal-200 shadow-subtle hover:border-gold-400 hover:shadow-premium transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 border border-gold-500/20 flex items-center justify-center text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors">
                    {getIcon(practice.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    Chambers Core
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-950 mb-1 group-hover:text-gold-600 transition-colors">
                  {practice.title}
                </h3>
                <p className="text-xs font-medium text-gold-700 mb-3">
                  {practice.subtitle}
                </p>

                <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {practice.shortDesc}
                </p>

                {/* Key Bullet Services Preview */}
                <div className="space-y-1.5 pt-3 border-t border-charcoal-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-400 block mb-2">
                    Scope of Services
                  </span>
                  {practice.keyServices.slice(0, 3).map((service, sIdx) => (
                    <div key={sIdx} className="text-xs text-charcoal-700 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-charcoal-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectPractice(practice.id)}
                  className="text-xs font-semibold text-navy-900 hover:text-gold-600 flex items-center gap-1.5 transition-colors group/btn"
                >
                  <span>Explore Practice Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPractices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-charcoal-200">
            <p className="text-charcoal-500 text-sm">
              No practice areas match your search &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-gold-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
