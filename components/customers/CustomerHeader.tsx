"use client";

import { Customer } from "@/types/customer";
import SearchBar from "../search/SearchBar";
import AddCustomerDialog from "./AddCustomerDialog";

import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  statusFilter: string;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function CustomerHeader({
  search,
  setSearch,
  customers,
  setCustomers,
  sortBy,
  setSortBy,
  statusFilter,
  setStatusFilter,
}: Props) {
  return (
    <div className="mb-6 space-y-4">
      {/* Title + Buttons */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">
            Customers
          </h1>

          <p className="text-sm text-gray-500">
            Manage your customer records
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md border p-2 text-sm"
          >
            <option value="">Sort By</option>

            <option value="name">
              Name (A-Z)
            </option>

            <option value="company">
              Company
            </option>

            <option value="date">
              Last Contact
            </option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-md border p-2"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <AddCustomerDialog
            customers={customers}
            setCustomers={setCustomers}
          />
        </div>
      </div>

      {/* Search */}
      <div className="w-full md:max-w-md">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>
    </div>
  );
}