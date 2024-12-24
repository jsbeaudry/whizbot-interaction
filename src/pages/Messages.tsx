import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  customer: string;
  message: string;
  time: string;
  status: string;
  agent: string;
}

const mockMessages: Message[] = [
  {
    id: "1",
    customer: "John Doe",
    message: "Hello, I need help with my account",
    time: "5 mins ago",
    status: "unread",
    agent: "AI Assistant 1",
  },
  {
    id: "2",
    customer: "Jane Smith",
    message: "Thank you for your help!",
    time: "1 hour ago",
    status: "read",
    agent: "AI Assistant 2",
  },
  {
    id: "3",
    customer: "Bob Johnson",
    message: "When will my order arrive?",
    time: "2 hours ago",
    status: "unread",
    agent: "AI Assistant 3",
  },
];

const Messages = () => {
  const columns: ColumnDef<Message>[] = [
    {
      accessorKey: "customer",
      header: "Customer",
    },
    {
      accessorKey: "message",
      header: "Message",
    },
    {
      accessorKey: "time",
      header: "Time",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge variant={status === "unread" ? "default" : "secondary"}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
      },
    },
    {
      accessorKey: "agent",
      header: "Assigned Agent",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar />
        <SidebarInset>
          <div className="p-4 md:p-6 lg:p-8">
            <div className="grid gap-4 md:gap-8 animate-fade-in">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Messages</h1>
              </div>
              <DataTable
                columns={columns}
                data={mockMessages}
                searchKey="message"
                filterKey="status"
                filterOptions={[
                  { label: "Unread", value: "unread" },
                  { label: "Read", value: "read" },
                ]}
              />
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Messages;