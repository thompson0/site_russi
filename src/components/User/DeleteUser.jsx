"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { useAlert } from "@/context/AlertContext"
import { useRouter } from "next/navigation"
export default function DeleteUser({ id, onDeleted }) {
  const [loading, setLoading] = useState(false)
    const { triggerAlert } = useAlert() 
    const router =  useRouter()
  async function handleDelete() {
    setLoading(true)
    try {
      const res = await fetch("/api/user/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || "Erro ao deletar usuário")
      }
        await router.refresh()
      if (onDeleted) onDeleted(id) 
      triggerAlert("Usuário deletado com sucesso!", "Usuário deletado!", "As informações foram salvas.")
    } catch (err) {
      triggerAlert("error", "Erro ao carregar", "Não foi possível buscar os dados.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon" title="Deletar usuário">
          <Trash2 className="w-5 h-5" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. O usuário será removido
            permanentemente do sistema.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700"
          >
            {loading ? "Removendo..." : "Confirmar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}