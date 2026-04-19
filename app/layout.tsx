'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from "@/components/landing/Navbar";
import DashboardNav from "@/components/dashboard/DashboardNav";
import "./global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isDashboard = pathname?.startsWith('/dashboard');
  const isAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <html lang="en">
      <body className="bg-[#0a0514] text-white m-0 p-0 min-h-screen">
        
        {isDashboard ? (
          <DashboardNav />
        ) : (
          !isAuthPage && <Navbar />
        )}

        {/* Main di sini dibuat bersih (pt-0) */}
        <main className="relative w-full">
          {children}
        </main>
        
      </body>
    </html>
  );
}