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
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
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
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
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
                className="text-center py-8"
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

                <TableCell>{customer.email}</TableCell>

                <TableCell>{customer.company}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      customer.status === "active"
                        ? "default"
                        : "secondary"
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
  );
}