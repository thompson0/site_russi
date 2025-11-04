"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { ProgressDemo } from "@/components/ProgressDemo";
import EditCarro from "./EditCarro";
import DeleteCarro from "./DeleteCarro";
import AddCarro from "./AddCarro";
import { useRefresh } from "@/context/RefreshContext";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function AllCarros() {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    async function fetchCarros() {
      try {
        const res = await fetch(`${baseUrl}/api/catalogo/carros?k=${refreshKey}`);
        if (!res.ok) throw new Error("Erro ao buscar carros");
        const data = await res.json();
        setCarros(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCarros();
  }, [refreshKey]);

  if (loading)
    return (
      <div>
        <p className="text-gray-400 text-center mt-10">Carregando carros...</p>
        <ProgressDemo />
      </div>
    );

  if (carros.length === 0)
    return <p className="text-gray-400 text-center mt-10">Nenhum carro encontrado.</p>;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end px-4">
        <AddCarro Allcarros={true} onCreated={(novo) => {
          if (!novo) return;
          setCarros((prev) => [novo, ...prev]);
        }} />
      </div>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {carros.map((carro) => (
          <Card key={carro.id} className="group overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="flex items-center justify-center h-48 bg-gray-50">
              <img
                src={carro.foto_url || "/placeholder.png"}
                alt={carro.nome}
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
              />
            </CardHeader>

            <CardContent className="text-center">
              <CardTitle className="text-xl font-semibold truncate">{carro.nome}</CardTitle>
              <p className="text-sm mt-1 text-muted-foreground">
                Ano:{" "}
                <span className="font-medium">
                  {carro.ano_de} - {carro.ano_ate}
                </span>
              </p>
              {carro.versao && (
                <p className="text-sm text-muted-foreground">Versão: {carro.versao}</p>
              )}
            </CardContent>

            <CardFooter className="flex justify-center gap-4">
              <EditCarro
                id={carro.id}
                onUpdated={(updated) => {
                  if (!updated) return;
                  setCarros((prev) => prev.map((c) => (
                    String(c.id) === String(updated.id) ? { ...c, ...updated } : c
                  )));
                }}
              />
              <DeleteCarro
                id={carro.id}
                onDelete={(deletedId) => {
                  setCarros((prev) => prev.filter((c) => String(c.id) !== String(deletedId)));
                }}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
