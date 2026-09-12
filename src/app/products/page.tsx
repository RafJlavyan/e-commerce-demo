"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, Grid3X3, LayoutGrid, X, Check, Search, Star, RotateCcw } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/product/ProductCard";
import { useAdminStore } from "@/context/AdminStoreContext";
import { FilterState, Product } from "@/types";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialQuery = searchParams.get("q") || "";
  const initialBrand = searchParams.get("brand") || "";
  const initialSort = (searchParams.get("sort") as FilterState["sortBy"]) || "featured";

  const { products } = useAdminStore();

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrand ? [initialBrand] : []);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600]);
  const [minRating, setMinRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [onSaleOnly, setOnSaleOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<FilterState["sortBy"]>(initialSort);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [gridCols, setGridCols] = useState<3 | 4>(4);

  // Extract unique brands from products
  const availableBrands = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.brand))).sort();
  }, [products]);

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameLower = p.name.toLowerCase();
        const brandLower = p.brand.toLowerCase();
        const categoryLower = p.category.toLowerCase();

        const startsWithMatches =
          nameLower.startsWith(q) ||
          brandLower.startsWith(q) ||
          categoryLower.startsWith(q) ||
          nameLower.split(/\s+/).some((word) => word.startsWith(q)) ||
          p.tags.some((t) => t.toLowerCase().startsWith(q));

        if (!startsWithMatches) return false;
      }

      if (selectedCategory && p.categorySlug !== selectedCategory) {
        return false;
      }

      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
        return false;
      }

      if (p.price < priceRange[0] || p.price > priceRange[1]) {
        return false;
      }

      if (minRating > 0 && p.rating < minRating) {
        return false;
      }

      if (inStockOnly && p.stock <= 0) {
        return false;
      }

      if (onSaleOnly && (!p.discountPercentage || p.discountPercentage <= 0)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortBy === "bestseller") return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      return 0;
    });
  }, [
    products,
    searchQuery,
    selectedCategory,
    selectedBrands,
    priceRange,
    minRating,
    inStockOnly,
    onSaleOnly,
    sortBy,
  ]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedBrands([]);
    setPriceRange([0, 600]);
    setMinRating(0);
    setInStockOnly(false);
    setOnSaleOnly(false);
    setSortBy("featured");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "" ||
    selectedBrands.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 600 ||
    minRating > 0 ||
    inStockOnly ||
    onSaleOnly;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-zinc-200 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">
            Marketplace Catalog
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Showing <span className="font-semibold text-zinc-900">{filteredProducts.length}</span> curated design objects
          </p>
        </div>

        {/* Top Controls: Search input, Sort, View mode */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog..."
              className="bg-white border border-zinc-200 rounded-lg pl-9 pr-3 py-1.5 text-xs focus:outline-hidden focus:ring-1 focus:ring-zinc-900 w-44 sm:w-56"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-zinc-400 hover:text-zinc-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as FilterState["sortBy"])}
            className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs font-medium text-zinc-700 focus:outline-hidden focus:ring-1 focus:ring-zinc-900"
          >
            <option value="featured">Sort: Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest Arrivals</option>
            <option value="bestseller">Best Selling</option>
          </select>

          {/* Grid switch (desktop) */}
          <div className="hidden lg:flex items-center border border-zinc-200 rounded-lg p-0.5 bg-white">
            <button
              type="button"
              onClick={() => setGridCols(3)}
              className={`p-1.5 rounded ${gridCols === 3 ? "bg-zinc-100 text-zinc-900" : "text-zinc-400"}`}
              title="3 Columns"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setGridCols(4)}
              className={`p-1.5 rounded ${gridCols === 4 ? "bg-zinc-100 text-zinc-900" : "text-zinc-400"}`}
              title="4 Columns"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Filter Trigger */}
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-zinc-900 text-white rounded-lg text-xs font-semibold"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters {hasActiveFilters && "•"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
        {/* Sidebar Filters (Desktop) */}
        <aside className="hidden lg:block space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
            <span className="text-xs font-bold text-zinc-950 uppercase tracking-wider">Filters</span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2.5">Category</h4>
            <div className="space-y-1 text-xs">
              <button
                type="button"
                onClick={() => setSelectedCategory("")}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition ${
                  selectedCategory === "" ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                All Categories ({products.length})
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(selectedCategory === cat.slug ? "" : cat.slug)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg transition flex items-center justify-between ${
                    selectedCategory === cat.slug
                      ? "bg-zinc-900 text-white font-medium"
                      : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  <span className={`text-[10px] ${selectedCategory === cat.slug ? "text-zinc-300" : "text-zinc-400"}`}>
                    {products.filter((p) => p.categorySlug === cat.slug).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Slider */}
          <div className="pt-4 border-t border-zinc-200">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2.5">Max Price</h4>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="600"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full accent-zinc-950 cursor-pointer"
              />
              <div className="flex justify-between text-xs font-semibold text-zinc-700">
                <span>$0</span>
                <span>Up to ${priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Studios / Brands */}
          <div className="pt-4 border-t border-zinc-200">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2.5">Studios & Makers</h4>
            <div className="space-y-1.5 text-xs">
              {availableBrands.map((brand) => {
                const checked = selectedBrands.includes(brand);
                return (
                  <label key={brand} className="flex items-center gap-2 text-zinc-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleBrand(brand)}
                      className="rounded border-zinc-300 text-zinc-950 focus:ring-zinc-950"
                    />
                    <span>{brand}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Rating */}
          <div className="pt-4 border-t border-zinc-200">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2.5">Customer Rating</h4>
            <div className="space-y-1 text-xs">
              {[4.8, 4.5, 4.0].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                  className={`w-full flex items-center justify-between p-1.5 rounded-lg transition ${
                    minRating === rating ? "bg-zinc-100 font-bold" : "hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{rating}+ stars</span>
                  </div>
                  {minRating === rating && <Check className="w-3.5 h-3.5 text-zinc-950" />}
                </button>
              ))}
            </div>
          </div>

          {/* Availability & Deals toggles */}
          <div className="pt-4 border-t border-zinc-200 space-y-2 text-xs">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-zinc-700 font-medium">In Stock Only</span>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded border-zinc-300 text-zinc-950 focus:ring-zinc-950"
              />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-zinc-700 font-medium">On Sale Only</span>
              <input
                type="checkbox"
                checked={onSaleOnly}
                onChange={(e) => setOnSaleOnly(e.target.checked)}
                className="rounded border-zinc-300 text-zinc-950 focus:ring-zinc-950"
              />
            </label>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200/80 p-8">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">No products match your criteria</h3>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto mb-6">
                Try loosening your filters, changing search terms, or resetting your price range.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-zinc-950 text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                gridCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-4"
              } gap-6`}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <h3 className="font-bold text-base text-zinc-950">Refine Catalog</h3>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-zinc-500 hover:text-zinc-950"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Category</h4>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2 text-xs"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Max Price */}
              <div>
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                  Max Price: ${priceRange[1]}
                </h4>
                <input
                  type="range"
                  min="0"
                  max="600"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-zinc-950"
                />
              </div>

              {/* In Stock & Sale */}
              <div className="space-y-3 pt-2 text-xs">
                <label className="flex items-center justify-between">
                  <span>In Stock Only</span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span>On Sale Only</span>
                  <input
                    type="checkbox"
                    checked={onSaleOnly}
                    onChange={(e) => setOnSaleOnly(e.target.checked)}
                  />
                </label>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200 space-y-2">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-zinc-950 text-white font-bold rounded-xl text-xs text-center"
              >
                View {filteredProducts.length} Results
              </button>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="w-full py-2 text-rose-600 font-semibold text-xs text-center"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-8 text-center text-xs text-zinc-400">Loading catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
