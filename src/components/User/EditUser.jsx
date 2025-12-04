"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Pencil } from "lucide-react"
import { useAlert } from "@/context/AlertContext"
import { useSecureFetch } from "@/hooks/useSecureFetch"

const ROLES = [
  { value: "admin", label: "Administrador" },
  { value: "supervisor", label: "Supervisor" },
  { value: "vendedor_interno", label: "Vendedor Interno" },
  { value: "instalador", label: "Instalador" },
]

export default function EditUser({ id, currentUserRole = "admin" }) {
  const [form, setForm] = useState({ 
    nome: "", 
    email: "", 
    senha: "", 
    permissao: "",
    role: "",
    setor_id: "",
  })
  const [open, setOpen] = useState(false)
  const [setores, setSetores] = useState([])
  const { triggerAlert } = useAlert()
  const { secureFetch, loading } = useSecureFetch()

  const isSupervisor = currentUserRole === "supervisor"

  async function fetchSetores() {
    if (isSupervisor) return;
    
    try {
      const res = await fetch("/api/setores")
      if (res.ok) {
        const data = await res.json()
        setSetores(data)
      }
    } catch (error) {
      console.error("Erro ao buscar setores:", error)
    }
  }

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
        role: data.role || "vendedor_interno",
        setor_id: data.setor_id?.toString() || "",
      })
    } catch (err) {
      triggerAlert("error", "Erro ao carregar", "Não foi possível buscar os dados.")
    }
  }

  useEffect(() => {
    if (open) {
      fetchSetores()
      fetchUserData()
    }
  }, [open])

  async function handleEditUser(e) {
    e.preventDefault()

    const res = await secureFetch(
      `/api/user/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          senha: form.senha || undefined,
          role: isSupervisor ? undefined : form.role,
          setor_id: isSupervisor ? undefined : (form.setor_id === "none" || !form.setor_id ? null : parseInt(form.setor_id)),
        }),
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" title="Editar usuário">
          <Pencil className="w-5 h-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar usuário</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleEditUser} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              placeholder="Nome completo"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="email@exemplo.com"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="senha">Nova Senha (opcional)</Label>
            <Input
              id="senha"
              placeholder="Deixe em branco para manter a atual"
              type="password"
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })}
            />
          </div>

          {!isSupervisor && (
            <>
              <div className="space-y-2">
                <Label htmlFor="role">Cargo</Label>
                <Select
                  value={form.role || "vendedor_interno"}
                  onValueChange={(value) => setForm({ ...form, role: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLES.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="setor">Setor</Label>
                <Select
                  value={form.setor_id || "none"}
                  onValueChange={(value) => setForm({ ...form, setor_id: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Nenhum</SelectItem>
                    {setores.map((setor) => (
                      <SelectItem key={setor.id} value={setor.id.toString()}>
                        {setor.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {isSupervisor && (
            <p className="text-xs text-muted-foreground">
              Como supervisor, você pode editar apenas nome, email e senha dos vendedores do seu setor.
            </p>
          )}

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
