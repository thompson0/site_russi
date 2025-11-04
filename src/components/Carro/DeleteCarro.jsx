"use client"

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useAlert } from "@/context/AlertContext"
import { useRefresh } from "@/context/RefreshContext"
import { useSecureFetch } from "@/hooks/useSecureFetch"

export default function DeleteCarro({ id, onDelete }) {
  const { triggerAlert } = useAlert()
  const { triggerRefresh } = useRefresh()
  const { secureFetch, loading } = useSecureFetch()

  async function handleDelete() {
    if (!id) {
      triggerAlert("error", "Erro!", "ID do carro não informado.")
      return
    }

    const confirmar = confirm("Tem certeza que deseja excluir este carro?")
    if (!confirmar) return

    const res = await secureFetch(
      `/api/carros?id=${id}`,
      { method: "DELETE" },
      {
        successMsg: "Carro deletado com sucesso!",
        errorMsg: "Não foi possível excluir o carro.",
      }
    )

    if (!res) return

    triggerRefresh()
    if (onDelete) onDelete(id)
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
