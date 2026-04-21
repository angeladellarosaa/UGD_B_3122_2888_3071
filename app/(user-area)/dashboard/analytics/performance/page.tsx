"use client";

import React from "react";
import { robotoMono } from "@/app/ui/fonts";
import MaintenanceMetricCard from "@/components/analytics/MetricCard";

const performanceScores = [
  { name: "MV MAJESTIC STAR", score: 9.82, percentage: 95 },
  { name: "SS NAVIGATOR", score: 9.45, percentage: 88 },
  { name: "IRON GALLEY", score: 8.92, percentage: 80 },
  { name: "CYAN DART", score: 7.24, percentage: 65 },
];

const vesselBreakdown = [
  {
    name: "MV MAJESTIC STAR",
    id: "MS-01",
    score: 95,
    trips: 124,
    speed: "18.4 KNOTS",
    status: "OPTIMAL",
  },
  {
    name: "SS NAVIGATOR",
    id: "SS-02",
    score: 88,
    trips: 96,
    speed: "16.2 KNOTS",
    status: "OPTIMAL",
  },
  {
    name: "VOID WALKER",
    id: "VW-03",
    score: 82,
    trips: 104,
    speed: "21.1 KNOTS",
    status: "OPTIMAL",
  },
  {
    name: "CYAN DART",
    id: "CD-04",
    score: 54,
    trips: 45,
    speed: "14.8 KNOTS",
    status: "MAINTENANCE",
  },
];

export default function PerformancePage() {
  return (
    <div className="w-full">
      <div className="px-10 pt-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide text-white uppercase">
              Performance Analytics
            </h1>
            <p className="text-[10px] tracking-widest opacity-60 text-gray-400 uppercase mt-1">
              Fleet Efficiency and Operational Metrics
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3">
              <span className="text-[9px] text-white/40 uppercase font-black">
                Time Period:
              </span>
              <span className="text-[10px] text-[#d095ff] font-black uppercase">
                LAST_30_DAYS
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MaintenanceMetricCard
            title="Fleet Efficiency"
            value="92"
            status="%"
            progress={92}
          />
          <MaintenanceMetricCard
            title="On-Time Delivery"
            value="95"
            status="%"
            progress={95}
          />
          <MaintenanceMetricCard
            title="Utilization Rate"
            value="88"
            status="%"
            progress={88}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#1a0b2e]/50 rounded-[20px] border border-white/5 p-8 backdrop-blur-sm relative flex flex-col h-[400px]">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase">
                Quarterly Performance Trend
              </h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#d095ff]" />
                  <span className="text-[8px] text-white/40 font-black uppercase tracking-widest">
                    Efficiency
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-0.5 bg-white/40 border-t border-dashed border-white/60" />
                  <span className="text-[8px] text-white/40 font-black uppercase tracking-widest">
                    On-Time
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-grow relative mt-4">
              <svg
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 160 L 100 120 L 200 180 L 300 140 L 400 190 L 500 130 L 600 150"
                  fill="none"
                  stroke="#d095ff"
                  strokeWidth="2"
                />

                <path
                  d="M 0 190 L 80 150 L 180 160 L 280 110 L 380 150 L 480 90 L 580 130"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                />

                <circle cx="100" cy="120" r="2" fill="#d095ff" />
                <circle cx="300" cy="140" r="2" fill="#d095ff" />
                <circle cx="500" cy="130" r="2" fill="#d095ff" />
              </svg>
            </div>

            <div className="flex justify-between mt-6">
              {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((m) => (
                <span
                  key={m}
                  className="text-[8px] text-white/20 font-black tracking-widest"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#1a0b2e]/50 rounded-[20px] border border-white/5 p-8 backdrop-blur-sm flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase">
                Vessel Performance Scores
              </h3>
              <button className="text-white/20 hover:text-white transition-colors">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="5" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="19" cy="12" r="2" />
                </svg>
              </button>
            </div>

            <div className="space-y-8 flex-grow">
              {performanceScores.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-[9px] text-[#d095ff] font-black tracking-widest">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-white font-black">
                      {item.score}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-800 to-[#d095ff] shadow-[0_0_10px_rgba(208,149,255,0.3)] transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#1a0b2e]/50 rounded-[20px] border border-white/5 backdrop-blur-sm overflow-hidden mb-10">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase">
              Vessel Breakdown
            </h3>
            <div className="flex items-center gap-4">
              <button className="p-1.5 rounded-lg bg-white/5 text-white/40 hover:text-white transition-colors">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
                </svg>
              </button>
              <button className="p-1.5 rounded-lg bg-white/5 text-white/40 hover:text-white transition-colors">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6h18M7 12h10M10 18h4" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-0">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[8px] text-white/20 uppercase font-black border-b border-white/5">
                  <th className="px-10 py-5">Vessel Name</th>
                  <th className="px-8 py-5">Performance Score</th>
                  <th className="px-8 py-5 text-center">Total Trips</th>
                  <th className="px-8 py-5 text-center">Average Speed</th>
                  <th className="px-10 py-5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {vesselBreakdown.map((v, i) => (
                  <tr
                    key={i}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[#d095ff] group-hover:bg-[#d095ff]/10 transition-colors">
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.36-.5 5-2m11-11-5 5m-4 9 10-10m1.5-3.5L21 3l-3.5 1.5-8.5 8.5-1.5 5 5-1.5 8.5-8.5Z" />
                          </svg>
                        </div>
                        <span className="text-[10px] font-black tracking-widest">
                          {v.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] text-white/40 font-black min-w-[30px]">
                          {v.score}%
                        </span>
                        <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#d095ff] shadow-[0_0_8px_#d095ff]"
                            style={{ width: `${v.score}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-[10px] text-white/60 font-medium">
                      {v.trips}
                    </td>
                    <td className="px-8 py-6 text-center text-[10px] text-white/60 font-medium uppercase tracking-tight">
                      {v.speed}
                    </td>
                    <td className="px-10 py-6 text-right">
                      <span
                        className={`text-[8px] font-black tracking-[0.2em] px-2.5 py-1 rounded-full border shadow-sm ${
                          v.status === "OPTIMAL"
                            ? "bg-[#d095ff]/10 text-[#d095ff] border-[#d095ff]/20"
                            : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                        }`}
                      >
                        {v.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
