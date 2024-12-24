import { AgentCard } from "@/components/dashboard/AgentCard";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

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

const Agents = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar />
        <SidebarInset>
          <div className="p-6 lg:p-8">
            <div className="grid gap-4 md:gap-8 animate-fade-in">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">Agents</h1>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Agent
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockAgents.map((agent) => (
                  <AgentCard key={agent.name} {...agent} />
                ))}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Agents;