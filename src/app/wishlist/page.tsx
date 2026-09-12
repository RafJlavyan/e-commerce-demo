"use client";

import React from "react";
import Link from "next/link";
import { Heart, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/product/ProductCard";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddAllToCart = () => {
    wishlist.forEach((p) => addToCart(p, 1));
    setIsCartOpen(true);
  };

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-md mx-auto bg-white border border-zinc-200/80 rounded-3xl p-10 space-y-6 shadow-sm">
          <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto">
            <Heart className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-zinc-950">Your Wishlist is Empty</h1>
            <p className="text-xs sm:text-sm text-zinc-500">
              Save your favorite minimalist pieces and studio creations by tapping the heart icon on any product card.
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">Saved Wishlist</h1>
          <p className="text-xs text-zinc-500 mt-1">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved in local browser storage
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAddAllToCart}
            className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Move All to Bag
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
