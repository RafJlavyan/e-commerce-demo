"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, Order } from "@/types";
import { PRODUCTS } from "@/data/products";
import { INITIAL_ORDERS } from "@/data/adminData";
import { getFromStorage, setToStorage } from "@/lib/storage";

interface AdminStoreContextType {
  products: Product[];
  orders: Order[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
  addOrder: (order: Order) => void;
  resetToDefaults: () => void;
}

const AdminStoreContext = createContext<AdminStoreContextType | undefined>(undefined);

export const AdminStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    const savedProducts = getFromStorage<Product[]>("aura_admin_products", PRODUCTS);
    const savedOrders = getFromStorage<Order[]>("aura_admin_orders", INITIAL_ORDERS);
    setProducts(savedProducts);
    setOrders(savedOrders);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      setToStorage("aura_admin_products", products);
    }
  }, [products, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      setToStorage("aura_admin_orders", orders);
    }
  }, [orders, isHydrated]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [product, ...prev]);
  };

  const updateProduct = (product: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
  };

  const deleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateOrderStatus = (orderId: string, status: Order["status"]) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status } : ord))
    );
  };

  const addOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const resetToDefaults = () => {
    setProducts(PRODUCTS);
    setOrders(INITIAL_ORDERS);
    setToStorage("aura_admin_products", PRODUCTS);
    setToStorage("aura_admin_orders", INITIAL_ORDERS);
  };

  return (
    <AdminStoreContext.Provider
      value={{
        products,
        orders,
        addProduct,
        updateProduct,
        deleteProduct,
        updateOrderStatus,
        addOrder,
        resetToDefaults,
      }}
    >
      {children}
    </AdminStoreContext.Provider>
  );
};

export const useAdminStore = () => {
  const context = useContext(AdminStoreContext);
  if (!context) {
    throw new Error("useAdminStore must be used within an AdminStoreProvider");
  }
  return context;
};
