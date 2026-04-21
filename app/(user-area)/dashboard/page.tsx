'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { robotoMono } from '@/app/ui/fonts';
import { 
  MagnifyingGlassIcon,
  ExclamationTriangleIcon,
  CloudIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const vesselData = [
  { id: "19910001", name: "NEON HORIZON", status: "EN ROUTE", statusColor: "bg-emerald-500", fuel: "78%", fuelStatus: "OPTIMAL", destination: "SINGAPORE TERMINAL 2" },
  { id: "19910002", name: "OCEAN STAR", status: "MAINTENANCE", statusColor: "bg-rose-500", fuel: "22%", fuelStatus: "CRITICAL", destination: "ROTTERDAM PIER 4" },
  { id: "20030003", name: "SEA VOYAGER", status: "IN PORT", statusColor: "bg-indigo-500", fuel: "95%", fuelStatus: "FULL", destination: "LOS ANGELES TERMINAL 1" },
  { id: "20040004", name: "ARCTIC GALE", status: "EN ROUTE", statusColor: "bg-emerald-500", fuel: "64%", fuelStatus: "OPTIMAL", destination: "HAMBURG GATE C" },
  { id: "20050005", name: "PACIFIC DRIFT", status: "ANCHORAGE", statusColor: "bg-amber-500", fuel: "45%", fuelStatus: "LOW", destination: "TOKYO BAY" },
];

export default function DashboardPage() {
  return (
    <div className={`min-h-screen bg-[#0d0415] text-white p-6 ${robotoMono.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "TOTAL VESSELS", value: "124", sub: "+3.2%" },
          { label: "IN PORT", value: "18", sub: "VESSEL" },
          { label: "FUEL AVG", value: "82%", sub: "-1.4%" },
          { label: "ETA HEALTH", value: "96%", sub: "OPTIMAL", highlight: true },
        ].map((stat, i) => (
          <div key={i} className="bg-[#1a0b2e] p-5 rounded-[20px] border border-white/5">
            <p className="text-[9px] tracking-widest text-gray-500 mb-2 uppercase">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <span className={`text-2xl font-bold ${stat.highlight ? 'text-[#d095ff]' : 'text-white'}`}>{stat.value}</span>
              <span className="text-[9px] text-gray-400 font-medium">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* --- GLOBAL MAP --- */}
        <div className="lg:col-span-2">
          <h2 className="text-[13px] font-extrabold tracking-[0.25em] mb-4 text-white uppercase">GLOBAL MAP</h2>
          <div className="bg-[#1a0b2e] rounded-[32px] border border-white/5 relative h-[450px] overflow-hidden">
            <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[9px] tracking-widest font-bold">LIVE FEED: ATLANTIC SECTOR 4</span>
            </div>
            
            <Image 
              src="/globalmap.png" 
              alt="Global Fleet Map" 
              fill 
              className="object-cover opacity-60"
            />

            <div className="absolute bottom-6 right-6 text-right bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/5">
              <p className="text-[8px] text-gray-500 uppercase font-bold">Selected Vessel</p>
              <p className="text-xs font-bold text-[#d095ff]">MV NEON HORIZON</p>
              <p className="text-[9px] text-gray-400">LOCATION: TANJUNG PRIOK</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[13px] font-extrabold tracking-[0.25em] text-white uppercase">SYSTEM ALERTS</h2>
            <span className="bg-rose-500 text-white text-[8px] px-2 py-0.5 rounded-sm font-bold">3 ACTIVE</span>
          </div>
          <div className="bg-[#1a0b2e] rounded-[32px] border border-white/5 p-6 flex-grow">
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-rose-500/10 border-l-2 border-rose-500 rounded-r-2xl">
                <ExclamationTriangleIcon className="w-5 h-5 text-rose-500 shrink-0" />
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[9px] font-bold text-rose-500 uppercase">Critical Engine Failure</p>
                    <p className="text-[8px] text-gray-500">04:12 WIB</p>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    MV ORION STAR reports pressure drop in Cylinder 4. Emergency maintenance required.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white/5 border-l-2 border-[#d095ff] rounded-r-2xl">
                <CloudIcon className="w-5 h-5 text-[#d095ff] shrink-0" />
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[9px] font-bold text-[#d095ff] uppercase">Weather Warning</p>
                    <p className="text-[8px] text-gray-500">02:45 WIB</p>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    Cyclone approaching Route A7. Recommend detour +12nm East.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white/5 border-l-2 border-gray-500 rounded-r-2xl">
                <ClockIcon className="w-5 h-5 text-gray-400 shrink-0" />
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[9px] font-bold text-gray-400 uppercase">ETA Delay Prediction</p>
                    <p className="text-[8px] text-gray-500">01:15 WIB</p>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    Port Rotterdam congestion: +4h wait time for all incoming vessels.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/alerts">
              <button className="w-full mt-6 py-2.5 bg-white/5 border border-white/10 rounded-[100px] text-[9px] font-bold tracking-[0.2em] hover:bg-white/10 transition-all uppercase">
                View All Logs
              </button>
            </Link>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-[#1a0b2e] rounded-[32px] border border-white/5 overflow-hidden">
          <div className="p-6 flex justify-between items-center">
            <h2 className="text-[13px] font-extrabold tracking-[0.25em] text-white uppercase">Active Vessel</h2>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
              <input 
                type="text" 
                placeholder="SEARCH VESSEL..." 
                className="bg-black/40 border border-white/10 rounded-full pl-9 pr-4 py-2 text-[9px] w-56 outline-none focus:border-[#d095ff]/50"
              />
            </div>
          </div>

          <table className="w-full text-left">
            <thead className="text-[9px] text-gray-500 uppercase tracking-widest bg-white/5">
              <tr>
                <th className="px-8 py-3 font-medium">Vessel Identifier</th>
                <th className="px-8 py-3 font-medium">Operational Status</th>
                <th className="px-8 py-3 font-medium">Fuel Reserve</th>
                <th className="px-8 py-3 font-medium">Destination</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {vesselData.map((v) => (
                <tr key={v.id} className="hover:bg-white/5 transition-all">
                  <td className="px-8 py-4">
                    <div className="font-bold text-[11px]">{v.name}</div>
                    <div className="text-[9px] text-gray-500">ID: {v.id}</div>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${v.statusColor}`} />
                      <span className="text-[9px] font-bold">{v.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <div className="w-28">
                      <div className="flex justify-between text-[8px] mb-1 font-bold">
                        <span>{v.fuel}</span>
                        <span className="text-gray-500">{v.fuelStatus}</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full">
                        <div className="h-full bg-[#d095ff]" style={{ width: v.fuel }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-[10px] text-gray-400">{v.destination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[13px] font-extrabold tracking-[0.25em] text-white uppercase">Fleet Performance</h2>
          <div className="bg-[#1a0b2e] rounded-[32px] border border-white/5 p-6 flex-grow">
            <div className="flex items-end justify-between h-36 gap-2 mb-6 px-2">
              {[45, 65, 50, 95, 70, 55, 85].map((h, i) => (
                <div 
                  key={i} 
                  className={`w-full rounded-t-sm ${i === 3 ? 'bg-[#d095ff]' : 'bg-white/10'}`} 
                  style={{ height: `${h}%` }} 
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#221c33] p-4 rounded-xl border border-white/5">
                <p className="text-[8px] text-gray-500 uppercase font-bold mb-1">Efficiency</p>
                <p className="text-sm font-bold">94.2%</p>
              </div>
              <div className="bg-[#221c33] p-4 rounded-xl border border-white/5">
                <p className="text-[8px] text-gray-500 uppercase font-bold mb-1">Idle Time</p>
                <p className="text-sm font-bold">0.4h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}