import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Agent } from "@/components/agents/AgentDialog";

interface AgentActionsProps {
  agent: Agent;
  onEdit: (agent: Agent) => void;
  onDelete: (agent: Agent) => void;
}

export function AgentActions({ agent, onEdit, onDelete }: AgentActionsProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onEdit(agent)}
      >
        <Pencil className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(agent)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}