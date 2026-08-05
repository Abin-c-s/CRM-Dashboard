"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-white">

      <h2 className="text-2xl font-bold">
        CRM Dashboard
      </h2>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-500"
            size={18}
          />

          <Input
            placeholder="Search customers..."
            className="pl-10 w-72"
          />

        </div>

        <Bell className="cursor-pointer" />

        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          A
        </div>

      </div>

    </header>
  );
}