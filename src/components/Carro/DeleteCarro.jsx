"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useAlert } from "@/context/AlertContext"

export default function DeleteCarro({ id, onDelete }) {
  const [loading, setLoading] = useState(false)
  const { triggerAlert } = useAlert()

  async function handleDelete() {
    if (!id) {
      triggerAlert("error", "Erro!", "ID do carro não informado.")
      return
    }

    const confirmar = confirm("Tem certeza que deseja excluir este carro?")
    if (!confirmar) return

    try {
      setLoading(true)
      const res = await fetch(`/api/carros?id=${id}`, {
        method: "DELETE",
      })

      if (!res.ok) throw new Error("Erro ao deletar carro")

      triggerAlert("success", "Sucesso!", "Carro deletado com sucesso!")

      if (onDelete) onDelete(id)
    } catch (err) {
      console.error(err)
      triggerAlert("error", "Erro!", "Não foi possível excluir o carro.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      variant="destructive"
      onClick={handleDelete}
      disabled={loading}
      size="icon"
    >
      <Trash2 />
      {loading ? "Excluindo..." : ""}
    </Button>
  )
}

