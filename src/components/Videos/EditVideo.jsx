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
          successMsg: "V\u00eddeo atualizado com sucesso!",
          errorMsg: "Erro ao atualizar v\u00eddeo.",
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
      triggerAlert("error", "Erro!", "Erro ao atualizar v\u00eddeo.");
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
          <DialogTitle>Editar V\u00eddeo</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleUpdate} className="space-y-3">
          <Input
            placeholder="T\u00edtulo"
            value={form.titulo || ""}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          />
          <Input
            placeholder="Descri\u00e7\u00e3o"
            value={form.descricao || ""}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          />
          <Input
            placeholder="URL do v\u00eddeo"
            value={form.url || ""}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
          />
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Salvar altera\u00e7\u00f5es"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
