"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useAlert } from "@/context/AlertContext";

export default function DeleteProduto({produtoId, onDelete }) {
  const [loading, setLoading] = useState(false);
  const { triggerAlert } = useAlert();

  async function handleDelete() {
    if (!confirm("Tem certeza que deseja excluir este produto?")) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/produtos/${produtoId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ produtoId }),
      });

      if (!res.ok) throw new Error("Erro ao deletar produto");

      onDelete?.(produtoId);
    } catch (err) {
      console.error(err);
      triggerAlert("error", "Erro!", "Erro ao deletar produto");
    } finally {
      setLoading(false);
    }
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
