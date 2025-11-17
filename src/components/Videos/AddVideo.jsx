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
import { PlusCircle } from "lucide-react";
import { useAlert } from "@/context/AlertContext";
import { useRefresh } from "@/context/RefreshContext";
import { useSecureFetch } from "@/hooks/useSecureFetch";

export default function AddVideo({ onCreated }) {
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    url: "",
  });
  const [open, setOpen] = useState(false);
  const { triggerAlert } = useAlert();
  const { triggerRefresh } = useRefresh();
  const { secureFetch, loading } = useSecureFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await secureFetch(
        "/api/videos",
        {
          method: "POST",
          body: JSON.stringify(form),
        },
        {
          successMsg: "Video adicionado com sucesso!",
          errorMsg: "Erro ao criar video.",
        }
      );

      if (!res) return;

      try {
        const data = await res.json();
        if (data && typeof onCreated === "function") onCreated(data);
      } catch {}

      triggerRefresh();
      setForm({
        titulo: "",
        descricao: "",
        url: "",
      });
      setOpen(false);
    } catch (err) {
      console.error(err);
      triggerAlert("error", "Erro!", "Erro ao criar video.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" className="flex items-center gap-2">
          <PlusCircle size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Video</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            placeholder="Titulo"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
            required
          />
          <Input
            placeholder="Descrição do video"
            value={form.descricao}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          />
          <Input
            placeholder="URL do video"
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            required
          />

          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
