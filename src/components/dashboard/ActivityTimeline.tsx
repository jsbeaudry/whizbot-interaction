import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, UserPlus, AlertCircle } from "lucide-react";

interface Activity {
  id: number;
  type: "message" | "new_customer" | "alert";
  content: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: "message",
    content: "New message from John Doe",
    time: "5 min ago",
  },
  {
    id: 2,
    type: "new_customer",
    content: "New customer registered",
    time: "10 min ago",
  },
  {
    id: 3,
    type: "alert",
    content: "High priority message waiting",
    time: "15 min ago",
  },
];

const getIcon = (type: Activity["type"]) => {
  switch (type) {
    case "message":
      return <MessageSquare className="h-4 w-4" />;
    case "new_customer":
      return <UserPlus className="h-4 w-4" />;
    case "alert":
      return <AlertCircle className="h-4 w-4" />;
  }
};

export const ActivityTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <div className="p-2 bg-secondary rounded-full">{getIcon(activity.type)}</div>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.content}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};