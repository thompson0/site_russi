import AllUsers from "@/components/User/AllUsers";
import { getUserFromCookie } from "@/lib/auth"
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import AddUser from "@/components/User/AddUser";

async function ConfigAdminPage() {
    const user = await getUserFromCookie()
    
    const currentUserData = user ? {
        role: user.role,
        setor_id: user.setor_id?.toString(),
        setorId: user.setor_id?.toString(),
        setor: user.setor ? { nome: user.setor.nome } : null,
        setorNome: user.setor?.nome || null,
    } : null;
    
    return (
        <Card className="flex m-6 gap-5">
            <CardHeader className="flex flex-row justify-between text-4xl font-bold text-center sm:text-left">
                <h1 className="">Olá {user?.nome}</h1>
                <AddUser currentUser={currentUserData} />
            </CardHeader> 
            <CardContent>
                <AllUsers currentUserRole={user?.role} currentUserSetorId={user?.setor_id?.toString()} />
            </CardContent>
        </Card>
    );
}

export default ConfigAdminPage;
