import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} | Curated Collection`,
    description: category.description,
    openGraph: {
      title: `${category.name} - AURA Marketplace`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === slug);

  return (
    <div className="space-y-10 pb-16">
      {/* Category Hero Banner (Full Width) */}
      <section className="w-full bg-zinc-950 text-white overflow-hidden py-12 sm:py-16 border-b border-zinc-800">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Products
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10 max-w-xl space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Curated Category Showcase
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {category.name}
              </h1>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-md">
                {category.description}
              </p>
              <div className="pt-2 text-xs text-zinc-400">
                <span>{categoryProducts.length} items available from certified creators</span>
              </div>
            </div>

            {/* Hero image preview */}
            <div className="relative z-10 w-full max-w-xs aspect-video sm:aspect-square rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-800 shadow-2xl">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Subcategories tags */}
      {category.subcategories && category.subcategories.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
          <span className="font-bold text-zinc-400 uppercase tracking-wider mr-2 shrink-0">
            Disciplines:
          </span>
          {category.subcategories.map((sub) => (
            <span
              key={sub}
              className="px-3 py-1.5 bg-white border border-zinc-200 rounded-full font-medium text-zinc-700 whitespace-nowrap shadow-2xs"
            >
              {sub}
            </span>
          ))}
        </div>
      )}

      {/* Category Products Grid */}
      <div className="pt-4">
        {categoryProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200 p-8">
            <p className="text-sm font-semibold text-zinc-600">
              New drops for this category are arriving shortly.
            </p>
            <Link
              href="/products"
              className="inline-block mt-4 px-5 py-2.5 bg-zinc-950 text-white rounded-xl text-xs font-semibold"
            >
              Explore Other Categories
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
  );
}
