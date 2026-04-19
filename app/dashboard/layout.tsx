import SystemNavbar from '@/components/dashboard/DashboardNav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d0415] text-gray-400 font-mono">
      <SystemNavbar />

      {/* Gunakan h-20 (80px) untuk mencocokkan tinggi Navbar Anda agar presisi */}
      <main className="pt-20 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}