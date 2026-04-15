'use client';

import { robotoMono } from '@/app/ui/fonts';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div
      id="home"
      className={`${robotoMono.className} relative min-h-screen w-full overflow-hidden bg-[#0a051a] text-white`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1570114060235-979940bbad31?q=80&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d0b4e]/90 via-[#1a0b2e]/80 to-[#0a051a]" />
      </div>

      {/* CONTENT */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-screen">
        
        <div className="mb-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain drop-shadow-[0_0_20px_rgba(188,102,255,0.7)]"
            priority
          />
        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-[85px] font-[900] mb-6 tracking-tight leading-[1] text-[#f5f0ff]">
          PT. SAMUDRA <br />
          TECHNOLOGY <br />
          NUSANTARA
        </h1>

        {/* SUBTITLE */}
        <p className="text-[13px] md:text-[15px] font-medium tracking-[0.1em] mb-12 text-[#d8c5ff] opacity-80">
          Pioneering Digital Maritime Solutions Across Southeast Asia
        </p>

        {/* BUTTON */}
        <button className="bg-[#8b2fc9] hover:bg-[#a13ee6] px-14 py-4 rounded-full font-black text-[12px] tracking-[0.2em] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(139,47,201,0.4)] uppercase">
          EXPLORE MORE
        </button>
      </main>
    </div>
  );
}