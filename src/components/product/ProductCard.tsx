"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [isAdded, setIsAdded] = React.useState(false);

  const isFavorited = isInWishlist(product.id);
  const discount = product.discountPercentage || calculateDiscount(product.originalPrice || 0, product.price);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="group relative bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="relative aspect-square w-full bg-zinc-50 overflow-hidden block">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {discount > 0 && (
            <span className="bg-rose-600 text-white font-bold text-[10px] tracking-wide px-2 py-0.5 rounded-full shadow-xs">
              -{discount}%
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-zinc-900 text-white font-medium text-[10px] px-2 py-0.5 rounded-full shadow-xs">
              Bestseller
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-emerald-600 text-white font-medium text-[10px] px-2 py-0.5 rounded-full shadow-xs">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleToggleWishlist}
          aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 z-10 ${
            isFavorited
              ? "bg-rose-50 text-rose-600"
              : "bg-white/80 text-zinc-600 hover:bg-white hover:text-rose-600 shadow-xs"
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? "fill-rose-600" : ""}`} />
        </button>

        {/* Quick Add To Cart Button (Desktop Hover) */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block z-10">
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md ${
              isAdded
                ? "bg-emerald-600 text-white"
                : "bg-zinc-950 text-white hover:bg-zinc-800"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added to Bag
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
              </>
            )}
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Seller / Brand */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-zinc-500 mb-1">
            <span className="font-medium truncate">{product.brand}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
              <span className="text-zinc-700 font-semibold">{product.rating}</span>
              <span className="text-zinc-400 text-[10px] sm:text-xs">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-zinc-600 line-clamp-2 transition leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Price & Mobile Add */}
        <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-zinc-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="text-sm sm:text-base font-bold text-zinc-950">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[10px] sm:text-xs text-zinc-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Mobile direct Add button */}
          <button
            type="button"
            onClick={handleAddToCart}
            aria-label="Add to bag"
            className="sm:hidden p-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-lg transition"
          >
            {isAdded ? <Check className="w-4 h-4 text-emerald-600" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
