import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { AgentCard } from "@/components/dashboard/AgentCard";
import { ActivityTimeline } from "@/components/dashboard/ActivityTimeline";
import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard";

const mockAgents = [
  {
    name: "AI Assistant 1",
    role: "Customer Support",
    status: "online" as const,
    activeChats: 3,
    responseRate: 95,
  },
  {
    name: "AI Assistant 2",
    role: "Sales",
    status: "busy" as const,
    activeChats: 5,
    responseRate: 88,
  },
  {
    name: "AI Assistant 3",
    role: "Technical Support",
    status: "offline" as const,
    activeChats: 0,
    responseRate: 92,
  },
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar />
        <SidebarInset>
          <div className="p-4 md:p-6 lg:p-8">
            <div className="grid gap-4 md:gap-8 animate-fade-in">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Dashboard</h1>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnalyticsCard
                  title="Total Conversations"
                  value="1,234"
                  description="15% increase from last week"
                />
                <AnalyticsCard
                  title="Response Time"
                  value="1.5m"
                  description="Average response time"
                />
                <AnalyticsCard
                  title="Customer Satisfaction"
                  value="94%"
                  description="Based on feedback"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {mockAgents.map((agent) => (
                  <AgentCard key={agent.name} {...agent} />
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <ActivityTimeline />
                <ActivityTimeline />
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;