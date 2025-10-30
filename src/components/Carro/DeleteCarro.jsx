"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
export default function DeleteCarro({ id, onDelete }) {
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!id) {
      alert("ID do carro não informado.")
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

      alert("Carro deletado com sucesso!")

      if (onDelete) onDelete(id)
    } catch (err) {
      console.error(err)
      alert("Não foi possível excluir o carro.")
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
        <Trash2></Trash2>
      {loading ? "Excluindo..." : ""}
    </Button>
  )
}
