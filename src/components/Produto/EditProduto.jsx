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
import { Label } from "../ui/label";

export default function EditProduto({ produto, onUpdated }) {
  const [form, setForm] = useState(produto || {});
  const [open, setOpen] = useState(false);
  const { triggerAlert } = useAlert();
  const { triggerRefresh } = useRefresh();
  const { secureFetch, loading } = useSecureFetch();

  async function handleUpdate(e) {
    e.preventDefault();

    try {
      const res = await secureFetch(
        `/api/produtos/${produto.id}`,
        {
          method: "PUT",
          body: JSON.stringify(form),
        },
        {
          successMsg: "Produto atualizado com sucesso!",
          errorMsg: "Erro ao atualizar produto.",
        }
      );

      if (!res) return;

      const data = await res.json();
      if (typeof onUpdated === "function") onUpdated(data);
      triggerRefresh();
      setOpen(false);
    } catch (err) {
      console.error(err);
      triggerAlert("error", "Erro!", "Erro ao atualizar produto.");
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
          <Label>Foto do produto</Label>
          <Input
            placeholder="URL da foto"
            id="picture"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0]
              if (!file) return

              const reader = new FileReader()
              reader.onloadend = () => {
                setForm({ ...form, foto_url: reader.result })
              }
              reader.readAsDataURL(file)
            }}
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
