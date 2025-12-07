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
import { Pencil, Upload, X } from "lucide-react"
import { useSecureFetch } from "@/hooks/useSecureFetch"
import { useRefresh } from "@/context/RefreshContext"
import { Label } from "../ui/label"

export default function EditMontadora({ id, onUpdated }) {
  const [form, setForm] = useState({
    nome: "",
    logo_url: "",
  })
  const [preview, setPreview] = useState(null)
  const [open, setOpen] = useState(false)
  const [loadingData, setLoadingData] = useState(false)
  const { secureFetch, loading } = useSecureFetch()
  const { triggerRefresh } = useRefresh()

  useEffect(() => {
    if (open) {
      fetchMontadora()
    }
  }, [open])

  async function fetchMontadora() {
    setLoadingData(true)
    try {
      const res = await fetch(`/api/montadoras/${id}`)
      if (res.ok) {
        const data = await res.json()
        setForm({
          nome: data.nome || "",
          logo_url: data.logo_url || "",
        })
        setPreview(data.logo_url || null)
      }
    } catch (err) {
      console.error("Erro ao buscar montadora:", err)
    } finally {
      setLoadingData(false)
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0]
    if (!file) return
    
    const reader = new FileReader()
    reader.onloadend = () => {
      setForm({ ...form, logo_url: reader.result })
      setPreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  function clearImage() {
    setForm({ ...form, logo_url: "" })
    setPreview(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!form.nome.trim()) {
      alert("Informe o nome da montadora.")
      return
    }

    try {
      const res = await secureFetch(
        `/api/montadoras/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(form),
        },
        {
          successMsg: "Montadora atualizada com sucesso!",
          errorMsg: "Não foi possível atualizar a montadora.",
        }
      )

      if (!res.ok) throw new Error("Erro ao atualizar montadora")
      const montadoraAtualizada = await res.json()

      if (onUpdated) onUpdated(montadoraAtualizada)
      triggerRefresh()
      setOpen(false)
    } catch (err) {
      console.error("Erro ao atualizar montadora:", err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Pencil className="w-4 h-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Editar montadora</DialogTitle>
        </DialogHeader>

        {loadingData ? (
          <div className="py-8 text-center text-gray-500">Carregando...</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome da montadora</Label>
              <Input
                id="nome"
                placeholder="Ex: Toyota, Honda, Volkswagen..."
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Logo da montadora</Label>
              
              {preview ? (
                <div className="relative w-full h-40 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="max-h-32 max-w-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={clearImage}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-40 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Clique para selecionar uma imagem</span>
                  <span className="text-xs text-gray-400 mt-1">PNG, JPG ou SVG</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

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
        )}
      </DialogContent>
    </Dialog>
  )
}
