"use client";

import { useState } from "react";

import { Customer } from "@/types/customer";
import { CustomerFormData } from "@/lib/customerSchema";

import CustomerForm from "./CustomerForm";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  customer: Customer;
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}

export default function EditCustomerDialog({
  customer,
  customers,
  setCustomers,
}: Props) {
  const [open, setOpen] = useState(false);

  function handleUpdateCustomer(data: CustomerFormData) {
    const updatedCustomer: Customer = {
      ...customer,
      ...data,
    };

    const updatedCustomers = customers.map((item) =>
      item.id === customer.id ? updatedCustomer : item
    );

    setCustomers(updatedCustomers);
    setOpen(false);
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
      >
        Edit
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Customer</DialogTitle>
          </DialogHeader>

          <CustomerForm
            customer={customer}
            isEdit={true}
            closeDialog={() => setOpen(false)}
            onSave={handleUpdateCustomer}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}