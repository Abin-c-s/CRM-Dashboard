"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import CustomerHeader from "@/components/customers/CustomerHeader";
import CustomerTable from "@/components/customers/CustomerTable";

import customersData from "@/mock/customers.json";
import { Customer } from "@/types/customer";

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const storedCustomers = localStorage.getItem("customers");

    if (storedCustomers) {
      setCustomers(JSON.parse(storedCustomers));
    } else {
      setCustomers(customersData as Customer[]);
    }
  }, []);

  useEffect(() => {
    if (customers.length > 0) {
      localStorage.setItem(
        "customers",
        JSON.stringify(customers)
      );
    }
  }, [customers]);

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
