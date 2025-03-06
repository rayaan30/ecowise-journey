
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { BarChart, Activity, Home, Settings, LogOut } from "lucide-react";
import ActionButton from "@/components/ui/ActionButton";
import CarbonTracker from "@/components/dashboard/CarbonTracker";
import DashboardStat from "@/components/dashboard/DashboardStat";
import RecentActivities from "@/components/dashboard/RecentActivities";
import TipCard from "@/components/dashboard/TipCard";

const Dashboard = () => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="min-h-screen bg-eco-50/50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-white border-r border-eco-100 h-screen sticky top-0">
          <div className="p-6">
            <h2 className="text-2xl font-bold eco-gradient-text">Ecowise</h2>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedTab("overview")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    selectedTab === "overview"
                      ? "bg-eco-100 text-eco-700"
                      : "hover:bg-eco-50 text-gray-600"
                  }`}
                >
                  <Home className="h-5 w-5" />
                  <span>Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedTab("activities")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    selectedTab === "activities"
                      ? "bg-eco-100 text-eco-700"
                      : "hover:bg-eco-50 text-gray-600"
                  }`}
                >
                  <Activity className="h-5 w-5" />
                  <span>Activities</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedTab("reports")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    selectedTab === "reports"
                      ? "bg-eco-100 text-eco-700"
                      : "hover:bg-eco-50 text-gray-600"
                  }`}
                >
                  <BarChart className="h-5 w-5" />
                  <span>Reports</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedTab("settings")}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    selectedTab === "settings"
                      ? "bg-eco-100 text-eco-700"
                      : "hover:bg-eco-50 text-gray-600"
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-eco-100">
            <button 
              className="flex items-center space-x-3 p-3 rounded-lg w-full hover:bg-eco-50 text-gray-600 transition-colors"
              onClick={() => {
                toast({
                  title: "Logged out",
                  description: "You have been logged out successfully",
                });
              }}
            >
              <LogOut className="h-5 w-5" />
              <span>Log out</span>
            </button>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          {/* Mobile header */}
          <div className="md:hidden bg-white border-b border-eco-100 p-4 sticky top-0 z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold eco-gradient-text">Ecowise</h2>
              <Button variant="outline" size="icon">
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
          
          <main className="p-6">
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Hello, Eco Friend!</h1>
              <p className="text-gray-600">
                Track your carbon footprint and take action for a greener planet.
              </p>
            </header>
            
            {selectedTab === "overview" && (
              <div className="space-y-8">
                <CarbonTracker />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <DashboardStat
                    title="Carbon Saved"
                    value="26%"
                    description="vs. last month"
                    trend="up"
                  />
                  <DashboardStat
                    title="Eco Actions"
                    value="18"
                    description="this week"
                    trend="up"
                  />
                  <DashboardStat
                    title="Community Rank"
                    value="#42"
                    description="out of 1,248"
                    trend="up"
                  />
                </div>
                
                <RecentActivities />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TipCard 
                    title="Reduce Your Food Waste"
                    description="Plan meals, store food properly, and compost scraps to minimize your carbon footprint."
                    icon={<span className="text-3xl">🥗</span>}
                  />
                  <TipCard 
                    title="Optimize Your Energy Use"
                    description="Switch to LED bulbs and unplug devices when not in use to save energy and reduce emissions."
                    icon={<span className="text-3xl">💡</span>}
                  />
                </div>
                
                <div className="text-center mt-8">
                  <ActionButton size="lg">
                    Log a New Activity
                  </ActionButton>
                </div>
              </div>
            )}
            
            {selectedTab === "activities" && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Activities Coming Soon</h2>
                <p className="text-gray-600 mb-8">
                  We're working on this feature. Check back soon!
                </p>
                <ActionButton 
                  variant="outline"
                  onClick={() => setSelectedTab("overview")}
                >
                  Back to Overview
                </ActionButton>
              </div>
            )}
            
            {selectedTab === "reports" && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Reports Coming Soon</h2>
                <p className="text-gray-600 mb-8">
                  We're working on advanced reporting features. Check back soon!
                </p>
                <ActionButton 
                  variant="outline"
                  onClick={() => setSelectedTab("overview")}
                >
                  Back to Overview
                </ActionButton>
              </div>
            )}
            
            {selectedTab === "settings" && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Settings Coming Soon</h2>
                <p className="text-gray-600 mb-8">
                  We're working on customization options. Check back soon!
                </p>
                <ActionButton 
                  variant="outline"
                  onClick={() => setSelectedTab("overview")}
                >
                  Back to Overview
                </ActionButton>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
