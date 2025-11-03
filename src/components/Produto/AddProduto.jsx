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
import { PlusCircle } from "lucide-react";
import { useAlert } from "@/context/AlertContext";
import { useRefresh } from "@/context/RefreshContext";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function AddProduto({ carroId, Allprodutos }) {
  const [form, setForm] = useState({
    nome: "",
    codigo: "",
    foto_url: "",
    video_url: "",
    carro_id: carroId || "",
  });
  const [carros, setCarros] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { triggerAlert } = useAlert();
  const { triggerRefresh, refreshKey } = useRefresh();

  useEffect(() => {
    if (!Allprodutos) return;

    async function fetchCarros() {
      try {
        const res = await fetch(`${baseUrl}/api/catalogo/carros?k=${refreshKey}`);
        if (!res.ok) throw new Error("Erro ao buscar carros");
        const data = await res.json();
        setCarros(data);
      } catch (err) {
        console.error("Erro ao carregar carros:", err);
      }
    }

    fetchCarros();
  }, [Allprodutos, refreshKey]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const idParaUsar = Allprodutos ? form.carro_id : carroId;
      if (!idParaUsar) throw new Error("Selecione um carro");

      const res = await fetch(`/api/produtos/carros/${idParaUsar}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro ao criar produto");

      triggerAlert("success", "Sucesso!", "Produto adicionado com sucesso!");
      triggerRefresh();
      setForm({
        nome: "",
        codigo: "",
        foto_url: "",
        video_url: "",
        carro_id: carroId || "",
      });
      setOpen(false);
    } catch (err) {
      console.error(err);
      triggerAlert("error", "Erro!", err.message || "Erro ao criar produto");
    } finally {
      setLoading(false);
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
          <DialogTitle>Novo Produto</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3">
          {Allprodutos && (
            <Select
              value={form.carro_id}
              onValueChange={(value) => setForm({ ...form, carro_id: value })}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o carro" />
              </SelectTrigger>

              <SelectContent>
                {carros.map((carro) => (
                  <SelectItem key={carro.id} value={String(carro.id)}>
                    {carro.nome} ({carro.versao || "Sem versão"})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <Input
            placeholder="Nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            required
          />
          <Input
            placeholder="Código"
            value={form.codigo}
            onChange={(e) => setForm({ ...form, codigo: e.target.value })}
            required
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
              {loading ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
