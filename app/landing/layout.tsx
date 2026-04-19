// src/app/landing/layout.tsx
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Kosongkan saja bagian ini, jangan panggil Navbar lagi */}
      <main>{children}</main>
    </>
  );
}