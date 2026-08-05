import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCards from "@/components/stats/StatsCards";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <StatsCards />

      <div className="bg-white rounded-lg p-6 shadow">

        <h2 className="text-xl font-semibold">
          Customer Management
        </h2>

        <p className="text-gray-500 mt-2">
          Customer table will be implemented here.
        </p>

      </div>

    </DashboardLayout>
  );
}