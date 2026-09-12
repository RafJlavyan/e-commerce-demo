import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Bag | Review Your Order",
  description:
    "Review your curated selections, calculate international shipping, and apply promo codes in your AURA shopping bag.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
