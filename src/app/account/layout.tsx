import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account & Orders | AURA Marketplace",
  description: "Manage shipping destinations, payment methods, profile settings, and order history.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
