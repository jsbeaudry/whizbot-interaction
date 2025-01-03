import { Home, Users, MessageSquare, Settings, Menu, X } from "lucide-react";
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
} from "@/components/ui/sidebar";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Users, label: "Agents", href: "/agents" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <div className="flex h-14 items-center px-4 md:px-6">
          <span className="font-bold text-lg">AI Agent Manager</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto h-8 w-8 md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      
      {/* Sidebar */}
      <Sidebar className="mt-14">
        <SidebarContent className={`
          fixed inset-x-0 top-14 bottom-0 z-40 bg-background md:relative md:top-0 md:z-0
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          border-r md:border-r-0
        `}>
          <SidebarHeader className="p-4">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold tracking-tight">Navigation</h2>
              <p className="text-sm text-muted-foreground">
                Manage your AI agents and interactions
              </p>
            </div>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton>
                      <a 
                        href={item.href} 
                        className={`flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-md transition-colors
                          ${location.pathname === item.href ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}
                        `}
                        onClick={closeMenu}
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
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
    </>
  );
};