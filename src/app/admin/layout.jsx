import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import NavBar from "@/components/Login/NavBar";

export default async function AdminLayout({ children }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) redirect("/login");

    let userRole;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        userRole = decoded.role;

    } catch {
        redirect("/login");
    }

    if (userRole !== "admin") redirect("/user");
    return (
            <header className="dark">
                <SidebarProvider>
                    <AppSidebar />
                    <main className="flex-1">
                  <NavBar></NavBar>
                        {children}
                    </main>
                </SidebarProvider>
            </header>

    );
}
