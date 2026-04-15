'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0a051a]/85 backdrop-blur-lg border-b border-white/10 py-9 px-10 md:px-24 transition-all duration-300">
      <div className="max-w-full mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 text-3xl font-black tracking-tighter text-white cursor-pointer hover:opacity-80 transition-opacity">
          SAMUDRA<span className="text-[#bc66ff]">TECH</span>
        </div>

        <div className="hidden md:flex gap-16 lg:gap-24 items-center justify-center flex-1">
          {["Home", "About", "Vision & Mission", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={
                item === "Home" ? "#" : 
                item === "Vision & Mission" ? "#vision-mission" : 
                `#${item.toLowerCase()}`
              }
              className="text-sm lg:text-base uppercase tracking-[0.25em] font-extrabold text-white/80 hover:text-[#bc66ff] transition-all hover:scale-110 whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex-shrink-0 hidden md:block">
          <Link 
            href="/login"
            className="bg-[#bc66ff] px-10 py-4 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(188,102,255,0.4)] hover:shadow-[0_0_45px_rgba(188,102,255,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}