import { robotoMono } from '@/app/ui/fonts';

export default function Loading() {
  const gridCols = "grid grid-cols-[minmax(160px,2fr)_minmax(120px,1fr)_minmax(140px,1.5fr)_minmax(110px,1fr)_minmax(100px,1fr)_80px]";

  return (
    <div className={`min-h-screen bg-transparent text-white p-4 md:p-8 ${robotoMono.className}`}>
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-3">
          <div className="h-8 w-72 max-w-full bg-[#150e24] rounded animate-pulse" />
          <div className="h-3 w-96 max-w-full bg-[#150e24] rounded animate-pulse" />
        </div>

        <div className="h-10 w-56 bg-[#150e24] rounded-full animate-pulse" />
      </div>

      <div className="bg-[#1a0b2e]/40 border border-white/10 rounded-2xl p-4 flex gap-4 items-center mb-8">
        <div className="h-8 flex-1 bg-[#150e24] rounded-xl animate-pulse" />
        <div className="h-8 w-36 bg-[#150e24] rounded-xl animate-pulse" />
        <div className="h-8 w-36 bg-[#150e24] rounded-xl animate-pulse" />
      </div>

      <div className="bg-[#1a0b2e]/30 border border-white/10 rounded-[32px] overflow-hidden">
        <div className={`${gridCols} gap-4 px-6 py-4 bg-white/5 border-b border-white/10 min-w-[900px]`}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-3 bg-[#211533] rounded animate-pulse"
            />
          ))}
        </div>

        <div className="space-y-4 p-6 min-w-[900px]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`${gridCols} gap-4 items-center`}
            >
              <div className="space-y-2">
                <div className="h-3 w-32 bg-[#211533] rounded animate-pulse" />
                <div className="h-2 w-24 bg-[#211533] rounded animate-pulse" />
              </div>

              <div className="h-3 w-20 bg-[#211533] rounded animate-pulse" />
              <div className="h-3 w-24 bg-[#211533] rounded animate-pulse" />
              <div className="h-3 w-20 bg-[#211533] rounded animate-pulse" />
              <div className="h-6 w-20 bg-[#211533] rounded-full animate-pulse" />

              <div className="flex justify-end gap-3">
                <div className="w-4 h-4 bg-[#211533] rounded animate-pulse" />
                <div className="w-4 h-4 bg-[#211533] rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
