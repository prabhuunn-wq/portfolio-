import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import PageBackground from "@/components/PageBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <PageBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}