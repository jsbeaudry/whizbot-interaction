import { Home, Users, MessageSquare, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Users, label: "Agents", href: "/agents" },
  { icon: MessageSquare, label: "Conversations", href: "/conversations" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center border-b px-6">
        <span className="font-bold">AI Agent Manager</span>
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
            <Menu className="h-4 w-4" />
          </Button>
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton>
                    <a href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};