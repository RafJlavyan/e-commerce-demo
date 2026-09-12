import React from "react";
import { MOCK_CUSTOMERS } from "@/data/adminData";
import { formatPrice } from "@/lib/utils";

export default function AdminCustomersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-zinc-950">Customer Base & Lifetime Value</h1>
        <p className="text-xs text-zinc-500">
          Verified collectors, loyalty tiers, and aggregate spend metrics.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-600">
            <thead className="bg-zinc-50 text-zinc-900 uppercase text-[10px] font-bold border-b border-zinc-200 tracking-wider">
              <tr>
                <th className="px-6 py-3.5">Customer Name</th>
                <th className="px-6 py-3.5">Email</th>
                <th className="px-6 py-3.5">Total Orders</th>
                <th className="px-6 py-3.5">Total Spent</th>
                <th className="px-6 py-3.5">Member Since</th>
                <th className="px-6 py-3.5">Status Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-medium">
              {MOCK_CUSTOMERS.map((cust) => (
                <tr key={cust.id} className="hover:bg-zinc-50/70 transition">
                  <td className="px-6 py-4 font-bold text-zinc-950">{cust.name}</td>
                  <td className="px-6 py-4 text-zinc-500">{cust.email}</td>
                  <td className="px-6 py-4">{cust.ordersCount} orders</td>
                  <td className="px-6 py-4 font-bold text-zinc-950">
                    {formatPrice(cust.totalSpent)}
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{cust.joinedDate}</td>
                  <td className="px-6 py-4">
                    <span className="bg-zinc-950 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {cust.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
