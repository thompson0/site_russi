import UserCard from "@/components/User/UserCard";
import { getUserFromCookie } from "@/lib/auth";

export default async function UserPage() {
    const user = await getUserFromCookie();

    if (!user) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-2xl font-bold text-red-600">
                    Acesso negado — faça login
                </h1>
            </div>
        );
    }

    return (

        <div className="flex flex-col w-full items-center mx-4 md:mx-0 md:p-8">
            <div className="w-full max-w-7xl">
                <h1 className="text-4xl font-bold mb-2.5 text-center sm:text-left">Profile</h1>

                <div className=" gap-6">
                    <div className="md:col-span-2">
                        <UserCard
                            name={user.nome}
                            email={user.email}
                            permissao={user.permissao}
                            user={user}
                        />
                       
                    </div>
                    
                </div>
            </div>
        </div>


    );
}

