"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProgressDemo } from "@/components/Home/ProgressDemo";

export default function CatalogoMontadorasPage() {
  const [montadoras, setMontadoras] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div>
        <p className="text-center mt-10">Carregando montadoras...</p>
        <ProgressDemo />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Catálogo Digital</h1>
        <p className="text-center text-muted-foreground mb-8">
          Selecione uma montadora para ver os veículos disponíveis
        </p>

        {montadoras.length === 0 ? (
          <p className="text-center text-muted-foreground mt-10">
            Nenhuma montadora encontrada.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {montadoras.map((m) => (
              <Link
                key={m.id}
                href={`/catalogo/montadoras/${m.id}`}
                className="w-full h-80 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden bg-white group"
              >
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <img
                    src={m.logo_url || "/placeholder.png"}
                    alt={m.nome}
                    className="w-56 h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 border-t">
                  <h2 className="text-lg font-semibold text-center text-gray-800">
                    {m.nome}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
