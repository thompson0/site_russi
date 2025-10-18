"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function MontadoraCard() {
  const [montadoras, setMontadoras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMontadoras() {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/montadoras`, {
          cache: "no-store",
        });

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
    return <p className="text-gray-400 text-center mt-10">Carregando montadoras...</p>;

  if (montadoras.length === 0)
    return <p className="text-gray-400 text-center mt-10">Nenhuma montadora encontrada.</p>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center sm:justify-items-start">
      {montadoras.map((m) => (
        <li key={m.id} className="list-none">
          <Link href={`/admin/montadoras/${m.id}`}>
            <div className="w-96 h-80 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={m.logo}
                  alt={m.nome}
                  className="w-[50%] h-[50%] sm:w-[70%] sm:h-[70%] object-contain p-2"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold dark:text-blue-950 mb-2">{m.nome}</h5>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MontadoraCard;
