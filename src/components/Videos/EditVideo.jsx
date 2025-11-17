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
import { useRefresh } from "@/context/RefreshContext";
import { useSecureFetch } from "@/hooks/useSecureFetch";

export default function EditVideo({ video, onUpdated }) {
  const [form, setForm] = useState(video || {});
  const [open, setOpen] = useState(false);
  const { triggerAlert } = useAlert();
  const { triggerRefresh } = useRefresh();
  const { secureFetch, loading } = useSecureFetch();

  async function handleUpdate(e) {
    e.preventDefault();

    try {
      const res = await secureFetch(
        `/api/videos/${video.id}`,
        {
          method: "PUT",
          body: JSON.stringify(form),
        },
        {
          successMsg: "Video atualizado com sucesso!",
          errorMsg: "Erro ao atualizar video.",
        }
      );

      if (!res) return;

      try {
        const data = await res.json();
        if (data && typeof onUpdated === "function") onUpdated(data);
      } catch {}

      triggerRefresh();
      setOpen(false);
    } catch (err) {
      console.error(err);
      triggerAlert("error", "Erro!", "Erro ao atualizar video.");
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
          <DialogTitle>Editar Video</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleUpdate} className="space-y-3">
          <Input
            placeholder="Titulo"
            value={form.titulo || ""}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          />
          <Input
            placeholder="Descrição do video"
            value={form.descricao || ""}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          />
          <Input
            placeholder="URL do video"
            value={form.url || ""}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
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
