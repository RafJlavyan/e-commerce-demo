import type { Metadata } from "next";
import { AdminClientShell } from "./AdminClientShell";

export const metadata: Metadata = {
  title: "AURA Executive Management Suite | Admin Portal",
  description: "Executive marketplace administration: real-time sales metrics, inventory management, order fulfillment, and client data.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminClientShell>{children}</AdminClientShell>;
}
