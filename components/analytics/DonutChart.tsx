"use client";

import React from "react";
// Import data asli
import { maintenanceData } from "@/app/lib/placeholder-data";

export default function DonutChart() {
  // 1. HITUNG DATA SECARA DINAMIS
  const total = maintenanceData.length;
  
  // Menghitung jumlah per kategori (Sesuai status atau bisa kamu ganti ke 'type' jika ada)
  const activeCount = maintenanceData.filter(d => d.status === "ACTIVE").length;
  const criticalCount = maintenanceData.filter(d => d.status === "CRITICAL").length;
  const plannedCount = maintenanceData.filter(d => d.status === "PLANNED").length;

  // Rumus Keliling Lingkaran SVG (r=40, maka C = 2 * PI * 40 = 251.2)
  const strokeDasharray = 251.2;
  
  // Hitung offset untuk masing-masing (dalam contoh ini kita buat perbandingan ACTIVE vs Total)
  const activePercentage = (activeCount / total) * 100;
  const activeOffset = strokeDasharray - (activePercentage / 100) * strokeDasharray;

  return (
    <div className="glass p-8 flex flex-col items-center justify-center relative rounded-[2rem] bg-[#150e24]/40 border border-white/5 backdrop-blur-xl">
      
      <p className="text-[10px] font-black opacity-40 mb-8 tracking-[0.3em] uppercase">
        Fleet Allocation
      </p>

      {/* CHART CONTAINER */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* SVG Circle System */}
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 overflow-visible">
          {/* Background Circle (Track) */}
          <circle 
            cx="50" cy="50" r="40" 
            stroke="currentColor" strokeWidth="10" 
            fill="none" className="text-white/5" 
          />
          
          {/* Active Data Segment (Purple) */}
          <circle 
            cx="50" cy="50" r="40" 
            stroke="#bc66ff" strokeWidth="10" 
            fill="none" 
            strokeDasharray={strokeDasharray}
            strokeDashoffset={activeOffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(188,102,255,0.5)]"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-black italic italic leading-none">{total}</span>
          <span className="text-[8px] font-black opacity-30 tracking-widest mt-1">VESSELS</span>
        </div>
      </div>

      {/* LEGEND - Sekarang Dinamis Sesuai Data */}
      <div className="mt-10 w-full flex flex-col gap-3 text-[10px] font-bold">
        <div className="flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#bc66ff] rounded-full shadow-[0_0_8px_#bc66ff]"></span>
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">ACTIVE FLEET</span>
          </div>
          <span className="text-white/80">{activeCount}</span>
        </div>

        <div className="flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_8px_#f43f5e]"></span>
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">CRITICAL STATUS</span>
          </div>
          <span className="text-white/80">{criticalCount}</span>
        </div>

        <div className="flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">PLANNED MAINT.</span>
          </div>
          <span className="text-white/80">{plannedCount}</span>
        </div>
      </div>

    </div>
  );
}