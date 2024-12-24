import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

interface Customer {
  id: string;
  name: string;
  email: string;
  status: string;
  lastContact: string;
  assignedAgent: string;
}

const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    lastContact: "2 hours ago",
    assignedAgent: "AI Assistant 1",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "inactive",
    lastContact: "1 day ago",
    assignedAgent: "AI Assistant 2",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "active",
    lastContact: "5 mins ago",
    assignedAgent: "AI Assistant 3",
  },
];

const Customers = () => {
  const columns: ColumnDef<Customer>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge variant={status === "active" ? "default" : "secondary"}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
      },
    },
    {
      accessorKey: "lastContact",
      header: "Last Contact",
    },
    {
      accessorKey: "assignedAgent",
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
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Customers</h1>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Customer
                </Button>
              </div>
              <DataTable
                columns={columns}
                data={mockCustomers}
                searchKey="name"
                filterKey="status"
                filterOptions={[
                  { label: "Active", value: "active" },
                  { label: "Inactive", value: "inactive" },
                ]}
              />
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Customers;