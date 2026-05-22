'use client';

import React, { useState } from 'react';

export default function VesselTable() {
  const [searchQuery, setSearchQuery] = useState('');

  const data = [
    {
      name: "MV NEON HORIZON",
      id: "ID: 20260011",
      fuel: 85.2,
      fuelText: "REMAINING",
      rate: "12.8 MT/DAY",
      dist: "3,120 NM",
      score: "96.5 / HIGH",
      color: "bg-purple-400",
    },
    {
      name: "MV OCEAN STAR",
      id: "ID: 20260022",
      fuel: 28.4,
      fuelText: "CRITICAL",
      rate: "19.2 MT/DAY",
      dist: "850 NM",
      score: "68.2 / LOW",
      color: "bg-red-400",
    },
    {
      name: "MV SEA VOYAGER",
      id: "ID: 20260033",
      fuel: 62.1,
      fuelText: "NOMINAL",
      rate: "14.5 MT/DAY",
      dist: "4,210 NM",
      score: "92.1 / OPTIMAL",
      color: "bg-purple-300",
    },
    {
      name: "MV ARCTIC GALE",
      id: "ID: 20260044",
      fuel: 91.7,
      fuelText: "FUELLED",
      rate: "16.0 MT/DAY",
      dist: "1,204 NM",
      score: "89.4 / OPTIMAL",
      color: "bg-purple-400",
    },
    {
      name: "MV PACIFIC DRIFT",
      id: "ID: 20260055",
      fuel: 45.8,
      fuelText: "NOMINAL",
      rate: "13.2 MT/DAY",
      dist: "2,150 NM",
      score: "84.7 / STABLE",
      color: "bg-purple-200",
    },
  ];

  const filteredData = data.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query)
    );
  });

  return (
    <div className="glass max-w-[1400px] mx-auto text-white font-mono rounded-2xl overflow-hidden">

      <div className="flex justify-between items-center bg-white/5 px-3 py-2">
        <h2 className="text-[11px] tracking-widest">VESSEL AUDIT</h2>

        <input
          type="text"
          placeholder="FILTER VESSELS..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-black/30 text-white text-[10px] px-3 py-1 rounded-md 
          outline-none placeholder:text-white/40 border border-white/5 focus:border-[#bc66ff]/40 transition-all"
        />
      </div>

      <div className="p-6">
        <div className="grid grid-cols-[2.5fr_1.5fr_1fr_1fr_1.5fr] text-[10px] text-white/40 tracking-widest mb-4">
          <span className="text-left justify-self-start">VESSEL IDENTIFIER</span>
          <span className="text-center">FUEL STATUS</span>
          <span className="text-center">CONS. RATE</span>
          <span className="text-center">VOYAGE DIST.</span>
          <span className="text-center">EFFICIENCY SCORE</span>
        </div>

        {/* TRICK: Menambahkan min-h-[350px] agar tinggi area data terkunci stabil */}
        <div className="min-h-[350px] flex flex-col justify-start">
          {filteredData.length === 0 ? (
            // Jika kosong, tingginya dibuat penuh mengisi container agar kotak tidak kempes
            <div className="flex-grow flex items-center justify-center text-xs text-white/30 tracking-widest border-t border-white/5">
              NO_SIGNALS_FOUND...
            </div>
          ) : (
            filteredData.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[2.5fr_1.5fr_1fr_1fr_1.5fr] items-center py-4 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10"></div>
                  <div>
                    <p className="text-xs tracking-widest">{item.name}</p>
                    <p className="text-[10px] opacity-40">{item.id}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-24 h-[4px] bg-black rounded-full overflow-hidden">
                    <div
                      className={`${item.color} h-full`}
                      style={{ width: `${item.fuel}%` }}
                    />
                  </div>
                  <p className="text-[9px] opacity-50 mt-1">
                    {item.fuel}% {item.fuelText}
                  </p>
                </div>

                <p className="text-center text-xs">{item.rate}</p>
                <p className="text-center text-xs">{item.dist}</p>

                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 text-[10px] rounded-md border
                    ${
                      item.score.includes("LOW")
                        ? "bg-red-500/10 border-red-400/30 text-red-400"
                        : "bg-purple-500/10 border-purple-400/20 text-white"
                    }`}
                  >
                    {item.score}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}