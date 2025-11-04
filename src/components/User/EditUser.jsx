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
import { useSecureFetch } from "@/hooks/useSecureFetch"

export default function EditUser({ id }) {
  const [form, setForm] = useState({ nome: "", email: "", senha: "", permissao: "" })
  const [open, setOpen] = useState(false)
  const { triggerAlert } = useAlert()
  const { secureFetch, loading } = useSecureFetch()

  async function fetchUserData() {
    try {
      const res = await secureFetch(`/api/user/${id}`)
      if (!res || !res.ok) throw new Error("Erro ao buscar usuário")
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

    const res = await secureFetch(
      `/api/user/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(form),
      },
      {
        refresh: true,
        successMsg: "Usuário atualizado com sucesso!",
        errorMsg: "Falha ao atualizar o usuário.",
      }
    )

    if (res) {
      setForm((f) => ({ ...f, senha: "" })) 
      setOpen(false) 
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (o) fetchUserData() }}>
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

          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
