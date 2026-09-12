"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { RecentlyViewedProvider } from "@/context/RecentlyViewedContext";
import { AdminStoreProvider } from "@/context/AdminStoreContext";

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AdminStoreProvider>
      <CartProvider>
        <WishlistProvider>
          <RecentlyViewedProvider>
            {children}
          </RecentlyViewedProvider>
        </WishlistProvider>
      </CartProvider>
    </AdminStoreProvider>
  );
};
