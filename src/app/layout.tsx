import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MTGProInfo - Competitive Magic: The Gathering Resources",
  description:
    "Free competitive Magic: The Gathering resources. Metagame breakdowns, matchup matrices, tournament schedules, and top decklists for every format.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white dark:bg-bg-primary font-[family-name:var(--font-geist-sans)] text-neutral-900 dark:text-neutral-200 antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-[calc(100vh-64px)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
