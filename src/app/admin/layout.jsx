import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Home/AppSidebar"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/jwt";
import NavBar from "@/components/Login/NavBar";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) redirect("/login");

    const decoded = verifyToken(token);
    if (!decoded) redirect("/login");
    if (decoded.permissao !== "admin") redirect("/user");

    return (
            <header  className="root">
                <SidebarProvider>
                    <AppSidebar />
                    <main className="flex-1 ">
                  <NavBar></NavBar>
                        {children}
                    </main>
                </SidebarProvider>
            </header>

    );
}
