"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingBag, Heart, User, Menu, X, ArrowRight, ShieldCheck, Sparkles, LayoutDashboard } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { CATEGORIES } from "@/data/categories";
import { searchProducts } from "@/data/products";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const results = searchProducts(searchQuery).slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-zinc-950 text-zinc-300 text-xs py-2 px-4 sm:px-6 lg:px-10 xl:px-16 border-b border-zinc-800">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-white tracking-wide">
              COMPLIMENTARY
            </span>
            <span>Free express delivery on all global orders above $100</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-zinc-400">
            <span className="text-zinc-400">
              Demo by <strong className="text-zinc-200 font-semibold">Ravioh Digital</strong>
            </span>
            <span className="text-zinc-700">•</span>
            <Link href="/deals" className="hover:text-white transition flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Flash Deals
            </Link>
            <Link href="/admin" className="hover:text-white transition flex items-center gap-1">
              <LayoutDashboard className="w-3 h-3" />
              Admin Portal
            </Link>
            <span className="text-zinc-700">|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Buyer Protection Guaranteed
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled ? "glass border-b border-zinc-200/80 shadow-xs" : "bg-white border-b border-zinc-100"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex items-center justify-between h-18 gap-4 lg:gap-8">
            {/* Brand Wordmark */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="font-extrabold tracking-tight text-2xl lg:text-3xl text-zinc-950">
                  AURA
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-zinc-950 group-hover:scale-150 transition-transform"></span>
              </Link>

              {/* Desktop Quick Nav */}
              <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-zinc-600">
                <Link href="/products" className="hover:text-zinc-950 transition">
                  All Catalog
                </Link>
                <Link href="/category/electronics" className="hover:text-zinc-950 transition">
                  Electronics
                </Link>
                <Link href="/category/fashion" className="hover:text-zinc-950 transition">
                  Fashion
                </Link>
                <Link href="/category/home-living" className="hover:text-zinc-950 transition">
                  Home & Living
                </Link>
                <Link href="/deals" className="text-rose-600 font-semibold hover:text-rose-700 transition flex items-center gap-1">
                  Deals
                </Link>
              </nav>
            </div>

            {/* Prominent Search Bar */}
            <div className="flex-1 max-w-xl relative">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative flex items-center">
                  <Search className="absolute left-3.5 w-4 h-4 text-zinc-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    placeholder="Search curated products, brands, materials..."
                    className="w-full bg-zinc-100/80 hover:bg-zinc-100 focus:bg-white text-zinc-900 placeholder-zinc-400 pl-10 pr-10 py-2.5 rounded-full text-sm border border-transparent focus:border-zinc-300 focus:outline-hidden focus:ring-2 focus:ring-zinc-950/5 transition"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 text-zinc-400 hover:text-zinc-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </form>

              {/* Instant Search Dropdown */}
              {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden z-50 p-2">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase px-3 py-1.5 tracking-wider">
                    Instant Matches
                  </div>
                  {searchResults.map((item) => (
                    <Link
                      key={item.id}
                      href={`/product/${item.slug}`}
                      className="flex items-center gap-3 p-2 hover:bg-zinc-50 rounded-xl transition group"
                    >
                      <div className="relative w-11 h-11 bg-zinc-100 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-zinc-900 truncate group-hover:text-zinc-600 transition">
                          {item.name}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {item.brand} · <span className="font-semibold text-zinc-900">{formatPrice(item.price)}</span>
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  ))}
                  <div className="border-t border-zinc-100 mt-1 pt-1">
                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      className="w-full text-center py-2 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 rounded-lg transition"
                    >
                      View all results for &quot;{searchQuery}&quot; →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-1 sm:gap-3">
              <Link
                href="/wishlist"
                className="relative p-2.5 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition hidden sm:flex items-center"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                href="/account"
                className="p-2.5 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition hidden sm:flex items-center"
                title="Account"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 py-2 px-3 sm:px-4 bg-zinc-950 text-white hover:bg-zinc-800 rounded-full transition text-sm font-medium shadow-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden md:inline">Cart</span>
                <span className="bg-white text-zinc-950 text-xs font-bold rounded-full px-1.5 py-0.2 min-w-[20px] text-center">
                  {totalItems}
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-700 hover:text-zinc-950 rounded-lg xl:hidden"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Category Bar (Desktop) */}
        <div className="hidden lg:block border-t border-zinc-100 bg-zinc-50/50">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
            <div className="flex items-center gap-7 overflow-x-auto py-2.5 text-xs font-medium text-zinc-600 no-scrollbar">
              <Link href="/products" className="hover:text-zinc-950 whitespace-nowrap">
                ✦ All Products
              </Link>
              {CATEGORIES.slice(0, 10).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="hover:text-zinc-950 whitespace-nowrap transition"
                >
                  {cat.name}
                </Link>
              ))}
              <Link href="/deals" className="text-rose-600 font-semibold hover:text-rose-700 whitespace-nowrap ml-auto">
                ⚡ Flash Deals - Up to 40% Off
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs xl:hidden">
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                <span className="font-extrabold text-2xl text-zinc-950">AURA</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-zinc-500 hover:text-zinc-950"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Marketplace Categories
                </div>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 px-2 rounded-lg"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 space-y-3">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-zinc-700 p-2 rounded-lg hover:bg-zinc-50"
              >
                <User className="w-4 h-4" />
                My Account
              </Link>
              <Link
                href="/account/orders"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-zinc-700 p-2 rounded-lg hover:bg-zinc-50"
              >
                <ShoppingBag className="w-4 h-4" />
                Order History
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-amber-700 p-2 rounded-lg bg-amber-50"
              >
                <LayoutDashboard className="w-4 h-4" />
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
