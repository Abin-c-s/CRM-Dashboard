"use client";

import { Users, UserCheck, UserX } from "lucide-react";
import { Customer } from "@/types/customer";

interface Props {
  customers: Customer[];
}

export default function StatsCards({
  customers,
}: Props) {
  const total = customers.length;

  const active = customers.filter(
    (customer) => customer.status === "active"
  ).length;

  const inactive = customers.filter(
    (customer) => customer.status === "inactive"
  ).length;

  const cards = [
    {
      title: "Total Customers",
      value: total,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Customers",
      value: active,
      icon: UserCheck,
      color: "text-green-600",
    },
    {
      title: "Inactive Customers",
      value: inactive,
      icon: UserX,
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <Icon
                className={`h-10 w-10 ${card.color}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}