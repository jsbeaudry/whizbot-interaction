import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, MessageSquare, Phone, Mail } from "lucide-react";

const mockCustomers = [
  {
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    lastContact: "2 hours ago",
    assignedAgent: "AI Assistant 1",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Inactive",
    lastContact: "1 day ago",
    assignedAgent: "AI Assistant 2",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "Active",
    lastContact: "5 mins ago",
    assignedAgent: "AI Assistant 3",
  },
];

const CustomerCard = ({ name, email, status, lastContact, assignedAgent }: {
  name: string;
  email: string;
  status: string;
  lastContact: string;
  assignedAgent: string;
}) => (
  <Card className="hover:shadow-lg transition-shadow animate-fade-in">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{name}</CardTitle>
      <span className={`text-xs ${status === "Active" ? "text-green-500" : "text-gray-500"}`}>
        {status}
      </span>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Last contact: {lastContact}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Assigned to: {assignedAgent}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Customers = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar />
        <SidebarInset>
          <div className="p-6 lg:p-8">
            <div className="grid gap-4 md:gap-8 animate-fade-in">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">Customers</h1>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Customer
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockCustomers.map((customer) => (
                  <CustomerCard key={customer.email} {...customer} />
                ))}
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Customers;