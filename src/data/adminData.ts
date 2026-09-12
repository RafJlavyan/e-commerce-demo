import { Product, Order } from "@/types";
import { PRODUCTS } from "./products";

export const INITIAL_ORDERS: Order[] = [
  {
    id: "ord-1",
    orderNumber: "AUR-892410",
    date: "2026-02-28",
    status: "Delivered",
    items: [
      {
        productId: "prod-1",
        name: "AURA Horizon Studio ANC Headphones",
        price: 349.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
        selectedColor: "Matte Obsidian"
      },
      {
        productId: "prod-3",
        name: "Onyx Minimalist Ceramic Coffee Dripper & Carafe",
        price: 68.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
        selectedColor: "Matte Black"
      }
    ],
    subtotal: 417.00,
    shipping: 0.00,
    discount: 0.00,
    total: 417.00,
    shippingAddress: {
      id: "addr-1",
      firstName: "Julian",
      lastName: "Rafiq",
      email: "julian.rafiq@example.com",
      phone: "+1 (555) 234-5678",
      address: "742 Evergreen Terrace",
      apartment: "Apt 4B",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      country: "United States",
      isDefault: true
    },
    deliveryMethod: "standard",
    deliveryEstimate: "Delivered on Mar 3, 2026",
    paymentMethod: {
      brand: "Visa",
      last4: "4242"
    }
  },
  {
    id: "ord-2",
    orderNumber: "AUR-741932",
    date: "2026-03-08",
    status: "Shipped",
    items: [
      {
        productId: "prod-5",
        name: "Voyager Titanium Automatic Field Watch",
        price: 495.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
        selectedColor: "Titanium Matte"
      }
    ],
    subtotal: 495.00,
    shipping: 15.00,
    discount: 50.00,
    total: 460.00,
    shippingAddress: {
      id: "addr-1",
      firstName: "Julian",
      lastName: "Rafiq",
      email: "julian.rafiq@example.com",
      phone: "+1 (555) 234-5678",
      address: "742 Evergreen Terrace",
      apartment: "Apt 4B",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      country: "United States",
      isDefault: true
    },
    deliveryMethod: "express",
    deliveryEstimate: "Estimated Mar 14, 2026",
    paymentMethod: {
      brand: "Mastercard",
      last4: "8821"
    }
  }
];

export const MOCK_CUSTOMERS = [
  {
    id: "cust-1",
    name: "Julian Rafiq",
    email: "julian.rafiq@example.com",
    ordersCount: 4,
    totalSpent: 1284.00,
    status: "VIP Member",
    joinedDate: "Jan 2025"
  },
  {
    id: "cust-2",
    name: "Sophia Chen",
    email: "sophia.chen@design.io",
    ordersCount: 7,
    totalSpent: 2890.50,
    status: "VIP Member",
    joinedDate: "Nov 2024"
  },
  {
    id: "cust-3",
    name: "Liam O'Connor",
    email: "liam.oc@dublin.ie",
    ordersCount: 2,
    totalSpent: 420.00,
    status: "Active",
    joinedDate: "Feb 2026"
  },
  {
    id: "cust-4",
    name: "Aria Lindqvist",
    email: "aria@nordicstyle.se",
    ordersCount: 5,
    totalSpent: 1650.00,
    status: "VIP Member",
    joinedDate: "Dec 2024"
  }
];

export const ADMIN_ANALYTICS = {
  totalRevenue: 148920.00,
  revenueGrowth: "+18.4%",
  totalOrders: 1428,
  ordersGrowth: "+12.2%",
  activeCustomers: 3840,
  customersGrowth: "+24.5%",
  averageOrderValue: 104.28,
  conversionRate: "3.42%",
  monthlySales: [
    { month: "Oct", revenue: 18400, orders: 180 },
    { month: "Nov", revenue: 24200, orders: 235 },
    { month: "Dec", revenue: 38900, orders: 370 },
    { month: "Jan", revenue: 21500, orders: 210 },
    { month: "Feb", revenue: 26800, orders: 260 },
    { month: "Mar", revenue: 19120, orders: 173 }
  ]
};
