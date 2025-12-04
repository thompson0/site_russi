import { getUserFromCookie } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import { 
  Home, 
  Video, 
  BookOpen, 
  Phone, 
  HelpCircle, 
  FileText,
  User,
  GraduationCap
} from "lucide-react";

const ROLE_LABELS = {
  admin: "Administrador",
  supervisor: "Supervisor",
  vendedor_interno: "Vendedor Interno",
  instalador: "Instalador",
};

export default async function InternoLayout({ children }) {
  const user = await getUserFromCookie();

  if (!user) {
    redirect("/login");
  }

  const menuItems = [
    { href: "/interno", label: "Início", icon: Home },
    { href: "/interno/treinamentos", label: "Treinamentos", icon: GraduationCap },
    { href: "/interno/recursos", label: "Recursos & RH", icon: BookOpen },
  ];

  if (user.role !== 'instalador') {
    menuItems.push({ href: "/catalogo/carros", label: "Catálogo Digital", icon: FileText });
  }

  if (user.role === 'admin' || user.role === 'supervisor') {
    menuItems.push({ href: "/admin", label: "Administração", icon: User });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/interno" className="flex items-center gap-2">
                <img 
                  src="/logo_index.png" 
                  alt="Russi" 
                  className="h-8 w-auto"
                />
                <span className="text-white font-semibold hidden sm:block">Portal Interno</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm text-white font-medium">{user.nome}</p>
                <p className="text-xs text-slate-400">{ROLE_LABELS[user.role] || user.role}</p>
              </div>
              <LogoutButton />
            </div>
          </div>
        </div>

        <nav className="md:hidden border-t border-slate-700/50">
          <div className="flex overflow-x-auto px-4 py-2 gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors whitespace-nowrap"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="pt-24 md:pt-20 pb-8">
        {children}
      </main>
    </div>
  );
}
