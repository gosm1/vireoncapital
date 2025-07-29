import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LQ-SC Website System for Fitness Coaches | Vireon Capital",
  description:
    "Qualify leads, boost sales, and automate client booking with the LQ-SC Website System — built for fitness coaches & personal trainers. Less chasing. More coaching.",
  keywords: [
    "fitness coach website",
    "lead qualification system",
    "AI scoring funnel",
    "sales automation",
    "personal trainer CRM",
    "LQ-SC System",
    "fitness leads",
  ],
  metadataBase: new URL("https://vireoncapital.vercel.app"),
  openGraph: {
    title: "LQ-SC Website System for Fitness Coaches | Vireon Capital",
    description:
      "Qualify leads, boost sales, and automate client booking with the LQ-SC Website System — built for fitness coaches & personal trainers.",
    url: "https://vireoncapital.vercel.app",
    siteName: "LQ-SC Website System",
    images: [
      {
        url: "https://vireoncapital.vercel.app/og-image.jpeg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "LQ-SC Website System Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LQ-SC Website System for Fitness Coaches | Vireon Capital",
    description:
      "Qualify leads, boost sales, and automate client booking with the LQ-SC Website System — built for fitness coaches & personal trainers.",
    images: ["https://vireoncapital.vercel.app/og-image.jpeg"], // Replace with your actual OG image
    creator: "@vireoncapital", // Optional
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#ACFEC5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
