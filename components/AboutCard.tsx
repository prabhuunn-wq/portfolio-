export default function AboutCard() {
  const stats = [
    { value: "5+", label: "PROJECTS" },
    { value: "10+", label: "TECH" },
    { value: "5★", label: "REVIEWS" },
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/8 bg-white/6 p-3 backdrop-blur-2xl">
      <p className="text-[10px] font-semibold tracking-[0.15em] text-amber-400">ABOUT ME</p>

      <p className="mt-1.5 line-clamp-3 text-[11px] leading-4 text-gray-300">
        Full Stack Developer based in India, building real-world web apps that solve everyday problems.
      </p>

      <div className="mt-auto grid grid-cols-3 gap-1 border-t border-white/8 pt-2">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-sm font-black text-white">{stat.value}</p>
            <p className="text-[7px] leading-tight tracking-wide text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}