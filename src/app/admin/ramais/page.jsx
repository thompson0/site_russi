"use client";

import { useState, useEffect } from "react";
import { 
  Phone, 
  Building2, 
  Mail, 
  Plus, 
  Pencil, 
  Trash2, 
  Save,
  User
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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

function ContatoForm({ contato, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    departamento: contato?.departamento || "",
    colaborador: contato?.colaborador || "",
    ramal: contato?.ramal || "",
    telefone: contato?.telefone || "",
    email: contato?.email || "",
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
        <label className="block text-sm font-medium text-slate-300 mb-1">Departamento *</label>
        <input
          type="text"
          value={formData.departamento}
          onChange={(e) => setFormData({ ...formData, departamento: e.target.value })}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Ex: Recursos Humanos, Comercial..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Colaborador/Responsável</label>
        <input
          type="text"
          value={formData.colaborador}
          onChange={(e) => setFormData({ ...formData, colaborador: e.target.value })}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Nome do responsável ou equipe..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Ramal</label>
          <input
            type="text"
            value={formData.ramal}
            onChange={(e) => setFormData({ ...formData, ramal: e.target.value })}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Ex: 201"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Telefone</label>
          <input
            type="text"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="(11) 1234-5678"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">E-mail</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="departamento@russi.com.br"
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
          className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {saving ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </form>
  );
}

function ContatoCard({ contato, onEdit, onDelete, isAdmin }) {
  return (
    <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-xl p-5 hover:border-orange-500/50 transition-all shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-800 dark:text-white text-lg">{contato.departamento}</h3>
            {contato.colaborador && (
              <div className="flex items-center gap-2 mt-1 text-slate-500 dark:text-slate-400">
                <User className="w-4 h-4" />
                <span className="text-sm">{contato.colaborador}</span>
              </div>
            )}
          </div>
        </div>
        
        {isAdmin && (
          <div className="flex gap-1">
            <button
              onClick={() => onEdit(contato)}
              className="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-colors"
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
                  <AlertDialogTitle className="text-white">Excluir Contato</AlertDialogTitle>
                  <AlertDialogDescription className="text-slate-400">
                    Tem certeza que deseja excluir "{contato.departamento}"? Esta ação não pode ser desfeita.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => onDelete(contato.id)}
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
      
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {contato.ramal && (
          <div className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Ramal</p>
              <p className="text-slate-800 dark:text-white font-medium">{contato.ramal}</p>
            </div>
          </div>
        )}
        
        {contato.telefone && (
          <div className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Telefone</p>
              <p className="text-slate-800 dark:text-white font-medium">{contato.telefone}</p>
            </div>
          </div>
        )}
        
        {contato.email && (
          <div className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-purple-500" />
            </div>
            <div>
              <p className="text-xs text-slate-500">E-mail</p>
              <p className="text-slate-800 dark:text-white font-medium truncate">{contato.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function RamaisAdminPage() {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingContato, setEditingContato] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [contatosRes, userRes] = await Promise.all([
          fetch("/api/contatos"),
          fetch("/api/me")
        ]);

        if (contatosRes.ok) {
          const data = await contatosRes.json();
          setContatos(Array.isArray(data) ? data : []);
        }

        if (userRes.ok) {
          const userData = await userRes.json();
          setIsAdmin(userData.role === "admin");
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSave = async (data) => {
    try {
      const url = editingContato ? `/api/contatos/${editingContato.id}` : "/api/contatos";
      const method = editingContato ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.error || "Erro ao salvar contato");
        return;
      }

      const saved = await res.json();
      
      if (editingContato) {
        setContatos(prev => prev.map(c => c.id === saved.id ? saved : c));
      } else {
        setContatos(prev => [...prev, saved]);
      }

      setDialogOpen(false);
      setEditingContato(null);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao salvar contato");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/contatos/${id}`, { method: "DELETE" });
      if (res.ok) {
        setContatos(prev => prev.filter(c => c.id !== id));
      } else {
        const error = await res.json();
        alert(error.error || "Erro ao excluir contato");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao excluir contato");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Ramais e Contatos
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Gerencie os ramais e contatos dos departamentos
        </p>
      </div>

      {isAdmin && (
        <div className="flex justify-end mb-6">
          <Dialog open={dialogOpen} onOpenChange={(open) => {
            setDialogOpen(open);
            if (!open) setEditingContato(null);
          }}>
            <DialogTrigger asChild>
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Novo Contato
              </button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-700 max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-white">
                  {editingContato ? "Editar Contato" : "Novo Contato"}
                </DialogTitle>
              </DialogHeader>
              <ContatoForm 
                contato={editingContato}
                onSave={handleSave}
                onCancel={() => {
                  setDialogOpen(false);
                  setEditingContato(null);
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
      )}

      {contatos.length === 0 ? (
        <div className="text-center py-16 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700">
          <Phone className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-700 dark:text-white mb-2">Nenhum contato cadastrado</h3>
          <p className="text-slate-500 dark:text-slate-400">
            {isAdmin ? "Clique em 'Novo Contato' para adicionar." : "Nenhum contato disponível no momento."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {contatos.map((contato) => (
            <ContatoCard
              key={contato.id}
              contato={contato}
              isAdmin={isAdmin}
              onEdit={(c) => {
                setEditingContato(c);
                setDialogOpen(true);
              }}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <div className="mt-8 p-6 bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-orange-800 dark:text-orange-400 mb-1">
              Dica: Mantendo os contatos atualizados
            </h3>
            <p className="text-sm text-orange-700 dark:text-orange-300/80">
              Lembre-se de atualizar os ramais e contatos sempre que houver mudanças nos departamentos. 
              Isso ajuda todos os colaboradores a encontrarem rapidamente quem precisam contatar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
