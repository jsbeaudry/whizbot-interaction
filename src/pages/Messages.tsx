import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, Clock } from "lucide-react";

const mockMessages = [
  {
    id: 1,
    customer: "John Doe",
    message: "Hello, I need help with my account",
    time: "5 mins ago",
    status: "unread",
    agent: "AI Assistant 1",
  },
  {
    id: 2,
    customer: "Jane Smith",
    message: "Thank you for your help!",
    time: "1 hour ago",
    status: "read",
    agent: "AI Assistant 2",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    message: "When will my order arrive?",
    time: "2 hours ago",
    status: "unread",
    agent: "AI Assistant 3",
  },
];

const Messages = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar />
        <SidebarInset>
          <div className="p-6 lg:p-8">
            <div className="grid gap-4 md:gap-8 animate-fade-in">
              <h1 className="text-4xl font-bold">Messages</h1>
              <div className="grid gap-4">
                {mockMessages.map((message) => (
                  <Card 
                    key={message.id}
                    className={`hover:shadow-lg transition-shadow ${
                      message.status === "unread" ? "bg-blue-50 dark:bg-blue-900/10" : ""
                    }`}
                  >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <CardTitle className="text-sm font-medium">
                          {message.customer}
                        </CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-xs">{message.time}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-4 w-4 mt-1 text-muted-foreground" />
                        <div>
                          <p className="text-sm">{message.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Assigned to: {message.agent}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Messages;