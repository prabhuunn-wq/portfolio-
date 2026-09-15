import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#080808] px-10 pb-20 pl-28">
      <div className="max-w-md rounded-2xl border border-white/10 bg-[#111111]/80 p-8">
        <p className="mb-6 text-sm tracking-[0.25em] text-amber-400">
          ABOUT ME
        </p>

        <p className="leading-8 text-gray-400">
          I'm a passionate Full Stack Developer based in India. I build
          beautiful modern web applications using React, Next.js and
          TypeScript.
        </p>

        <div className="relative mt-8 h-72 overflow-hidden rounded-xl">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        <button className="mt-8 rounded-xl border border-amber-400 px-5 py-3 text-amber-400">
          MORE ABOUT ME
        </button>
      </div>
    </section>
  );
}