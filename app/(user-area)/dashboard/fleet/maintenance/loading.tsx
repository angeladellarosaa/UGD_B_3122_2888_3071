export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0514] text-white font-mono p-8 pt-4 space-y-8">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div className="space-y-3">
          <div className="h-9 w-72 max-w-full rounded bg-[#150e24] animate-pulse" />
          <div className="h-3 w-96 max-w-full rounded bg-[#150e24] animate-pulse" />
        </div>

        <div className="h-11 w-64 rounded-full bg-[#150e24] border border-white/5 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-[130px] rounded-3xl bg-[#150e24] border border-white/5 animate-pulse"
          />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-[#150e24] border border-white/5 rounded-[2.5rem] p-8 space-y-8 shadow-2xl">
          <div className="h-4 w-64 rounded bg-[#211533] animate-pulse" />

          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-3">
              <div className="flex justify-between">
                <div className="h-4 w-36 rounded bg-[#211533] animate-pulse" />
                <div className="h-3 w-12 rounded bg-[#211533] animate-pulse" />
              </div>

              <div className="h-2 w-full rounded-full bg-[#211533] animate-pulse" />

              <div className="flex justify-between">
                <div className="h-3 w-20 rounded bg-[#211533] animate-pulse" />
                <div className="h-3 w-20 rounded bg-[#211533] animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-12 lg:col-span-4 bg-[#150e24] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
          <div className="h-4 w-48 rounded bg-[#211533] animate-pulse mb-8" />

          <div className="space-y-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-3 w-28 rounded bg-[#211533] animate-pulse" />
                  <div className="h-3 w-12 rounded bg-[#211533] animate-pulse" />
                </div>

                <div className="h-1.5 w-full rounded-full bg-[#211533] animate-pulse" />
              </div>
            ))}
          </div>

          <div className="h-14 w-full rounded-2xl bg-[#211533] animate-pulse mt-8" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="h-[220px] rounded-[2.5rem] bg-[#150e24] border border-white/5 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
