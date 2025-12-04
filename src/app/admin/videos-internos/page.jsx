"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { PlusSquare, Edit2, Trash2, Video, GraduationCap, Eye, EyeOff } from "lucide-react";
import { useSecureFetch } from "@/hooks/useSecureFetch";

const CARGOS = [
  { value: "supervisor", label: "Supervisor" },
  { value: "vendedor_interno", label: "Vendedor Interno" },
  { value: "instalador", label: "Instalador" },
];

export default function VideosInternosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [filterCargo, setFilterCargo] = useState("all");
  const [form, setForm] = useState({ 
    titulo: "", 
    descricao: "", 
    url: "", 
    thumbnail: "",
    cargo: "",
    ordem: 0,
    ativo: true,
  });
  const { secureFetch, loading: submitting } = useSecureFetch();

  async function fetchData() {
    try {
      const videosRes = await fetch("/api/videos-internos?all=true");
      if (videosRes.ok) setVideos(await videosRes.json());
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filteredVideos = filterCargo === "all" 
    ? videos 
    : videos.filter(v => v.cargo === filterCargo);

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!form.cargo) {
      alert("Por favor, selecione um cargo para o vídeo.");
      return;
    }
    
    const url = editingVideo ? `/api/videos-internos/${editingVideo.id}` : "/api/videos-internos";
    const method = editingVideo ? "PUT" : "POST";

    const res = await secureFetch(url, {
      method,
      body: JSON.stringify({
        titulo: form.titulo,
        descricao: form.descricao,
        url: form.url,
        thumbnail: form.thumbnail,
        cargo: form.cargo,
        ordem: form.ordem,
        ativo: form.ativo,
      }),
    }, {
      refresh: false,
      successMsg: editingVideo ? "Vídeo atualizado!" : "Vídeo criado!",
      errorMsg: "Erro ao salvar vídeo",
    });

    if (res) {
      resetForm();
      setOpen(false);
      fetchData();
    }
  }

  async function handleDelete(id) {
    if (!confirm("Tem certeza que deseja excluir este vídeo?")) return;

    const res = await secureFetch(`/api/videos-internos/${id}`, {
      method: "DELETE",
    }, {
      refresh: false,
      successMsg: "Vídeo excluído!",
      errorMsg: "Erro ao excluir vídeo",
    });

    if (res) {
      fetchData();
    }
  }

  async function toggleAtivo(video) {
    const res = await secureFetch(`/api/videos-internos/${video.id}`, {
      method: "PUT",
      body: JSON.stringify({ ativo: !video.ativo }),
    }, {
      refresh: false,
      successMsg: video.ativo ? "Vídeo desativado!" : "Vídeo ativado!",
      errorMsg: "Erro ao atualizar vídeo",
    });

    if (res) {
      fetchData();
    }
  }

  function resetForm() {
    setEditingVideo(null);
    setForm({ 
      titulo: "", 
      descricao: "", 
      url: "", 
      thumbnail: "",
      cargo: "",
      ordem: 0,
      ativo: true,
    });
  }

  function openEditDialog(video) {
    setEditingVideo(video);
    setForm({ 
      titulo: video.titulo, 
      descricao: video.descricao || "", 
      url: video.url,
      thumbnail: video.thumbnail || "",
      cargo: video.cargo || "",
      ordem: video.ordem || 0,
      ativo: video.ativo,
    });
    setOpen(true);
  }

  function openCreateDialog() {
    resetForm();
    setOpen(true);
  }

  function getCargoLabel(cargo) {
    const found = CARGOS.find(c => c.value === cargo);
    return found ? found.label : cargo;
  }

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Vídeos de Treinamento Interno
            </CardTitle>
            <Button onClick={openCreateDialog} size="icon">
              <PlusSquare />
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <Label className="text-sm font-medium">Filtrar por cargo:</Label>
            <Select value={filterCargo} onValueChange={setFilterCargo}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os cargos</SelectItem>
                {CARGOS.map((cargo) => (
                  <SelectItem key={cargo.value} value={cargo.value}>
                    {cargo.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-sm text-muted-foreground">
              {filteredVideos.length} vídeo(s)
            </span>
          </div>
        </CardHeader>

        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            </div>
          ) : filteredVideos.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              {filterCargo === "all" ? "Nenhum vídeo cadastrado" : "Nenhum vídeo para este cargo"}
            </p>
          ) : (
            <div className="grid gap-4">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className={`flex items-center justify-between p-4 border rounded-lg ${!video.ativo ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-14 bg-slate-200 dark:bg-slate-700 rounded overflow-hidden flex-shrink-0">
                      {video.thumbnail ? (
                        <img 
                          src={video.thumbnail} 
                          alt={video.titulo}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Video className="w-6 h-6 text-slate-400" />
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">{video.titulo}</h3>
                      {video.descricao && (
                        <p className="text-sm text-muted-foreground line-clamp-1">{video.descricao}</p>
                      )}
                      <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
                        {video.cargo && (
                          <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                            {getCargoLabel(video.cargo)}
                          </span>
                        )}
                        {video.criador && (
                          <span>Por: {video.criador.nome}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => toggleAtivo(video)}
                      title={video.ativo ? "Desativar" : "Ativar"}
                    >
                      {video.ativo ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => openEditDialog(video)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(video.id)}
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
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {editingVideo ? "Editar Vídeo" : "Novo Vídeo de Treinamento"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="titulo">Título</Label>
              <Input
                id="titulo"
                placeholder="Título do vídeo"
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">URL do Vídeo</Label>
              <Input
                id="url"
                placeholder="https://youtube.com/watch?v=..."
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição (opcional)</Label>
              <Textarea
                id="descricao"
                placeholder="Descrição do vídeo"
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cargo">Cargo *</Label>
              <Select
                value={form.cargo || ""}
                onValueChange={(value) => setForm({ ...form, cargo: value })}
                required
              >
                <SelectTrigger className={!form.cargo ? "border-red-500/50" : ""}>
                  <SelectValue placeholder="Selecione o cargo (obrigatório)" />
                </SelectTrigger>
                <SelectContent>
                  {CARGOS.map((cargo) => (
                    <SelectItem key={cargo.value} value={cargo.value}>
                      {cargo.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {!form.cargo && (
                <p className="text-xs text-red-500">Selecione um cargo para o vídeo</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ordem">Ordem</Label>
                <Input
                  id="ordem"
                  type="number"
                  value={form.ordem}
                  onChange={(e) => setForm({ ...form, ordem: parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="thumbnail">Thumbnail URL (opcional)</Label>
                <Input
                  id="thumbnail"
                  placeholder="URL da thumbnail"
                  value={form.thumbnail}
                  onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
                />
              </div>
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
