"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import CustomerHeader from "@/components/customers/CustomerHeader";
import CustomerTable from "@/components/customers/CustomerTable";

import customersData from "@/mock/customers.json";
import { Customer } from "@/types/customer";

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const [customers, setCustomers] = useState<Customer[]>(
    customersData as Customer[]
  );

  return (
    <DashboardLayout>
      <CustomerHeader
        search={search}
        setSearch={setSearch}
        customers={customers}
        setCustomers={setCustomers}
      />

      <CustomerTable
        customers={customers}
        setCustomers={setCustomers}
        search={search}
      />
    </DashboardLayout>
  );
}