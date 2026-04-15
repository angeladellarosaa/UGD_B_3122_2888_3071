'use client';
import { robotoMono } from '@/app/ui/fonts';

export default function OurServices() {
  const services = [
    { title: "Fleet Management", img: "fleet management.jpeg" },
    { title: "Real-Time Vessel Tracking", img: "map.avif" },
    { title: "Crew Management", img: "crewmanagement.jpeg" },
    { title: "Fuel & Performance Analytics", img: "analysis.jpg" },
    { title: "Smart Alerts & Notifications", img: "alert.webp" },
    { title: "Vessel Maintenance Management", img: "vesselmain.jpg" },
  ];

  return (
    <section 
      id="services" 
      className={`${robotoMono.className} min-h-screen w-full bg-[#0a051a] text-white pt-32 pb-24 px-10 md:px-20 overflow-hidden relative scroll-mt-32`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#bc66ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#bc66ff] mb-4 block">
          What We Offer
        </span>
        <h2 className="text-5xl md:text-6xl font-black mb-16 tracking-tight uppercase">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-64 w-full rounded-3xl cursor-pointer border border-white/5 transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:border-purple-500/30"
            >
              <div className="absolute -inset-1 bg-[#bc66ff]/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:blur-2xl"></div>
              
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(188,102,255,0.3)]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a051a] via-[#0a051a]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                <div className="absolute bottom-6 left-6 text-left transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                  <h3 className="text-lg font-bold tracking-wide transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <div className="w-8 h-1 bg-[#bc66ff] mt-2 rounded-full shadow-[0_0_10px_rgba(188,102,255,0.8)]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}