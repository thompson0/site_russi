import AllUsers from "@/components/User/AllUsers";
import {getUserFromCookie} from "@/lib/auth"
import { Card , CardHeader, CardContent } from "@/components/ui/card";
import AddUser from "@/components/User/AddUser";

async function ConfigAdminPage() {
    const user = await getUserFromCookie()
    
    return (

        <Card className=" flex m-6 gap-5">
           <CardHeader className="flex flex-row justify-between text-4xl font-bold  text-center sm:text-left">
             <h1 className="">Olá {user.nome}</h1>
                <AddUser></AddUser>
            </CardHeader> 
            <CardContent>
                <AllUsers></AllUsers>
            </CardContent>

        </Card>

     );
}

export default ConfigAdminPage;