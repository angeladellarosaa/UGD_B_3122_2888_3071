'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BellIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  const navLinks = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/users', label: 'Users' },
    { href: '/admin/profile', label: 'Profile' },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  };

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-[#0d0716]/80 border-b border-white/5 backdrop-blur-md text-white">

        {/* LEFT */}
        <div className="flex items-center gap-2 text-[#d095ff] font-bold tracking-widest text-[11px]">
          <div className="w-6 h-6 rounded-full bg-[#d095ff]/20 flex items-center justify-center text-[#d095ff] text-xs">
            PT
          </div>
          SAMUDRA TECHNOLOGY NUSANTARA
        </div>

        {/* CENTER MENU */}
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative pb-1 transition-colors ${
                isActive(href) ? 'text-[#d095ff]' : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
              {isActive(href) && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-full h-[2px] bg-[#d095ff] rounded-full shadow-[0_0_8px_#d095ff]" />
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-gray-400">

          {/* BELL → alerts */}
          <div
            className="relative cursor-pointer"
            onClick={() => router.push('/admin/alerts')}
          >
            <BellIcon className={`w-5 transition-colors ${pathname.startsWith('/admin/alerts') ? 'text-[#d095ff]' : 'hover:text-white'}`} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#d095ff] rounded-full animate-pulse" />
          </div>

          <Cog6ToothIcon className="w-5 hover:text-white cursor-pointer" />

          {/* LOGOUT BUTTON */}
          <button
            onClick={() => setShowLogout(true)}
            className="flex items-center gap-1.5 text-[10px] border border-white/10 px-3 py-1 rounded-full hover:bg-white/10 hover:text-white transition-colors"
          >
            <ArrowRightOnRectangleIcon className="w-3.5 h-3.5" />
            Logout
          </button>

        </div>
      </nav>

      {/*MODAL LOGOUT*/}
      {showLogout && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a0b2e] border border-white/10 rounded-2xl p-8 w-full max-w-xs shadow-2xl text-center">

            {/* ICON */}
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-full border border-[#d095ff]/30 flex items-center justify-center bg-[#d095ff]/10">
                <ArrowRightOnRectangleIcon className="w-7 h-7 text-[#d095ff]" />
              </div>
            </div>

            <h3 className="text-white font-bold text-base tracking-wide mb-2">
              Initialize Terminal Termination?
            </h3>

            <p className="text-gray-400 text-[11px] leading-relaxed mb-7">
              Are you sure you want to logout? All active encryption tunnels for SAMUDRA TECH will be safely decommissioned.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold py-3 rounded-xl tracking-widest transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-[11px] font-bold py-3 rounded-xl tracking-widest transition-colors"
              >
                Logout
              </button>
            </div>

            <p className="text-[8px] text-gray-600 mt-5 tracking-widest uppercase">
              AUTH-PROTOCOL-V4.0.1
            </p>
          </div>
        </div>
      )}
    </>
  );
}