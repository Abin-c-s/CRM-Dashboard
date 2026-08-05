"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="relative w-96">

      <Search
        className="absolute left-3 top-3 text-gray-500"
        size={18}
      />

      <Input
        placeholder="Search customers..."
        className="pl-10"
      />

    </div>
  );
}