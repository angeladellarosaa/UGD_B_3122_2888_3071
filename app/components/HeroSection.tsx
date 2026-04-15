'use client';
import { robotoMono } from '@/app/ui/fonts';

export default function HeroSection() {
  return (
    <div id="home" className={`${robotoMono.className} relative min-h-screen w-full overflow-hidden bg-[#0a051a] text-white font-sans`}>
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1570114060235-979940bbad31?q=80&w=2000')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d0b4e]/90 via-[#1a0b2e]/80 to-[#0a051a]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-screen"> {/* h-screen agar konten tetap di tengah */}
        <div className="mb-10 text-[#bc66ff] drop-shadow-[0_0_10px_rgba(188,102,255,0.8)]">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20.5a2.1 2.1 0 0 0 1.94-1.28L22 16l-1-1h-2.1l-1.46-3.66a2 2 0 0 0-1.87-1.34H6.43a2 2 0 0 0-1.87 1.34L3.1 15H1l-1 1 1 3.5c.18.78.8 1.4 1.59 1.5Z"/><path d="M19 15V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 7V2"/></svg>
        </div>
        
        <h1 className="text-5xl md:text-[85px] font-[900] mb-6 tracking-tight leading-[1] text-[#f5f0ff]">
          PT. SAMUDRA <br /> 
          TECHNOLOGY <br /> 
          NUSANTARA
        </h1>
        
        <p className="text-[13px] md:text-[15px] font-medium tracking-[0.1em] mb-12 text-[#d8c5ff] opacity-80">
          Pioneering Digital Maritime Solutions Across Southeast Asia
        </p>

        <button className="bg-[#8b2fc9] hover:bg-[#a13ee6] px-14 py-4 rounded-full font-black text-[12px] tracking-[0.2em] transition-all hover:scale-105 shadow-[0_0_30px_rgba(139,47,201,0.4)] uppercase">
          EXPLORE MORE
        </button>
      </main>

    </div>
  );
}