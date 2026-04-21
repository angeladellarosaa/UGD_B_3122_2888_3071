"use client";

import React from "react";
import { robotoMono } from "@/app/ui/fonts";
import MaintenanceMetricCard from "@/components/analytics/MetricCard";

const maintenanceLogs = [
  {
    id: "AE-741-B",
    category: "Freighter",
    task: "Core Thruster Realignment",
    date: "2024.08.14",
    status: "COMPLETED",
    statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    id: "AE-102-X",
    category: "Scout",
    task: "Sensor Array Calibration",
    date: "2024.08.14",
    status: "PENDING",
    statusColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    id: "AE-332-R",
    category: "Mining",
    task: "Hydraulic Pressure Test",
    date: "2024.08.12",
    status: "COMPLETED",
    statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    id: "AE-112-L",
    category: "Tug",
    task: "Gravitational Lock Repair",
    date: "2024.08.12",
    status: "CRITICAL",
    statusColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
];

const maintenanceFreq = [
  { label: "HEAVY FREIGHTERS", value: 37, percentage: 65 },
  { label: "GRID-REGION TUGS", value: 45, percentage: 85 },
  { label: "ATMOSPHERIC SCOUTS", value: 112, percentage: 45 },
  { label: "MINING PLATFORMS", value: 24, percentage: 30 },
];

export default function MaintenancePage() {
  return (
    <div className="w-full">
      <div className="px-10 pt-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide text-white uppercase">
              Maintenance Analytics
            </h1>
            <p className="text-[10px] tracking-widest opacity-60 text-gray-400 uppercase mt-1">
              Real-time Maintenance Metrics & Deep-Space Logistics
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3">
              <span className="text-[9px] text-white/40 uppercase font-black">
                Report Period:
              </span>
              <span className="text-[10px] text-[#d095ff] font-black uppercase">
                24H_REALTIME
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MaintenanceMetricCard
            title="Total Fuel Consumed"
            value="1.24M"
            subtitle="1.2% VS PREVIOUS"
            status="LITERS"
          />
          <MaintenanceMetricCard
            title="Maintenance Operations"
            value="412"
            subtitle="3.1% OPTIMIZATION"
            status="UNITS"
          />
          <MaintenanceMetricCard
            title="Avg Operational Efficiency"
            value="94.8"
            progress={94.8}
            status="%"
          />
          <MaintenanceMetricCard
            title="Fleet Health Index"
            value="OPTIMAL"
            subtitle="SYSTEM STATUS: B"
            status="CRITICAL: 0"
            statusType="optimal"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-4 bg-[#1a0b2e]/50 rounded-[20px] border border-white/5 p-4 backdrop-blur-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase">
                Recent Maintenance Logs
              </h3>
              <button className="text-[8px] text-[#d095ff] font-black uppercase tracking-widest hover:opacity-80 transition-opacity">
                View Full Archive
              </button>
            </div>
            <div className="flex-grow">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[9px] text-white/20 uppercase font-black border-b border-white/5">
                    <th className="px-6 py-4">Vessel ID</th>
                    <th className="px-4 py-4">Category</th>
                    <th className="px-4 py-4">Task Description</th>
                    <th className="px-4 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {maintenanceLogs.map((log, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-[10px] font-black text-[#d095ff]">
                        {log.id}
                      </td>
                      <td className="px-4 py-5 text-[10px] text-white/60">
                        {log.category}
                      </td>
                      <td className="px-4 py-5 text-[10px] text-white/60 leading-tight pr-4">
                        {log.task}
                      </td>
                      <td className="px-4 py-5 text-[10px] text-white/40">
                        {log.date}
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`text-[8px] px-2 py-1 rounded-md border font-black tracking-widest ${log.statusColor}`}
                        >
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#1a0b2e]/50 rounded-[20px] border border-white/5 p-8 backdrop-blur-sm relative overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase">
                Fuel Consumption Trends
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#d095ff] shadow-[0_0_10px_#d095ff]" />
                <span className="text-[9px] text-[#d095ff] font-black uppercase tracking-widest">
                  Consumption Rate
                </span>
              </div>
            </div>
            <div className="flex-grow flex items-end relative h-48">
              <svg
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#d095ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#d095ff" stopOpacity="0" />
                  </linearGradient>
                  <filter
                    id="glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite
                      in="SourceGraphic"
                      in2="blur"
                      operator="over"
                    />
                  </filter>
                </defs>
                <path
                  d="M 0 160 C 50 160, 100 180, 150 170 C 200 160, 250 100, 300 120 C 350 140, 400 180, 450 120 C 500 60, 550 40, 600 40 L 600 200 L 0 200 Z"
                  fill="url(#lineGradient)"
                  className="transition-all duration-1000"
                />
                <path
                  d="M 0 160 C 50 160, 100 180, 150 170 C 200 160, 250 100, 300 120 C 350 140, 400 180, 450 120 C 500 60, 550 40, 600 40"
                  fill="none"
                  stroke="#d095ff"
                  strokeWidth="3"
                  filter="url(#glow)"
                />
                <circle cx="150" cy="170" r="2.5" fill="white" />
                <circle cx="300" cy="120" r="2.5" fill="white" />
                <circle cx="450" cy="120" r="2.5" fill="white" />
                <circle cx="560" cy="48" r="2.5" fill="white" />
              </svg>
            </div>
            <div className="flex justify-between mt-6 px-1">
              {[
                "00:00",
                "04:00",
                "08:00",
                "12:00",
                "16:00",
                "20:00",
                "23:59",
              ].map((label) => (
                <span
                  key={label}
                  className="text-[8px] text-white/20 font-black tracking-widest"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 bg-[#1a0b2e]/50 rounded-[20px] border border-white/5 p-8 backdrop-blur-sm flex flex-col">
            <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase mb-8">
              Operational Breakdown
            </h3>
            <div className="flex-grow flex items-center justify-center relative py-4">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#d095ff"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray="180 251.2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(208,149,255,0.3)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray="50 251.2"
                    strokeDashoffset="-185"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-white leading-none">
                    142
                  </span>
                  <span className="text-[8px] text-white/40 uppercase font-black tracking-widest mt-1">
                    Total Vessels
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#d095ff]" />
                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider">
                    In Operation
                  </span>
                </div>
                <span className="text-[10px] font-black text-white tracking-widest">
                  102 (72%)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#d095ff]/30" />
                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider">
                    In Maintenance
                  </span>
                </div>
                <span className="text-[10px] font-black text-white tracking-widest">
                  22 (15%)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider">
                    Idle
                  </span>
                </div>
                <span className="text-[10px] font-black text-white tracking-widest">
                  18 (13%)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1a0b2e]/50 rounded-[20px] border border-white/5 p-8 backdrop-blur-sm mb-10">
          <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase mb-8">
            Maintenance Frequency
          </h3>
          <div className="space-y-6">
            {maintenanceFreq.map((item, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-white font-black tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-white/40 font-black tracking-tighter">
                    <span className="text-white group-hover:text-[#d095ff] transition-colors">
                      {item.value}
                    </span>{" "}
                    TASKS
                  </span>
                </div>
                <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#d095ff]/20 via-[#d095ff] to-[#d095ff] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
