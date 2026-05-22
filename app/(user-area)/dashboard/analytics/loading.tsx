export default function Loading() {
  return (
    <div className="w-full bg-[#0a0514] min-h-screen">
      <div className="px-10 pt-6">
        <div className="mb-8 space-y-3">
          <div className="h-8 w-72 rounded bg-[#150e24] animate-pulse" />
          <div className="h-3 w-96 rounded bg-[#150e24] animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-[145px] rounded-[2rem] bg-[#150e24] border border-white/5 animate-pulse"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 h-[400px] rounded-[2.5rem] bg-[#150e24] border border-white/5 animate-pulse" />
          <div className="h-[400px] rounded-[2.5rem] bg-[#150e24] border border-white/5 animate-pulse" />
        </div>

        <div className="h-[320px] rounded-[2.5rem] bg-[#150e24] border border-white/5 animate-pulse mb-10" />
      </div>
    </div>
  );
}