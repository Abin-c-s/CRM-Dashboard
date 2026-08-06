"use client";

import { Customer } from "@/types/customer";
import { Badge } from "@/components/ui/badge";
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
}

export default function CustomerTable({
  customers,
  setCustomers,
  search,
}: Props) {
  const filteredCustomers = customers.filter((customer) => {
    const query = search.toLowerCase();

    return (
      customer.name.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.company.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query)
    );
  });

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
            {filteredCustomers.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-8 text-center"
                >
                  No customers found
                </TableCell>
              </TableRow>
            ) : (
              filteredCustomers.map((customer) => (
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
                        customer.status === "active"
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
                        setCustomers={setCustomers}
                      />

                      <DeleteCustomerDialog
                        customerId={customer.id}
                        customers={customers}
                        setCustomers={setCustomers}
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
        {filteredCustomers.map((customer) => (
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
                  customer.status === "active"
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
        ))}
      </div>
    </>
  );
}