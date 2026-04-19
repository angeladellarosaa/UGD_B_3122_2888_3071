'use client';
import React, { useState } from 'react';

const dashboardStats = [
  { label: "TOTAL VESSELS", value: "124", sub: "+3.2%" },
  { label: "IN PORT", value: "18", sub: "VESSEL" },
  { label: "FUEL AVG", value: "82%", sub: "-1.4%" },
  { label: "ETA HEALTH", value: "96%", sub: "OPTIMAL", highlight: true },
];

const vesselData = [
  { id: "19910001", name: "NEON HORIZON", status: "EN ROUTE", statusColor: "bg-emerald-500", fuel: 78, fuelStatus: "OPTIMAL", destination: "SINGAPORE TERMINAL 2" },
  { id: "19910002", name: "OCEAN STAR", status: "MAINTENANCE", statusColor: "bg-rose-500", fuel: 22, fuelStatus: "CRITICAL", destination: "ROTTERDAM PIER 4" },
  { id: "20030003", name: "SEA VOYAGER", status: "IN PORT", statusColor: "bg-indigo-500", fuel: 95, fuelStatus: "FULL", destination: "LOS ANGELES TERMINAL 1" },
  { id: "20040004", name: "ARCTIC GALE", status: "EN ROUTE", statusColor: "bg-emerald-500", fuel: 64, fuelStatus: "OPTIMAL", destination: "HAMBURG GATE C" },
  { id: "20050005", name: "PACIFIC DRIFT", status: "ANCHORAGE", statusColor: "bg-amber-500", fuel: 45, fuelStatus: "LOW", destination: "TOKYO BAY" },
];

const alertsData = [
  { type: "CRITICAL", title: "Critical Engine Failure", time: "04:12 WIB", color: "rose" },
  { type: "WARNING", title: "Weather Warning", time: "02:45 WIB", color: "purple" },
  { type: "INFO", title: "ETA Delay Prediction", time: "01:15 WIB", color: "gray" },
];

const chartPerformance = [
  { name: "NEON", val: 85 },
  { name: "OCEAN", val: 40 },
  { name: "SEA", val: 95 },
  { name: "ARCTIC", val: 70 },
  { name: "PACIFIC", val: 55 },
];

export default function FleetDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVessels = vesselData.filter(v => 
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    v.id.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#0a0514] text-white font-mono p-4 lg:p-8 space-y-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((s, i) => (
          <div key={i} className="bg-[#150e24] border border-white/5 p-6 rounded-[1.5rem] shadow-2xl hover:border-[#bc66ff]/20 transition-all">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">{s.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black tracking-tighter">{s.value}</span>
              <span className={`text-[9px] font-black ${s.highlight ? 'text-[#bc66ff]' : 'text-gray-600'}`}>{s.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 flex flex-col space-y-3">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 px-2">Global Tracking</h2>
          <div className="h-[350px] bg-[#150e24] rounded-[2rem] border border-white/5 overflow-hidden relative">
            <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                src="about:blank" 
                className="grayscale invert contrast-125 opacity-20 scale-110"
                title="Global Vessel Map"
            ></iframe>
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
               <p className="text-[8px] text-[#bc66ff] font-bold uppercase">System Status</p>
               <p className="text-[10px] font-black italic uppercase">All Systems Operational</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col space-y-3">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 px-2">System Alerts</h2>
          <div className="bg-[#150e24]/40 border border-white/5 rounded-[2rem] p-5 space-y-3 h-[350px] overflow-y-auto">
            {alertsData.map((alert, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[8px] font-black px-2 py-0.5 rounded border border-current ${alert.color === 'rose' ? 'text-rose-500' : 'text-[#bc66ff]'}`}>{alert.type}</span>
                  <span className="text-[8px] text-gray-600 font-bold">{alert.time}</span>
                </div>
                <p className="text-white text-[10px] font-bold uppercase">{alert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-3">
          <div className="flex flex-col sm:row justify-between items-start sm:items-center gap-4 px-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Active Fleet Overview</h2>
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="SEARCH VESSEL..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#150e24] border border-white/10 rounded-full py-2 px-10 text-[9px] font-bold text-white focus:outline-none focus:border-[#bc66ff] transition-all"
              />
              <svg className="absolute left-4 top-2.5 text-gray-600" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>

          <div className="bg-[#150e24]/60 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
            <table className="w-full text-left text-[10px]">
              <thead className="bg-white/5 text-gray-500 font-bold uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">Vessel Name</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Fuel Status</th>
                  <th className="px-6 py-4">Destination</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredVessels.map((v) => (
                  <tr key={v.id} className="hover:bg-white/[0.03] transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-white font-black group-hover:text-[#bc66ff] transition-colors">{v.name}</p>
                      <p className="text-[8px] text-gray-600 font-bold uppercase">ID: {v.id}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${v.statusColor}`}></span>
                        <span className="text-gray-300 font-bold uppercase">{v.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-24 h-1 bg-white/5 rounded-full mb-1 overflow-hidden">
                        <div className={`h-full ${v.fuelStatus === 'CRITICAL' ? 'bg-rose-500' : 'bg-[#bc66ff]'}`} style={{ width: `${v.fuel}%` }}></div>
                      </div>
                      <span className="text-[8px] font-bold text-gray-600 uppercase italic">{v.fuelStatus} // {v.fuel}%</span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 font-bold uppercase italic text-[9px]">{v.destination}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-3">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 px-2">Fleet Performance</h2>
          <div className="bg-[#150e24] rounded-[2rem] border border-white/5 p-6 flex flex-col justify-between h-full min-h-[380px]">
            <div className="flex items-end justify-between gap-2 h-40 mb-8 px-2">
              {chartPerformance.map((p, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group">
                  <div 
                    style={{ height: `${p.val}%` }} 
                    className={`w-full rounded-t-md transition-all duration-700 ${p.val > 80 ? 'bg-[#bc66ff] shadow-[0_0_15px_rgba(188,102,255,0.2)]' : 'bg-white/10 group-hover:bg-white/20'}`}
                  ></div>
                  <span className="mt-3 text-[7px] text-gray-700 font-black uppercase text-center">{p.name}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
               <div className="bg-black/20 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-[8px] text-gray-500 font-bold uppercase">Efficiency</span>
                  <span className="text-lg font-black text-white">94.2%</span>
               </div>
               <div className="bg-black/20 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <span className="text-[8px] text-gray-500 font-bold uppercase">Avg Idle</span>
                  <span className="text-lg font-black text-white">0.4h</span>
               </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}