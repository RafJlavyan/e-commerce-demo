import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Curated Products | Studio Collections",
  description:
    "Explore our complete directory of minimalist industrial electronics, Scandinavian furniture, artisan homeware, and fashion essentials curated by Ravioh Digital.",
  openGraph: {
    title: "All Curated Products — AURA Marketplace",
    description: "Browse 50+ curated design items from independent global ateliers.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
