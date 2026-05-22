export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0514] text-white font-mono p-8 pt-4 space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        <div className="space-y-3">
          <div className="h-9 w-80 max-w-full bg-[#150e24] rounded animate-pulse" />
          <div className="h-3 w-96 max-w-full bg-[#150e24] rounded animate-pulse" />
        </div>

        <div className="flex gap-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="w-40 h-20 bg-[#150e24] rounded-2xl border border-white/5 animate-pulse"
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-[90px] bg-[#150e24] border border-white/5 rounded-[2rem] animate-pulse"
          />
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 px-4">
          <div className="flex gap-4 items-center">
            <div className="h-10 w-72 bg-[#150e24] rounded-full animate-pulse" />
            <div className="h-6 w-24 bg-[#150e24] rounded animate-pulse" />
          </div>

          <div className="h-4 w-40 bg-[#150e24] rounded animate-pulse" />
        </div>

        <div className="bg-[#150e24]/40 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/5 bg-white/[0.02]">
            <div className="grid grid-cols-7 gap-4 min-w-[760px]">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="h-3 bg-[#211533] rounded animate-pulse"
                />
              ))}
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-7 gap-4 p-5 items-center min-w-[760px]"
              >
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-7 bg-[#211533] rounded animate-pulse" />
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-8 bg-[#211533] rounded-full animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <div className="h-11 w-72 bg-[#150e24] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
