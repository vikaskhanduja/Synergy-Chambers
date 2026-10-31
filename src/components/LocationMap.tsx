import React from 'react';
import { MapPin, ExternalLink, Navigation, Clock, Building2, Train } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const LocationMap: React.FC = () => {
  return (
    <section 
      id="location" 
      aria-labelledby="location-heading"
      className="py-20 lg:py-24 bg-chalk-100 border-b border-chalk-200 text-ink-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-chalk-300 shadow-subtle grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Information Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-aurum-600" aria-hidden="true" />
                <span className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-aurum-700">
                  Verified Court Chambers
                </span>
              </div>
              <h2 
                id="location-heading"
                className="font-serif text-3xl font-bold text-forest-950 mb-3"
              >
                Chambers Location &amp; Access
              </h2>
              <p className="text-sm text-ink-600 leading-relaxed font-normal">
                Synergy Chambers maintains its primary litigation office directly inside the historic Patiala House Courts complex near India Gate, New Delhi.
              </p>
            </div>

            <div className="space-y-4 text-xs text-ink-700">
              {/* Address Ledger */}
              <div className="p-4 bg-chalk-50 border border-chalk-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-forest-950 text-[11px]">
                  <Building2 className="w-3.5 h-3.5 text-aurum-700" />
                  <span>Physical Chamber Address:</span>
                </div>
                <span className="text-forest-950 font-semibold block text-sm">
                  {FIRM_DETAILS.establishedLocation}
                </span>
                <span className="text-ink-500 block text-[11px]">
                  Near India Gate &amp; National Gallery of Modern Art (NGMA)
                </span>
              </div>

              {/* Transit & Metro */}
              <div className="p-4 bg-chalk-50 border border-chalk-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-forest-950 text-[11px]">
                  <Train className="w-3.5 h-3.5 text-aurum-700" />
                  <span>Transit &amp; Nearest Metro Stations:</span>
                </div>
                <span className="text-ink-700 block">
                  • Mandi House Metro Station (Blue &amp; Violet Lines) – 1.1 km
                </span>
                <span className="text-ink-700 block">
                  • Khan Market Metro Station (Violet Line) – 1.4 km
                </span>
              </div>

              {/* Operating Hours */}
              <div className="p-4 bg-chalk-50 border border-chalk-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-forest-950 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-aurum-700" />
                  <span>Chambers Consultation Hours:</span>
                </div>
                <span className="text-forest-950 font-medium block">
                  {FIRM_DETAILS.hours}
                </span>
                <span className="text-ink-500 block text-[10.5px]">
                  Consultations strictly by appointment pursuant to BCI regulations
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Patiala+House+Courts+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest-950 hover:bg-forest-900 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-aurum-400" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[380px] bg-chalk-200 relative border-t lg:border-t-0 lg:border-l border-chalk-300">
            <iframe
              title="Synergy Chambers - Patiala House Courts Location"
              src="https://maps.google.com/maps?q=Patiala%20House%20Courts,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[20%] contrast-[105%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay stamp */}
            <div className="absolute top-4 left-4 bg-forest-950/95 backdrop-blur-md text-white text-[11px] px-3.5 py-2 border border-aurum-500/40 shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-aurum-400" />
              <span className="font-semibold">Chamber 238, Patiala House Courts</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
