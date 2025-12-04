"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import { Trash2 } from "lucide-react"
import { useSecureFetch } from "@/hooks/useSecureFetch"
import { useRefresh } from "@/context/RefreshContext"

export default function DeleteMontadora({ id, nome, onDeleted }) {
  const [open, setOpen] = useState(false)
  const { secureFetch, loading } = useSecureFetch()
  const { triggerRefresh } = useRefresh()

  async function handleDelete() {
    try {
      const res = await secureFetch(
        `/api/montadoras/${id}`,
        {
          method: "DELETE",
        },
        {
          successMsg: "Montadora excluída com sucesso!",
          errorMsg: "Não foi possível excluir a montadora.",
        }
      )

      if (!res.ok) throw new Error("Erro ao excluir montadora")

      if (onDeleted) onDeleted(id)
      triggerRefresh()
      setOpen(false)
    } catch (err) {
      console.error("Erro ao excluir montadora:", err)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Excluir montadora</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja excluir a montadora <strong>{nome}</strong>?
            <br /><br />
            <span className="text-red-500">
              Atenção: Todos os carros e produtos associados a esta montadora também serão excluídos.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-red-500 hover:bg-red-600"
          >
            {loading ? "Excluindo..." : "Excluir"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
