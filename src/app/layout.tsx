import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import FloatingAction from "./components/FloatingAction";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Granenko & Dovzhenko | Elite Legal Services",
  description: "Premier legal practice in Odesa. Defending excellence and legacy with discretion and unwavering advocacy.",
};

import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <LanguageProvider>
          {children}
          <FloatingAction />
        </LanguageProvider>
      </body>
    </html>
  );
}
