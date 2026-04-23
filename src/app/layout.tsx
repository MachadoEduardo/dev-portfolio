import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/src/styles/globals.css';
import Header from "./components/Header";
import "devicon/devicon.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edu, The Dev",
  description: "Portfólio Profissional de Eduardo Henrique Cioli Machado",
  icons: {
    // icon: "/icons/lvtech_logo_orange.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
