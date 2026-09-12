"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "@/types";
import { getFromStorage, setToStorage } from "@/lib/storage";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedSize?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  promoCode: string;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  discountAmount: number;
  shippingEstimate: number;
  finalTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState<string>("");
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    const savedCart = getFromStorage<CartItem[]>("aura_cart", []);
    const savedPromo = getFromStorage<{ code: string; percent: number }>("aura_promo", { code: "", percent: 0 });
    setCart(savedCart);
    setPromoCode(savedPromo.code);
    setDiscountPercent(savedPromo.percent);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      setToStorage("aura_cart", cart);
    }
  }, [cart, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      setToStorage("aura_promo", { code: promoCode, percent: discountPercent });
    }
  }, [promoCode, discountPercent, isHydrated]);

  const addToCart = (product: Product, quantity = 1, selectedColor?: string, selectedSize?: string) => {
    setCart((prevCart) => {
      const colorKey = selectedColor || product.colors?.[0]?.name || "default";
      const sizeKey = selectedSize || product.sizes?.[0] || "standard";
      const itemKey = `${product.id}-${colorKey}-${sizeKey}`;

      const existingIndex = prevCart.findIndex((item) => item.id === itemKey);

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem: CartItem = {
          id: itemKey,
          productId: product.id,
          product,
          quantity,
          selectedColor: selectedColor || (product.colors ? product.colors[0]?.name : undefined),
          selectedSize: selectedSize || (product.sizes ? product.sizes[0] : undefined),
          price: product.price,
        };
        return [...prevCart, newItem];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    setPromoCode("");
    setDiscountPercent(0);
  };

  const applyPromoCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === "AURA10" || clean === "WELCOME10") {
      setPromoCode(clean);
      setDiscountPercent(10);
      return true;
    } else if (clean === "VIP20") {
      setPromoCode(clean);
      setDiscountPercent(20);
      return true;
    }
    return false;
  };

  const removePromoCode = () => {
    setPromoCode("");
    setDiscountPercent(0);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * (discountPercent / 100);
  // Free shipping threshold at $100
  const shippingEstimate = subtotal > 100 || subtotal === 0 ? 0 : 15;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingEstimate);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        promoCode,
        applyPromoCode,
        removePromoCode,
        discountAmount,
        shippingEstimate,
        finalTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
