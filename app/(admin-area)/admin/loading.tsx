import { robotoMono } from '@/app/ui/fonts';

export default function Loading() {
  return (
    <div className={`min-h-screen bg-[#0d0415] text-white p-6 ${robotoMono.className}`}>
      <div className="mb-8 space-y-3">
        <div className="h-7 w-64 rounded bg-[#150e24] animate-pulse" />
        <div className="h-3 w-80 max-w-full rounded bg-[#150e24] animate-pulse" />
        <div className="h-3 w-72 max-w-full rounded bg-[#150e24] animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-[150px] bg-[#1a0b2e]/80 border border-white/5 rounded-[20px] animate-pulse"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#1a0b2e]/80 p-6 rounded-[24px] border border-white/5">
          <div className="h-4 w-52 rounded bg-[#211533] animate-pulse mb-8" />

          <div className="space-y-7">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#211533] animate-pulse" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-72 max-w-full rounded bg-[#211533] animate-pulse" />
                  <div className="h-3 w-40 rounded bg-[#211533] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1a0b2e]/80 p-6 rounded-[24px] border border-white/5">
          <div className="h-4 w-48 rounded bg-[#211533] animate-pulse mb-8" />

          <div className="space-y-5">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-between">
                <div className="h-3 w-28 rounded bg-[#211533] animate-pulse" />
                <div className="h-3 w-20 rounded bg-[#211533] animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
