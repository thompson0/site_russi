"use client";

import { useState, useEffect } from "react";
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
import MultiImageUpload from "@/components/ui/MultiImageUpload";

export default function EditProduto({ produto, onUpdated }) {
  const [form, setForm] = useState({});
  const [fotos, setFotos] = useState([]);
  const [fotosModified, setFotosModified] = useState(false);
  const [open, setOpen] = useState(false);
  const { triggerAlert } = useAlert();
  const { triggerRefresh } = useRefresh();
  const { secureFetch, loading } = useSecureFetch();

  useEffect(() => {
    if (produto) {
      const { fotos: _prodFotos, ...produtoData } = produto
      setForm(produtoData)
      const fotosUrls = produto.fotos?.map(f => f.foto_url) || (produto.foto_url ? [produto.foto_url] : [])
      setFotos(fotosUrls)
      setFotosModified(false)
    }
  }, [produto])

  function handleFotosChange(newFotos) {
    setFotos(newFotos)
    setFotosModified(true)
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const { fotos: _omitFotos, ...formData } = form || {}
    const payload = { ...formData }
    if (fotosModified) {
      payload.fotos = fotos.filter(url => url && url.trim() !== "")
    }

    try {
      const res = await secureFetch(
        `/api/produtos/${produto.id}`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
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
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar Produto</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleUpdate} className="space-y-3">
          <Input
            placeholder="Nome"
            value={form.nome || ""}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
          />
          <Input
            placeholder="Código"
            value={form.codigo || ""}
            onChange={(e) => setForm({ ...form, codigo: e.target.value })}
          />

          <MultiImageUpload
            label="Fotos do produto"
            value={fotos}
            onChange={handleFotosChange}
          />

          <Input
            placeholder="URL do vídeo"
            value={form.video_url || ""}
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
