"use client";

import React from "react";
import Image from "next/image";
import { useAdminStore } from "@/context/AdminStoreContext";
import { Order } from "@/types";
import { formatPrice } from "@/lib/utils";

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus } = useAdminStore();

  const handleStatusChange = (orderId: string, newStatus: Order["status"]) => {
    updateOrderStatus(orderId, newStatus);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-zinc-950">Fulfillment & Orders</h1>
        <p className="text-xs text-zinc-500">
          Manage fulfillment stages, escrow payouts, and track delivery status.
        </p>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-600">
            <thead className="bg-zinc-50 text-zinc-900 uppercase text-[10px] font-bold border-b border-zinc-200 tracking-wider">
              <tr>
                <th className="px-6 py-3.5">Order ID</th>
                <th className="px-6 py-3.5">Customer</th>
                <th className="px-6 py-3.5">Items</th>
                <th className="px-6 py-3.5">Total</th>
                <th className="px-6 py-3.5">Date</th>
                <th className="px-6 py-3.5">Fulfillment Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-medium">
              {orders.map((ord) => (
                <tr key={ord.id} className="hover:bg-zinc-50/70 transition">
                  <td className="px-6 py-4 font-mono font-bold text-zinc-950">
                    {ord.orderNumber}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-zinc-900 block">
                      {ord.shippingAddress.firstName} {ord.shippingAddress.lastName}
                    </span>
                    <span className="text-[11px] text-zinc-400">{ord.shippingAddress.email}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {ord.items.slice(0, 3).map((item, i) => (
                        <div key={i} className="relative w-7 h-7 rounded bg-zinc-100 overflow-hidden border border-zinc-200 shrink-0">
                          <Image src={item.image} alt="" fill className="object-cover" />
                        </div>
                      ))}
                      {ord.items.length > 3 && (
                        <span className="text-[10px] font-bold text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded">
                          +{ord.items.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-zinc-950">
                    {formatPrice(ord.total)}
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{ord.date}</td>
                  <td className="px-6 py-4">
                    <select
                      value={ord.status}
                      onChange={(e) => handleStatusChange(ord.id, e.target.value as Order["status"])}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-hidden cursor-pointer ${
                        ord.status === "Delivered"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : ord.status === "Shipped"
                          ? "bg-blue-50 text-blue-800 border-blue-200"
                          : ord.status === "Processing"
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-rose-50 text-rose-800 border-rose-200"
                      }`}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
