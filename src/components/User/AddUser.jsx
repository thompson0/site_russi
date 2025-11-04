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
import { useSecureFetch } from "@/hooks/useSecureFetch"

export default function AddUser() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "", permissao: "" })
  const [open, setOpen] = useState(false)
  const { secureFetch, loading } = useSecureFetch()

  async function handleAddUser(e) {
    e.preventDefault()
    const res = await secureFetch(
      "/api/user/create",
      {
        method: "POST",
        body: JSON.stringify(form),
      },
      {
        refresh: true,
        successMsg: "Usuário criado com sucesso!",
        errorMsg: "Não foi possível criar o usuário.",
      }
    )

    if (res) {
      setForm({ nome: "", email: "", senha: "", permissao: "" })
      setOpen(false) 
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon">
          <PlusSquare />
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
            placeholder="Permissão"
            value={form.permissao}
            onChange={(e) => setForm({ ...form, permissao: e.target.value })}
            required
          />

          <DialogFooter>
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
