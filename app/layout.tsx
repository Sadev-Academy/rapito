import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

/**
 * Rapito Ristorante - Root Layout
 * 
 * This file defines the global structure, fonts, and SEO metadata
 * for the entire application. It uses Next.js Font Optimization
 * for Inter (sans-serif) and Playfair Display (serif).
 */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rapito | Authentic Italian Cuisine in Mayfair, London",
  description: "Experience the finest modern Italian dining at Rapito, Mayfair. Handcrafted pasta, premium steaks, and an award-winning wine list in a breathtaking luxury setting. Book your table today.",
  keywords: ["Italian restaurant London", "Mayfair dining", "fine dining London", "Italian cuisine", "Rapito restaurant"],
  openGraph: {
    title: "Rapito | Authentic Italian Cuisine in Mayfair, London",
    description: "Handcrafted Italian cuisine in a breathtaking luxury Mayfair setting. Reserve your table at London's most celebrated Italian restaurant.",
    type: "website",
    locale: "en_GB",
    siteName: "Rapito Ristorante",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#1A1A1A",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
