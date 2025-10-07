import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export default async function AdminLayout({ children }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) redirect("/user");

    let userRole;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        userRole = decoded.role;

    } catch {
        redirect("/user");
    }

    if (userRole !== "admin") redirect("/user");
    return (
        <>
            <div className="dark">
                <SidebarProvider>
                    <AppSidebar />
                    <main>
                        <SidebarTrigger />
                        {children}
                    </main>
                </SidebarProvider>
            </div>


        </>

    );
}
