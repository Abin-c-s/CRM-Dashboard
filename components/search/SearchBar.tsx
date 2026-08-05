"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search customers..."
        className="pl-10"
      />
    </div>
  );
}