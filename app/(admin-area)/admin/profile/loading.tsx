import { robotoMono } from '@/app/ui/fonts';

export default function Loading() {
  return (
    <div className={`min-h-screen bg-transparent text-white p-6 ${robotoMono.className}`}>
      <div className="mb-8 space-y-3">
        <div className="h-7 w-40 rounded bg-[#150e24] animate-pulse" />
        <div className="h-3 w-80 max-w-full rounded bg-[#150e24] animate-pulse" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1a0b2e]/80 border border-white/5 rounded-2xl p-6">
            <div className="h-4 w-48 bg-[#211533] rounded animate-pulse mb-6" />

            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-20 bg-white/5 rounded-xl border border-white/5 animate-pulse"
                />
              ))}
            </div>
          </div>

          <div className="bg-[#1a0b2e]/80 border border-white/5 rounded-2xl p-6">
            <div className="h-4 w-44 bg-[#211533] rounded animate-pulse mb-6" />

            <div className="space-y-4">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="h-20 bg-white/5 rounded-xl border border-white/5 animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#1a0b2e]/80 border border-white/5 rounded-2xl p-6">
            <div className="h-4 w-44 bg-[#211533] rounded animate-pulse mb-5" />

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#211533] animate-pulse" />
                  <div className="h-3 w-40 bg-[#211533] rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a0b2e]/80 border border-white/5 rounded-2xl p-6">
            <div className="h-4 w-40 bg-[#211533] rounded animate-pulse mb-5" />

            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between">
                  <div className="h-3 w-28 bg-[#211533] rounded animate-pulse" />
                  <div className="h-3 w-16 bg-[#211533] rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
