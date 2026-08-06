"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  customerSchema,
  CustomerFormData,
} from "@/lib/customerSchema";

import { Customer } from "@/types/customer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  closeDialog: () => void;
  onSave: (data: CustomerFormData) => void;
  customer?: Customer;
  isEdit?: boolean;
}

export default function CustomerForm({
  closeDialog,
  onSave,
  customer,
  isEdit = false,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      status: "active",
      notes: "",
    },
  });

  useEffect(() => {
    if (customer) {
      reset({
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        company: customer.company,
        status: customer.status,
        notes: customer.notes || "",
      });
    }
  }, [customer, reset]);

  const onSubmit = (data: CustomerFormData) => {
    onSave(data);
    closeDialog();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-1">
          Customer Name
        </label>

        <Input
          placeholder="Enter customer name"
          {...register("name")}
        />

        {errors.name && (
          <p className="text-sm text-red-500 mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Email
        </label>

        <Input
          placeholder="Enter email"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-500 mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Phone
        </label>

        <Input
          placeholder="Enter phone number"
          {...register("phone")}
        />

        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Company
        </label>

        <Input
          placeholder="Enter company"
          {...register("company")}
        />

        {errors.company && (
          <p className="text-sm text-red-500 mt-1">
            {errors.company.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-md border p-2"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Notes
        </label>

        <Textarea
          placeholder="Enter notes"
          {...register("notes")}
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={closeDialog}
        >
          Cancel
        </Button>

        <Button type="submit">
          {isEdit ? "Update Customer" : "Save Customer"}
        </Button>
      </div>
    </form>
  );
}