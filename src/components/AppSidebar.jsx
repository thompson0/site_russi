"use client";

import { Car, Home, LogOut, Cog } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await fetch("/api/logout", { method: "POST" });
      router.push("/login");
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
    }
  }
  const topItems = [
    { title: "Home", url: "/", icon: Home },
    { title: "Montadora", url: "/admin/montadoras", icon: Car },
  ];

  const bottomItems = [
    { title: "Config", url: "/config", icon: Cog },
    { title: "Log-out", action: handleLogout, icon: LogOut },
  ];

  return (
    <Sidebar className="flex flex-col justify-between">
      <SidebarContent>
        <SidebarHeader>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-20 h-auto object-contain drop-shadow-md"
          />
        </SidebarHeader>
        <SidebarMenu>
          {topItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                {item.action ? (
                  <button
                    onClick={item.action}
                    className="flex items-center gap-2 w-full text-left"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </button>
                ) : (
                  <a href={item.url} className="flex items-center gap-2">
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {bottomItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                {item.action ? (
                  <button
                    onClick={item.action}
                    className="flex items-center gap-2 w-full text-left"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </button>
                ) : (
                  <a href={item.url} className="flex items-center gap-2">
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
