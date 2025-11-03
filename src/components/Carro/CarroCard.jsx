"use client";

import { useEffect, useState } from "react";
import { ProgressDemo } from "@/components/ProgressDemo";
import Link from "next/link";
import DeleteCarro from "./DeleteCarro";
import EditCarro from "./EditCarro";
import AddCarro from "./AddCarro";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { useRefresh } from "@/context/RefreshContext";
function CarroCard({ montadoraId }) {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    async function fetchCarros() {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/carros/${montadoraId}?k=${refreshKey}`);

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
  }, [montadoraId, refreshKey]);

  function handleCreated(newCar) {
    if (!newCar) return;
    if (String(newCar.montadora_id) !== String(montadoraId)) return;
    setCarros((prev) => [newCar, ...prev]);
  }

  function handleUpdated(updated) {
    if (!updated) return;
    setCarros((prev) =>
      prev.map((c) => (String(c.id) === String(updated.id) ? { ...c, ...updated } : c))
    );
  }

  function handleDeleted(id) {
    setCarros((prev) => prev.filter((c) => String(c.id) !== String(id)));
  }

  if (loading)
    return (
      <div>
        <p className="text-gray-400 text-center mt-10">Carregando carros...</p>
        <ProgressDemo />
      </div>
    );

  if (carros.length === 0)
    return (
      <p className="text-gray-400 text-center mt-10 flex flex-col">
        Nenhum carro encontrado.
        <AddCarro onCreated={handleCreated} />
      </p>
    );

  return (
    <Card className="flex flex-col p-6 ">
      <div className="flex justify-end ">
        <AddCarro onCreated={handleCreated} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {carros.map((carro) => (
          <Card
            key={carro.id}
            className="group overflow-hidden flex flex-col justify-between transition-all hover:shadow-lg"
          >
            <Link href={`/admin/produtos/${carro.id}`}>
              <CardHeader className="flex items-center justify-center h-48">
                <img
                  src={carro.foto_url || "/placeholder.png"}
                  alt={carro.nome}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                />
              </CardHeader>
            </Link>

            <CardContent className="text-center">
              <h2 className="text-xl font-semibold truncate">{carro.nome}</h2>
              <p className="text-sm mt-1 text-muted-foreground">
                Ano:{" "}
                <span className="font-medium">
                  {carro.ano_de} - {carro.ano_ate}
                </span>
              </p>
            </CardContent>

            <CardFooter className="flex justify-between">
              <DeleteCarro id={carro.id} onDelete={handleDeleted} />
              <EditCarro id={carro.id} onUpdated={handleUpdated} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </Card>
  );
}

export default CarroCard;
