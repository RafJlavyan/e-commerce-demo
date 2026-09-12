import React from "react";
import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, Award, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-zinc-800/80">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-zinc-900 text-zinc-100 rounded-xl border border-zinc-800">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-zinc-100 font-semibold text-sm">Carbon-Neutral Shipping</h4>
              <p className="text-xs text-zinc-400 mt-1">Free express shipping on all orders over $100 worldwide.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-zinc-900 text-zinc-100 rounded-xl border border-zinc-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-zinc-100 font-semibold text-sm">Escrow Buyer Protection</h4>
              <p className="text-xs text-zinc-400 mt-1">256-bit encrypted checkout with verified seller escrow.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-zinc-900 text-zinc-100 rounded-xl border border-zinc-800">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-zinc-100 font-semibold text-sm">30-Day Effortless Returns</h4>
              <p className="text-xs text-zinc-400 mt-1">Prepaid label included. Instant store credit or full refund.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-zinc-900 text-zinc-100 rounded-xl border border-zinc-800">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-zinc-100 font-semibold text-sm">Curated Authenticity</h4>
              <p className="text-xs text-zinc-400 mt-1">Every studio & atelier is hand-vetted for exceptional craftsmanship.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <span className="font-extrabold text-2xl tracking-tight text-zinc-100">AURA</span>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              A modern global marketplace connecting discerning buyers with independent studios, industrial designers, and artisan ateliers around the globe.
            </p>
            <div className="pt-2">
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Join the Newsletter</span>
              <div className="flex items-center gap-2 mt-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-900 text-zinc-100 text-xs px-3.5 py-2.5 rounded-lg border border-zinc-800 w-full focus:outline-hidden focus:border-zinc-500"
                />
                <button
                  type="button"
                  className="bg-zinc-100 text-zinc-950 font-semibold text-xs px-4 py-2.5 rounded-lg hover:bg-white transition shrink-0"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Col 1 */}
          <div>
            <h5 className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-4">Marketplace</h5>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/products" className="hover:text-zinc-100 transition">All Products</Link></li>
              <li><Link href="/category/electronics" className="hover:text-zinc-100 transition">Electronics</Link></li>
              <li><Link href="/category/fashion" className="hover:text-zinc-100 transition">Fashion</Link></li>
              <li><Link href="/category/home-living" className="hover:text-zinc-100 transition">Home & Living</Link></li>
              <li><Link href="/deals" className="hover:text-zinc-100 transition">Flash Deals</Link></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h5 className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-4">Account & Help</h5>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/account" className="hover:text-zinc-100 transition">My Account</Link></li>
              <li><Link href="/account/orders" className="hover:text-zinc-100 transition">Track Orders</Link></li>
              <li><Link href="/wishlist" className="hover:text-zinc-100 transition">Saved Wishlist</Link></li>
              <li><Link href="/cart" className="hover:text-zinc-100 transition">Shopping Bag</Link></li>
              <li><Link href="/admin" className="hover:text-zinc-100 transition flex items-center gap-1">Admin Portal <ArrowUpRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h5 className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-4">Company</h5>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-zinc-100 transition">Our Philosophy</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition">Studio Verification</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition">Privacy & Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            © {new Date().getFullYear()} AURA Global Marketplace. Demo project crafted with precision by{" "}
            <span className="text-zinc-300 font-medium">Ravioh Digital</span>.
          </p>
          <div className="flex items-center gap-6">
            <span>Portfolio Demo by Ravioh Digital</span>
            <span>•</span>
            <Link href="/admin" className="text-zinc-400 hover:text-white underline">
              Open Admin Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
