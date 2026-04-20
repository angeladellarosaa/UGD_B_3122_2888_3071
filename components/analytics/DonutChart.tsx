export default function DonutChart() {
  return (
    <div className="glass p-6 flex flex-col items-center justify-center relative">

      <p className="text-xs opacity-60 mb-4 tracking-wider">
        SECTOR ALLOCATION
      </p>

      <div className="relative w-32 h-32 overflow-visible">
        <div className="absolute inset-0 rounded-full border-[10px] border-white/10" />
        <div className="absolute inset-0 rounded-full border-[10px] border-purple-900/40 blur-[1px]" />
        <div className="absolute inset-0 rounded-full border-[10px] border-purple-500" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-bold">$2.4M</span>
          <span className="text-[10px] opacity-50">TOTAL</span>
        </div>
      </div>

      <div className="mt-10 self-start -ml-4 flex flex-col gap-2 text-[10px]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-purple-500 rounded-sm"></span>
          <span>CARGO LINERS</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-purple-500 rounded-sm"></span>
          <span>TANKERS</span>
        </div>


        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-purple-500/30 shadow-md rounded-sm"></span>
          <span>SUPPORT VESSELS</span>
        </div>

      </div>

    </div>
  );
}