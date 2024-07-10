import { WooviLogo } from "@/components/svg/woovi";
import { cn } from "@/utils/cn";
import { ShieldCheckIcon } from "lucide-react";
import type { Metadata } from "next";
import { Nunito as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["sans-serif"]
});

export const metadata: Metadata = {
  title: "Woovi Challenge",
  description: "",
  icons: {
    icon: "/favicon.webp",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased min-h-screen", font.className)}>
       <main className="flex flex-col">
       <header className="py-9 flex flex-col items-center justify-center gap-10">
        <WooviLogo className="h-9 w-auto text-[#03D69D]" />
        <h1 className="text-2xl font-extrabold">João, como você quer pagar?</h1>
       </header>


       <div className="px-4">
        {children}
       </div>

       <footer className="py-6">
        <p className="flex items-center justify-center font-medium text-sm [line-height:18px] text-zinc-400">
          <ShieldCheckIcon className="h-5 w-auto me-1" />
          Pagamento 100% seguro via:
          <WooviLogo className="h-4 w-auto ms-1" />
        </p>
       </footer>
       </main>
      </body>
    </html>
  );
}
