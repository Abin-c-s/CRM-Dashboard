import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCards from "@/components/stats/StatsCards";
import CustomerHeader from "@/components/customer/CustomerHeader";
import CustomerTable from "@/components/customer/CustomerTable";

export default function CustomersPage() {
  return (
    <DashboardLayout>

      <StatsCards />

      <CustomerHeader />

      <CustomerTable />

    </DashboardLayout>
  );
}