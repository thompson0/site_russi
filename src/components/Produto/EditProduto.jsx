"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { useAlert } from "@/context/AlertContext";

export default function EditProduto({ produto, onUpdated }) {
  const [form, setForm] = useState(produto || {});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { triggerAlert } = useAlert();

  async function handleUpdate(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/produtos/${produto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro ao atualizar produto");

      const data = await res.json();
      if (typeof onUpdated === "function") onUpdated(data);
      setOpen(false);
    } catch (err) {
      console.error(err);
      triggerAlert("error", "Erro!", "Erro ao atualizar produto");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
       
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Pencil size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Produto</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleUpdate} className="space-y-3">
          <Input
            placeholder="Nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
          />
          <Input
            placeholder="Código"
            value={form.codigo}
            onChange={(e) => setForm({ ...form, codigo: e.target.value })}
          />
          <Input
            placeholder="URL da imagem"
            value={form.foto_url}
            onChange={(e) => setForm({ ...form, foto_url: e.target.value })}
          />
          <Input
            placeholder="URL do vídeo"
            value={form.video_url}
            onChange={(e) => setForm({ ...form, video_url: e.target.value })}
          />
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Salvar alterações"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
