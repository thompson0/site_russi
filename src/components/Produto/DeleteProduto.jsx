"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useAlert } from "@/context/AlertContext";
import { useRefresh } from "@/context/RefreshContext";
import { useSecureFetch } from "@/hooks/useSecureFetch";

export default function DeleteProduto({ produtoId, onDelete }) {
  const { triggerAlert } = useAlert();
  const { triggerRefresh } = useRefresh();
  const { secureFetch, loading } = useSecureFetch();
  const [deleted, setDeleted] = useState(false);

  async function handleDelete() {
    if (loading || deleted) return;
    if (!confirm("Tem certeza que deseja excluir este produto?")) return;
    
    setDeleted(true);
    onDelete?.(produtoId);
    
    const res = await secureFetch(
      `/api/produtos/${produtoId}`,
      {
        method: "DELETE",
      },
      {
        successMsg: "Produto deletado com sucesso!",
        errorMsg: "Erro ao deletar produto.",
      }
    );

    if (!res) {
      setDeleted(false);
      return;
    }

    triggerRefresh();
  }

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={handleDelete}
      disabled={loading || deleted}
    >
      <Trash2 size={18} />
    </Button>
  );
}
