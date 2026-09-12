import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saved Wishlist | Your Personal Collection",
  description:
    "Keep track of saved design objects, limited capsule drops, and studio favorites in your personal AURA wishlist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
