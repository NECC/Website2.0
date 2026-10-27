import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: {
    default: "NECC - Núcleo de Estudantes de Ciências da Computação",
    template: "%s | NECC",
  },

  description:
    "Website oficial do Núcleo de Estudantes de Ciências da Computação da Universidade do Minho. Descobre as nossas atividades, eventos, parcerias e iniciativas para a comunidade académica.",

  applicationName: "NECC",

  authors: [
    {
      name: "NECC — Núcleo de Estudantes de Ciências da Computação",
      url: "https://necc.pt",
    },
  ],

  creator: "NECC",
  publisher: "NECC",

  keywords: [
    "NECC",
    "Núcleo de Estudantes de Ciências da Computação",
    "Ciências da Computação",
    "Universidade do Minho",
    "UMinho",
    "Braga",
  ],

  icons: {
    icon: "/favicon.ico",
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
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
