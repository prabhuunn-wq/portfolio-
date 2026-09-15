"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Mail, MapPin, Send } from "lucide-react";
import { SiGithub, SiX, SiInstagram } from "@icons-pack/react-simple-icons";

const socials = [
  { icon: SiGithub, href: "https://github.com/", label: "GitHub" },
  { icon: SiX, href: "https://twitter.com/", label: "Twitter" },
  { icon: SiInstagram, href: "https://instagram.com/", label: "Instagram" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("idle");
      alert("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-32 sm:px-12">
        <p className="text-xs font-semibold tracking-[0.25em] text-amber-600 dark:text-amber-400">
          CONTACT
        </p>
        <h1 className="mt-3 text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
          Let&apos;s Build Something Together
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400">
          I&apos;m currently available for freelance work and open to full-time
          opportunities. Reach out — I usually reply within a day.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Left - Info */}
          <div className="space-y-4">
            <div className="rounded-xl border border-black/10 bg-black/[0.03] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 text-amber-600 dark:border-amber-400/30 dark:text-amber-400">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    prabhuunn@example.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-black/10 bg-black/[0.03] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 text-amber-600 dark:border-amber-400/30 dark:text-amber-400">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-black/10 bg-black/[0.03] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
              <p className="mb-4 text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400">
                FOLLOW ME
              </p>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-gray-600 transition hover:border-amber-500 hover:text-amber-600 dark:border-white/10 dark:text-gray-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-black/10 bg-black/[0.03] p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium text-gray-500 dark:text-gray-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-black/10 bg-black/[0.02] px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium text-gray-500 dark:text-gray-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-black/10 bg-black/[0.02] px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-gray-500 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-black/10 bg-black/[0.02] px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-amber-500 bg-amber-500 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Message Sent ✓"
                  : "Send Message"}
              {status !== "sending" && <Send size={15} />}
            </button>

            {status === "sent" && (
              <p className="text-center text-xs text-green-600 dark:text-green-400">
                Thanks! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}