import type { Metadata } from "next";
import {
  DM_Sans,
  Geist,
  Geist_Mono,
  Gowun_Dodum,
  Space_Grotesk,
} from "next/font/google";
import "@/src/styles/globals.css";
import Header from "../components/Header";
import "devicon/devicon.min.css";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
});

const gowunDodum = Gowun_Dodum({
  variable: "--font-gowun",
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spacegrot",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edu, The Dev",
  description: "Portfólio Profissional de Eduardo Henrique Cioli Machado",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${gowunDodum.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
