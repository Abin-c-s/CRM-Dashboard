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
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">
          Customers
        </h1>

        <div className="flex gap-3">
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

      <SearchBar
        value={search}
        onChange={setSearch}
      />
    </div>
  );
}