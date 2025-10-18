"use client";

import { useEffect, useState } from "react";


function CarroCard({ montadoraId }) {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCarros() {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/carros/${montadoraId}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Erro ao buscar carros");

        const data = await res.json();
        setCarros(data);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }

    if (montadoraId) fetchCarros();
  }, [montadoraId]); 

  if (loading)
    return (
      <p className="text-gray-400 text-center mt-10">Carregando carros...</p>
    );

  if (carros.length === 0)
    return (
      <p className="text-gray-400 text-center mt-10">
        Nenhum carro encontrado.
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {carros.map((carro) => (
        <div
          key={carro.id}
          className="group w-full h-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
          <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <img
              src={carro.foto_url || "/placeholder.png"}
              alt={carro.nome}
              className="w-full h-48 object-contain p-3 group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-4 text-center border-t border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
              {carro.nome}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Ano:{" "}
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {carro.ano_de} - {carro.ano_ate}  
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarroCard;
