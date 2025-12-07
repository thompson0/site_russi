import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Home/AppSidebar"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/jwt";
import NavBar from "@/components/Login/NavBar";

export const dynamic = "force-dynamic";

const ALLOWED_ADMIN_ROLES = ['admin', 'supervisor'];

export default async function AdminLayout({ children }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) redirect("/login");

    const decoded = verifyToken(token);
    if (!decoded) redirect("/login");
    
    const hasAdminAccess = decoded.permissao === "admin" || ALLOWED_ADMIN_ROLES.includes(decoded.role);
    if (!hasAdminAccess) redirect("/interno");

    return (
        <div className="min-h-screen bg-background">
            <SidebarProvider>
                <AppSidebar userRole={decoded.role} />
                <main className="flex-1 flex flex-col min-h-screen w-full overflow-x-hidden">
                    <NavBar />
                    <div className="flex-1 bg-accent/30 p-4 md:p-6">
                        {children}
                    </div>
                </main>
            </SidebarProvider>
        </div>
    );
}
