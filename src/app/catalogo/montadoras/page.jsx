"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Car, Search, ChevronRight } from "lucide-react";

export default function CatalogoMontadorasPage() {
  const [montadoras, setMontadoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchMontadoras() {
      try {
        const res = await fetch("/api/montadoras");
        if (res.ok) {
          const data = await res.json();
          setMontadoras(data);
        }
      } catch (error) {
        console.error("Erro ao buscar montadoras:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMontadoras();
  }, []);

  const filteredMontadoras = montadoras.filter((m) =>
    m.nome.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Carregando catálogo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link 
          href="/interno"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar ao Portal
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mb-4 shadow-lg shadow-green-500/30">
            <Car className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Catálogo Digital
          </h1>
          <p className="text-slate-400 max-w-md mx-auto">
            Selecione uma montadora para visualizar os veículos e produtos disponíveis
          </p>
        </div>

        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar montadora..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
          />
        </div>

        {filteredMontadoras.length === 0 ? (
          <div className="text-center py-12">
            <Car className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-white font-medium mb-1">Nenhuma montadora encontrada</p>
            <p className="text-slate-400 text-sm">Tente outro termo de busca</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredMontadoras.map((m) => (
              <Link
                key={m.id}
                href={`/catalogo/montadoras/${m.id}`}
                className="group bg-white rounded-2xl p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="w-full aspect-square flex items-center justify-center mb-3 bg-gray-50 rounded-xl overflow-hidden">
                  <img
                    src={m.logo_url || "/placeholder.png"}
                    alt={m.nome}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 w-full">
                  <h2 className="text-gray-800 font-semibold text-sm flex-1 text-center truncate">
                    {m.nome}
                  </h2>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            {montadoras.length} montadoras disponíveis
          </p>
        </div>
      </div>
    </div>
  );
}
