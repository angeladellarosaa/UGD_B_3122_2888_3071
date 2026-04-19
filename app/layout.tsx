'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from "@/components/landing/Navbar";
import DashboardNav from "@/components/dashboard/DashboardNav";
import "./global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Deteksi halaman
  const isDashboard = pathname?.startsWith('/dashboard');
  const isAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <html lang="en">
      {/* m-0 p-0 di body adalah kunci supaya tidak ada celah putih/hitam di pinggir */}
      <body className="bg-[#0a0514] text-white m-0 p-0 min-h-screen">
        
        {/* Navigasi */}
        {isDashboard ? (
          <DashboardNav />
        ) : (
          !isAuthPage && <Navbar />
        )}

        {/* 1. pt-20 (80px) HARUS sama dengan tinggi DashboardNav kamu.
          2. relative w-full memastikan konten dashboard tidak "mencong" atau geser.
        */}
        <main className={`relative w-full ${isDashboard ? "pt-20" : ""}`}>
          {children}
        </main>
        
      </body>
    </html>
  );
}