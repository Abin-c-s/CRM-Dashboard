import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    company: "Google",
    status: "Active",
    lastContact: "01 Aug 2026",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@gmail.com",
    company: "Microsoft",
    status: "Inactive",
    lastContact: "29 Jul 2026",
  },
  {
    id: 3,
    name: "Tom Jerry",
    email: "tom@gmail.com",
    company: "Apple",
    status: "Active",
    lastContact: "25 Jul 2026",
  },
];

export default function CustomerTable() {
  return (
    <div className="rounded-lg border bg-white mt-6">

      <Table>

        <TableHeader>

          <TableRow>

            <TableHead>Name</TableHead>

            <TableHead>Email</TableHead>

            <TableHead>Company</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Last Contact</TableHead>

          </TableRow>

        </TableHeader>

        <TableBody>

          {customers.map((customer) => (

            <TableRow key={customer.id}>

              <TableCell>{customer.name}</TableCell>

              <TableCell>{customer.email}</TableCell>

              <TableCell>{customer.company}</TableCell>

              <TableCell>

                <Badge
                  variant={
                    customer.status === "Active"
                      ? "default"
                      : "secondary"
                  }
                >
                  {customer.status}
                </Badge>

              </TableCell>

              <TableCell>{customer.lastContact}</TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </div>
  );
}