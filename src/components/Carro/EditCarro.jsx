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
import { ProgressDemo } from "@/components/Home/ProgressDemo"
import { Pencil } from "lucide-react"
import { useAlert } from "@/context/AlertContext"
import { useRefresh } from "@/context/RefreshContext"
import { useSecureFetch } from "@/hooks/useSecureFetch"
import MultiImageUpload from "../ui/MultiImageUpload"

export default function EditCarro({ id, onUpdated }) {
  const [carro, setCarro] = useState(null)
  const [fotos, setFotos] = useState([])
  const [fotosModified, setFotosModified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const { triggerAlert } = useAlert()
  const { triggerRefresh, refreshKey } = useRefresh()
  const { secureFetch } = useSecureFetch()

  async function fetchCarro() {
    try {
      setLoading(true)
      const res = await secureFetch(`/api/carros?id=${id}&k=${refreshKey}`)
      if (!res.ok) throw new Error("Erro ao buscar carro")
      const data = await res.json()
      const { fotos: _dataFotos, ...carroData } = data
      setCarro(carroData)
      const fotosUrls = data.fotos?.map(f => f.foto_url) || (data.foto_url ? [data.foto_url] : [])
      setFotos(fotosUrls)
      setFotosModified(false)
    } catch (err) {
      console.error("Erro ao carregar carro:", err)
    } finally {
      setLoading(false)
    }
  }

  function handleFotosChange(newFotos) {
    setFotos(newFotos)
    setFotosModified(true)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)

    const { fotos: _omitFotos, ...carroData } = carro || {}
    const payload = { ...carroData, id }
    if (fotosModified) {
      payload.fotos = fotos.filter(url => url && url.trim() !== "")
    }

    try {
      const res = await secureFetch("/api/carros", {
        method: "PUT",
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Erro ao salvar alterações")

      triggerAlert("success", "Sucesso!", "Carro atualizado com sucesso!")
      triggerRefresh()

      try {
        const updated = await res.json()
        if (updated && onUpdated) onUpdated(updated)
      } catch { }
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

      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
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
                onChange={(e) =>
                  setCarro({ ...carro, nome: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Versão</Label>
              <Input
                value={carro.versao || ""}
                onChange={(e) =>
                  setCarro({ ...carro, versao: e.target.value })
                }
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

            <MultiImageUpload
              label="Fotos do carro"
              value={fotos}
              onChange={handleFotosChange}
            />

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
