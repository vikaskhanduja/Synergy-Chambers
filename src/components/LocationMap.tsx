import React from 'react';
import { MapPin, ExternalLink, Navigation, Clock, Building2, Train } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Information & Registry Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#088395] block mb-2">
                Chamber Seat • New Delhi
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Chamber 238 Location &amp; Access
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Synergy Chambers maintains its principal litigation offices directly within the historic Patiala House Courts complex near India Gate, New Delhi.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              {/* Address Ledger */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#088395] text-[11px]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Physical Chamber Address:</span>
                </div>
                <span className="text-slate-900 font-bold text-sm block">
                  {FIRM_DETAILS.establishedLocation}
                </span>
                <span className="text-slate-500 block text-[11px]">
                  Opposite National Gallery of Modern Art (NGMA), India Gate Circle, New Delhi – 110001
                </span>
              </div>

              {/* Transit & Metro */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#088395] text-[11px]">
                  <Train className="w-3.5 h-3.5" />
                  <span>Metro &amp; Transit Connections:</span>
                </div>
                <div className="space-y-0.5 text-slate-700 text-[11.5px]">
                  <p>• Mandi House Metro Station (Blue &amp; Violet Lines) – 1.1 km</p>
                  <p>• Khan Market Metro Station (Violet Line) – 1.4 km</p>
                  <p>• Supreme Court Metro Station (Blue Line) – 1.8 km</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#088395] text-[11px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Consultation Hours:</span>
                </div>
                <span className="text-slate-900 font-semibold block">
                  {FIRM_DETAILS.hours}
                </span>
                <span className="text-slate-500 block text-[10.5px]">
                  Consultations strictly upon advance appointment under BCI guidelines.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Patiala+House+Courts+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#088395] hover:bg-[#05626e] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[380px] lg:h-auto min-h-[380px] bg-slate-100 relative border-t lg:border-t-0 lg:border-l border-slate-200">
            <iframe
              title="Synergy Chambers - Patiala House Courts Location"
              src="https://maps.google.com/maps?q=Patiala%20House%20Courts,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
