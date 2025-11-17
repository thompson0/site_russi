"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useAlert } from "@/context/AlertContext";
import { useRefresh } from "@/context/RefreshContext";
import { useSecureFetch } from "@/hooks/useSecureFetch";

export default function DeleteVideo({ id, onDelete }) {
  const { triggerAlert } = useAlert();
  const { triggerRefresh } = useRefresh();
  const { secureFetch, loading } = useSecureFetch();

  async function handleDelete() {
    if (!id) {
      triggerAlert("error", "Erro!", "ID do video não informado.");
      return;
    }

    const confirmar = confirm("Tem certeza que deseja excluir este video?");
    if (!confirmar) return;

    const res = await secureFetch(
      `/api/videos/${id}`,
      {
        method: "DELETE",
      },
      {
        successMsg: "Video deletado com sucesso!",
        errorMsg: "Erro ao deletar video.",
      }
    );

    if (!res) return;

    if (typeof onDelete === "function") onDelete(id);
    triggerRefresh();
  }

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={handleDelete}
      disabled={loading}
    >
      <Trash2 size={18} />
    </Button>
  );
}
