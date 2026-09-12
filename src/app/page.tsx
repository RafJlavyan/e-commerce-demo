"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Truck, RotateCcw, Clock, Star, Flame, ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/product/ProductCard";
import { useAdminStore } from "@/context/AdminStoreContext";
import { useRecentlyViewed } from "@/context/RecentlyViewedContext";
import { formatPrice } from "@/lib/utils";

export default function HomePage() {
  const { products } = useAdminStore();
  const { recentlyViewed } = useRecentlyViewed();

  // Countdown timer simulation for flash deals
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 8);
  const bestsellerProducts = products.filter((p) => p.isBestseller).slice(0, 4);
  const flashDealProducts = products.filter((p) => p.isDeal || (p.discountPercentage && p.discountPercentage > 0)).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Modern Minimalist Hero Section */}
      <section className="relative overflow-hidden">
          <div className="relative bg-zinc-950 text-white overflow-hidden p-8 sm:p-14 lg:p-20 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Background geometric accents */}
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-zinc-800/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-1/3 -bottom-24 w-80 h-80 bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Spring 2026 Curated Capsule Drop</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
                Everything you need. <br />
                <span className="text-zinc-400">In one place.</span>
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Discover uncompromised craftsmanship from independent design studios, precision electronics makers, and global artisans.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/products"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Explore All Catalog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/deals"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-full text-sm font-medium transition"
                >
                  Limited Flash Deals
                </Link>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-center lg:justify-start gap-8 text-xs text-zinc-400">
                <div>
                  <span className="block font-bold text-lg text-white">50+</span>
                  <span>Independent Studios</span>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <span className="block font-bold text-lg text-white">100%</span>
                  <span>Escrow Buyer Guarantee</span>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <span className="block font-bold text-lg text-white">4.9/5</span>
                  <span>Verified Rating</span>
                </div>
              </div>
            </div>

            {/* Featured Hero Product Card Showcase */}
            <div className="relative z-10 w-full max-w-md">
              <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 backdrop-blur-md shadow-2xl space-y-4">
                <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-zinc-950">
                  <Image
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
                    alt="AURA Horizon Studio ANC Headphones"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold text-white">
                    Featured of the Week
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-400 font-medium">Aethel Labs</span>
                    <h3 className="text-base font-bold text-white">AURA Horizon Studio ANC</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-rose-400 font-medium block">-17% OFF</span>
                    <span className="text-lg font-bold text-white">$349.00</span>
                  </div>
                </div>

                <Link
                  href="/product/aura-horizon-studio-anc-headphones"
                  className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  View Product Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
      </section>

      {/* 2. Category Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Curated Collections
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Browse categories refined by design discipline, material, and lifestyle.
            </p>
          </div>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-zinc-600 flex items-center gap-1 transition"
          >
            All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.slice(0, 6).map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="group relative rounded-2xl bg-white border border-zinc-200/80 overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all flex flex-col p-4"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-100 mb-3">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="180px"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-zinc-600 transition truncate">
                {cat.name}
              </h3>
              <p className="text-[11px] text-zinc-400 mt-0.5">{cat.itemCount} items</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" /> Staff Picks
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Featured Discoveries
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-zinc-600 flex items-center gap-1 transition"
          >
            Explore All ({products.length}) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Promotional Flash Deals Banner with Live Countdown (Full Width) */}
      <section className="w-full bg-zinc-950 text-white overflow-hidden py-10 sm:py-14 border-y border-zinc-800">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-zinc-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Flame className="w-3.5 h-3.5" /> Limited Inventory Drop
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Up to 40% Off Designer Studio Drops
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Seasonal member allocations. Prices auto-revert once timer expires or allocations claim.
              </p>
            </div>

            {/* Countdown widget */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs text-zinc-400 mr-2">
                <Clock className="w-4 h-4 text-rose-400" /> Ends In:
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-zinc-850 px-3 py-2 rounded-xl text-center min-w-[50px] border border-zinc-750 bg-zinc-800">
                  <span className="block text-lg font-bold text-white">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase">Hours</span>
                </div>
                <span className="font-bold text-zinc-500">:</span>
                <div className="bg-zinc-850 px-3 py-2 rounded-xl text-center min-w-[50px] border border-zinc-750 bg-zinc-800">
                  <span className="block text-lg font-bold text-white">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase">Mins</span>
                </div>
                <span className="font-bold text-zinc-500">:</span>
                <div className="bg-zinc-850 px-3 py-2 rounded-xl text-center min-w-[50px] border border-zinc-750 bg-zinc-800">
                  <span className="block text-lg font-bold text-white">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase">Secs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-8">
            {flashDealProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Community Favorites
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Top-rated and most frequently repurchased by verified customers.
            </p>
          </div>
          <Link
            href="/products?sort=bestseller"
            className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-zinc-600 flex items-center gap-1 transition"
          >
            View All Bestsellers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. Recently Viewed Products (if any stored) */}
      {recentlyViewed.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-200">
            <h2 className="text-lg font-bold text-zinc-950">Recently Viewed by You</h2>
            <span className="text-xs text-zinc-500">Saved in browser</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {recentlyViewed.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-white border border-zinc-200/80 rounded-xl p-3 hover:border-zinc-300 transition"
              >
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-zinc-50 mb-2">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="120px"
                  />
                </div>
                <h4 className="text-xs font-semibold text-zinc-900 truncate group-hover:text-zinc-600">
                  {product.name}
                </h4>
                <p className="text-xs font-bold text-zinc-950 mt-1">{formatPrice(product.price)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 7. Marketplace Sellers & Studio Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-100/70 rounded-3xl p-8 sm:p-12 border border-zinc-200/80">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
              Verified Independent Studios
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Every seller on AURA undergoes an extensive audit for material sourcing, ethical workshop standards, and warranty fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
                    alt="Aethel Labs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                    Aethel Labs <Shield className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                  </h4>
                  <p className="text-xs text-zinc-500">Zurich, Switzerland · 15 Products</p>
                </div>
              </div>
              <p className="text-xs text-zinc-600">
                Acoustic engineering and biocompatible botanical skincare research laboratory.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">4.85 ★ (1,150 Reviews)</span>
                <Link href="/products?brand=Aethel+Labs" className="text-zinc-900 hover:underline">
                  Browse Studio →
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Nordic Atelier"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                    Nordic Atelier <Shield className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                  </h4>
                  <p className="text-xs text-zinc-500">Copenhagen, Denmark · 24 Products</p>
                </div>
              </div>
              <p className="text-xs text-zinc-600">
                Solid white ash furniture, Belgian linens, and heirloom organic beechwood crafts.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">4.80 ★ (980 Reviews)</span>
                <Link href="/products?brand=Nordic+Atelier" className="text-zinc-900 hover:underline">
                  Browse Studio →
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                    alt="Kanso Goods"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                    Kanso Goods <Shield className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                  </h4>
                  <p className="text-xs text-zinc-500">Kyoto, Japan · 32 Products</p>
                </div>
              </div>
              <p className="text-xs text-zinc-600">
                Hand-thrown Mino ceramics, VG-10 Damascus knives, and first-harvest Uji matcha.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">4.95 ★ (2,310 Reviews)</span>
                <Link href="/products?brand=Kanso+Goods" className="text-zinc-900 hover:underline">
                  Browse Studio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
