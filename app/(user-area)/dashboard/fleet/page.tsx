'use client';
import React, { useEffect, useState } from 'react';
import { dashboardStats, vesselData } from "@/app/lib/placeholder-data";

function FleetLoading() {
  return (
    <div className="min-h-screen bg-[#0a0514] text-white font-mono p-8 pt-4 flex flex-col gap-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-[120px] bg-[#150e24] border border-white/5 rounded-3xl animate-pulse"
          />
        ))}
      </div>

      <div className="flex-grow flex flex-col gap-4">
        <div className="flex justify-between items-center px-2">
          <div className="h-4 w-56 bg-[#150e24] rounded animate-pulse" />

          <div className="flex gap-2">
            <div className="h-6 w-24 bg-[#150e24] rounded-full animate-pulse" />
            <div className="h-6 w-8 bg-[#150e24] rounded animate-pulse" />
          </div>
        </div>

        <div className="bg-[#150e24]/30 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="bg-white/5 border-b border-white/5 px-8 py-5">
            <div className="grid grid-cols-5 gap-4 min-w-[720px]">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="h-3 bg-[#211533] rounded animate-pulse"
                />
              ))}
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-4 px-8 py-5 items-center min-w-[720px]"
              >
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-6 w-24 bg-[#211533] rounded-full animate-pulse justify-self-center" />
                <div className="h-3 bg-[#211533] rounded animate-pulse ml-auto w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 w-12 h-12 bg-[#150e24] rounded-full animate-pulse" />
    </div>
  );
}

export default function FleetOverview() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = vesselData.filter((v) => 
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    v.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (isLoading) return <FleetLoading />;

  return (
    <div className="min-h-screen bg-[#0a0514] text-white font-mono p-8 pt-4 flex flex-col gap-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {dashboardStats.map((s, i) => (
          <div key={i} className="bg-[#150e24] border border-white/5 p-6 rounded-3xl shadow-xl">
            <p className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-3">{s.label}</p>
            <p className="text-4xl font-black">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center px-2">
        <h2 className="text-xs font-black uppercase tracking-widest text-white/80">Active Fleet Overview</h2>
        <input 
          type="text"
          placeholder="SEARCH..."
          className="bg-[#150e24] border border-white/10 px-4 py-2 rounded-xl text-[10px] w-64 outline-none focus:border-[#bc66ff]"
          value={searchQuery}
          onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
        />
      </div>

      <div className="bg-[#150e24]/30 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl h-[480px] flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-5 bg-white/5 text-gray-600 uppercase font-black text-[10px] tracking-[0.2em] border-b border-white/5 px-8 py-5">
          <div>Vessel Name</div>
          <div>Location</div>
          <div>ETA (UTC)</div>
          <div className="text-center">Status</div>
          <div className="text-right">Last Update</div>
        </div>
        
        {/* Body Grid */}
        <div className="flex-grow flex flex-col divide-y divide-white/5">
          {paginatedData.length > 0 ? (
            <>
              {paginatedData.map((v, i) => (
                <div key={i} className="grid grid-cols-5 items-center px-8 py-6 text-[10px] hover:bg-[#bc66ff]/5 transition-all">
                  <div className="font-black text-[#bc66ff] uppercase">{v.name}</div>
                  <div className="font-bold text-gray-400">{v.location}</div>
                  <div className="font-bold text-gray-200">{v.eta}</div>
                  <div className="flex justify-center">
                    <div className={`font-black text-[9px] px-4 py-1 rounded-full border border-current/20 bg-current/5 ${v.statusColor}`}>
                      {v.status}
                    </div>
                  </div>
                  <div className="font-bold text-gray-600 text-right uppercase">{v.update}</div>
                </div>
              ))}
              {/* Spacer */}
              {Array.from({ length: Math.max(0, itemsPerPage - paginatedData.length) }).map((_, i) => (
                <div key={`spacer-${i}`} className="grid grid-cols-5 px-8 py-6">&nbsp;</div>
              ))}
            </>
          ) : (
            <div className="flex-grow flex items-center justify-center text-gray-500 font-black tracking-widest">
              NO_VESSELS_FOUND...
            </div>
          )}
        </div>

        {/* Footer Pagination */}
        <div className="border-t border-white/5 p-6 flex justify-center gap-4">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="px-6 py-2 bg-white/5 rounded-full text-[10px] font-black disabled:opacity-20">PREV</button>
          <span className="text-[10px] font-black self-center">{currentPage} / {totalPages || 1}</span>
          <button disabled={currentPage >= totalPages} onClick={() => setCurrentPage(p => p + 1)} className="px-6 py-2 bg-white/5 rounded-full text-[10px] font-black disabled:opacity-20">NEXT</button>
        </div>
      </div>
    </div>
  );
}