import { useEffect, useState } from "react";
import { AgentCard } from "@/components/dashboard/AgentCard";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { UserPlus, Pencil, Trash2 } from "lucide-react";
import { AgentDialog, type Agent } from "@/components/agents/AgentDialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";

const STORAGE_KEY = "ai_agents";

const Agents = () => {
  const { toast } = useToast();
  const [agents, setAgents] = useState<Agent[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  useEffect(() => {
    const storedAgents = localStorage.getItem(STORAGE_KEY);
    if (storedAgents) {
      setAgents(JSON.parse(storedAgents));
    }
  }, []);

  const saveToLocalStorage = (updatedAgents: Agent[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAgents));
    setAgents(updatedAgents);
  };

  const handleAddAgent = (agentData: Omit<Agent, "id" | "activeChats" | "responseRate">) => {
    const newAgent: Agent = {
      id: crypto.randomUUID(),
      ...agentData,
      activeChats: 0,
      responseRate: 0,
    };
    const updatedAgents = [...agents, newAgent];
    saveToLocalStorage(updatedAgents);
    toast({
      title: "Success",
      description: "Agent added successfully",
    });
  };

  const handleEditAgent = (agentData: Omit<Agent, "id" | "activeChats" | "responseRate">) => {
    if (!selectedAgent) return;
    const updatedAgents = agents.map((agent) =>
      agent.id === selectedAgent.id
        ? { ...agent, ...agentData }
        : agent
    );
    saveToLocalStorage(updatedAgents);
    setSelectedAgent(null);
    toast({
      title: "Success",
      description: "Agent updated successfully",
    });
  };

  const handleDeleteAgent = () => {
    if (!selectedAgent) return;
    const updatedAgents = agents.filter((agent) => agent.id !== selectedAgent.id);
    saveToLocalStorage(updatedAgents);
    setSelectedAgent(null);
    setDeleteDialogOpen(false);
    toast({
      title: "Success",
      description: "Agent deleted successfully",
    });
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar />
        <SidebarInset>
          <div className="p-4 md:p-6 lg:p-8">
            <div className="grid gap-4 md:gap-8 animate-fade-in">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Agents</h1>
                <Button onClick={() => setDialogOpen(true)}>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Agent
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {agents.map((agent) => (
                  <div key={agent.id} className="relative group">
                    <AgentCard {...agent} />
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => {
                          setSelectedAgent(agent);
                          setDialogOpen(true);
                        }}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => {
                          setSelectedAgent(agent);
                          setDeleteDialogOpen(true);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>

      <AgentDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setSelectedAgent(null);
        }}
        onSave={selectedAgent ? handleEditAgent : handleAddAgent}
        initialData={selectedAgent || undefined}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the agent.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteAgent}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SidebarProvider>
  );
};

export default Agents;