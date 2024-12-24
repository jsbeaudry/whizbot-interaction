import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Mail } from "lucide-react";

interface AgentCardProps {
  name: string;
  role: string;
  status: "online" | "offline" | "busy";
  activeChats: number;
  responseRate: number;
}

export const AgentCard = ({ name, role, status, activeChats, responseRate }: AgentCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <Badge
          variant={status === "online" ? "default" : status === "busy" ? "destructive" : "secondary"}
        >
          {status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground mb-4">{role}</div>
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm">{activeChats} active chats</div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm">{responseRate}% response rate</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};