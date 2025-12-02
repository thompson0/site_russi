"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { DarkMode } from "../Home/Darkmode";
import { BellIcon, MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/admin") return "Dashboard";
    if (pathname.includes("/montadoras")) return "Montadoras";
    if (pathname.includes("/catalogo/carros")) return "Carros";
    if (pathname.includes("/catalogo/produtos")) return "Produtos";
    if (pathname.includes("/videos")) return "Vídeos";
    if (pathname.includes("/user")) return "Usuários";
    if (pathname.includes("/config")) return "Configurações";
    return "Admin";
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 flex-shrink-0 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        
      
        <div className="flex items-center gap-4">
         
          <SidebarTrigger className="p-2 hover:bg-accent rounded-lg transition-colors">
            <Bars3Icon className="w-5 h-5" />
          </SidebarTrigger>

      
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold text-foreground">{getPageTitle()}</h1>
            <p className="text-xs text-muted-foreground">Gerencie seu conteúdo</p>
          </div>
        </div>

     
        <div className="flex items-center gap-2 md:gap-4">
          
   
          <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-accent/50 rounded-lg border border-border/50">
            <MagnifyingGlassIcon className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent border-none outline-none text-sm w-40 placeholder:text-muted-foreground"
            />
            <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </div>

     
          <DarkMode />


          <button className="p-2 hover:bg-accent rounded-lg transition-colors">
            <BellIcon className="w-5 h-5 text-muted-foreground" />
          </button>


            <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-border/50">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-blue-500/20">
                A
              </div>

              <div className="hidden md:block">
                <p className="text-sm font-medium text-foreground">Admin</p>
                <p className="text-xs text-muted-foreground">Administrador</p>
              </div>
            </div>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
