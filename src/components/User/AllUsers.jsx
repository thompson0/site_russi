import * as React from "react"
import { prisma } from "@/lib/prisma"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import DeleteUser from "./DeleteUser"
import EditUser from "./EditUser"
import { getUserFromCookie } from "@/lib/auth"

const ROLE_LABELS = {
    admin: { label: "Administrador", color: "bg-red-100 text-red-800" },
    supervisor: { label: "Supervisor", color: "bg-purple-100 text-purple-800" },
    vendedor_interno: { label: "Vendedor Interno", color: "bg-blue-100 text-blue-800" },
    instalador: { label: "Instalador", color: "bg-green-100 text-green-800" },
}

async function AllUsers() {
    const currentUser = await getUserFromCookie()
    
    let whereClause = {}
    if (currentUser?.role === 'supervisor') {
        whereClause = { role: 'vendedor_interno' }
    }

    const users = await prisma.usuarios.findMany({
        where: whereClause,
        include: {
            setor: true,
        },
        orderBy: [{ role: 'asc' }, { nome: 'asc' }],
    })

    const canEdit = (userRole) => {
        if (currentUser?.role === 'admin') return true
        if (currentUser?.role === 'supervisor' && userRole === 'vendedor_interno') return true
        return false
    }

    return (
        <ScrollArea className="w-full h-[500px] rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium">Usuários ({users.length})</h4>

                {users.map((user) => {
                    const roleInfo = ROLE_LABELS[user.role] || { label: user.role, color: "bg-gray-100 text-gray-800" }
                    
                    return (
                        <React.Fragment key={user.id}>
                            <div className="flex items-center justify-between text-sm py-2">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-medium">{user.nome}</p>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${roleInfo.color}`}>
                                            {roleInfo.label}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                    {user.setor && (
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Setor: {user.setor.nome}
                                        </p>
                                    )}
                                </div>
                                {canEdit(user.role) && (
                                    <div className="flex gap-2 ml-4">
                                        <DeleteUser id={user.id.toString()} />
                                        <EditUser id={user.id.toString()} />
                                    </div>
                                )}
                            </div>

                            <Separator className="my-2" />
                        </React.Fragment>
                    )
                })}
            </div>
        </ScrollArea>
    )
}

export default AllUsers
