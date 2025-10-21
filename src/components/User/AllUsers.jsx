import * as React from "react"

import { prisma } from "@/lib/prisma";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

async function AllUsers() {
    const users = await prisma.usuarios.findMany()
    return (
        <ScrollArea className="w-full h-[80%] rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium">Usuários</h4>

                {users.map((user) => (
                    <React.Fragment key={user.id}>
                        <div className="text-sm">
                            <p className="font-medium">{user.nome}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                        <Separator className="my-2" />
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    );
}

export default AllUsers;