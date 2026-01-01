import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakibul Islam Emon | MERN Stack Developer",
  description:
    "Portfolio of Rakibul Islam Emon, a MERN Stack Developer specializing in scalable enterprise systems and high-performance e-commerce.",
};

import { ThemeProvider } from "@/components/theme-provider";
import CanvasCursor from "@/components/portfolio/CanvasCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CanvasCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
