"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { useAlert } from "@/context/AlertContext"
import { Input } from "../ui/input"
import { useRouter } from "next/navigation"

export function EditProfile({ user = {} }) {
    const [form, setForm] = useState({
        nome: user?.nome ?? "",
        email: user?.email ?? "",
        senha: "",
    })
    const { triggerAlert } = useAlert()
    const router = useRouter()
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const res = await fetch("/api/user/update", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            if (!res.ok) throw new Error("Erro ao salvar alterações")
            await router.refresh()

            triggerAlert("success", "Sucesso!", "Suas alterações foram salvas.")
        } catch (err) {
            console.error(err)
            triggerAlert("error", "Erro!", "Não foi possível atualizar seu perfil.")
        }
    }

    return (
        <>
            <Dialog>
                <div>
                    <div className="flex justify-center items-center w-full">
                        <DialogTrigger asChild>
                            <Button className="w-40" size="lg">
                                Editar perfil
                            </Button>
                        </DialogTrigger>
                    </div>
                </div>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Editar perfil</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <Input
                            className="w-full border rounded-md p-2"
                            value={form.nome}
                            onChange={(e) => setForm({ ...form, nome: e.target.value })}
                            placeholder="Nome"
                        />
                        <Input
                            className="w-full border rounded-md p-2"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Email"
                        />
                        <Input
                            className="w-full border rounded-md p-2"
                            type="password"
                            value={form.senha}
                            onChange={(e) => setForm({ ...form, senha: e.target.value })}
                            placeholder="Nova senha (opcional)"
                        />

                        <DialogFooter>
                            <DialogClose >
                                <Button type="submit">Salvar</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

        </>
    )
}

