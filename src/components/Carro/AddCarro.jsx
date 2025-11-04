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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"
import { PlusSquare } from "lucide-react"
import { useSecureFetch } from "@/hooks/useSecureFetch"
import { useRefresh } from "@/context/RefreshContext"

export default function AddCarro({ onCreated, Allcarros, montadoraId }) {
  const [form, setForm] = useState({
    nome: "",
    ano_de: "",
    ano_ate: "",
    versao: "",
    montadora_id: montadoraId ? String(montadoraId) : "",
    foto_url: "",
    imagem: "",
  })
  const [open, setOpen] = useState(false)
  const [montadoras, setMontadoras] = useState([])
  const { secureFetch, loading } = useSecureFetch()
  const { triggerRefresh } = useRefresh()

  useEffect(() => {
    async function fetchMontadoras() {
      try {
        const res = await fetch("/api/montadoras")
        const data = await res.json()
        setMontadoras(data)
      } catch (err) {
        console.error("Erro ao buscar montadoras:", err)
      }
    }
    fetchMontadoras()
  }, [])

  // Atualiza montadora quando o prop mudar (página por montadora)
  useEffect(() => {
    if (montadoraId) {
      setForm((prev) => ({ ...prev, montadora_id: String(montadoraId) }))
    }
  }, [montadoraId])

  async function handleAddCarro(e) {
    e.preventDefault()
    // Se estiver no catálogo geral (Allcarros), exigir seleção de montadora
    if (Allcarros === true && !form.montadora_id) {
      alert("Selecione a montadora do carro.")
      return
    }
    const res = await secureFetch(
      "/api/carros/",
      {
        method: "POST",
        body: JSON.stringify({
          ...form,
          ano_de: Number(form.ano_de),
          ano_ate: Number(form.ano_ate),
          montadora_id: form.montadora_id ? Number(form.montadora_id) : undefined,
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
        montadora_id: montadoraId ? String(montadoraId) : "",
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

          {Allcarros === true && (
            <Select
              value={form.montadora_id}
              onValueChange={(value) => setForm({ ...form, montadora_id: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a montadora" />
              </SelectTrigger>
              <SelectContent>
                {montadoras.map((m) => (
                  <SelectItem key={m.id} value={String(m.id)}>
                    {m.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <Input
            placeholder="URL da foto"
            id="picture"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0]
              if (!file) return

              const reader = new FileReader()
              reader.onloadend = () => {
                setForm({ ...form, foto_url: reader.result }) 
              }
              reader.readAsDataURL(file)
            }}
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
