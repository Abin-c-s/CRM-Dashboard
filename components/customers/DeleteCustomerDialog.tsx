"use client";

import { useState } from "react";
import { Customer } from "@/types/customer";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface Props {
  customerId: string;
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}

export default function DeleteCustomerDialog({
  customerId,
  customers,
  setCustomers,
}: Props) {
  const [open, setOpen] = useState(false);

  function handleDelete() {
  const updatedCustomers = customers.filter(
    (customer) => customer.id !== customerId
  );

  setCustomers(updatedCustomers);

  toast.success("Customer deleted successfully!");

  setOpen(false);
}

  return (
    <>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Delete Customer
            </DialogTitle>
          </DialogHeader>

          <p>
            Are you sure you want to delete this customer?
          </p>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              variant="destructive"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}