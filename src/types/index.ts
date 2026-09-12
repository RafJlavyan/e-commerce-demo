export interface Seller {
  id: string;
  name: string;
  slug: string;
  rating: number;
  reviewCount: number;
  productCount: number;
  isVerified: boolean;
  joinedYear: number;
  location: string;
  avatar: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  isVerifiedPurchase: boolean;
  helpfulCount: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewCount: number;
  category: string;
  categorySlug: string;
  subcategory: string;
  brand: string;
  images: string[];
  stock: number;
  seller: Seller;
  tags: string[];
  specifications: Record<string, string>;
  colors?: { name: string; hex: string }[];
  sizes?: string[];
  isFeatured?: boolean;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isDeal?: boolean;
  dealEndsAt?: string;
  features?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
  subcategories: string[];
  iconName: string;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  price: number;
}

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedColor?: string;
  selectedSize?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  shippingAddress: Address;
  deliveryMethod: "standard" | "express";
  deliveryEstimate: string;
  paymentMethod: {
    brand: string;
    last4: string;
  };
}

export interface FilterState {
  searchQuery: string;
  category: string;
  subcategory?: string;
  brand: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
  inStockOnly: boolean;
  onSaleOnly: boolean;
  sortBy: "featured" | "price-asc" | "price-desc" | "rating" | "newest" | "bestseller";
}
