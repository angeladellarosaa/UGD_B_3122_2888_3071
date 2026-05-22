export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0514] p-8">
      <div className="h-10 w-64 bg-[#1a1029] rounded animate-pulse mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-[#12071f] border border-[#2d1748] rounded-3xl p-6 animate-pulse"
          >
            <div className="h-40 bg-[#1f1033] rounded-2xl mb-6"></div>
            <div className="h-6 w-40 bg-[#1f1033] rounded mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-[#1f1033] rounded w-full"></div>
              <div className="h-4 bg-[#1f1033] rounded w-5/6"></div>
              <div className="h-4 bg-[#1f1033] rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}