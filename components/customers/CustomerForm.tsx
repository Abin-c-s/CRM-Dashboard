"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  customerSchema,
  CustomerFormData,
} from "@/lib/customerSchema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  closeDialog: () => void;
}

export default function CustomerForm({ closeDialog }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      status: "active",
    },
  });

  const onSubmit = (data: CustomerFormData) => {
    console.log(data);

    alert("Customer Added Successfully");

    closeDialog();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div>
        <Input
          placeholder="Customer Name"
          {...register("name")}
        />
        <p className="text-red-500 text-sm">
          {errors.name?.message}
        </p>
      </div>

      <div>
        <Input
          placeholder="Email"
          {...register("email")}
        />
        <p className="text-red-500 text-sm">
          {errors.email?.message}
        </p>
      </div>

      <div>
        <Input
          placeholder="Phone"
          {...register("phone")}
        />
        <p className="text-red-500 text-sm">
          {errors.phone?.message}
        </p>
      </div>

      <div>
        <Input
          placeholder="Company"
          {...register("company")}
        />
        <p className="text-red-500 text-sm">
          {errors.company?.message}
        </p>
      </div>

      <div>
        <select
          {...register("status")}
          className="w-full border rounded-md p-2"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div>
        <Textarea
          placeholder="Notes"
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
          Save Customer
        </Button>
      </div>
    </form>
  );
}