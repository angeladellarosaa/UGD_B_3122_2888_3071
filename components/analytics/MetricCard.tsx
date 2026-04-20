export default function MetricCard({
  title,
  value,
  subtitle,
}: any) {
  return (
    <div className="rounded-2xl p-6 backdrop-blur-md bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-white/10 shadow-lg">
      <p className="text-xs uppercase tracking-wider text-white/60">
        {title}
      </p>

      <h2 className="text-2xl font-bold text-white mt-2">
        {value}
      </h2>

      {subtitle && (
        <p className="text-xs text-pink-400 mt-3 flex items-center gap-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}