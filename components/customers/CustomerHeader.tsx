"use client";

import SearchBar from "../search/SearchBar";
import AddCustomerDialog from "./AddCustomerDialog";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function CustomerHeader({
  search,
  setSearch,
}: Props) {
  return (
    <div className="mb-6">

      <h1 className="text-3xl font-bold mb-5">
        Customers
      </h1>

      <div className="flex justify-between">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="flex gap-3">

          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>

          <AddCustomerDialog />

        </div>

      </div>

    </div>
  );
}