"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, X } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ open, setOpen }: Props) {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Customers",
      href: "/customers",
      icon: Users,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-64 bg-white border-r shadow-lg
          transition-transform duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
          md:translate-x-0
        `}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b p-4 md:hidden">
          <h2 className="text-lg font-bold">
            Menu
          </h2>

          <button onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Logo */}
        <div className="hidden border-b p-6 md:block">
          <h1 className="text-2xl font-bold text-blue-600">
            CRM Dashboard
          </h1>
        </div>

        <nav className="space-y-2 p-4">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  pathname === menu.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-5 w-5" />
                {menu.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}