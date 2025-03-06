
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardStatProps {
  title: string;
  value: string;
  description: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

const DashboardStat = ({
  title,
  value,
  description,
  trend = "neutral",
  className,
}: DashboardStatProps) => {
  const trendConfig = {
    up: {
      icon: <ArrowUp className="h-3 w-3" />,
      color: "text-green-600 bg-green-50",
    },
    down: {
      icon: <ArrowDown className="h-3 w-3" />,
      color: "text-red-600 bg-red-50",
    },
    neutral: {
      icon: <Minus className="h-3 w-3" />,
      color: "text-gray-600 bg-gray-50",
    },
  };

  return (
    <div className={cn("eco-card", className)}>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <div className="flex items-center mt-2">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${trendConfig[trend].color}`}
        >
          {trendConfig[trend].icon}
          <span>{description}</span>
        </span>
      </div>
    </div>
  );
};

export default DashboardStat;
