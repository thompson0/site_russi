"use client";

import { useState, useEffect } from "react";
import { 
  Video, 
  FileText, 
  Plus, 
  Pencil, 
  Trash2, 
  X, 
  Save,
  Play,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function VideoForm({ video, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    titulo: video?.titulo || "",
    descricao: video?.descricao || "",
    url: video?.url || "",
    categoria: video?.categoria || "",
    ordem: video?.ordem || 0,
    ativo: video?.ativo !== undefined ? video.ativo : true,
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Título *</label>
        <input
          type="text"
          value={formData.titulo}
          onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">URL do Vídeo (YouTube) *</label>
        <input
          type="url"
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="https://www.youtube.com/watch?v=..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Categoria</label>
        <input
          type="text"
          value={formData.categoria}
          onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Ex: Benefícios, Políticas, Procedimentos..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Descrição</label>
        <textarea
          value={formData.descricao}
          onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Ordem</label>
          <input
            type="number"
            value={formData.ordem}
            onChange={(e) => setFormData({ ...formData, ordem: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex items-center pt-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.ativo}
              onChange={(e) => setFormData({ ...formData, ativo: e.target.checked })}
              className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-purple-500 focus:ring-purple-500"
            />
            <span className="text-sm text-slate-300">Ativo</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {saving ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </form>
  );
}

function ManualForm({ manual, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    titulo: manual?.titulo || "",
    descricao: manual?.descricao || "",
    conteudo: manual?.conteudo || "",
    ordem: manual?.ordem || 0,
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Título *</label>
        <input
          type="text"
          value={formData.titulo}
          onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Descrição</label>
        <textarea
          value={formData.descricao}
          onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
          rows={2}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          placeholder="Breve descrição do manual..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Conteúdo</label>
        <textarea
          value={formData.conteudo}
          onChange={(e) => setFormData({ ...formData, conteudo: e.target.value })}
          rows={6}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          placeholder="Conteúdo completo do manual ou apostila..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Ordem</label>
        <input
          type="number"
          value={formData.ordem}
          onChange={(e) => setFormData({ ...formData, ordem: parseInt(e.target.value) || 0 })}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {saving ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </form>
  );
}

function VideoCard({ video, onEdit, onDelete, isAdmin }) {
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = getYouTubeId(video.url);

  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all">
      <div className="aspect-video bg-slate-900 relative">
        {youtubeId ? (
          <img 
            src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
            alt={video.titulo}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Video className="w-12 h-12 text-slate-600" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <a 
            href={video.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center"
          >
            <Play className="w-6 h-6 text-white ml-1" />
          </a>
        </div>
        {!video.ativo && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-red-500/80 rounded text-xs text-white">
            Inativo
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            {video.categoria && (
              <span className="inline-block px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-2">
                {video.categoria}
              </span>
            )}
            <h3 className="font-semibold text-white truncate">{video.titulo}</h3>
            {video.descricao && (
              <p className="text-slate-400 text-sm mt-1 line-clamp-2">{video.descricao}</p>
            )}
          </div>
          
          {isAdmin && (
            <div className="flex gap-1">
              <button
                onClick={() => onEdit(video)}
                className="p-2 text-slate-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
              >
                <Pencil className="w-4 h-4" />
              </button>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-slate-800 border-slate-700">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">Excluir Vídeo</AlertDialogTitle>
                    <AlertDialogDescription className="text-slate-400">
                      Tem certeza que deseja excluir "{video.titulo}"? Esta ação não pode ser desfeita.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                      Cancelar
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => onDelete(video.id)}
                      className="bg-red-600 text-white hover:bg-red-700"
                    >
                      Excluir
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ManualCard({ manual, onEdit, onDelete, isAdmin }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-5 hover:border-green-500/50 transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white">{manual.titulo}</h3>
            {manual.descricao && (
              <p className="text-slate-400 text-sm mt-1">{manual.descricao}</p>
            )}
          </div>
        </div>
        
        {isAdmin && (
          <div className="flex gap-1">
            <button
              onClick={() => onEdit(manual)}
              className="p-2 text-slate-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
            >
              <Pencil className="w-4 h-4" />
            </button>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-slate-800 border-slate-700">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white">Excluir Manual</AlertDialogTitle>
                  <AlertDialogDescription className="text-slate-400">
                    Tem certeza que deseja excluir "{manual.titulo}"? Esta ação não pode ser desfeita.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => onDelete(manual.id)}
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    Excluir
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
      </div>
      
      {manual.conteudo && (
        <div className="mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {expanded ? "Ocultar conteúdo" : "Ver conteúdo"}
          </button>
          
          {expanded && (
            <div className="mt-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
              <p className="text-slate-300 text-sm whitespace-pre-wrap">{manual.conteudo}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function RHAdminPage() {
  const [activeTab, setActiveTab] = useState("videos");
  const [videos, setVideos] = useState([]);
  const [manuais, setManuais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [manualDialogOpen, setManualDialogOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [editingManual, setEditingManual] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userRes = await fetch("/api/me");
        let userIsAdmin = false;
        
        if (userRes.ok) {
          const userData = await userRes.json();
          userIsAdmin = userData.role === "admin";
          setIsAdmin(userIsAdmin);
        }

        const [videosRes, manuaisRes] = await Promise.all([
          fetch(`/api/rh${userIsAdmin ? '?all=true' : ''}`),
          fetch("/api/manuais")
        ]);

        if (videosRes.ok) {
          const data = await videosRes.json();
          setVideos(Array.isArray(data) ? data : []);
        }
        
        if (manuaisRes.ok) {
          const data = await manuaisRes.json();
          setManuais(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSaveVideo = async (data) => {
    try {
      const url = editingVideo ? `/api/rh/${editingVideo.id}` : "/api/rh";
      const method = editingVideo ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.error || "Erro ao salvar vídeo");
        return;
      }

      const saved = await res.json();
      
      if (editingVideo) {
        setVideos(prev => prev.map(v => v.id === saved.id ? saved : v));
      } else {
        setVideos(prev => [...prev, saved]);
      }

      setVideoDialogOpen(false);
      setEditingVideo(null);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao salvar vídeo");
    }
  };

  const handleDeleteVideo = async (id) => {
    try {
      const res = await fetch(`/api/rh/${id}`, { method: "DELETE" });
      if (res.ok) {
        setVideos(prev => prev.filter(v => v.id !== id));
      } else {
        const error = await res.json();
        alert(error.error || "Erro ao excluir vídeo");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao excluir vídeo");
    }
  };

  const handleSaveManual = async (data) => {
    try {
      const url = editingManual ? `/api/manuais/${editingManual.id}` : "/api/manuais";
      const method = editingManual ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.error || "Erro ao salvar manual");
        return;
      }

      const saved = await res.json();
      
      if (editingManual) {
        setManuais(prev => prev.map(m => m.id === saved.id ? saved : m));
      } else {
        setManuais(prev => [...prev, saved]);
      }

      setManualDialogOpen(false);
      setEditingManual(null);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao salvar manual");
    }
  };

  const handleDeleteManual = async (id) => {
    try {
      const res = await fetch(`/api/manuais/${id}`, { method: "DELETE" });
      if (res.ok) {
        setManuais(prev => prev.filter(m => m.id !== id));
      } else {
        const error = await res.json();
        alert(error.error || "Erro ao excluir manual");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao excluir manual");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Recursos Humanos
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Gerencie vídeos de procedimentos e manuais do RH
        </p>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
            activeTab === "videos"
              ? "bg-purple-600 text-white"
              : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
          }`}
        >
          <Video className="w-4 h-4" />
          Vídeos ({videos.length})
        </button>
        <button
          onClick={() => setActiveTab("manuais")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
            activeTab === "manuais"
              ? "bg-green-600 text-white"
              : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
          }`}
        >
          <FileText className="w-4 h-4" />
          Manuais ({manuais.length})
        </button>
      </div>

      {activeTab === "videos" && (
        <div>
          {isAdmin && (
            <div className="flex justify-end mb-6">
              <Dialog open={videoDialogOpen} onOpenChange={(open) => {
                setVideoDialogOpen(open);
                if (!open) setEditingVideo(null);
              }}>
                <DialogTrigger asChild>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Novo Vídeo
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-white">
                      {editingVideo ? "Editar Vídeo" : "Novo Vídeo"}
                    </DialogTitle>
                  </DialogHeader>
                  <VideoForm 
                    video={editingVideo}
                    onSave={handleSaveVideo}
                    onCancel={() => {
                      setVideoDialogOpen(false);
                      setEditingVideo(null);
                    }}
                  />
                </DialogContent>
              </Dialog>
            </div>
          )}

          {videos.length === 0 ? (
            <div className="text-center py-16 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700">
              <Video className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-700 dark:text-white mb-2">Nenhum vídeo cadastrado</h3>
              <p className="text-slate-500 dark:text-slate-400">
                {isAdmin ? "Clique em 'Novo Vídeo' para adicionar." : "Nenhum vídeo disponível no momento."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  isAdmin={isAdmin}
                  onEdit={(v) => {
                    setEditingVideo(v);
                    setVideoDialogOpen(true);
                  }}
                  onDelete={handleDeleteVideo}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "manuais" && (
        <div>
          {isAdmin && (
            <div className="flex justify-end mb-6">
              <Dialog open={manualDialogOpen} onOpenChange={(open) => {
                setManualDialogOpen(open);
                if (!open) setEditingManual(null);
              }}>
                <DialogTrigger asChild>
                  <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Novo Manual
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-white">
                      {editingManual ? "Editar Manual" : "Novo Manual"}
                    </DialogTitle>
                  </DialogHeader>
                  <ManualForm 
                    manual={editingManual}
                    onSave={handleSaveManual}
                    onCancel={() => {
                      setManualDialogOpen(false);
                      setEditingManual(null);
                    }}
                  />
                </DialogContent>
              </Dialog>
            </div>
          )}

          {manuais.length === 0 ? (
            <div className="text-center py-16 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700">
              <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-700 dark:text-white mb-2">Nenhum manual cadastrado</h3>
              <p className="text-slate-500 dark:text-slate-400">
                {isAdmin ? "Clique em 'Novo Manual' para adicionar." : "Nenhum manual disponível no momento."}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {manuais.map((manual) => (
                <ManualCard
                  key={manual.id}
                  manual={manual}
                  isAdmin={isAdmin}
                  onEdit={(m) => {
                    setEditingManual(m);
                    setManualDialogOpen(true);
                  }}
                  onDelete={handleDeleteManual}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
