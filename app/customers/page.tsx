import DashboardLayout from "@/components/layout/DashboardLayout";
import CustomerTable from "@/components/customers/CustomerTable";

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Customers</h1>

        <CustomerTable />
      </div>
    </DashboardLayout>
  );
}