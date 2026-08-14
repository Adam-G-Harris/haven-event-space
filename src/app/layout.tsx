import type { Metadata } from "next";
import { Bebas_Neue, Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";
import "./custom.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const baskerville = Libre_Baskerville({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-baskerville",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "The Haven Event Space | KC Wedding & Event Venue",
  description:
    "Kansas City's most technically advanced event venue. Contemporary farmhouse on 40 private acres in Louisburg, KS — cinematic lighting, immersive sound, two luxury suites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${baskerville.variable} ${montserrat.variable}`}
    >
      <body className="font-body font-light text-ink bg-canvas min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
