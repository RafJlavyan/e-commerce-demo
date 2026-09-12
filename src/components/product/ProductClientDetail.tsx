"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Heart,
  Share2,
  Check,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  Shield,
  Layers
} from "lucide-react";
import { Product } from "@/types";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useRecentlyViewed } from "@/context/RecentlyViewedContext";
import { MOCK_REVIEWS } from "@/data/reviews";
import { ProductCard } from "@/components/product/ProductCard";

interface ProductClientDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductClientDetail: React.FC<ProductClientDetailProps> = ({
  product,
  relatedProducts,
}) => {
  const router = useRouter();
  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addRecentlyViewed } = useRecentlyViewed();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors?.[0]?.name || ""
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    addRecentlyViewed(product);
  }, [product]);

  const isFavorited = isInWishlist(product.id);
  const discount =
    product.discountPercentage ||
    calculateDiscount(product.originalPrice || 0, product.price);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setIsAdded(true);
    setIsCartOpen(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    router.push("/checkout");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="space-y-16 py-8">
      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
        {/* Left: Product Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main big display */}
          <div className="relative aspect-4/3 sm:aspect-square w-full rounded-3xl bg-zinc-100 overflow-hidden border border-zinc-200/80">
            <Image
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-rose-600 text-white font-bold text-xs tracking-wider px-3 py-1 rounded-full shadow-md">
                -{discount}% SPECIAL
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden bg-zinc-50 border-2 shrink-0 transition ${
                    activeImageIndex === idx
                      ? "border-zinc-950 shadow-md"
                      : "border-zinc-200 hover:border-zinc-400 opacity-70"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Purchase Details (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            {/* Seller & Rating header */}
            <div className="flex items-center justify-between text-xs">
              <Link
                href={`/products?brand=${encodeURIComponent(product.brand)}`}
                className="font-semibold text-zinc-600 hover:text-zinc-950 flex items-center gap-1.5"
              >
                <span>Sold by {product.seller.name}</span>
                {product.seller.isVerified && (
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                )}
              </Link>
              <div className="flex items-center gap-1 bg-zinc-100 px-2.5 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-zinc-900">{product.rating}</span>
                <span className="text-zinc-500">({product.reviewCount})</span>
              </div>
            </div>

            {/* Title & Short Description */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                {product.shortDescription || product.description}
              </p>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl font-extrabold text-zinc-950">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-base text-zinc-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Save {formatPrice((product.originalPrice || 0) - product.price)}
                </span>
              )}
            </div>

            {/* Stock indicator */}
            <div className="text-xs flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  product.stock > 0 ? "bg-emerald-500 animate-pulse-subtle" : "bg-rose-500"
                }`}
              />
              <span className="font-medium text-zinc-700">
                {product.stock > 0
                  ? `In Stock (${product.stock} units available at studio)`
                  : "Currently Out of Stock"}
              </span>
            </div>

            {/* Color Selector if available */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-zinc-100">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-zinc-900">Color Palette</span>
                  <span className="text-zinc-500">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor === c.name
                          ? "border-zinc-950 scale-110 shadow-sm"
                          : "border-transparent hover:scale-105"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check
                          className={`w-4 h-4 ${
                            c.hex.toLowerCase() === "#ffffff" || c.hex.toLowerCase() === "#f3f4f6"
                              ? "text-zinc-950"
                              : "text-white"
                          }`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector if available */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-zinc-100">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-zinc-900">Select Size</span>
                  <span className="text-zinc-500">{selectedSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-[40px] px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                        selectedSize === sz
                          ? "bg-zinc-950 text-white border-zinc-950"
                          : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-bold text-zinc-900">Quantity</span>
              <div className="flex items-center border border-zinc-200 rounded-xl bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-zinc-500 hover:text-zinc-950 transition"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-xs font-bold text-zinc-900 min-w-[28px] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-2 text-zinc-500 hover:text-zinc-950 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 px-6 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md ${
                    isAdded
                      ? "bg-emerald-600 text-white"
                      : "bg-zinc-950 text-white hover:bg-zinc-800"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Bag
                    </>
                  ) : (
                    "Add to Bag"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-3.5 px-6 bg-zinc-900 text-white hover:bg-zinc-800 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  Buy Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Wishlist & Share buttons */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                    isFavorited
                      ? "border-rose-200 bg-rose-50 text-rose-600"
                      : "border-zinc-200 hover:bg-zinc-50 text-zinc-700"
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isFavorited ? "fill-rose-600" : ""}`} />
                  {isFavorited ? "Saved in Wishlist" : "Add to Wishlist"}
                </button>
                <button
                  type="button"
                  onClick={handleShare}
                  className="py-2.5 px-4 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  {copiedLink ? "Link Copied" : "Share"}
                </button>
              </div>
            </div>
          </div>

          {/* Delivery & Security Features */}
          <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200/80 space-y-3 text-xs">
            <div className="flex items-start gap-3">
              <Truck className="w-4 h-4 text-zinc-700 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-zinc-900">Complimentary Global Courier</span>
                <p className="text-zinc-500 mt-0.5">Estimated delivery within 3-5 business days from studio workshop.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="w-4 h-4 text-zinc-700 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-zinc-900">30-Day Guaranteed Studio Returns</span>
                <p className="text-zinc-500 mt-0.5">Prepaid return shipping label enclosed with every order.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-zinc-700 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-zinc-900">AURA Escrow Protection</span>
                <p className="text-zinc-500 mt-0.5">Payment funds are held in secure escrow until safe item delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications & Description Deep-Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-zinc-200">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-bold text-zinc-950">Architectural Specifications</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">{product.description}</p>

          {product.features && product.features.length > 0 && (
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">Key Features</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 space-y-4">
            <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
              Technical Data
            </h3>
            <dl className="divide-y divide-zinc-100 text-xs">
              {Object.entries(product.specifications || {}).map(([key, val]) => (
                <div key={key} className="py-2.5 flex justify-between gap-4">
                  <dt className="text-zinc-500 font-medium">{key}</dt>
                  <dd className="text-zinc-900 font-semibold text-right">{val}</dd>
                </div>
              ))}
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-zinc-500 font-medium">Category</dt>
                <dd className="text-zinc-900 font-semibold">{product.category}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-zinc-500 font-medium">Origin Studio</dt>
                <dd className="text-zinc-900 font-semibold">{product.seller.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Verified Customer Reviews Section */}
      <div className="pt-10 border-t border-zinc-200 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-zinc-950">Verified Collector Reviews</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-zinc-900">{product.rating} out of 5</span>
              <span className="text-xs text-zinc-500">({product.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-zinc-200/80 p-6 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">{rev.date}</span>
                </div>
                <h4 className="text-xs font-bold text-zinc-900">{rev.title}</h4>
                <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">{rev.comment}</p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-900">{rev.userName}</span>
                <span className="text-emerald-600 font-medium flex items-center gap-1 text-[11px]">
                  <Check className="w-3 h-3" /> Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products from same category */}
      {relatedProducts.length > 0 && (
        <div className="pt-10 border-t border-zinc-200 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-zinc-950">You May Also Appreciate</h2>
            <Link
              href={`/category/${product.categorySlug}`}
              className="text-xs font-semibold text-zinc-900 hover:underline"
            >
              View category →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
