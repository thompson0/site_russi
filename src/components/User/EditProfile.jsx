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
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react"

export function EditProfile({ user = {} }) {
    const [form, setForm] = useState({
        nome: user?.nome ?? "",
        email: user?.email ?? "",
        senha: "",
    })
    const [showAlert, setShowAlert] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch("/api/user/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })

        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 2500)
    }

    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <Button size="lg" >Editar perfil</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Editar perfil</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            className="w-full border rounded-md p-2"
                            value={form.nome}
                            onChange={(e) => setForm({ ...form, nome: e.target.value })}
                            placeholder="Nome"
                        />
                        <input
                            className="w-full border rounded-md p-2"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="Email"
                        />
                        <input
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
            
            {showAlert && (

                <Alert className="p-5 ">
                    <CheckCircle2Icon />
                    <AlertTitle>Sucesso!</AlertTitle>
                    <AlertDescription>Suas alterações foram salvas.</AlertDescription>
                </Alert>
            )}
        </>
    )
}
