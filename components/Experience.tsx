export default function Experience() {
  const experience = [
    {
      year: "2025 - Present",
      role: "Full Stack Developer",
      company: "Freelance",
      description:
        "Building modern web applications using Next.js, React, TypeScript and Node.js.",
    },
    {
      year: "2024 - 2025",
      role: "Frontend Developer",
      company: "Personal Projects",
      description:
        "Created e-commerce, portfolio and dashboard applications with responsive UI.",
    },
  ];

  return (
    <section className="bg-[#080808] pl-28 pr-10 py-16">
      <div className="rounded-2xl border border-white/10 bg-[#111111]/80 p-10">

        <h2 className="mb-10 text-lg tracking-[0.25em] text-amber-400">
          EXPERIENCE
        </h2>

        <div className="space-y-8">

          {experience.map((item) => (
            <div
              key={item.year}
              className="rounded-xl border border-white/10 p-6 transition hover:border-amber-400"
            >
              <p className="text-amber-400">{item.year}</p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                {item.role}
              </h3>

              <p className="text-gray-400">{item.company}</p>

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}