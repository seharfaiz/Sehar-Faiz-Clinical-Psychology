import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { site } from "@/lib/config";
import "./tailwind.css";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: { title: site.title, description: site.description, type: "website", locale: "en" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
