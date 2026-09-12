"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Clock, Flame, ArrowRight, ShieldCheck } from "lucide-react";
import { useAdminStore } from "@/context/AdminStoreContext";
import { ProductCard } from "@/components/product/ProductCard";

export default function DealsPage() {
  const { products } = useAdminStore();

  const [timeLeft, setTimeLeft] = useState({ hours: 16, minutes: 44, seconds: 12 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dealProducts = products.filter(
    (p) => p.isDeal || (p.discountPercentage && p.discountPercentage > 0)
  );

  return (
    <div className="space-y-10 pb-16">
      {/* Deals Hero (Full Width) */}
      <section className="w-full bg-zinc-950 text-white overflow-hidden py-12 sm:py-16 border-b border-zinc-800">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4" /> Limited Flash Drops
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Special Studio Allocations & Deals
            </h1>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Exclusive promotional discounts on certified studio objects, electronics, and wardrobe capsules. Prices automatically revert when timer concludes.
            </p>

            {/* Large Countdown Widget */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs font-semibold text-zinc-400">Offer Expires In:</span>
              <div className="flex items-center gap-2 font-mono">
                <div className="bg-zinc-800 px-3.5 py-2 rounded-xl text-center border border-zinc-700">
                  <span className="block text-xl font-bold text-white">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] text-zinc-400 uppercase">Hours</span>
                </div>
                <span className="font-bold text-zinc-500">:</span>
                <div className="bg-zinc-800 px-3.5 py-2 rounded-xl text-center border border-zinc-700">
                  <span className="block text-xl font-bold text-white">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] text-zinc-400 uppercase">Minutes</span>
                </div>
                <span className="font-bold text-zinc-500">:</span>
                <div className="bg-zinc-800 px-3.5 py-2 rounded-xl text-center border border-zinc-700">
                  <span className="block text-xl font-bold text-white">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] text-zinc-400 uppercase">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
      <div>
        <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
          <div>
            <h2 className="text-xl font-bold text-zinc-950">Active Promotions ({dealProducts.length})</h2>
            <p className="text-xs text-zinc-500">Savings up to 40% on curated items</p>
          </div>
          <span className="text-xs text-emerald-700 bg-emerald-50 font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Direct Workshop Warranty Included
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 pt-6">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}
