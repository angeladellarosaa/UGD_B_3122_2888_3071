export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0514] text-white font-mono p-8 pt-4 flex flex-col gap-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-[120px] bg-[#150e24] border border-white/5 rounded-3xl animate-pulse"
          />
        ))}
      </div>

      <div className="flex-grow flex flex-col gap-4">
        <div className="flex justify-between items-center px-2">
          <div className="h-4 w-56 bg-[#150e24] rounded animate-pulse" />

          <div className="flex gap-2">
            <div className="h-6 w-24 bg-[#150e24] rounded-full animate-pulse" />
            <div className="h-6 w-8 bg-[#150e24] rounded animate-pulse" />
          </div>
        </div>

        <div className="bg-[#150e24]/30 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="bg-white/5 border-b border-white/5 px-8 py-5">
            <div className="grid grid-cols-5 gap-4 min-w-[720px]">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="h-3 bg-[#211533] rounded animate-pulse"
                />
              ))}
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-4 px-8 py-5 items-center min-w-[720px]"
              >
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-3 bg-[#211533] rounded animate-pulse" />
                <div className="h-6 w-24 bg-[#211533] rounded-full animate-pulse justify-self-center" />
                <div className="h-3 bg-[#211533] rounded animate-pulse ml-auto w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 w-12 h-12 bg-[#150e24] rounded-full animate-pulse" />
    </div>
  );
}
