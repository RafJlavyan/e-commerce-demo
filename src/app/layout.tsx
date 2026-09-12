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
  authors: [{ name: "Ravioh Digital" }],
  creator: "Ravioh Digital",
  publisher: "Ravioh Digital",
  openGraph: {
    title: "AURA | The Curated Global Marketplace",
    description: "Discover minimalistic industrial design, studio electronics, Scandinavian furniture, and artisan goods. Demo by Ravioh Digital.",
    type: "website",
    locale: "en_US",
    siteName: "AURA Marketplace — by Ravioh Digital",
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
