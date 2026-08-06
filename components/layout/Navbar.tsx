"use client";

import { Bell, Menu } from "lucide-react";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setOpen }: Props) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">

      <div className="flex items-center gap-3">

        <button
          onClick={() => setOpen(true)}
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        <h1 className="text-xl font-bold md:text-2xl">
          CRM Dashboard
        </h1>

      </div>

      <div className="flex items-center gap-4">

        <Bell className="h-5 w-5 cursor-pointer" />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          A
        </div>

      </div>
    </header>
  );
}