"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CreditCard,
  Lock,
  ShieldCheck,
  Truck,
  ArrowRight,
  Info,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Loader2
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAdminStore } from "@/context/AdminStoreContext";
import { formatPrice, generateOrderNumber, getEstimatedDelivery } from "@/lib/utils";
import { Order, OrderItem } from "@/types";
import { setToStorage } from "@/lib/storage";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, discountAmount, promoCode, clearCart } = useCart();
  const { addOrder } = useAdminStore();

  const [deliveryMethod, setDeliveryMethod] = useState<"standard" | "express">("standard");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    email: "julian.rafiq@example.com",
    phone: "+1 (555) 234-5678",
    firstName: "Julian",
    lastName: "Rafiq",
    address: "742 Evergreen Terrace",
    apartment: "Suite 4B",
    city: "San Francisco",
    state: "CA",
    postalCode: "94107",
    country: "United States",
    cardNumber: "4242 •••• •••• 4242",
    cardExpiry: "12/28",
    cardCvc: "888",
    cardName: "Julian Rafiq",
  });

  const shippingCost = deliveryMethod === "express" ? 15 : (subtotal > 100 ? 0 : 15);
  const totalAmount = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUseDemoCard = () => {
    setFormData({
      ...formData,
      cardNumber: "4242 4242 4242 4242",
      cardExpiry: "12/28",
      cardCvc: "888",
      cardName: "Julian Rafiq",
    });
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (cart.length === 0) {
      setErrorMessage("Your cart is empty.");
      return;
    }

    setIsProcessing(true);

    // Simulate Stripe payment processing delay
    setTimeout(() => {
      const orderItems: OrderItem[] = cart.map((item) => ({
        productId: item.productId,
        name: item.product.name,
        price: item.price,
        quantity: item.quantity,
        image: item.product.images[0],
        selectedColor: item.selectedColor,
        selectedSize: item.selectedSize,
      }));

      const newOrder: Order = {
        id: `ord-${Date.now()}`,
        orderNumber: generateOrderNumber(),
        date: new Date().toISOString().split("T")[0],
        status: "Processing",
        items: orderItems,
        subtotal,
        shipping: shippingCost,
        discount: discountAmount,
        total: totalAmount,
        shippingAddress: {
          id: `addr-${Date.now()}`,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          apartment: formData.apartment,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: formData.country,
        },
        deliveryMethod,
        deliveryEstimate: getEstimatedDelivery(deliveryMethod),
        paymentMethod: {
          brand: "Visa (Demo)",
          last4: "4242",
        },
      };

      // Store in admin and localStorage order history
      addOrder(newOrder);
      setToStorage("aura_latest_order", newOrder);
      clearCart();
      setIsProcessing(false);

      // Redirect to Order Success receipt
      router.push("/checkout/success");
    }, 1800);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-xl font-bold text-zinc-950 mb-2">No Items to Checkout</h2>
        <p className="text-xs text-zinc-500 mb-6">Add items to your cart before proceeding to checkout.</p>
        <Link
          href="/products"
          className="px-6 py-3 bg-zinc-950 text-white rounded-xl text-xs font-semibold"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Checkout Breadcrumb */}
      <div className="pb-6 border-b border-zinc-200 flex items-center justify-between">
        <Link
          href="/cart"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </Link>
        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
          <Lock className="w-3.5 h-3.5" /> 256-Bit TLS Encrypted Sandbox
        </div>
      </div>

      <form onSubmit={handleCheckoutSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
        {/* Left Column: Forms (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Section 1: Contact Information */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
              1. Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Shipping Destination */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
              2. Shipping Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-zinc-700 mb-1">Street Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Apartment / Suite (Optional)</label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">State / Province</label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  required
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Delivery Options */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
              3. Delivery Method
            </h2>
            <div className="space-y-3">
              <label
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition ${
                  deliveryMethod === "standard"
                    ? "border-zinc-950 bg-zinc-50/50"
                    : "border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    checked={deliveryMethod === "standard"}
                    onChange={() => setDeliveryMethod("standard")}
                    className="accent-zinc-950"
                  />
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block">
                      Standard Insured Courier (4-5 Business Days)
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      Signature required upon arrival
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-zinc-900">
                  {subtotal > 100 ? "FREE" : "$15.00"}
                </span>
              </label>

              <label
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition ${
                  deliveryMethod === "express"
                    ? "border-zinc-950 bg-zinc-50/50"
                    : "border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    checked={deliveryMethod === "express"}
                    onChange={() => setDeliveryMethod("express")}
                    className="accent-zinc-950"
                  />
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block">
                      Express Air Priority (1-2 Business Days)
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      Direct priority freight dispatch
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-zinc-900">$15.00</span>
              </label>
            </div>
          </div>

          {/* Section 4: Mock Stripe Payment Interface */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-zinc-900" />
                <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                  4. Payment Simulation (Stripe Sandbox)
                </h2>
              </div>
              <button
                type="button"
                onClick={handleUseDemoCard}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg transition"
              >
                Auto-fill Test Card
              </button>
            </div>

            {/* Sandbox notice */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
              <div>
                <span className="font-bold">Portfolio Sandbox Mode:</span> Real cards will not be charged. Use test card details <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">4242 4242 4242 4242</code>.
              </div>
            </div>

            {/* Simulated Stripe Card Form */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  required
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:bg-white focus:outline-hidden focus:border-zinc-950"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-3.5 pr-12 py-2 text-xs font-mono focus:bg-white focus:outline-hidden focus:border-zinc-950"
                  />
                  <div className="absolute right-3 top-2.5 text-[10px] font-bold text-zinc-400">
                    VISA
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    required
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:bg-white focus:outline-hidden focus:border-zinc-950"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">CVC Code</label>
                  <input
                    type="text"
                    name="cardCvc"
                    required
                    value={formData.cardCvc}
                    onChange={handleInputChange}
                    placeholder="CVC"
                    maxLength={4}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:bg-white focus:outline-hidden focus:border-zinc-950"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Pay Button (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-6 sticky top-24 shadow-xs">
            <h2 className="text-base font-bold text-zinc-950 pb-3 border-b border-zinc-100">
              Order Summary ({cart.length} items)
            </h2>

            {/* Items summary */}
            <div className="max-h-60 overflow-y-auto space-y-3 divide-y divide-zinc-100 pr-1">
              {cart.map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 flex items-center gap-3">
                  <div className="relative w-12 h-12 bg-zinc-100 rounded-lg overflow-hidden shrink-0">
                    <Image src={item.product.images[0]} alt="" fill className="object-cover" />
                    <span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-zinc-900 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-zinc-400">
                      {item.selectedColor || item.selectedSize || "Standard"}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-zinc-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2.5 text-xs text-zinc-600 pt-3 border-t border-zinc-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-zinc-900">{formatPrice(subtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount ({promoCode})</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping ({deliveryMethod})</span>
                <span className="font-semibold text-zinc-900">
                  {shippingCost === 0 ? "FREE" : formatPrice(shippingCost)}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-zinc-950 pt-3 border-t border-zinc-200">
                <span>Total Due</span>
                <span>{formatPrice(totalAmount)}</span>
              </div>
            </div>

            {errorMessage && (
              <p className="text-xs text-rose-600 font-semibold">{errorMessage}</p>
            )}

            {/* Pay Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-6 bg-zinc-950 hover:bg-zinc-850 disabled:bg-zinc-400 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Verifying Demo Payment...
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" /> Pay {formatPrice(totalAmount)} & Place Order
                </>
              )}
            </button>

            <div className="text-[11px] text-zinc-400 text-center space-y-1">
              <p>Demo payment processed via client simulation.</p>
              <p>No real charges will occur.</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
