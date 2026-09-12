import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash Deals & Limited Drops | AURA",
  description:
    "Exclusive limited-time promotions on premium acoustic hardware, ceramics, and timeless design objects. Refreshed weekly.",
  openGraph: {
    title: "Flash Deals & Weekly Drops — AURA Marketplace",
    description: "Up to 40% off select handcrafted and precision engineered objects.",
  },
};

export default function DealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
