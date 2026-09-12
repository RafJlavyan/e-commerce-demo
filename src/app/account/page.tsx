"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Package, MapPin, CreditCard, Settings, ShieldCheck, ArrowRight, Clock, Star, Edit3 } from "lucide-react";
import { useAdminStore } from "@/context/AdminStoreContext";
import { formatPrice } from "@/lib/utils";

export default function AccountPage() {
  const { orders } = useAdminStore();
  const [activeTab, setActiveTab] = useState<"profile" | "addresses" | "payments" | "settings">("profile");

  const recentOrders = orders.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Profile Summary Card */}
      <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-zinc-100 ring-4 ring-zinc-100">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
              alt="Julian Rafiq"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-zinc-950">Julian Rafiq</h1>
              <span className="bg-zinc-950 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                VIP Collector
              </span>
            </div>
            <p className="text-xs text-zinc-500">julian.rafiq@example.com · Member since Jan 2025</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/account/orders"
            className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition"
          >
            <Package className="w-4 h-4" /> View Order History
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar (3 cols) */}
        <div className="lg:col-span-3 space-y-2">
          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition text-left ${
              activeTab === "profile"
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
            }`}
          >
            <User className="w-4 h-4" /> Overview & Profile
          </button>
          <Link
            href="/account/orders"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60 transition"
          >
            <Package className="w-4 h-4" /> Orders ({orders.length})
          </Link>
          <button
            type="button"
            onClick={() => setActiveTab("addresses")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition text-left ${
              activeTab === "addresses"
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
            }`}
          >
            <MapPin className="w-4 h-4" /> Delivery Addresses
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("payments")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition text-left ${
              activeTab === "payments"
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
            }`}
          >
            <CreditCard className="w-4 h-4" /> Payment Methods
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition text-left ${
              activeTab === "settings"
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
            }`}
          >
            <Settings className="w-4 h-4" /> Security & Preferences
          </button>
        </div>

        {/* Tab Content (9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          {activeTab === "profile" && (
            <div className="space-y-6">
              {/* Account Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-zinc-200/80">
                  <span className="text-xs text-zinc-400 font-medium">Total Lifetime Orders</span>
                  <p className="text-2xl font-extrabold text-zinc-950 mt-1">{orders.length}</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-zinc-200/80">
                  <span className="text-xs text-zinc-400 font-medium">Saved In Wishlist</span>
                  <p className="text-2xl font-extrabold text-zinc-950 mt-1">Saved items active</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-zinc-200/80">
                  <span className="text-xs text-zinc-400 font-medium">AURA Tier Benefit</span>
                  <p className="text-2xl font-extrabold text-emerald-600 mt-1">Free Priority</p>
                </div>
              </div>

              {/* Recent Orders Preview */}
              <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <h3 className="text-sm font-bold text-zinc-950">Recent Orders</h3>
                  <Link href="/account/orders" className="text-xs font-semibold text-zinc-900 hover:underline">
                    View All →
                  </Link>
                </div>

                <div className="divide-y divide-zinc-100">
                  {recentOrders.map((ord) => (
                    <div key={ord.id} className="py-3 flex items-center justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-bold text-zinc-900">{ord.orderNumber}</span>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          {ord.date} · {ord.items.length} {ord.items.length === 1 ? "item" : "items"}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-zinc-950 block">{formatPrice(ord.total)}</span>
                        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          ord.status === "Delivered" ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                        }`}>
                          {ord.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 space-y-4">
              <h3 className="text-sm font-bold text-zinc-950">Saved Delivery Addresses</h3>
              <div className="p-4 border-2 border-zinc-950 rounded-xl bg-zinc-50/40 relative">
                <span className="absolute top-3 right-3 text-[10px] font-bold bg-zinc-950 text-white px-2 py-0.5 rounded">
                  Default
                </span>
                <h4 className="text-xs font-bold text-zinc-900">Julian Rafiq (Home)</h4>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  742 Evergreen Terrace, Suite 4B<br />
                  San Francisco, CA 94107, United States<br />
                  Phone: +1 (555) 234-5678
                </p>
              </div>
            </div>
          )}

          {activeTab === "payments" && (
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 space-y-4">
              <h3 className="text-sm font-bold text-zinc-950">Saved Payment Methods</h3>
              <div className="p-4 border border-zinc-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-zinc-700" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900">Visa ending in 4242</h4>
                    <p className="text-[11px] text-zinc-400">Expires 12/28 · Demo Card</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded">
                  Default
                </span>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 space-y-4">
              <h3 className="text-sm font-bold text-zinc-950">Collector Preferences</h3>
              <div className="space-y-3 text-xs">
                <label className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl">
                  <span>Order and shipment tracking email alerts</span>
                  <input type="checkbox" defaultChecked className="accent-zinc-950" />
                </label>
                <label className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl">
                  <span>New studio capsule drop notifications</span>
                  <input type="checkbox" defaultChecked className="accent-zinc-950" />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
