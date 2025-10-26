import * as React from "react"
import { prisma } from "@/lib/prisma"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import DeleteUser from "./DeleteUser"
import EditUser from "./EditUser"

async function AllUsers() {
    const users = await prisma.usuarios.findMany()

    return (
        <ScrollArea className="w-full rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium">Usuários</h4>

                {users.map((user) => (
                    <React.Fragment key={user.id}>
                        <div className="flex items-center justify-between text-sm">
                            <div>
                                <p className="font-medium">{user.nome}</p>
                                <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                            <div className="flex gap-2 ml-4">
                                <DeleteUser id={user.id.toString()} />
                                <EditUser id={user.id.toString()} />
                            </div>


                        </div>

                        <Separator className="my-2" />
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    )
}

export default AllUsers
