// src/app/(landing)/page.tsx

import HeroSection from '@/components/landing/HeroSection';
// Kamu bisa tambah section lain di sini kalau mau tampil di home, 
// tapi kalau mau dipisah per halaman, cukup Hero saja.

export default function HomePage() {
  return (
    <main>
      {/* Navbar tidak perlu dipanggil di sini karena sudah 
          ada di (landing)/layout.tsx 
      */}
      <HeroSection />
      
      {/* Kalau kamu ingin halaman depan juga menampilkan ringkasan About 
          atau Services, kamu tinggal panggil di bawahnya:
          <AboutSection />
          <OurServices /> 
      */}
    </main>
  );
}