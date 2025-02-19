import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/navbar/Navbar";
import QueryClientProvider from "@/lib/config/QueryClientProvider";

/**
 * Create a new instance of Geist font
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Create a new instance of Geist Mono font
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadata for the app
 */
export const metadata: Metadata = {
  title: "SDG Group - Population Dashboard",
  description: "Population dashboard for the SDG Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider>
          <Navbar />
          <div className="container items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full max-w-screen-xl mx-auto">
            {children}
          </div>
        </QueryClientProvider>
        <footer className="flex flex-wrap items-center justify-center w-full">
          Created by Álvaro Balirac Seijas
        </footer>
      </body>
    </html>
  );
}
