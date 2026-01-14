import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { ChatWidget } from "@/components/ui/chat-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rain Roofing Pros | Lubbock, TX Roofing Experts",
  description: "Reliable. Strong. Built for West Texas. Rain Roofing Pros offers roof replacement, repairs, inspections, and emergency services in Lubbock, TX. Free estimates, 24/7 emergency service, insurance assistance.",
  keywords: "roofing, Lubbock, Texas, roof repair, roof replacement, storm damage, emergency roofing, insurance claims, West Texas",
  authors: [{ name: "Rain Roofing Pros" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Rain Roofing Pros | Lubbock, TX Roofing Experts",
    description: "Reliable. Strong. Built for West Texas. Professional roofing services in Lubbock - repairs, replacements, inspections & emergency services.",
    url: "https://rain.haestus.dev",
    siteName: "Rain Roofing Pros",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rain Roofing - Your Trusted West Texas Roofing Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rain Roofing Pros | Lubbock, TX Roofing Experts",
    description: "Reliable. Strong. Built for West Texas. Professional roofing services in Lubbock.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
