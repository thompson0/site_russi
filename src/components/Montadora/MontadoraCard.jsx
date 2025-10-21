"use client";

import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import Link from "next/link";

function MontadoraCard() {
  const [montadoras, setMontadoras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMontadoras() {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/montadoras`);

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
  }, []);

  if (loading)

    return (
      <div>
        <p className="text-center mt-10">Carregando montadoras...</p>;
        <Progress value={33} />
      </div>
    )


  if (montadoras.length === 0)
    return <p className="text-center mt-10">Nenhuma montadora encontrada.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {montadoras.map((m) => (
        <Link key={m.id} href={`/admin/montadoras/${m.id}`}>
          <div className="group w-full h-80 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={m.logo || "/placeholder.png"}
                alt={m.nome}
                className="w-full h-48 object-contain p-3 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 text-center border-t">
              <h2 className="text-xl font-semibold truncate">{m.nome}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MontadoraCard;
