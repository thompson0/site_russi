"use client";

import { 
  HomeIcon, 
  TruckIcon, 
  CubeIcon, 
  PlayCircleIcon, 
  UsersIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChevronRightIcon,
  BuildingOffice2Icon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

import { Car } from "lucide-react";
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
    { title: "Dashboard", url: "/admin", icon: HomeIcon },
    { title: "Montadoras", url: "/admin/montadoras", icon: TruckIcon },
    { title: "Carros", url: "/admin/catalogo/carros", icon: Car },
    { title: "Produtos", url: "/admin/catalogo/produtos", icon: CubeIcon },
    { title: "Vídeos Públicos", url: "/admin/videos", icon: PlayCircleIcon },
    { title: "Treinamentos", url: "/admin/videos-internos", icon: AcademicCapIcon },
    { title: "Setores", url: "/admin/setores", icon: BuildingOffice2Icon },
    { title: "Usuários", url: "/admin/user", icon: UsersIcon },
  ];

  const bottomItems = [
    { title: "Configurações", url: "/admin/config", icon: Cog6ToothIcon },
    { title: "Sair", action: handleLogout, icon: ArrowRightOnRectangleIcon },
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
              <h2 className="font-semibold text-lg tracking-tight">Russi Admin</h2>
              <p className="text-slate-400 text-xs">Painel de Controle</p>
            </div>
          </div>
        </SidebarHeader>

       
        <div className="mt-2 mb-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider px-3 mb-2">
            Menu Principal
          </p>

          <SidebarMenu>
            {topItems.map((item) => {
              const active = isActive(item.url);

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="">
                    <Link
                      href={item.url}
                      className={`
                        group/item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                        ${active
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                          : "text-slate-400"
                        }
                      `}
                    >
                      <item.icon
                        className={`
                          w-5 h-5 transition-colors
                          ${
                            active
                              ? "text-white"
                              : "text-slate-500 group-hover/item:text-blue-400"
                          }
                        `}
                      />

                      <span className="font-medium text-sm">{item.title}</span>

                      {active && (
                        <ChevronRightIcon className="w-4 h-4 ml-auto text-white" />
                      )}
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
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider px-3 mb-2">
            Sistema
          </p>

          <SidebarMenu>
            {bottomItems.map((item) => {
              const active = item.url ? isActive(item.url) : false;

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="">
                    {item.action ? (
                      <button
                        onClick={item.action}
                        className="group/item flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-slate-400"
                      >
                        <item.icon className="w-5 h-5 text-slate-500 transition-colors group-hover/item:text-red-400" />
                        <span className="font-medium text-sm">{item.title}</span>
                      </button>
                    ) : (
                      <Link
                        href={item.url}
                        className={`
                          group/item flex items-center gap-3 px-3 py-2.5 rounded-lg 
                          ${active ? "bg-slate-800 text-white" : "text-slate-400"}
                        `}
                      >
                        <item.icon
                          className={`
                            w-5 h-5 transition-colors
                            ${
                              active
                                ? "text-white"
                                : "text-slate-500 group-hover/item:text-gray-200"
                            }
                          `}
                        />

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
