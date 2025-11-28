"use client";

import { Car, Home, LogOut, Cog, CarFront, Package, MonitorPlay, ChevronRight, Users } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

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
  const pathname = usePathname();

  async function handleLogout() {
    try {
      await fetch("/api/logout", { method: "POST" });
      router.push("/login");
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
    }
  }

  const topItems = [
    { title: "Dashboard", url: "/admin", icon: Home },
    { title: "Montadoras", url: "/admin/montadoras", icon: Car },
    { title: "Carros", url: "/admin/catalogo/carros", icon: CarFront },
    { title: "Produtos", url: "/admin/catalogo/produtos", icon: Package },
    { title: "Vídeos", url: "/admin/videos", icon: MonitorPlay },
    { title: "Usuários", url: "/admin/user", icon: Users },
  ];

  const bottomItems = [
    { title: "Configurações", url: "/admin/config", icon: Cog },
    { title: "Sair", action: handleLogout, icon: LogOut },
  ];

  const isActive = (url) => {
    if (url === "/admin") return pathname === "/admin";
    return pathname.startsWith(url);
  };

  return (
    <Sidebar className="border-r-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <SidebarContent className="px-3">
        <SidebarHeader className="py-6 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg tracking-tight">Russi Admin</h2>
              <p className="text-slate-400 text-xs">Painel de Controle</p>
            </div>
          </div>
        </SidebarHeader>

        <div className="mt-2 mb-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider px-3 mb-2">Menu Principal</p>
          <SidebarMenu>
            {topItems.map((item) => {
              const active = isActive(item.url);
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        active
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${active ? "text-white" : "text-slate-500 group-hover:text-blue-400"}`} />
                      <span className="font-medium text-sm">{item.title}</span>
                      {active && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>
      </SidebarContent>

      <SidebarFooter className="px-3 pb-4">
        <div className="border-t border-slate-800 pt-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider px-3 mb-2">Sistema</p>
          <SidebarMenu>
            {bottomItems.map((item) => {
              const active = item.url ? isActive(item.url) : false;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.action ? (
                      <button
                        onClick={item.action}
                        className="group flex items-center gap-3 px-3 py-2.5 w-full text-left rounded-lg transition-all duration-200 text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                      >
                        <item.icon className="w-5 h-5 text-slate-500 group-hover:text-red-400" />
                        <span className="font-medium text-sm">{item.title}</span>
                      </button>
                    ) : (
                      <Link
                        href={item.url}
                        className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                          active
                            ? "bg-slate-800 text-white"
                            : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                        }`}
                      >
                        <item.icon className={`w-5 h-5 ${active ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`} />
                        <span className="font-medium text-sm">{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>

        <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20">
          <p className="text-xs text-slate-400">Russi Acessórios</p>
          <p className="text-xs text-slate-500">v2.0 - 2025</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
