"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Pencil } from "lucide-react"
import { useAlert } from "@/context/AlertContext"
import { useRouter } from "next/navigation"

export default function EditUser({ id }) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    permissao: "",
  })
  const [loading, setLoading] = useState(false)
  const { triggerAlert } = useAlert() 
  const router = useRouter()
  async function fetchUserData() {
    try {
      const res = await fetch(`/api/user/${id}`)
      if (!res.ok) throw new Error("Erro ao buscar usuário")
      const data = await res.json()
      setForm({
        nome: data.nome || "",
        email: data.email || "",
        senha: "",
        permissao: data.permissao || "",
      })
    } catch (err) {
      triggerAlert("error", "Erro ao carregar", "Não foi possível buscar os dados.")
    }
  }

  async function handleEditUser(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`/api/user/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Erro ao atualizar usuário")
       await router.refresh()

      triggerAlert("success", "Usuário atualizado!", "As informações foram salvas.")
    } catch (err) {
      console.error(err)
      triggerAlert("error", "Falha ao atualizar!", "Verifique os dados e tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog onOpenChange={(open) => open && fetchUserData()}>
      <DialogTrigger asChild>
        <Button size="icon" title="Editar usuário">
          <Pencil className="w-5 h-5" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar usuário</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleEditUser} className="space-y-3">
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
            placeholder="Nova senha (opcional)"
            type="password"
            value={form.senha}
            onChange={(e) => setForm({ ...form, senha: e.target.value })}
          />
          <Input
            placeholder="Permissão (ex: admin ou user)"
            value={form.permissao}
            onChange={(e) => setForm({ ...form, permissao: e.target.value })}
            required
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" disabled={loading}>
                {loading ? "Salvando..." : "Salvar"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
