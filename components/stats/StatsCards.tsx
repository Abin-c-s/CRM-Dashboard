"use client";

import { Users, UserCheck, UserX } from "lucide-react";
import { Customer } from "@/types/customer";

interface Props {
  customers: Customer[];
}

export default function StatsCards({ customers }: Props) {
  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (customer) => customer.status === "active"
  ).length;

  const inactiveCustomers = customers.filter(
    (customer) => customer.status === "inactive"
  ).length;

  const stats = [
    {
      title: "Total Customers",
      value: totalCustomers,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Customers",
      value: activeCustomers,
      icon: UserCheck,
      color: "text-green-600",
    },
    {
      title: "Inactive Customers",
      value: inactiveCustomers,
      icon: UserX,
      color: "text-red-600",
    },
  ];

  return (
    <div className="mb-6 grid gap-6 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl bg-white p-6 shadow-sm border"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {stat.value}
                </h2>
              </div>

              <Icon
                className={`h-10 w-10 ${stat.color}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}