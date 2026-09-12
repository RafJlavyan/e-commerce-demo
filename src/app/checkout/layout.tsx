import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Express Checkout | Secure Payment Simulation",
  description:
    "Complete your AURA order with simulated express credit card checkout, custom shipping address, and delivery tracking.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
