"use client";

import { useMemo, useState } from "react";
import { useCustomers } from "@/hooks/useCustomers";
import SearchBar from "@/components/search/SearchBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function CustomerTable() {
  const { data: customers = [], isLoading, error } = useCustomers();

  const [search, setSearch] = useState("");

  const filteredCustomers = useMemo(() => {
    const query = search.toLowerCase();

    return customers.filter((customer) => {
      return (
        customer.name.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.company.toLowerCase().includes(query) ||
        customer.phone.toLowerCase().includes(query)
      );
    });
  }, [customers, search]);

  if (isLoading) {
    return (
      <div className="text-center py-10">
        Loading Customers...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        Something went wrong.
      </div>
    );
  }

  return (
    <div className="space-y-5">

      <div className="flex justify-between items-center">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

      </div>

      <div className="rounded-lg border bg-white">

        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>Name</TableHead>

              <TableHead>Email</TableHead>

              <TableHead>Phone</TableHead>

              <TableHead>Company</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Last Contact</TableHead>

            </TableRow>

          </TableHeader>

          <TableBody>

            {filteredCustomers.length === 0 ? (

              <TableRow>

                <TableCell
                  colSpan={6}
                  className="text-center py-8"
                >
                  No Customers Found
                </TableCell>

              </TableRow>

            ) : (

              filteredCustomers.map((customer) => (

                <TableRow
                  key={customer.id}
                >

                  <TableCell className="font-medium">
                    {customer.name}
                  </TableCell>

                  <TableCell>
                    {customer.email}
                  </TableCell>

                  <TableCell>
                    {customer.phone}
                  </TableCell>

                  <TableCell>
                    {customer.company}
                  </TableCell>

                  <TableCell>

                    <Badge
                      className={
                        customer.status === "active"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                      }
                    >
                      {customer.status}
                    </Badge>

                  </TableCell>

                  <TableCell>
                    {customer.lastContact}
                  </TableCell>

                </TableRow>

              ))

            )}

          </TableBody>

        </Table>

      </div>

    </div>
  );
}