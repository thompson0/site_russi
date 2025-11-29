"use client";

import { useEffect, useState } from "react";
import { ProgressDemo } from "@/components/Home/ProgressDemo";
import Link from "next/link";
import { useRefresh } from "@/context/RefreshContext";

function MontadoraCard() {
  const [montadoras, setMontadoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    async function fetchMontadoras() {
      try {
        const res = await fetch(`/api/montadoras?k=${refreshKey}`);

        if (!res.ok) throw new Error("Erro ao buscar montadoras");

        const data = await res.json();
        setMontadoras(data);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMontadoras();
  }, [refreshKey]);

  if (loading)

    return (
      <div>
        <p className="text-center mt-10">Carregando montadoras...</p>;
        <ProgressDemo />
      </div>
    )


  if (montadoras.length === 0)
    return <p className="text-center mt-10">Nenhuma montadora encontrada.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {montadoras.map((m) => (
        <Link key={m.id} href={`/admin/montadoras/${m.id}`}>
          <div className="w-full h-80 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden ">
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <img
                src={m.logo_url || "/placeholder.png"}
                alt={m.nome}
                className="w-56 h-40 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4 text-center border-t">
              <h2 className="text-lg font-semibold truncate">{m.nome}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MontadoraCard;
