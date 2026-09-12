"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Package, ArrowLeft, ExternalLink, Truck, CheckCircle2, RotateCcw, ChevronRight } from "lucide-react";
import { useAdminStore } from "@/context/AdminStoreContext";
import { formatPrice } from "@/lib/utils";
import { Order } from "@/types";

export default function OrdersHistoryPage() {
  const { orders } = useAdminStore();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
        <div>
          <Link
            href="/account"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-950 mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Account
          </Link>
          <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">Order History</h1>
          <p className="text-xs text-zinc-500 mt-1">
            Tracking and records for all {orders.length} orders
          </p>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((ord) => (
          <div
            key={ord.id}
            className="bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-5 shadow-xs"
          >
            {/* Top metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase font-bold">Order Placed</span>
                  <span className="font-bold text-zinc-900">{ord.date}</span>
                </div>
                <div className="w-px h-6 bg-zinc-200 hidden sm:block" />
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase font-bold">Order Number</span>
                  <span className="font-mono font-bold text-zinc-900">{ord.orderNumber}</span>
                </div>
                <div className="w-px h-6 bg-zinc-200 hidden sm:block" />
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase font-bold">Total Amount</span>
                  <span className="font-bold text-zinc-900">{formatPrice(ord.total)}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    ord.status === "Delivered"
                      ? "bg-emerald-100 text-emerald-800"
                      : ord.status === "Shipped"
                      ? "bg-blue-100 text-blue-800"
                      : ord.status === "Processing"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-rose-100 text-rose-800"
                  }`}
                >
                  ● {ord.status}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedOrder(ord)}
                  className="text-xs font-semibold text-zinc-700 hover:text-zinc-950 underline flex items-center gap-1"
                >
                  View Details <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Items inside order */}
            <div className="space-y-4">
              {ord.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 bg-zinc-100 rounded-xl overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 line-clamp-1">{item.name}</h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5">
                        Qty: {item.quantity} {item.selectedColor ? `· ${item.selectedColor}` : ""}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-zinc-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom fulfillment note */}
            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-zinc-600" /> {ord.deliveryEstimate}
              </span>
              <span>Delivering to {ord.shippingAddress.city}, {ord.shippingAddress.state}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start pb-4 border-b border-zinc-100">
              <div>
                <h3 className="text-lg font-bold text-zinc-950">Order #{selectedOrder.orderNumber}</h3>
                <p className="text-xs text-zinc-500">{selectedOrder.date} · {selectedOrder.status}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="text-zinc-400 hover:text-zinc-950 text-xs font-bold px-2 py-1 bg-zinc-100 rounded-lg"
              >
                Close
              </button>
            </div>

            {/* Items */}
            <div className="divide-y divide-zinc-100">
              {selectedOrder.items.map((item, i) => (
                <div key={i} className="py-2.5 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-semibold text-zinc-900">{item.name}</span>
                    <span className="text-zinc-400 block">Qty: {item.quantity}</span>
                  </div>
                  <span className="font-bold text-zinc-900">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            {/* Shipping details */}
            <div className="pt-2 border-t border-zinc-100 text-xs text-zinc-600 space-y-1">
              <span className="font-bold text-zinc-900 block mb-1">Destination</span>
              <p>
                {selectedOrder.shippingAddress.firstName} {selectedOrder.shippingAddress.lastName}<br />
                {selectedOrder.shippingAddress.address} {selectedOrder.shippingAddress.apartment || ""}<br />
                {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.postalCode}
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-100 flex justify-between text-sm font-bold text-zinc-950">
              <span>Total Paid</span>
              <span>{formatPrice(selectedOrder.total)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
