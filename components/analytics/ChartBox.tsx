export default function ChartBox() {
  const data = [40, 70, 55, 90, 60, 75, 50, 85, 65, 95, 45, 80];

  const labels = ["MAY 01", "MAY 08", "MAY 15", "MAY 22", "MAY 30"];

  return (
    <div className="glass p-6 h-[260px] relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xs opacity-60 tracking-widest">
          CONSUMPTION TRENDS_30D
        </p>

        <div className="flex items-center gap-4 text-[9px] tracking-[0.25em] uppercase">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_6px_#a855f7]"></span>
            <span className="text-gray-400">MAIN FLEET</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_6px_#a855f7]"></span>
            <span className="text-gray-400">AUXILIARY</span>
          </div>
        </div>
      </div>

      <div className="flex items-end gap-2 h-[150px] w-full">
        {data.map((value, i) => (
          <div key={i} className="flex flex-col items-center justify-end w-full">
            <div
              className="w-4 bg-gradient-to-t from-[#a855f7] to-[#d095ff]"
              style={{ height: `${value * 1.4}px` }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-3 px-1">
        {labels.map((label, i) => (
          <span
            key={i}
            className="text-[8px] text-gray-400 tracking-widest"
          >
            {label}
          </span>
        ))}

      </div>

    </div>
  );
}