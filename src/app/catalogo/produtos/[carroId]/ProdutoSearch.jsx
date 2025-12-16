"use client";

import { useState } from "react";
import Link from "next/link";
import { Package, Search, QrCode, Play, Eye } from "lucide-react";

export default function ProdutoSearch({ produtos }) {
  const [search, setSearch] = useState("");

  const filteredProdutos = produtos.filter((p) =>
    p.nome.toLowerCase().includes(search.toLowerCase()) ||
    p.codigo?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {produtos.length > 3 && (
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar produto ou código..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
          />
        </div>
      )}

      {filteredProdutos.length === 0 ? (
        <div className="text-center py-12 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
          <Package className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <p className="text-white font-medium mb-1">Nenhum produto encontrado</p>
          <p className="text-slate-400 text-sm">
            {search ? 'Tente outro termo de busca' : 'Nenhum produto cadastrado para este veículo'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProdutos.map((p, index) => (
            <Link
              key={p.id}
              href={`/catalogo/produto/${p.id}`}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:scale-[1.01] hover:-translate-y-1 animate-fadeInUp opacity-0"
              style={{ animationDelay: `${Math.min(index * 50, 300)}ms`, animationFillMode: 'forwards' }}
            >
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-6 relative">
                <img
                  src={p.foto_url || "/placeholder.png"}
                  alt={p.nome}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {p.video_url && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors line-clamp-2">
                  {p.nome}
                </h2>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-mono">
                    {p.codigo}
                  </span>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>Ver detalhes</span>
                  </div>
                  <QrCode className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
