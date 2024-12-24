import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: "online" | "offline" | "busy";
  activeChats: number;
  responseRate: number;
}

interface AgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (agent: Omit<Agent, "id" | "activeChats" | "responseRate">) => void;
  initialData?: Agent;
}

export function AgentDialog({ open, onOpenChange, onSave, initialData }: AgentDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    role: initialData?.role || "customer_support",
    status: initialData?.status || "offline" as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.role) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }
    onSave(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{initialData ? "Edit Agent" : "Add New Agent"}</DialogTitle>
            <DialogDescription>
              {initialData
                ? "Edit the agent's details below"
                : "Add a new AI agent to your team"}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="AI Assistant name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, role: e.target.value }))
                }
                placeholder="Enter role (e.g., customer_support, sales)"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                value={formData.status}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, status: e.target.value as "online" | "offline" | "busy" }))
                }
                placeholder="Enter status (online, offline, busy)"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">{initialData ? "Save changes" : "Add agent"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}