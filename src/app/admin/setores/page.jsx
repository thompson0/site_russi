"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { PlusSquare, Edit2, Trash2, Building2, Users, Video } from "lucide-react";
import { useSecureFetch } from "@/hooks/useSecureFetch";

export default function SetoresPage() {
  const [setores, setSetores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingSetor, setEditingSetor] = useState(null);
  const [form, setForm] = useState({ nome: "", descricao: "" });
  const { secureFetch, loading: submitting } = useSecureFetch();

  async function fetchSetores() {
    try {
      const res = await fetch("/api/setores");
      if (res.ok) {
        const data = await res.json();
        setSetores(data);
      }
    } catch (error) {
      console.error("Erro ao buscar setores:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSetores();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    
    const url = editingSetor ? `/api/setores/${editingSetor.id}` : "/api/setores";
    const method = editingSetor ? "PUT" : "POST";

    const res = await secureFetch(url, {
      method,
      body: JSON.stringify(form),
    }, {
      refresh: false,
      successMsg: editingSetor ? "Setor atualizado!" : "Setor criado!",
      errorMsg: "Erro ao salvar setor",
    });

    if (res) {
      setForm({ nome: "", descricao: "" });
      setEditingSetor(null);
      setOpen(false);
      fetchSetores();
    }
  }

  async function handleDelete(id) {
    if (!confirm("Tem certeza que deseja excluir este setor?")) return;

    const res = await secureFetch(`/api/setores/${id}`, {
      method: "DELETE",
    }, {
      refresh: false,
      successMsg: "Setor excluído!",
      errorMsg: "Erro ao excluir setor",
    });

    if (res) {
      fetchSetores();
    }
  }

  function openEditDialog(setor) {
    setEditingSetor(setor);
    setForm({ nome: setor.nome, descricao: setor.descricao || "" });
    setOpen(true);
  }

  function openCreateDialog() {
    setEditingSetor(null);
    setForm({ nome: "", descricao: "" });
    setOpen(true);
  }

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            Gerenciar Setores
          </CardTitle>
          <Button onClick={openCreateDialog} size="icon">
            <PlusSquare />
          </Button>
        </CardHeader>

        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            </div>
          ) : setores.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Nenhum setor cadastrado
            </p>
          ) : (
            <div className="grid gap-4">
              {setores.map((setor) => (
                <div
                  key={setor.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{setor.nome}</h3>
                    {setor.descricao && (
                      <p className="text-sm text-muted-foreground">{setor.descricao}</p>
                    )}
                    <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {setor._count?.usuarios || 0} usuários
                      </span>
                      <span className="flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        {setor._count?.videos_internos || 0} vídeos
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => openEditDialog(setor)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(setor.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingSetor ? "Editar Setor" : "Novo Setor"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome do Setor</Label>
              <Input
                id="nome"
                placeholder="Ex: Vendas, Instalação, etc."
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição (opcional)</Label>
              <Input
                id="descricao"
                placeholder="Descrição do setor"
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit" disabled={submitting}>
                {submitting ? "Salvando..." : "Salvar"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
