import React from 'react';
import { MapPin, ExternalLink, Navigation, Clock, Building2, Train, Compass } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const LocationMap: React.FC = () => {
  return (
    <section 
      id="location" 
      aria-labelledby="location-heading"
      className="py-24 lg:py-32 bg-atelier-fog border-b border-atelier-sand text-atelier-black relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Archival Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-16 border-b border-atelier-sand/80 text-[10.5px] uppercase tracking-loose-editorial font-bold text-atelier-taupe">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-atelier-bronze rounded-full" aria-hidden="true" />
            <span className="text-atelier-carbon">Physical Chamber Access &amp; Court Proximity</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Coordinates: 28.6143° N, 77.2389° E</span>
            <span className="hidden md:inline text-atelier-sand">|</span>
            <span className="hidden md:inline">India Gate Judicial Quarter</span>
          </div>
        </div>

        {/* Section Container */}
        <div className="border border-atelier-sand bg-atelier-bone shadow-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Information & Registry Details */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-loose-editorial text-atelier-bronze block mb-2">
                CHAMBER REGISTRY // NEW DELHI SEAT
              </span>
              <h2 
                id="location-heading"
                className="font-serif text-3xl sm:text-4xl font-normal text-atelier-black mb-3"
              >
                Chambers Location &amp; Spatial Access
              </h2>
              <p className="text-sm text-atelier-slate leading-relaxed font-normal">
                Synergy Chambers maintains its principal litigation offices directly within the historic Patiala House Courts complex near India Gate, New Delhi.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              {/* Address Ledger */}
              <div className="p-5 bg-atelier-fog border border-atelier-sand space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-atelier-bronze text-[10.5px]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Physical Chamber Address:</span>
                </div>
                <span className="text-atelier-black font-serif text-base block font-medium">
                  {FIRM_DETAILS.establishedLocation}
                </span>
                <span className="text-atelier-slate block text-[11.5px]">
                  Opposite National Gallery of Modern Art (NGMA), India Gate Circle, New Delhi – 110001
                </span>
              </div>

              {/* Transit & Metro */}
              <div className="p-5 bg-atelier-fog border border-atelier-sand space-y-2">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-atelier-bronze text-[10.5px]">
                  <Train className="w-3.5 h-3.5" />
                  <span>Metro &amp; Transit Connections:</span>
                </div>
                <div className="space-y-1 text-atelier-carbon text-[11.5px]">
                  <p>• Mandi House Metro Station (Blue &amp; Violet Interchange) – 1.1 km</p>
                  <p>• Khan Market Metro Station (Violet Line) – 1.4 km</p>
                  <p>• Supreme Court Metro Station (Blue Line) – 1.8 km</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-5 bg-atelier-fog border border-atelier-sand space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-atelier-bronze text-[10.5px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Chambers Consultation Hours:</span>
                </div>
                <span className="text-atelier-black font-semibold block">
                  {FIRM_DETAILS.hours}
                </span>
                <span className="text-atelier-slate block text-[10.5px]">
                  Consultations strictly pursuant to prior appointment under Bar Council of India guidelines.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Patiala+House+Courts+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-atelier-carbon hover:bg-atelier-black text-atelier-bone text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-atelier-gold" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[420px] bg-atelier-sand/30 relative border-t lg:border-t-0 lg:border-l border-atelier-sand">
            <iframe
              title="Synergy Chambers - Patiala House Courts Location"
              src="https://maps.google.com/maps?q=Patiala%20House%20Courts,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[25%] contrast-[105%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Coordinate Overlay Banner */}
            <div className="absolute bottom-4 right-4 bg-atelier-carbon/90 text-atelier-bone text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 border border-atelier-sand/30 backdrop-blur-xs">
              Patiala House Judicial Enclave
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
