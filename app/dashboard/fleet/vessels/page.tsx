'use client';
import React, { useState } from 'react';

const vesselsList = [
  { id: "19910001", name: "MV NEON HORIZON", year: "2018", engine: "Dual-Core Plasma", color: "Obsidian Matte", tonnage: "184,000 GT", status: "EN ROUTE", statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10", image: "🚢" },
  { id: "19910002", name: "MV OCEAN STAR", year: "2021", engine: "Ion-Drive S3", color: "Deep Chrome", tonnage: "210,500 GT", status: "DELAYED", statusColor: "text-rose-500 border-rose-500/30 bg-rose-500/10", image: "⚓" },
  { id: "20030003", name: "MV SEA VOYAGER", year: "2019", engine: "Heavy Diesel Hybrid", color: "Titanium Grey", tonnage: "92,000 GT", status: "MAINTENANCE", statusColor: "text-amber-500 border-amber-500/30 bg-amber-500/10", image: "🛠️" },
  { id: "20040004", name: "MV ARCTIC GALE", year: "2020", engine: "Super-Flux Ion", color: "Midnight Blue", tonnage: "155,000 GT", status: "EN ROUTE", statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10", image: "🌊" },
  { id: "20050005", name: "MV PACIFIC DRIFT", year: "2022", engine: "Plasma Drive XT", color: "Nebula Violet", tonnage: "240,000 GT", status: "ANCHORAGE", statusColor: "text-[#bc66ff] border-[#bc66ff]/30 bg-[#bc66ff]/10", image: "🔭" },
];

export default function VesselListPage() {
  const [search, setSearch] = useState('');

  const filteredVessels = vesselsList.filter(v => 
    v.name.toLowerCase().includes(search.toLowerCase()) || v.id.includes(search)
  );

  return (
    <div className="min-h-screen bg-[#0a0514] text-white font-mono p-8 pt-4 space-y-8">

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">All Vessels</h1>
          <div className="flex gap-4 mt-2">
            <select className="bg-[#150e24] border border-white/10 rounded-md px-3 py-1 text-[9px] font-bold text-gray-400 outline-none">
                <option>STATUS: ALL</option>
            </select>
            <select className="bg-[#150e24] border border-white/10 rounded-md px-3 py-1 text-[9px] font-bold text-gray-400 outline-none">
                <option>YEAR: 2020-2026</option>
            </select>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Operational Status</p>
          <p className="text-2xl font-black text-[#bc66ff]">98.2% <span className="text-[10px] text-gray-400 uppercase">Ready</span></p>
        </div>
      </div>

      <div className="relative max-w-md">
        <input 
          type="text" 
          placeholder="QUERY ID..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#150e24] border border-white/10 rounded-full py-2 px-10 text-[10px] font-bold focus:border-[#bc66ff] outline-none transition-all"
        />
        <span className="absolute left-4 top-2.5 opacity-30">🔍</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVessels.map((v) => (
          <div key={v.id} className="bg-[#150e24] border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-[#bc66ff]/30 transition-all duration-500 shadow-2xl">
            <div className="h-48 bg-gradient-to-b from-gray-800 to-[#150e24] relative flex items-center justify-center overflow-hidden">
               <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-700">{v.image}</div>
               <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-[7px] font-black tracking-widest ${v.statusColor}`}>
                 {v.status}
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#150e24] to-transparent"></div>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight group-hover:text-[#bc66ff] transition-colors">{v.name}</h3>
                  <p className="text-[9px] text-gray-600 font-bold">ID: {v.id}</p>
                </div>
                <button className="text-gray-600 hover:text-white">•••</button>
              </div>

              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-[7px] text-gray-600 font-black uppercase tracking-widest">Year Built</p>
                  <p className="text-[10px] font-bold">{v.year}</p>
                </div>
                <div>
                  <p className="text-[7px] text-gray-600 font-black uppercase tracking-widest">Hull Color</p>
                  <p className="text-[10px] font-bold">{v.color}</p>
                </div>
                <div>
                  <p className="text-[7px] text-gray-600 font-black uppercase tracking-widest">Engine</p>
                  <p className="text-[10px] font-bold">{v.engine}</p>
                </div>
                <div>
                  <p className="text-[7px] text-gray-600 font-black uppercase tracking-widest">Gross Tonnage</p>
                  <p className="text-[10px] font-bold">{v.tonnage}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[8px] text-gray-600 font-bold italic">ETA: 04:20 WIB</span>
                <button className="text-[8px] font-black uppercase tracking-widest text-[#bc66ff] hover:underline">Vessel Logs »</button>
              </div>
            </div>
          </div>
        ))}

        <div className="border-2 border-dashed border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center space-y-4 hover:border-[#bc66ff]/20 transition-all cursor-pointer bg-white/[0.01]">
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl text-[#bc66ff]">+</div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-2">Expand Fleet Capacity</h3>
            <p className="text-[9px] text-gray-600 font-bold leading-relaxed px-4">Provision a new vessel signature and assign initial operational parameters.</p>
          </div>
          <button className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-[8px] font-black uppercase tracking-widest hover:bg-[#bc66ff] hover:text-black transition-all">
            New Unit Commission
          </button>
        </div>
      </div>
    </div>
  );
}