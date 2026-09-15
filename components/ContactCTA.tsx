import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-[#080808] pl-28 pr-10 pb-20">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-cover bg-center p-14"
        style={{
          backgroundImage: "url('/images/hero-dark.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-xl">

          <h2 className="text-4xl font-bold text-white">
            LET'S BUILD SOMETHING AMAZING TOGETHER
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            I'm currently available for freelance work,
            full-time opportunities and exciting collaborations.
          </p>

          <button className="mt-10 flex items-center gap-3 rounded-xl border border-amber-500 bg-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
            GET IN TOUCH
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}