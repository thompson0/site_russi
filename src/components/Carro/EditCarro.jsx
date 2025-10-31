"use client"

import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProgressDemo } from "@/components/ProgressDemo"
import { Pencil } from "lucide-react"
import { useAlert } from "@/context/AlertContext"

export default function EditCarro({ id, onUpdated }) {
  const [carro, setCarro] = useState(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const { triggerAlert } = useAlert()

  async function fetchCarro() {
    try {
      setLoading(true)
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      const res = await fetch(`${baseUrl}/api/carros`)
      if (!res.ok) throw new Error("Erro ao buscar carros")
      const data = await res.json()
      const found = Array.isArray(data) ? data.find((c) => String(c.id) === String(id)) : null
      setCarro(found || null)
    } catch (err) {
      console.error("Erro ao carregar carro:", err)
    } finally {
      setLoading(false)
    }
  }


  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch("/api/carros", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...carro, id }),
      })

      if (!res.ok) throw new Error("Erro ao salvar alterações")
      triggerAlert("success", "Sucesso!", "Carro atualizado com sucesso!")
      try {
        const updated = await res.json()
        if (updated && onUpdated) onUpdated(updated)
      } catch {}
    } catch (err) {
      console.error(err)
      triggerAlert("error", "Erro!", "Erro ao atualizar carro.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog onOpenChange={(open) => open && fetchCarro()}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Editar Carro</DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-gray-500 mb-3">Carregando carro...</p>
            <ProgressDemo />
          </div>
        ) : carro ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label>Nome</Label>
              <Input
                value={carro.nome || ""}
                onChange={(e) => setCarro({ ...carro, nome: e.target.value })}
              />
            </div>

            <div>
              <Label>Versão</Label>
              <Input
                value={carro.versao || ""}
                onChange={(e) => setCarro({ ...carro, versao: e.target.value })}
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <Label>Ano De</Label>
                <Input
                  type="number"
                  value={carro.ano_de || ""}
                  onChange={(e) =>
                    setCarro({ ...carro, ano_de: e.target.value })
                  }
                />
              </div>
              <div className="w-1/2">
                <Label>Ano Até</Label>
                <Input
                  type="number"
                  value={carro.ano_ate || ""}
                  onChange={(e) =>
                    setCarro({ ...carro, ano_ate: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <Label>URL da Imagem</Label>
              <Input
                value={carro.foto_url || ""}
                onChange={(e) =>
                  setCarro({ ...carro, foto_url: e.target.value })
                }
              />
            </div>

            <DialogFooter className="mt-6 flex justify-end gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit" disabled={saving}>
                {saving ? "Salvando..." : "Salvar"}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <p className="text-center text-gray-500 py-6">
            Carro não encontrado.
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}
