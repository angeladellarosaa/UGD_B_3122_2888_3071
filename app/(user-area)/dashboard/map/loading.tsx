export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0514] p-8 text-white font-mono">
      <div className="space-y-2 mb-8">
        <div className="h-10 w-64 rounded bg-[#150e24] animate-pulse" />
        <div className="h-4 w-48 rounded bg-[#150e24] animate-pulse" />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_500px] gap-8">
        <div className="h-[700px] rounded-[2.5rem] bg-[#150e24] border border-white/5 animate-pulse" />
        <div className="space-y-5">
          <div className="h-14 rounded-full bg-[#150e24] border border-white/5 animate-pulse" />
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[160px] rounded-[2rem] bg-[#150e24] border border-white/5 animate-pulse"
            />
          ))}
          <div className="h-14 rounded-full bg-[#bc66ff]/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}