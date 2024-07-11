import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Nunito as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Woovi Challenge",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased min-h-screen", font.className)}>
        <Header />
        <main className="space-y-6">
          <div className="px-4">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
