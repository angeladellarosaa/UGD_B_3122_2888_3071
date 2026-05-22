export default function Loading() {
  return (
    <div className="w-full bg-[#0a0514] min-h-screen">
      <div className="px-10 pt-6">
        <div className="mb-10 space-y-3">
          <div className="h-8 w-80 max-w-full rounded bg-[#150e24] animate-pulse" />
          <div className="h-3 w-96 max-w-full rounded bg-[#150e24] animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[140px] rounded-[20px] bg-[#150e24] border border-white/5 animate-pulse"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="h-[400px] rounded-[20px] bg-[#150e24] border border-white/5 animate-pulse" />

          <div className="rounded-[20px] bg-[#150e24] border border-white/5 p-8">
            <div className="h-4 w-48 rounded bg-[#211533] animate-pulse mb-12" />

            <div className="space-y-10">
              {[1, 2, 3, 4].map((item) => (
                <div key={item}>
                  <div className="mb-3 flex justify-between">
                    <div className="h-3 w-28 rounded bg-[#211533] animate-pulse" />
                    <div className="h-3 w-10 rounded bg-[#211533] animate-pulse" />
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-[#211533] animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[20px] bg-[#150e24] border border-white/5 overflow-hidden mb-10">
          <div className="p-8 border-b border-white/5">
            <div className="h-4 w-56 bg-[#211533] animate-pulse rounded" />
          </div>

          <div className="p-6 space-y-6">
            {[1, 2, 3, 4, 5].map((row) => (
              <div
                key={row}
                className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_0.8fr_0.8fr] items-center gap-5"
              >
                <div className="space-y-2">
                  <div className="h-3 w-40 bg-[#211533] animate-pulse rounded" />
                  <div className="h-2 w-24 bg-[#211533] animate-pulse rounded" />
                </div>

                <div className="h-3 w-32 bg-[#211533] animate-pulse rounded" />

                <div className="h-3 w-20 bg-[#211533] animate-pulse rounded" />

                <div className="h-7 w-24 bg-[#211533] animate-pulse rounded-full md:justify-self-end" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
