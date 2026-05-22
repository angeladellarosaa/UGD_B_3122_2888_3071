export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-[#0a0514] text-white font-mono p-6 lg:p-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-white/5 pb-8">
        <div className="space-y-4">
          <div className="h-10 w-72 rounded-xl bg-[#150e24] animate-pulse" />
          <div className="h-3 w-80 max-w-full rounded bg-[#150e24] animate-pulse" />
        </div>

        <div className="w-44 h-16 rounded-2xl bg-[#150e24] border border-white/5 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-[170px] rounded-[2rem] bg-[#150e24] border border-white/5 animate-pulse"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-[#150e24]/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
            <div className="h-4 w-56 rounded bg-[#211533] animate-pulse" />
            <div className="h-8 w-28 rounded-full bg-[#211533] animate-pulse" />
          </div>

          <div className="p-8 space-y-6">
            {[1, 2, 3, 4, 5].map((row) => (
              <div
                key={row}
                className="grid grid-cols-1 md:grid-cols-[1.4fr_0.7fr_1.4fr_0.7fr] items-center gap-5"
              >
                <div className="space-y-3">
                  <div className="h-4 w-40 rounded bg-[#211533] animate-pulse" />
                  <div className="h-3 w-28 rounded bg-[#211533] animate-pulse" />
                </div>

                <div className="h-8 w-24 rounded-xl bg-[#211533] animate-pulse" />

                <div className="h-2 w-full rounded-full bg-[#211533] animate-pulse" />

                <div className="space-y-2 md:justify-self-end">
                  <div className="h-3 w-16 rounded bg-[#211533] animate-pulse" />
                  <div className="h-2 w-12 rounded bg-[#211533] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#150e24] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center">
            <div className="h-4 w-40 rounded bg-[#211533] animate-pulse mb-10" />
            <div className="w-52 h-52 rounded-full bg-[#211533] animate-pulse" />
          </div>

          <div className="bg-[#150e24]/60 border border-white/5 rounded-[2.5rem] p-8">
            <div className="h-4 w-44 rounded bg-[#211533] animate-pulse mb-8" />

            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item}>
                  <div className="flex justify-between mb-2">
                    <div className="h-3 w-20 rounded bg-[#211533] animate-pulse" />
                    <div className="h-3 w-16 rounded bg-[#211533] animate-pulse" />
                  </div>

                  <div className="h-2 w-full rounded-full bg-[#211533] animate-pulse" />
                </div>
              ))}
            </div>

            <div className="w-full h-14 rounded-2xl bg-[#211533] animate-pulse mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
