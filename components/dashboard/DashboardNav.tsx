'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubMenu {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  path: string;
  exact?: boolean;
  submenu?: SubMenu[];
}

export default function DashboardNav() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const user = { name: "Beni Maulana", role: "Super Admin", initials: "BM" };

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', path: '/dashboard', exact: true },
    { 
      name: 'Fleet', 
      path: '/dashboard/fleet',
      submenu: [
        { name: 'Fleet Overview', path: '/dashboard/fleet' },
        { name: 'Vessel List', path: '/dashboard/fleet/vessels' },
        { name: 'Maintenance', path: '/dashboard/fleet/maintenance' },
      ]
    },
    { 
      name: 'Map', 
      path: '/dashboard/map',
      submenu: [
        { name: 'Global Map', path: '/dashboard/map' },
        { name: 'Active Shipments', path: '/dashboard/map/shipments' },
      ]
    },
    { 
      name: 'Analytics', 
      path: '/dashboard/analytics',
      submenu: [
        { name: 'General Analytics', path: '/dashboard/analytics' },
        { name: 'Maintenance Analytics', path: '/dashboard/analytics/maintenance' },
        { name: 'Performance Analytics', path: '/dashboard/analytics/performance' },
      ]
    }
  ];

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const isActive = (item: MenuItem) => {
    if (item.exact) return pathname === item.path;
    return pathname.startsWith(item.path);
  };

  return (
    <header className="fixed top-0 inset-x-0 h-20 z-[1000] flex justify-between items-center px-8 border-b border-purple-900/20 bg-[#0d0716]/80 backdrop-blur-md">
      {/* LEFT: LOGO */}
      <div className="w-1/4 text-[#bc66ff] font-bold uppercase tracking-[0.3em] text-[10px]">
        PT. Samudra Technology Nusantara
      </div>

      {/* CENTER: NAVIGATION */}
      <nav className="flex justify-center gap-10 h-full text-[10px] font-bold uppercase tracking-[0.2em]">
        {menuItems.map((item) => {
          const active = isActive(item);
          return (
            <div 
              key={item.name} 
              className="relative h-full flex items-center group"
              onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href={item.path} 
                className={`${active ? 'text-white' : 'text-gray-500 hover:text-white'} flex items-center gap-1 transition-all duration-300 h-full`}
              >
                {item.name}
                {item.submenu && (
                  <svg className={`transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                )}
              </Link>

              {/* HIGHLIGHT LINE (Garis bawah menyala) */}
              {active && (
                <div className="absolute bottom-[-1px] inset-x-0 h-[2px] bg-[#bc66ff] shadow-[0_0_15px_#bc66ff] z-50"></div>
              )}

              {/* DROPDOWN MENU */}
              {item.submenu && openDropdown === item.name && (
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-48 pt-2">
                  <div className="bg-[#150e24] border border-white/10 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        className={`block px-4 py-3 text-[9px] border-b border-white/5 last:border-none transition-colors ${
                          pathname === sub.path ? 'text-[#bc66ff] bg-[#bc66ff]/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* RIGHT: PROFILE */}
      <div className="w-1/4 flex justify-end items-center gap-6">
        <div className="flex items-center gap-4 pr-6 border-r border-white/10 text-gray-500">
          <button className="hover:text-white relative">
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right leading-none">
            <p className="text-white text-[9px] font-black uppercase">{user.name}</p>
            <p className="text-[#bc66ff]/60 text-[7px] uppercase tracking-tighter mt-1">{user.role}</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#bc66ff] to-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_15px_rgba(188,102,255,0.4)] border border-white/20">
            {user.initials}
          </div>
        </div>
      </div>
    </header>
  );
}