"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  ArrowLeft,
  RotateCcw
} from "lucide-react";
import { useAdminStore } from "@/context/AdminStoreContext";

export function AdminClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { resetToDefaults } = useAdminStore();

  const navItems = [
    { label: "Dashboard Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Product Inventory", href: "/admin/products", icon: Package },
    { label: "Fulfillment & Orders", href: "/admin/orders", icon: ShoppingBag },
    { label: "Customer Base", href: "/admin/customers", icon: Users },
  ];

  return (
    <div className="bg-zinc-100/60 min-h-screen">
      {/* Top Admin Warning & Switcher Bar */}
      <div className="bg-zinc-950 text-white text-xs py-3 px-4 sm:px-8 border-b border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold tracking-wide">AURA Executive Marketplace Management Suite</span>
          <span className="text-zinc-500 hidden md:inline">| Local Storage Simulation Mode</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={resetToDefaults}
            className="text-zinc-400 hover:text-white text-[11px] flex items-center gap-1 transition"
          >
            <RotateCcw className="w-3 h-3" /> Reset Demo Data
          </button>
          <Link
            href="/"
            className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg flex items-center gap-1.5 transition"
          >
            <ArrowLeft className="w-3 h-3" /> Exit to Storefront
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-zinc-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "bg-white text-zinc-600 hover:bg-zinc-50 border border-zinc-200/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Child Views */}
        {children}
      </div>
    </div>
  );
}
