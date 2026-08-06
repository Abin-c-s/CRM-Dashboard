"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import CustomerHeader from "@/components/customers/CustomerHeader";
import CustomerTable from "@/components/customers/CustomerTable";

import { useCustomers } from "@/hooks/useCustomers";

export default function CustomersPage() {
  const { customers, setCustomers } = useCustomers();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, sortBy, statusFilter]);

  return (
    <DashboardLayout>
      <CustomerHeader
        search={search}
        setSearch={setSearch}
        customers={customers}
        setCustomers={setCustomers}
        sortBy={sortBy}
        setSortBy={setSortBy}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <CustomerTable
        customers={customers}
        setCustomers={setCustomers}
        search={search}
        sortBy={sortBy}
        statusFilter={statusFilter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </DashboardLayout>
  );
}