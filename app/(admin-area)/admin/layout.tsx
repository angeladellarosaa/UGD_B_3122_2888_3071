// app/(admin-area)/layout.tsx
import React from 'react';

export default function AdminAreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full min-h-screen bg-[#0d0415]">
      {/* Jangan taruh Navigasi lagi di sini karena sudah ada di RootLayout.
          Cukup pastikan children terpanggil agar page.tsx dirender.
      */}
      {children}
    </section>
  );
}