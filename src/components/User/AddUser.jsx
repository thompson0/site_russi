"use client"

import { useState, useEffect } from "react"
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
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { PlusSquare } from "lucide-react"
import { useSecureFetch } from "@/hooks/useSecureFetch"

const ROLES = [
  { value: "admin", label: "Administrador" },
  { value: "supervisor", label: "Supervisor" },
  { value: "vendedor_interno", label: "Vendedor Interno" },
  { value: "instalador", label: "Instalador" },
]

export default function AddUser({ currentUser }) {
  const currentUserRole = currentUser?.role || "admin"
  const currentUserSetorId = currentUser?.setor_id?.toString() || currentUser?.setorId?.toString() || ""
  const currentUserSetorNome = currentUser?.setor?.nome || currentUser?.setorNome || ""
  
  const [form, setForm] = useState({ 
    nome: "", 
    email: "", 
    senha: "", 
    permissao: "user",
    role: "vendedor_interno",
    setor_id: currentUserRole === "supervisor" ? currentUserSetorId : "",
  })
  const [open, setOpen] = useState(false)
  const [setores, setSetores] = useState([])
  const { secureFetch, loading } = useSecureFetch()

  useEffect(() => {
    async function fetchSetores() {
      if (currentUserRole === "supervisor") return;
      
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
    if (open) {
      fetchSetores()
    }
  }, [open, currentUserRole])

  const availableRoles = currentUserRole === "supervisor" 
    ? ROLES.filter(r => r.value === "vendedor_interno")
    : ROLES

  async function handleAddUser(e) {
    e.preventDefault()
    
    const dataToSend = {
      ...form,
      setor_id: currentUserRole === "supervisor" ? currentUserSetorId : (form.setor_id || null),
    }
    
    const res = await secureFetch(
      "/api/user/create",
      {
        method: "POST",
        body: JSON.stringify(dataToSend),
      },
      {
        refresh: true,
        successMsg: "Usuário criado com sucesso!",
        errorMsg: "Não foi possível criar o usuário.",
      }
    )

    if (res) {
      setForm({ 
        nome: "", 
        email: "", 
        senha: "", 
        permissao: "user", 
        role: "vendedor_interno", 
        setor_id: currentUserRole === "supervisor" ? currentUserSetorId : "" 
      })
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

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar novo usuário</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleAddUser} className="space-y-4">
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
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              placeholder="Senha"
              type="password"
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Cargo</Label>
            {currentUserRole === "supervisor" ? (
              <div className="px-3 py-2 border rounded-md bg-muted text-muted-foreground">
                Vendedor Interno
              </div>
            ) : (
              <Select
                value={form.role}
                onValueChange={(value) => setForm({ ...form, role: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o cargo" />
                </SelectTrigger>
                <SelectContent>
                  {availableRoles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="setor">Setor</Label>
            {currentUserRole === "supervisor" ? (
              <div className="px-3 py-2 border rounded-md bg-muted text-muted-foreground">
                {currentUserSetorNome || "Seu setor"}
              </div>
            ) : (
              <Select
                value={form.setor_id || "none"}
                onValueChange={(value) => setForm({ ...form, setor_id: value === "none" ? "" : value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o setor (opcional)" />
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
            )}
            {currentUserRole === "supervisor" && (
              <p className="text-xs text-muted-foreground">
                Como supervisor, você só pode criar usuários para o seu próprio setor.
              </p>
            )}
          </div>

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
