
import { Button } from "@/components/ui/button";
import { Car, Coffee, ShoppingBag, Home, MoreHorizontal } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "transport",
    title: "Car commute",
    date: "Today",
    time: "8:30 AM",
    impact: "+2.4kg CO₂e",
    icon: <Car className="h-5 w-5" />,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    type: "food",
    title: "Coffee with oat milk",
    date: "Today",
    time: "10:15 AM",
    impact: "+0.3kg CO₂e",
    icon: <Coffee className="h-5 w-5" />,
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    id: 3,
    type: "shopping",
    title: "Grocery shopping",
    date: "Yesterday",
    time: "5:45 PM",
    impact: "+1.8kg CO₂e",
    icon: <ShoppingBag className="h-5 w-5" />,
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    type: "home",
    title: "Reduced heating by 2°",
    date: "Yesterday",
    time: "7:30 PM",
    impact: "-1.2kg CO₂e",
    icon: <Home className="h-5 w-5" />,
    iconBg: "bg-eco-100 text-eco-600",
  },
];

const RecentActivities = () => {
  return (
    <div className="eco-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Recent Activities</h2>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.iconBg}`}
            >
              {activity.icon}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-gray-500">
                {activity.date} · {activity.time}
              </p>
            </div>
            
            <div className={`text-sm font-medium ${activity.impact.startsWith('+') ? 'text-gray-600' : 'text-green-600'}`}>
              {activity.impact}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-eco-100 text-center">
        <Button variant="ghost" className="text-eco-600 hover:text-eco-700 hover:bg-eco-50">
          View all activities
        </Button>
      </div>
    </div>
  );
};

export default RecentActivities;
