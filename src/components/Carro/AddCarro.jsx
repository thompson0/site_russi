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
import { useRefresh } from "@/context/RefreshContext"

export default function AddCarro({ onCreated }) {
  const [form, setForm] = useState({
    nome: "",
    ano_de: "",
    ano_ate: "",
    versao: "",
    montadora_id: "",
    foto_url: "",
    imagem: "",
  })
  const [open, setOpen] = useState(false)
  const { secureFetch, loading } = useSecureFetch()
  const { triggerRefresh } = useRefresh()

  async function handleAddCarro(e) {
    e.preventDefault()
    const res = await secureFetch(
      "/api/carros/",
      {
        method: "POST",
        body: JSON.stringify({
          ...form,
          ano_de: Number(form.ano_de),
          ano_ate: Number(form.ano_ate),
          montadora_id: Number(form.montadora_id),
        }),
      },
      {
        successMsg: "Carro criado com sucesso!",
        errorMsg: "Não foi possível criar o carro.",
      }
    )

    if (res) {
      setForm({
        nome: "",
        ano_de: "",
        ano_ate: "",
        versao: "",
        montadora_id: "",
        foto_url: "",
        imagem: "",
      })
      setOpen(false)
      triggerRefresh()
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
          <DialogTitle>Cadastrar novo carro</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleAddCarro} className="space-y-3">
          <Input
            placeholder="Nome do carro"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            required
          />
          <Input
            placeholder="Ano de início (ex: 2015)"
            type="number"
            value={form.ano_de}
            onChange={(e) => setForm({ ...form, ano_de: e.target.value })}
          />
          <Input
            placeholder="Ano final (ex: 2022)"
            type="number"
            value={form.ano_ate}
            onChange={(e) => setForm({ ...form, ano_ate: e.target.value })}
          />
          <Input
            placeholder="Versão"
            value={form.versao}
            onChange={(e) => setForm({ ...form, versao: e.target.value })}
          />
          <Input
            placeholder="ID da montadora"
            type="number"
            value={form.montadora_id}
            onChange={(e) => setForm({ ...form, montadora_id: e.target.value })}
          />
          <Input
            placeholder="URL da foto"
            value={form.foto_url}
            onChange={(e) => setForm({ ...form, foto_url: e.target.value })}
          />
          <Input
            placeholder="Imagem (caso diferente da foto)"
            value={form.imagem}
            onChange={(e) => setForm({ ...form, imagem: e.target.value })}
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
