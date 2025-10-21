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

        <div className=" flex flex-col w-full p-6 items-center">
            <div className="w-full max-w-6xl text-left">
                <h1 className="text-4xl font-bold mb-8 text-center sm:text-left">Profile</h1>
                <UserCard name={user.nome}
                email={user.email}
                permission={user.permissao} />
            </div>
        </div>


    );
}

