import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const LocationMap: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#FDFBF7] rounded-2xl border border-charcoal-200 overflow-hidden shadow-subtle grid grid-cols-1 lg:grid-cols-12">
          
          {/* Information Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600 mb-2">
                <MapPin className="w-3.5 h-3.5 text-gold-600" />
                <span>Verified Court Chambers</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3">
                Chambers Location &amp; Access
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Synergy Chambers operates its central litigation headquarters directly inside the historic Patiala House Courts complex.
              </p>
            </div>

            <div className="space-y-4 text-xs text-charcoal-700">
              <div className="p-3.5 rounded-lg bg-white border border-charcoal-200 space-y-1">
                <span className="font-bold text-navy-950 block">Chamber Address:</span>
                <span>{FIRM_DETAILS.establishedLocation}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-charcoal-200 space-y-1">
                <span className="font-bold text-navy-950 block">Nearest Landmarks &amp; Transit:</span>
                <span>Near India Gate, Purana Qila Road</span>
                <span className="block text-charcoal-500">Mandi House Metro Station (Blue/Violet Line) • Khan Market Metro</span>
              </div>
            </div>

            <div>
              <a
                href="https://maps.google.com/?q=Patiala+House+Courts+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-gold-600 hover:text-gold-700 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[360px] lg:h-auto min-h-[340px] bg-charcoal-100 relative">
            <iframe
              title="Synergy Chambers - Patiala House Courts Location"
              src="https://maps.google.com/maps?q=Patiala%20House%20Courts,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
