import type { Metadata } from "next";
import { Orbitron, Audiowide } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../components/language/LanguageContext";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",
});

export const metadata: Metadata = {
  title: "CustOS Portifolio",
  description: "Portfólio de Custódio Titosse ( Cust Coding ) – DevOps Fullstack, Desenvolvedor Mobile e Bitcoin, Cientista de Dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${audiowide.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
