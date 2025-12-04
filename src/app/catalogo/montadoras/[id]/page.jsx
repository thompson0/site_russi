"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Car, Search, ChevronRight, Calendar, Tag } from "lucide-react";

export default function CatalogoCarrosPorMontadoraPage() {
  const params = useParams();
  const montadoraId = params.id;

  const [carros, setCarros] = useState([]);
  const [montadora, setMontadora] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [carrosRes, montadorasRes] = await Promise.all([
          fetch("/api/carros"),
          fetch("/api/montadoras")
        ]);

        if (carrosRes.ok) {
          const allCarros = await carrosRes.json();
          const filteredCarros = allCarros.filter(
            (c) => String(c.montadora_id) === String(montadoraId)
          );
          setCarros(filteredCarros);
        }

        if (montadorasRes.ok) {
          const allMontadoras = await montadorasRes.json();
          const found = allMontadoras.find(
            (m) => String(m.id) === String(montadoraId)
          );
          setMontadora(found);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [montadoraId]);

  const filteredCarros = carros.filter((c) =>
    c.nome.toLowerCase().includes(search.toLowerCase()) ||
    c.versao?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Carregando veículos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link
          href="/catalogo/montadoras"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar às Montadoras
        </Link>

        <div className="flex items-center gap-4 mb-8">
          {montadora?.logo_url && (
            <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
              <img
                src={montadora.logo_url}
                alt={montadora.nome}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {montadora?.nome || "Veículos"}
            </h1>
            <p className="text-slate-400 text-sm">
              {carros.length} veículo{carros.length !== 1 ? 's' : ''} disponíve{carros.length !== 1 ? 'is' : 'l'}
            </p>
          </div>
        </div>

        {carros.length > 3 && (
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar veículo ou versão..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
            />
          </div>
        )}

        {filteredCarros.length === 0 ? (
          <div className="text-center py-12 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
            <Car className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-white font-medium mb-1">Nenhum veículo encontrado</p>
            <p className="text-slate-400 text-sm">
              {search ? 'Tente outro termo de busca' : 'Nenhum veículo cadastrado para esta montadora'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCarros.map((carro) => (
              <Link
                key={carro.id}
                href={`/catalogo/produtos/${carro.id}`}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:scale-[1.01] hover:-translate-y-1"
              >
                <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={carro.foto_url || "/placeholder.png"}
                    alt={carro.nome}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {carro.nome}
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
                      <Calendar className="w-3 h-3" />
                      {carro.ano_de} - {carro.ano_ate}
                    </span>
                    {carro.versao && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium">
                        <Tag className="w-3 h-3" />
                        {carro.versao}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Ver produtos</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
