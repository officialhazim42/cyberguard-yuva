import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#071A2F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberguardyuva.org"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "CyberGuard YUVA",
    "Youth Cyber Defense Club",
    "Cybersecurity India",
    "Mera Yuva Bharat",
    "MY Bharat",
    "Digital Safety Education",
    "Cyber Defense",
    "Hashim Bashir",
    "Cyber Safety India",
    "Youth Empowerment",
  ],
  authors: [{ name: "Hashim Bashir", url: "https://cyberguardyuva.org" }],
  creator: "CyberGuard YUVA",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cyberguardyuva.org",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.logo.src,
        width: 800,
        height: 800,
        alt: siteConfig.logo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.logo.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/cyberguard-yuva-logo.png",
    shortcut: "/images/cyberguard-yuva-logo.png",
    apple: "/images/cyberguard-yuva-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex flex-col min-h-screen font-sans bg-[#F3F7FB] text-[#172B43] selection:bg-[#35C6E8]/30 selection:text-[#071A2F]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
