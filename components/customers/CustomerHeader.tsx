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
}

export default function CustomerHeader({
  search,
  setSearch,
  customers,
  setCustomers,
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
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>

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