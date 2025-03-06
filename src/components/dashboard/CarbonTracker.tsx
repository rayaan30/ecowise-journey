
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Mon", carbon: 2.4 },
  { name: "Tue", carbon: 2.1 },
  { name: "Wed", carbon: 3.2 },
  { name: "Thu", carbon: 2.8 },
  { name: "Fri", carbon: 1.9 },
  { name: "Sat", carbon: 1.4 },
  { name: "Sun", carbon: 1.2 },
];

const timeRanges = ["Week", "Month", "Year"];

const CarbonTracker = () => {
  const [selectedRange, setSelectedRange] = useState("Week");
  
  return (
    <div className="eco-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Carbon Footprint</h2>
        <div className="flex bg-eco-50 rounded-lg">
          {timeRanges.map((range) => (
            <Button
              key={range}
              variant="ghost"
              size="sm"
              className={`rounded-lg ${
                selectedRange === range
                  ? "bg-white text-eco-600 shadow-sm"
                  : "text-gray-600 hover:bg-eco-100"
              }`}
              onClick={() => setSelectedRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#48af45" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#48af45" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}kg`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value) => [`${value} kg`, "Carbon"]}
              labelFormatter={(label) => `${label}`}
            />
            <Area
              type="monotone"
              dataKey="carbon"
              stroke="#48af45"
              fillOpacity={1}
              fill="url(#colorCarbon)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 pt-4 border-t border-eco-100 flex justify-between items-center">
        <div>
          <span className="text-gray-500 text-sm">Total this week</span>
          <div className="text-2xl font-bold">15.0 kg CO₂e</div>
        </div>
        <div className="bg-eco-100 text-eco-700 px-3 py-1 rounded-full text-sm font-medium">
          12% less than last week
        </div>
      </div>
    </div>
  );
};

export default CarbonTracker;
