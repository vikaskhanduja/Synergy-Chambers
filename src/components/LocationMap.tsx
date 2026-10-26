import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const LocationMap: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FBF9F5] border-b border-[#E8E4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl border border-[#E8E4DB] overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-12">
          
          {/* Information Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700 mb-2">
                <MapPin className="w-3.5 h-3.5 text-gold-600" />
                <span>Verified Court Chambers</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-navy-950 mb-3">
                Chambers Location &amp; Access
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed font-normal">
                Synergy Chambers maintains its central litigation headquarters directly inside the historic Patiala House Courts complex.
              </p>
            </div>

            <div className="space-y-4 text-xs text-charcoal-700">
              <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E4DB] space-y-1">
                <span className="font-bold uppercase tracking-wider text-navy-950 block text-[11px]">Chamber Address:</span>
                <span className="text-charcoal-800 font-medium">{FIRM_DETAILS.establishedLocation}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E4DB] space-y-1">
                <span className="font-bold uppercase tracking-wider text-navy-950 block text-[11px]">Nearest Landmarks &amp; Transit:</span>
                <span className="text-charcoal-800">Near India Gate, Purana Qila Road</span>
                <span className="block text-charcoal-500 mt-1">Mandi House Metro Station (Blue/Violet Line) • Khan Market Metro</span>
              </div>
            </div>

            <div>
              <a
                href="https://maps.google.com/?q=Patiala+House+Courts+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-gold-700 hover:text-gold-800 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[360px] lg:h-auto min-h-[340px] bg-[#EDEFEA] relative">
            <iframe
              title="Synergy Chambers - Patiala House Courts Location"
              src="https://maps.google.com/maps?q=Patiala%20House%20Courts,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[25%] contrast-[105%] hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
