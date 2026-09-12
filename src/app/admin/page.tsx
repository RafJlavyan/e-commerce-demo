"use client";

import React from "react";
import Link from "next/link";
import {
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { useAdminStore } from "@/context/AdminStoreContext";
import { ADMIN_ANALYTICS, MOCK_CUSTOMERS } from "@/data/adminData";
import { formatPrice } from "@/lib/utils";

export default function AdminDashboardPage() {
  const { products, orders } = useAdminStore();

  const totalRevenue = orders.reduce((sum, ord) => sum + ord.total, ADMIN_ANALYTICS.totalRevenue);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
          Executive Performance Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Real-time metrics, global sales distributions, and inventory velocity across studios.
        </p>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-500">Total Net Revenue</span>
            <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-extrabold text-zinc-950">{formatPrice(totalRevenue)}</h3>
            <span className="text-xs font-bold text-emerald-600">+18.4% YoY</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-500">Fulfilled Orders</span>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-extrabold text-zinc-950">{orders.length + ADMIN_ANALYTICS.totalOrders}</h3>
            <span className="text-xs font-bold text-blue-600">+12.2% MoM</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-500">Active Collectors</span>
            <div className="p-2 bg-purple-50 text-purple-700 rounded-lg">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-extrabold text-zinc-950">{ADMIN_ANALYTICS.activeCustomers}</h3>
            <span className="text-xs font-bold text-purple-600">+24.5%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-500">Catalog SKUs</span>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-lg">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-extrabold text-zinc-950">{products.length} Items</h3>
            <span className="text-xs font-bold text-zinc-500">15 Categories</span>
          </div>
        </div>
      </div>

      {/* Monthly Sales Revenue Chart (Tailwind pure CSS bars) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 space-y-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-zinc-950">Marketplace Gross Revenue Velocity</h3>
            <p className="text-xs text-zinc-500">Monthly breakdown for Q4 2025 – Q1 2026</p>
          </div>
          <span className="text-xs font-semibold text-zinc-600 bg-zinc-100 px-3 py-1 rounded-lg self-start sm:self-auto">
            Avg Order Value: ${ADMIN_ANALYTICS.averageOrderValue}
          </span>
        </div>

        <div className="pt-6 grid grid-cols-6 gap-3 sm:gap-6 items-end h-56 border-b border-zinc-100 pb-4">
          {ADMIN_ANALYTICS.monthlySales.map((item) => {
            const heightPercent = Math.round((item.revenue / 40000) * 100);
            return (
              <div key={item.month} className="flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-bold text-zinc-600 opacity-0 group-hover:opacity-100 transition">
                  ${(item.revenue / 1000).toFixed(1)}k
                </span>
                <div
                  className="w-full bg-zinc-900 group-hover:bg-zinc-700 rounded-t-xl transition-all duration-500"
                  style={{ height: `${heightPercent}%` }}
                />
                <span className="text-xs font-bold text-zinc-700">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid: Recent Orders & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-3xl border border-zinc-200/80 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
            <h3 className="text-sm font-bold text-zinc-950">Latest Customer Orders</h3>
            <Link href="/admin/orders" className="text-xs font-semibold text-zinc-900 hover:underline">
              Manage Orders →
            </Link>
          </div>

          <div className="divide-y divide-zinc-100">
            {orders.slice(0, 5).map((ord) => (
              <div key={ord.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono font-bold text-zinc-900">{ord.orderNumber}</span>
                  <p className="text-zinc-500 text-[11px]">{ord.shippingAddress.firstName} {ord.shippingAddress.lastName} · {ord.date}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-zinc-900 block">{formatPrice(ord.total)}</span>
                  <span className="text-[10px] text-emerald-700 font-semibold">{ord.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-3xl border border-zinc-200/80 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
            <h3 className="text-sm font-bold text-zinc-950">High Velocity Catalog Items</h3>
            <Link href="/admin/products" className="text-xs font-semibold text-zinc-900 hover:underline">
              Inventory →
            </Link>
          </div>

          <div className="divide-y divide-zinc-100">
            {products.slice(0, 5).map((prod) => (
              <div key={prod.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-zinc-900 line-clamp-1">{prod.name}</span>
                  <p className="text-zinc-500 text-[11px]">{prod.brand} · {prod.stock} in stock</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-zinc-900">{formatPrice(prod.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
