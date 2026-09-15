export default function Stats() {
  const stats = [
    { value: "1+", label: "YEARS EXPERIENCE" },
    { value: "15+", label: "PROJECTS COMPLETED" },
    { value: "10+", label: "TECHNOLOGIES" },
  ];

  return (
    <section className="pl-28 pr-10 py-10 bg-[#080808]">
      <div className="grid grid-cols-4 gap-6 rounded-2xl border border-white/10 bg-[#111111]/80 p-8">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <h2 className="text-4xl font-bold text-amber-400">{item.value}</h2>

            <p className="mt-3 text-xs tracking-[0.2em] text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
