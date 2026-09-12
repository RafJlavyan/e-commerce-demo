"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    promoCode,
    applyPromoCode,
    removePromoCode,
    discountAmount,
    shippingEstimate,
    finalTotal,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [codeSuccess, setCodeSuccess] = useState(false);

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    setCodeError("");
    setCodeSuccess(false);

    if (!inputCode.trim()) return;

    const success = applyPromoCode(inputCode);
    if (success) {
      setCodeSuccess(true);
      setInputCode("");
    } else {
      setCodeError("Invalid promo code. Try 'AURA10' or 'VIP20'");
    }
  };

  const freeShippingThreshold = 100;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressToFree = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-md mx-auto bg-white border border-zinc-200/80 rounded-3xl p-10 space-y-6 shadow-sm">
          <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto text-zinc-400">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-zinc-950">Your Bag is Empty</h1>
            <p className="text-xs sm:text-sm text-zinc-500">
              You haven&apos;t added any items to your shopping bag yet. Explore our curated collections to get started.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-950 text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 transition"
          >
            Explore Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
        <div>
          <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">Shopping Bag</h1>
          <p className="text-xs text-zinc-500 mt-1">
            Review your items and proceed with secure escrow checkout
          </p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
        >
          Clear All Items
        </button>
      </div>

      {/* Free Shipping Tier Banner */}
      <div className="bg-white border border-zinc-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold text-zinc-900">
              {remainingForFreeShipping === 0
                ? "Complimentary Express Courier Unlocked!"
                : `Add ${formatPrice(remainingForFreeShipping)} more to qualify for free express courier`}
            </span>
          </div>
          <div className="w-full sm:w-80 h-2 bg-zinc-100 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-zinc-950 rounded-full transition-all duration-300"
              style={{ width: `${progressToFree}%` }}
            />
          </div>
        </div>
        <span className="text-xs text-zinc-500 self-end sm:self-auto font-medium">
          Free worldwide delivery over $100
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Cart Items Table (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white border border-zinc-200/80 rounded-2xl divide-y divide-zinc-100 overflow-hidden">
            {cart.map((item) => (
              <div key={item.id} className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-zinc-50 rounded-xl overflow-hidden shrink-0 border border-zinc-100">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-xs text-zinc-400 font-medium">{item.product.brand}</span>
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="text-sm font-bold text-zinc-900 hover:text-zinc-600 line-clamp-1 block"
                      >
                        {item.product.name}
                      </Link>
                      <div className="flex items-center gap-3 text-xs text-zinc-500 mt-1">
                        {item.selectedColor && <span>Color: <strong>{item.selectedColor}</strong></span>}
                        {item.selectedSize && <span>Size: <strong>{item.selectedSize}</strong></span>}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-zinc-400 hover:text-rose-600 transition p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity and Line Price */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-zinc-200 rounded-lg overflow-hidden bg-white">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-bold text-zinc-900 min-w-[28px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-bold text-zinc-950">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      {item.quantity > 1 && (
                        <span className="block text-[11px] text-zinc-400">
                          {formatPrice(item.price)} each
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
            </Link>
          </div>
        </div>

        {/* Right Column: Order Summary & Coupon (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-6 shadow-xs">
            <h2 className="text-base font-bold text-zinc-950 pb-3 border-b border-zinc-100">
              Order Breakdown
            </h2>

            {/* Price lines */}
            <div className="space-y-3 text-xs text-zinc-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-zinc-900">{formatPrice(subtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Promotion ({promoCode})</span>
                  <span className="font-semibold">-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-zinc-900">
                  {shippingEstimate === 0 ? "FREE" : formatPrice(shippingEstimate)}
                </span>
              </div>

              <div className="flex justify-between text-base font-extrabold text-zinc-950 pt-4 border-t border-zinc-200">
                <span>Estimated Total</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="pt-2">
              {promoCode ? (
                <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <Tag className="w-3.5 h-3.5" />
                    <span className="font-bold">{promoCode} Applied</span>
                  </div>
                  <button
                    type="button"
                    onClick={removePromoCode}
                    className="text-emerald-700 hover:text-emerald-950 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCode} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      placeholder="Promo code (e.g. AURA10)"
                      className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs uppercase focus:outline-hidden focus:border-zinc-950"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-zinc-900 text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 transition"
                    >
                      Apply
                    </button>
                  </div>
                  {codeError && <p className="text-[11px] text-rose-600">{codeError}</p>}
                  {codeSuccess && (
                    <p className="text-[11px] text-emerald-600 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Code applied successfully!
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Proceed to Checkout CTA */}
            <Link
              href="/checkout"
              className="w-full py-3.5 px-6 bg-zinc-950 text-white hover:bg-zinc-850 rounded-xl text-xs font-bold text-center transition flex items-center justify-center gap-2 shadow-md"
            >
              Proceed to Secure Checkout <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="text-[11px] text-zinc-400 text-center space-y-1">
              <p>🔒 256-bit encrypted checkout with Stripe sandbox simulation</p>
              <p>Prepaid 30-day returns on all catalog orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
