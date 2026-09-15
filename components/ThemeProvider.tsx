"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

// next-themes injects an inline <script> to prevent theme flicker on load.
// React 19 (Next.js 16.2+) warns about this — known false positive, the
// script still runs correctly during SSR. Safe to suppress in dev only;
// production builds are unaffected either way.
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}