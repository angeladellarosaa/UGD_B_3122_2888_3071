'use client';
import React from 'react';

const maintenanceData = [
  { name: "NEON HORIZON", progress: 82, eta: "18H", status: "ACTIVE", engineEff: "94%", nextService: "12 DAYS" },
  { name: "OCEAN STAR", progress: 45, eta: "45H", status: "CRITICAL", failure: "FUEL PUMP 4", temp: "92°C" },
  { name: "SEA VOYAGER", progress: 12, eta: "120H", status: "PLANNED", hullInspect: "PENDING", location: "PORT KELANG" },
  { name: "ARCTIC GALE", progress: 65, eta: "32H", status: "DRY DOCK", refitProg: "45%", dockId: "SDC-09" },
  { name: "PACIFIC DRIFT", progress: 95, eta: "4H", status: "ACTIVE", engineEff: "98%", nextService: "28 DAYS" },
];

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#0a0514] text-white font-mono p-8 pt-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Maintenance</h1>
        <div className="flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">System Status: Optimal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#150e24] border border-white/5 p-6 rounded-3xl">
          <p className="text-[8px] text-gray-500 font-bold uppercase mb-4">Active Service</p>
          <p className="text-4xl font-black italic">05</p>
        </div>
        <div className="bg-[#150e24] border border-white/5 p-6 rounded-3xl">
          <p className="text-[8px] text-gray-500 font-bold uppercase mb-4">MV In Port</p>
          <p className="text-4xl font-black italic text-purple-400">02</p>
        </div>
        <div className="bg-[#150e24] border border-white/5 p-6 rounded-3xl">
          <p className="text-[8px] text-gray-500 font-bold uppercase mb-4">Maintenance Compliance</p>
          <div className="flex items-end gap-3">
            <p className="text-4xl font-black italic">88%</p>
            <div className="w-full h-1 bg-white/5 rounded-full mb-2 overflow-hidden">
               <div className="h-full bg-[#bc66ff]" style={{width: '88%'}}></div>
            </div>
          </div>
        </div>
        <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-3xl">
          <p className="text-[8px] text-rose-500 font-bold uppercase mb-4">Critical Alerts</p>
          <p className="text-4xl font-black italic text-rose-500 underline decoration-double">01</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-[#150e24] border border-white/5 rounded-[2.5rem] p-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Maintenance Timeline</h2>
            <button className="text-[8px] font-bold text-gray-600 hover:text-white uppercase">View Full Log</button>
          </div>
          <div className="space-y-8">
            {maintenanceData.slice(0, 3).map((m, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-end">
                  <p className="text-[11px] font-black tracking-widest">{m.name}</p>
                  <p className="text-[9px] font-bold text-gray-600">{m.progress}% Complete</p>
                </div>
                <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 shadow-[0_0_15px_currentColor] ${m.status === 'CRITICAL' ? 'bg-rose-500' : 'bg-[#bc66ff]'}`} 
                    style={{width: `${m.progress}%`}}
                  ></div>
                </div>
                <p className="text-[8px] text-gray-700 font-black italic">ETA: {m.eta}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-[#150e24] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Critical Inventory</h2>
          <div className="space-y-6 mt-6">
            {[
              { label: "Turbochargers", qty: "04", val: 40 },
              { label: "Lubricants (L)", qty: "1,240", val: 65 },
              { label: "Seal Kits", qty: "CRITICAL: 02", val: 15, crit: true },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-[8px] font-black uppercase text-gray-400">{item.label}</span>
                  <span className={`text-[8px] font-black ${item.crit ? 'text-rose-500' : 'text-white'}`}>QTY: {item.qty}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className={`h-full ${item.crit ? 'bg-rose-500' : 'bg-white/20'}`} style={{width: `${item.val}%`}}></div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 border border-white/10 hover:bg-white/5 py-3 rounded-2xl text-[8px] font-black uppercase tracking-widest transition-all">
            Reorder New Stock
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {maintenanceData.slice(0, 4).map((m, i) => (
          <div key={i} className={`p-6 rounded-[2rem] border transition-all ${m.status === 'CRITICAL' ? 'bg-rose-500/5 border-rose-500/30' : 'bg-[#150e24] border-white/5'}`}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xs font-black uppercase tracking-tighter">{m.name}</h3>
              <span className={`text-[7px] px-2 py-0.5 rounded font-black border ${m.status === 'CRITICAL' ? 'bg-rose-500 text-white border-rose-500' : 'bg-white/5 text-gray-400 border-white/10'}`}>
                {m.status}
              </span>
            </div>

            <div className="space-y-3 min-h-[60px]">
              {m.status === 'ACTIVE' && (
                <>
                  <div className="flex justify-between text-[9px] font-bold uppercase"><span className="text-gray-600">Main Engine:</span> <span>{m.engineEff} Eff.</span></div>
                  <div className="flex justify-between text-[9px] font-bold uppercase"><span className="text-gray-600">Next Service:</span> <span>{m.nextService}</span></div>
                </>
              )}
              {m.status === 'CRITICAL' && (
                <>
                  <div className="flex justify-between text-[9px] font-black uppercase text-rose-500"><span>Fuel Pump 4:</span> <span>FAILURE</span></div>
                  <div className="flex justify-between text-[9px] font-black uppercase text-rose-500"><span>Temp Warning:</span> <span>{m.temp}</span></div>
                </>
              )}
              {m.status === 'PLANNED' && (
                <>
                  <div className="flex justify-between text-[9px] font-bold uppercase text-gray-500"><span>Hull Inspect:</span> <span className="text-white">PENDING</span></div>
                  <div className="flex justify-between text-[9px] font-bold uppercase text-gray-500"><span>Location:</span> <span className="text-white">{m.location}</span></div>
                </>
              )}
              {m.status === 'DRY DOCK' && (
                <>
                  <div className="flex justify-between text-[9px] font-bold uppercase text-gray-500"><span>Refit Prog:</span> <span className="text-white">{m.refitProg}</span></div>
                  <div className="flex justify-between text-[9px] font-bold uppercase text-gray-500"><span>Dry Dock ID:</span> <span className="text-white">{m.dockId}</span></div>
                </>
              )}
            </div>

            <button className={`w-full mt-6 py-2.5 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all ${m.status === 'CRITICAL' ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]' : 'border border-white/5 hover:bg-white/5 text-gray-400 hover:text-white'}`}>
              {m.status === 'CRITICAL' ? 'Service Now' : 'View Details'}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}