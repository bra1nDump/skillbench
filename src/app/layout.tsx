import { IBM_Plex_Mono, Lato } from "next/font/google";

import { SiteHeader } from "@/components/site-header";

import type { Metadata } from "next";

import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Skillbench",
  description:
    "Evidence-backed rankings for the best agent skills, platforms, and native capabilities by category.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
