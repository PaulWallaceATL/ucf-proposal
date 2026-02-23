import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ucf-proposal.vercel.app"),
  title: {
    default: "UCF Stadium Digital Experience | Antimatter × UCF",
    template: "%s | Antimatter × UCF",
  },
  description:
    "Three premium web experience options to showcase luxury seating, suites, and event spaces—built inside UCFKnights.com.",
  openGraph: {
    title: "UCF Stadium Digital Experience",
    description:
      "Three premium web experience options to showcase luxury seating, suites, and event spaces—built inside UCFKnights.com.",
    siteName: "Antimatter × UCF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UCF Stadium Digital Experience",
    description:
      "Three premium web experience options to showcase luxury seating, suites, and event spaces—built inside UCFKnights.com.",
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
        className={`${inter.className} ${bebasNeue.variable} antialiased bg-ucf-black text-ucf-white`}
      >
        <PreloaderWrapper>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </PreloaderWrapper>
      </body>
    </html>
  );
}
