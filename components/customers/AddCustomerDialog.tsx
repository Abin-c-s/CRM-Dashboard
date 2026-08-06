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

import { Plus } from "lucide-react";
import { toast } from "sonner";

interface Props {
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}

export default function AddCustomerDialog({
  customers,
  setCustomers,
}: Props) {
  const [open, setOpen] = useState(false);

  function handleAddCustomer(data: CustomerFormData) {
  const newCustomer: Customer = {
    id: Date.now().toString(),
    ...data,
    lastContact: new Date().toISOString().split("T")[0],
  };

  setCustomers([...customers, newCustomer]);

  toast.success("Customer added successfully!");

  setOpen(false);
}

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Add Customer
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Customer</DialogTitle>
          </DialogHeader>

          <CustomerForm
            closeDialog={() => setOpen(false)}
            onSave={handleAddCustomer}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}