import React from 'react';
import { MapPin, ExternalLink, Navigation, Clock, Building2, Train, Phone, Shield } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const LocationMap: React.FC = () => {
  return (
    <section 
      id="location" 
      aria-label="Chambers Location & Access"
      className="py-20 lg:py-24 bg-chambers-parchment-50 border-b border-chambers-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl border border-chambers-stone-200/90 overflow-hidden shadow-chambers-card grid grid-cols-1 lg:grid-cols-12">
          
          {/* Information Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-chambers-parchment-100 border border-chambers-stone-300 text-chambers-gold-800 text-[11px] font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5 text-chambers-gold-700" />
                <span>Verified Court Chambers</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-chambers-navy-950 mb-3">
                Chambers Location &amp; Physical Access
              </h3>
              <p className="text-sm text-chambers-stone-600 leading-relaxed font-normal">
                Synergy Chambers maintains its primary litigation office directly inside the historic Patiala House Courts complex near India Gate, New Delhi.
              </p>
            </div>

            <div className="space-y-4 text-xs text-chambers-stone-800">
              {/* Address card */}
              <div className="p-4 rounded-xl bg-chambers-parchment-50 border border-chambers-stone-200/90 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-chambers-navy-950 text-[11px]">
                  <Building2 className="w-3.5 h-3.5 text-chambers-gold-700" />
                  <span>Chamber Address:</span>
                </div>
                <span className="text-chambers-stone-900 font-semibold block text-sm">
                  {FIRM_DETAILS.establishedLocation}
                </span>
                <span className="text-chambers-stone-500 block text-[11px]">
                  Near India Gate &amp; National Gallery of Modern Art (NGMA)
                </span>
              </div>

              {/* Transit & Metro */}
              <div className="p-4 rounded-xl bg-chambers-parchment-50 border border-chambers-stone-200/90 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-chambers-navy-950 text-[11px]">
                  <Train className="w-3.5 h-3.5 text-chambers-gold-700" />
                  <span>Transit &amp; Nearest Metro Stations:</span>
                </div>
                <span className="text-chambers-stone-800 block">
                  • Mandi House Metro Station (Blue &amp; Violet Lines) – 1.1 km
                </span>
                <span className="text-chambers-stone-800 block">
                  • Khan Market Metro Station (Violet Line) – 1.4 km
                </span>
              </div>

              {/* Hours */}
              <div className="p-4 rounded-xl bg-chambers-parchment-50 border border-chambers-stone-200/90 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-chambers-navy-950 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-chambers-gold-700" />
                  <span>Chambers Operating Hours:</span>
                </div>
                <span className="text-chambers-stone-900 font-medium block">
                  {FIRM_DETAILS.hours}
                </span>
                <span className="text-chambers-stone-500 block text-[11px]">
                  Appointments strictly required pursuant to Bar Council of India regulations
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Patiala+House+Courts+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-chambers-navy-950 hover:bg-chambers-navy-900 text-chambers-gold-300 text-xs font-semibold shadow-chambers-subtle transition-all"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-chambers-gold-400" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[380px] bg-chambers-parchment-200 relative">
            <iframe
              title="Synergy Chambers - Patiala House Courts Location"
              src="https://maps.google.com/maps?q=Patiala%20House%20Courts,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[15%] contrast-[105%] hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay badge on map */}
            <div className="absolute top-4 left-4 bg-chambers-navy-950/90 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-lg border border-chambers-navy-800 shadow-chambers-card hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Chamber 238, Patiala House Courts</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
