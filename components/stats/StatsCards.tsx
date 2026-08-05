import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  UserCheck,
  UserX,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "Total Customers",
    value: "148",
    icon: Users,
  },
  {
    title: "Active",
    value: "112",
    icon: UserCheck,
  },
  {
    title: "Inactive",
    value: "36",
    icon: UserX,
  },
  {
    title: "This Month",
    value: "12",
    icon: TrendingUp,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.title}>

            <CardContent className="flex justify-between items-center p-6">

              <div>

                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {card.value}
                </h2>

              </div>

              <Icon
                className="text-blue-600"
                size={30}
              />

            </CardContent>

          </Card>
        );
      })}
    </div>
  );
}