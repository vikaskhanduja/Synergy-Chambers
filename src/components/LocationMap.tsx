import React from 'react';
import { MapPin, ExternalLink, Navigation, Clock, Building2, Train } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const LocationMap: React.FC = () => {
  return (
    <section 
      id="location" 
      aria-labelledby="location-heading"
      className="py-20 lg:py-24 bg-[#F4F1EA] border-b border-[#E5E0D8] text-[#1E2530]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-[#DCD6C8] shadow-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Information Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#B8934E]" aria-hidden="true" />
                <span className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-[#8C6D33]">
                  Verified Court Chambers
                </span>
              </div>
              <h2 
                id="location-heading"
                className="font-serif text-3xl font-bold text-[#09111E] mb-3"
              >
                Chambers Location &amp; Access
              </h2>
              <p className="text-sm text-[#5B6778] leading-relaxed font-normal">
                Synergy Chambers maintains its primary litigation office directly inside the historic Patiala House Courts complex near India Gate, New Delhi.
              </p>
            </div>

            <div className="space-y-4 text-xs text-[#364152]">
              {/* Address Ledger */}
              <div className="p-4 bg-[#FDFCF9] border border-[#E5E0D8] space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#09111E] text-[11px]">
                  <Building2 className="w-3.5 h-3.5 text-[#8C6D33]" />
                  <span>Physical Chamber Address:</span>
                </div>
                <span className="text-[#09111E] font-semibold block text-sm">
                  {FIRM_DETAILS.establishedLocation}
                </span>
                <span className="text-[#5B6778] block text-[11px]">
                  Near India Gate &amp; National Gallery of Modern Art (NGMA)
                </span>
              </div>

              {/* Transit & Metro */}
              <div className="p-4 bg-[#FDFCF9] border border-[#E5E0D8] space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#09111E] text-[11px]">
                  <Train className="w-3.5 h-3.5 text-[#8C6D33]" />
                  <span>Transit &amp; Nearest Metro Stations:</span>
                </div>
                <span className="text-[#364152] block">
                  • Mandi House Metro Station (Blue &amp; Violet Lines) – 1.1 km
                </span>
                <span className="text-[#364152] block">
                  • Khan Market Metro Station (Violet Line) – 1.4 km
                </span>
              </div>

              {/* Operating Hours */}
              <div className="p-4 bg-[#FDFCF9] border border-[#E5E0D8] space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#09111E] text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-[#8C6D33]" />
                  <span>Chambers Consultation Hours:</span>
                </div>
                <span className="text-[#09111E] font-medium block">
                  {FIRM_DETAILS.hours}
                </span>
                <span className="text-[#8A95A5] block text-[10.5px]">
                  Consultations strictly by appointment pursuant to BCI regulations
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Patiala+House+Courts+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#09111E] hover:bg-[#142135] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B8934E]" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[380px] bg-[#E8E2D5] relative border-t lg:border-t-0 lg:border-l border-[#DCD6C8]">
            <iframe
              title="Synergy Chambers - Patiala House Courts Location"
              src="https://maps.google.com/maps?q=Patiala%20House%20Courts,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[20%] contrast-[105%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay stamp */}
            <div className="absolute top-4 left-4 bg-[#09111E]/95 backdrop-blur-md text-white text-[11px] px-3.5 py-2 border border-[#B8934E]/40 shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8934E]" />
              <span className="font-semibold">Chamber 238, Patiala House Courts</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
