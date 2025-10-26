"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { PlusSquare } from "lucide-react"
import { useAlert } from "@/context/AlertContext"
import { useRouter } from "next/navigation"
export default function AddUser() {
    const [form, setForm] = useState({ nome: "", email: "", senha: "", permissao: "" })
    const [loading, setLoading] = useState(false)
    const { triggerAlert } = useAlert()
    const router = useRouter()
    async function handleAddUser(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch("/api/user/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            if (!res.ok) {
                const msg = (await res.text().catch(() => "")) || "Não foi possível salvar."
                triggerAlert("error", "Erro ao salvar", msg)
                return
            }
            await router.refresh()
            triggerAlert("Usuário Criado com sucesso!", "Usuário Criado!", "As informações foram salvas.")
            setForm({ nome: "", email: "", senha: "", permissao: "" })
        } catch (err) {
            triggerAlert("error", "Erro de rede", "Tente novamente em instantes.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="icon">
                        <PlusSquare></PlusSquare>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Criar novo usuário</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleAddUser} className="space-y-3">
                        <Input
                            placeholder="Nome"
                            value={form.nome}
                            onChange={(e) => setForm({ ...form, nome: e.target.value })}
                            required
                        />
                        <Input
                            placeholder="Email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                        <Input
                            placeholder="Senha"
                            type="password"
                            value={form.senha}
                            onChange={(e) => setForm({ ...form, senha: e.target.value })}
                            required
                        />
                        <Input
                            placeholder="Permissao"
                            value={form.permissao}
                            onChange={(e) => setForm({ ...form, permissao: e.target.value })}
                            required
                        />

                        <DialogFooter>
                            <Button type="submit" disabled={loading}>
                                {loading ? "Salvando..." : "Salvar"}
                                <DialogClose asChild>

                                </DialogClose>
                            </Button>

                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
