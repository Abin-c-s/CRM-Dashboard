"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCards from "@/components/stats/StatsCards";

import { useCustomers } from "@/hooks/useCustomers";

export default function DashboardPage() {
  const { customers } = useCustomers();

  return (
    <DashboardLayout>
      <StatsCards customers={customers} />

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Customer Management
        </h2>

        <p className="mt-2 text-gray-500">
          Manage your customers using the Customers page.
        </p>
      </div>
    </DashboardLayout>
  );
}