"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package, Search, QrCode, Play, Eye } from "lucide-react";

export default function CatalogoProdutosPorCarroPage() {
  const params = useParams();
  const carroId = params.carroId;
  
  const [produtos, setProdutos] = useState([]);
  const [carro, setCarro] = useState(null);
  const [montadora, setMontadora] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [produtosRes, carroRes, montadorasRes] = await Promise.all([
          fetch(`/api/produtos/carros/${carroId}`),
          fetch(`/api/carros?id=${carroId}`),
          fetch("/api/montadoras")
        ]);

        if (produtosRes.ok) {
          const data = await produtosRes.json();
          setProdutos(data);
        }

        if (carroRes.ok) {
          const data = await carroRes.json();
          setCarro(data);
          
          if (montadorasRes.ok && data.montadora_id) {
            const montadoras = await montadorasRes.json();
            const found = montadoras.find(m => String(m.id) === String(data.montadora_id));
            setMontadora(found);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [carroId]);

  const filteredProdutos = produtos.filter((p) =>
    p.nome.toLowerCase().includes(search.toLowerCase()) ||
    p.codigo?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Carregando produtos...</p>
        </div>
      </div>
    );
  }

  const backLink = carro?.montadora_id 
    ? `/catalogo/montadoras/${carro.montadora_id}`
    : "/catalogo/montadoras";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar aos Veículos
        </Link>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {carro?.foto_url && (
              <div className="w-24 h-24 bg-white rounded-xl p-2 flex-shrink-0">
                <img
                  src={carro.foto_url}
                  alt={carro.nome}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                {montadora?.nome && (
                  <>
                    <span>{montadora.nome}</span>
                    <span>•</span>
                  </>
                )}
                <span>{carro?.ano_de} - {carro?.ano_ate}</span>
                {carro?.versao && (
                  <>
                    <span>•</span>
                    <span>{carro.versao}</span>
                  </>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {carro?.nome || "Produtos"}
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                {produtos.length} produto{produtos.length !== 1 ? 's' : ''} disponíve{produtos.length !== 1 ? 'is' : 'l'}
              </p>
            </div>
          </div>
        </div>

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
            {filteredProdutos.map((p) => (
              <Link
                key={p.id}
                href={`/catalogo/produto/${p.id}`}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:scale-[1.01] hover:-translate-y-1"
              >
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-6 relative">
                  <img
                    src={p.foto_url || "/placeholder.png"}
                    alt={p.nome}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
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

        <div className="mt-8 flex justify-center">
          <Link
            href="/catalogo/montadoras"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/60 border border-slate-700/50 text-slate-300 rounded-xl hover:bg-slate-700/60 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início do catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
