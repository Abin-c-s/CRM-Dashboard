"use client";

import { Customer } from "@/types/customer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import EditCustomerDialog from "./EditCustomerDialog";
import DeleteCustomerDialog from "./DeleteCustomerDialog";

interface Props {
  customers: Customer[];
  setCustomers: React.Dispatch<
    React.SetStateAction<Customer[]>
  >;
  search: string;
  sortBy: string;
  statusFilter: string;
  currentPage: number;
  setCurrentPage: React.Dispatch<
    React.SetStateAction<number>
  >;
}

export default function CustomerTable({
  customers,
  setCustomers,
  search,
  sortBy,
  statusFilter,
  currentPage,
  setCurrentPage,
}: Props) {
  const filteredCustomers = customers.filter((customer) => {
    const query = search.toLowerCase();

    const matchesSearch =
      customer.name.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.company.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "all" ||
      customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const sortedCustomers = [...filteredCustomers];

  switch (sortBy) {
    case "name":
      sortedCustomers.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    case "company":
      sortedCustomers.sort((a, b) =>
        a.company.localeCompare(b.company)
      );
      break;

    case "date":
      sortedCustomers.sort(
        (a, b) =>
          new Date(b.lastContact).getTime() -
          new Date(a.lastContact).getTime()
      );
      break;
  }

  const customersPerPage = 5;

  const totalPages = Math.ceil(
    sortedCustomers.length / customersPerPage
  );

  const startIndex =
    (currentPage - 1) * customersPerPage;

  const currentCustomers = sortedCustomers.slice(
    startIndex,
    startIndex + customersPerPage
  );

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto rounded-lg border bg-white shadow-sm md:block">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Contact</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentCustomers.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-10"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-5xl">
                      📭
                    </span>

                    <h3 className="mt-3 text-lg font-semibold">
                      No customers found
                    </h3>

                    <p className="text-gray-500">
                      Try another search or
                      filter.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              currentCustomers.map((customer) => (
                <TableRow
                  key={customer.id}
                  className="hover:bg-gray-50"
                >
                  <TableCell className="font-medium">
                    {customer.name}
                  </TableCell>

                  <TableCell>
                    {customer.email}
                  </TableCell>

                  <TableCell>
                    {customer.company}
                  </TableCell>

                  <TableCell>
                    <Badge
                      className={
                        customer.status ===
                        "active"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }
                    >
                      {customer.status}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    {customer.lastContact}
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-2">
                      <EditCustomerDialog
                        customer={customer}
                        customers={customers}
                        setCustomers={
                          setCustomers
                        }
                      />

                      <DeleteCustomerDialog
                        customerId={customer.id}
                        customers={customers}
                        setCustomers={
                          setCustomers
                        }
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {currentCustomers.length === 0 ? (
          <div className="rounded-lg border bg-white p-8 text-center shadow">
            <span className="text-5xl">
              📭
            </span>

            <h3 className="mt-3 text-lg font-semibold">
              No customers found
            </h3>

            <p className="text-gray-500">
              Try another search or filter.
            </p>
          </div>
        ) : (
          currentCustomers.map((customer) => (
            <div
              key={customer.id}
              className="rounded-lg border bg-white p-4 shadow"
            >
              <h3 className="text-lg font-semibold">
                {customer.name}
              </h3>

              <p className="text-sm text-gray-500">
                {customer.email}
              </p>

              <p className="mt-2">
                <strong>Company:</strong>{" "}
                {customer.company}
              </p>

              <div className="mt-2">
                <Badge
                  className={
                    customer.status ===
                    "active"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }
                >
                  {customer.status}
                </Badge>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                {customer.lastContact}
              </p>

              <div className="mt-4 flex gap-2">
                <EditCustomerDialog
                  customer={customer}
                  customers={customers}
                  setCustomers={setCustomers}
                />

                <DeleteCustomerDialog
                  customerId={customer.id}
                  customers={customers}
                  setCustomers={setCustomers}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from(
            { length: totalPages },
            (_, index) => (
              <Button
                key={index}
                size="sm"
                variant={
                  currentPage === index + 1
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  setCurrentPage(index + 1)
                }
              >
                {index + 1}
              </Button>
            )
          )}
        </div>
      )}
    </>
  );
}