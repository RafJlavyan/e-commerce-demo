import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/context/AppProviders";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AURA | The Curated Global Marketplace",
    template: "%s | AURA Marketplace",
  },
  description: "Discover minimalist industrial design, studio electronics, Scandinavian furniture, and artisan goods from independent global creators.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aura-marketplace-demo.vercel.app"
  ),
  authors: [{ name: "Ravioh Digital", url: "https://ravioh.com" }],
  creator: "Ravioh Digital",
  publisher: "Ravioh Digital",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
  },
  openGraph: {
    title: "AURA | The Curated Global Marketplace",
    description: "Discover minimalist industrial design, studio electronics, Scandinavian furniture, and artisan goods. Demo project crafted by Ravioh Digital.",
    type: "website",
    locale: "en_US",
    siteName: "AURA Marketplace — by Ravioh Digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ravioh Digital — AURA Curated Global Marketplace",
        type: "image/png",
      },
      {
        url: "/preview-square.png",
        width: 1080,
        height: 1080,
        alt: "Ravioh Digital — AURA Square Preview Card",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA | The Curated Global Marketplace",
    description: "Curated e-commerce & marketplace showcase engineered by Ravioh Digital.",
    images: ["/twitter-image.png"],
    creator: "@raviohdigital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#fafafa] text-zinc-900 antialiased`}>
        <AppProviders>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
