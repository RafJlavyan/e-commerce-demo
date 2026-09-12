"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Package, Truck, ArrowRight, ShieldCheck, Download, Home } from "lucide-react";
import confetti from "canvas-confetti";
import { Order } from "@/types";
import { getFromStorage } from "@/lib/storage";
import { formatPrice } from "@/lib/utils";

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Launch celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const latest = getFromStorage<Order | null>("aura_latest_order", null);
    if (latest) {
      setOrder(latest);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Success Top Banner */}
      <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Payment Confirmed (Simulation)
          </span>
          <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">
            Thank you for your order!
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto">
            Order confirmation has been dispatched to {order?.shippingAddress.email || "your email"}. The independent studio has begun hand-packing your items.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full text-xs font-mono font-bold text-zinc-800">
          <span>Order Reference: {order?.orderNumber || "AUR-928412"}</span>
        </div>
      </div>

      {/* Order Progress Stepper */}
      <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-4">
        <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Fulfillment Status</h3>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="space-y-1">
            <div className="h-1.5 bg-emerald-600 rounded-full" />
            <span className="font-bold text-zinc-900">1. Confirmed</span>
            <span className="block text-[10px] text-zinc-400">Escrow Secured</span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-zinc-950 rounded-full" />
            <span className="font-bold text-zinc-900">2. Processing</span>
            <span className="block text-[10px] text-zinc-400">At Studio Atelier</span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-zinc-200 rounded-full" />
            <span className="font-medium text-zinc-400">3. Out for Delivery</span>
            <span className="block text-[10px] text-zinc-400">{order?.deliveryEstimate || "Estimated in 3-5 days"}</span>
          </div>
        </div>
      </div>

      {/* Order Receipt Details */}
      {order && (
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
            <h2 className="text-base font-bold text-zinc-950">Order Breakdown</h2>
            <span className="text-xs text-zinc-400">{order.date}</span>
          </div>

          {/* Items */}
          <div className="divide-y divide-zinc-100">
            {order.items.map((item, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg bg-zinc-100 overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 line-clamp-1">{item.name}</h4>
                    <p className="text-[11px] text-zinc-400">
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

          {/* Pricing Totals */}
          <div className="pt-4 border-t border-zinc-100 space-y-2 text-xs text-zinc-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-zinc-900">{formatPrice(order.subtotal)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>Discount</span>
                <span>-{formatPrice(order.discount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold text-zinc-900">
                {order.shipping === 0 ? "FREE" : formatPrice(order.shipping)}
              </span>
            </div>
            <div className="flex justify-between text-base font-extrabold text-zinc-950 pt-2 border-t border-zinc-200">
              <span>Total Paid</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>

          {/* Shipping & Payment Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-100 text-xs">
            <div>
              <span className="font-bold text-zinc-900 block mb-1">Delivery Destination</span>
              <p className="text-zinc-600">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                {order.shippingAddress.address} {order.shippingAddress.apartment || ""}<br />
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}<br />
                {order.shippingAddress.country}
              </p>
            </div>
            <div>
              <span className="font-bold text-zinc-900 block mb-1">Payment Method</span>
              <p className="text-zinc-600">
                {order.paymentMethod.brand} ending in {order.paymentMethod.last4}<br />
                Escrow Guarantee ID: #{order.orderNumber.replace("AUR-", "ESC-")}<br />
                Status: <span className="text-emerald-600 font-semibold">Captured</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <Link
          href="/account/orders"
          className="w-full sm:w-auto px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-xl text-xs font-semibold text-center transition"
        >
          View All My Orders
        </Link>
        <Link
          href="/products"
          className="w-full sm:w-auto px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-2"
        >
          Continue Shopping <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
