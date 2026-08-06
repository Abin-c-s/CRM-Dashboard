"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCards from "@/components/stats/StatsCards";

import customersData from "@/mock/customers.json";
import { Customer } from "@/types/customer";

export default function DashboardPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const storedCustomers = localStorage.getItem("customers");

    if (storedCustomers) {
      setCustomers(JSON.parse(storedCustomers));
    } else {
      setCustomers(customersData as Customer[]);
    }
  }, []);

  return (
    <DashboardLayout>
      <StatsCards customers={customers} />

      <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
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