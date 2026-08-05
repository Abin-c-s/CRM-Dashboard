import customers from "@/mock/customers.json";
import { Customer } from "@/types/customer";

export const customerService = {
  async getCustomers(): Promise<Customer[]> {
    return customers.map((customer) => ({
      ...customer,
      status: customer.status as Customer["status"],
    }));
  },
};