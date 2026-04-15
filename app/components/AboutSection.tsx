'use client';
import { robotoMono } from '@/app/ui/fonts';

export default function AboutSection() {
  const stats = [
    { label: "Clients", value: "50+" },
    { label: "Vessels", value: "200+" },
    { label: "Years", value: "10+" },
  ];

  return (
    <section id="about" className={`${robotoMono.className} relative min-h-screen w-full bg-[#0a051a] text-white pt-24 pb-20 px-10 md:px-20 overflow-hidden`}>
      <div className="absolute left-5 top-20 opacity-20 hidden md:block">
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full transform -skew-x-12"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="text-[#bc66ff] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Who We Are
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white uppercase">
            About Us
          </h2>
          
          <div className="space-y-6 text-[#d8c5ff] opacity-90 leading-relaxed text-sm md:text-base max-w-xl">
            <p>
              PT. Samudra Technology Nusantara is a technology company focused on developing digital solutions for the maritime sector. 
              By combining modern technology, continuous innovation, and a deep understanding of industry needs, we deliver platforms designed to enhance efficiency, transparency, and effectiveness in maritime operations.
            </p>
            <p>
              We are committed to supporting the digital transformation of Indonesia's maritime industry by providing adaptive, integrated, and user-friendly solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 pt-10 border-t border-purple-900/40">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="relative group p-8 rounded-xl bg-white/[0.08] border border-white/20 hover:border-[#bc66ff]/50 hover:bg-white/[0.12] transition-all duration-300"
              >
                <div className="relative z-10 text-center sm:text-left">
                  <h3 className="text-4xl lg:text-5xl font-black text-[#bc66ff] mb-2 tracking-tighter transition-transform duration-300 group-hover:scale-105 origin-left">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">
                    {stat.label}
                  </p>
                </div>

                <div className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-60 transition-opacity">
                  <div className="w-2 h-2 border-b border-r border-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group z-10">
          <div className="absolute -inset-4 bg-purple-600/10 rounded-[2rem] blur-2xl group-hover:bg-[#bc66ff]/20 transition-all duration-500"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/aboutus.jpg" 
              alt="Maritime Industry" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a051a]/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="absolute right-5 bottom-20 opacity-20 hidden md:block">
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-1 bg-gradient-to-l from-[#bc66ff] to-transparent rounded-full transform skew-x-12 translate-x-4"></div>
          ))}
        </div>
      </div>
    </section>
  );
}