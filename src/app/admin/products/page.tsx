"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Search, Edit2, Trash2, X, Check, ArrowUpDown } from "lucide-react";
import { useAdminStore } from "@/context/AdminStoreContext";
import { Product } from "@/types";
import { CATEGORIES } from "@/data/categories";
import { SELLERS } from "@/data/reviews";
import { formatPrice } from "@/lib/utils";

export default function AdminProductsPage() {
  const { products, addProduct, updateProduct, deleteProduct } = useAdminStore();

  const [search, setSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Form State
  const [formName, setFormName] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formCategory, setFormCategory] = useState("electronics");
  const [formBrand, setFormBrand] = useState("Aethel Labs");
  const [formStock, setFormStock] = useState("20");
  const [formImage, setFormImage] = useState("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80");
  const [formDescription, setFormDescription] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const openEditModal = (p: Product) => {
    setEditingProduct(p);
    setFormName(p.name);
    setFormPrice(p.price.toString());
    setFormCategory(p.categorySlug);
    setFormBrand(p.brand);
    setFormStock(p.stock.toString());
    setFormImage(p.images[0]);
    setFormDescription(p.description);
    setIsCreatingNew(false);
  };

  const openCreateModal = () => {
    setEditingProduct(null);
    setFormName("");
    setFormPrice("95.00");
    setFormCategory("electronics");
    setFormBrand("Monochrome Craft");
    setFormStock("15");
    setFormImage("https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80");
    setFormDescription("Engineered with precision materials for contemporary living.");
    setIsCreatingNew(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const categoryObj = CATEGORIES.find((c) => c.slug === formCategory) || CATEGORIES[0];
    const sellerObj = SELLERS.mono;

    if (isCreatingNew) {
      const newProd: Product = {
        id: `prod-${Date.now()}`,
        name: formName,
        slug: formName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
        description: formDescription,
        shortDescription: formDescription.slice(0, 80) + "...",
        price: parseFloat(formPrice) || 50,
        rating: 4.9,
        reviewCount: 1,
        category: categoryObj.name,
        categorySlug: categoryObj.slug,
        subcategory: categoryObj.subcategories[0] || "General",
        brand: formBrand,
        images: [formImage],
        stock: parseInt(formStock, 10) || 10,
        seller: sellerObj,
        tags: ["custom", "studio"],
        specifications: {
          "Material": "Studio grade components",
          "Warranty": "2 Year Manufacturer Escrow"
        },
        isFeatured: true,
      };
      addProduct(newProd);
    } else if (editingProduct) {
      const updated: Product = {
        ...editingProduct,
        name: formName,
        description: formDescription,
        price: parseFloat(formPrice) || editingProduct.price,
        category: categoryObj.name,
        categorySlug: categoryObj.slug,
        brand: formBrand,
        stock: parseInt(formStock, 10) || editingProduct.stock,
        images: [formImage, ...editingProduct.images.slice(1)],
      };
      updateProduct(updated);
    }

    setEditingProduct(null);
    setIsCreatingNew(false);
  };

  return (
    <div className="space-y-6">
      {/* Header & Create Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-zinc-950">Product Inventory Management</h1>
          <p className="text-xs text-zinc-500">Live CRUD operations synchronized with marketplace frontend.</p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 self-start sm:self-auto shadow-md"
        >
          <Plus className="w-4 h-4" /> Add New Product
        </button>
      </div>

      {/* Table Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search inventory items..."
            className="w-full pl-9 pr-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-xs"
          />
        </div>
        <span className="text-xs text-zinc-500">{filteredProducts.length} items listed</span>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-600">
            <thead className="bg-zinc-50 text-zinc-900 uppercase text-[10px] font-bold border-b border-zinc-200 tracking-wider">
              <tr>
                <th className="px-6 py-3.5">Product</th>
                <th className="px-6 py-3.5">Category</th>
                <th className="px-6 py-3.5">Studio / Brand</th>
                <th className="px-6 py-3.5">Price</th>
                <th className="px-6 py-3.5">Stock</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-medium">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-zinc-50/70 transition">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-lg bg-zinc-100 overflow-hidden shrink-0">
                      <Image src={p.images[0]} alt="" fill className="object-cover" />
                    </div>
                    <div>
                      <span className="font-bold text-zinc-950 block line-clamp-1">{p.name}</span>
                      <span className="text-[11px] text-zinc-400">{p.slug}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{p.category}</td>
                  <td className="px-6 py-4">{p.brand}</td>
                  <td className="px-6 py-4 font-bold text-zinc-950">{formatPrice(p.price)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      p.stock > 0 ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
                    }`}>
                      {p.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => openEditModal(p)}
                        className="p-1.5 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-md transition"
                        title="Edit product"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteProduct(p.id)}
                        className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-md transition"
                        title="Delete product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Product Modal */}
      {(isCreatingNew || editingProduct) && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start pb-4 border-b border-zinc-100">
              <h3 className="text-lg font-bold text-zinc-950">
                {isCreatingNew ? "Add New Catalog Product" : `Edit: ${editingProduct?.name}`}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsCreatingNew(false);
                  setEditingProduct(null);
                }}
                className="p-1 text-zinc-400 hover:text-zinc-950"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-zinc-700 mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Price ($ USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={formPrice}
                    onChange={(e) => setFormPrice(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Stock Quantity</label>
                  <input
                    type="number"
                    required
                    value={formStock}
                    onChange={(e) => setFormStock(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Category</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.slug}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-zinc-700 mb-1">Studio Brand</label>
                  <input
                    type="text"
                    required
                    value={formBrand}
                    onChange={(e) => setFormBrand(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-zinc-700 mb-1">Primary Image URL (Unsplash / Hosted)</label>
                <input
                  type="url"
                  required
                  value={formImage}
                  onChange={(e) => setFormImage(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs font-mono"
                />
              </div>

              <div>
                <label className="block font-medium text-zinc-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  required
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs"
                />
              </div>

              <div className="pt-4 border-t border-zinc-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsCreatingNew(false);
                    setEditingProduct(null);
                  }}
                  className="px-4 py-2 border border-zinc-200 text-zinc-700 rounded-xl font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl font-bold"
                >
                  Save to Catalog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
