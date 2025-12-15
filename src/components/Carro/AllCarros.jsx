"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { LoadingGrid } from "@/components/ui/LoadingSpinner";
import OptimizedImage from "@/components/ui/OptimizedImage";
import EditCarro from "./EditCarro";
import DeleteCarro from "./DeleteCarro";
import AddCarro from "./AddCarro";
import { useRefresh } from "@/context/RefreshContext";
import Link from "next/link";

export default function AllCarros() {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    async function fetchData() {
      try {
        const [carrosRes, userRes] = await Promise.all([
          fetch(`/api/catalogo/carros?k=${refreshKey}`),
          fetch("/api/me")
        ]);

        if (carrosRes.ok) {
          const data = await carrosRes.json();
          setCarros(data);
        }

        if (userRes.ok) {
          const userData = await userRes.json();
          setIsAdmin(userData.role === "admin");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [refreshKey]);


  if (loading)
    return (
      <div className="space-y-6">
        <p className="text-gray-400 text-center">Carregando carros...</p>
        <LoadingGrid count={6} />
      </div>
    );


  if (carros.length === 0)
    return (
      <div className="flex flex-col gap-6">
        <p className="text-gray-400 text-center mt-10">
          {isAdmin 
            ? 'Nenhum carro encontrado. Clique em "+" para adicionar.'
            : 'Nenhum carro encontrado.'}
        </p>

        {isAdmin && (
          <div className="flex justify-end px-4">
            <AddCarro
              Allcarros={true}
              onCreated={(novo) => {
                if (!novo) return;
                setCarros((prev) => [novo, ...prev]);
              }}
            />
          </div>
        )}
      </div>
    );


  return (
    <div className="flex flex-col gap-6">
      {isAdmin && (
        <div className="flex justify-end px-4">
          <AddCarro
            Allcarros={true}
            onCreated={(novo) => {
              if (!novo) return;
              setCarros((prev) => [novo, ...prev]);
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {carros.map((carro, index) => (
          <Card 
            key={carro.id} 
            className="group overflow-hidden hover-lift animate-fadeInUp opacity-0"
            style={{ animationDelay: `${Math.min(index * 50, 300)}ms`, animationFillMode: 'forwards' }}
          >

            <Link href={`/catalogo/produtos/${carro.id}`}>
              <CardHeader className="p-0 cursor-pointer overflow-hidden">
                <OptimizedImage
                  src={carro.foto_url}
                  alt={carro.nome}
                  className="p-3 group-hover:scale-105 transition-transform duration-300"
                  containerClassName="h-48 bg-gray-50"
                  aspectRatio=""
                />
              </CardHeader>
            </Link>

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

            {isAdmin && (
              <CardFooter className="flex justify-center gap-4">
                <EditCarro
                  id={carro.id}
                  onUpdated={(updated) => {
                    if (!updated) return;
                    setCarros((prev) =>
                      prev.map((c) =>
                        String(c.id) === String(updated.id) ? { ...c, ...updated } : c
                      )
                    );
                  }}
                />

                <DeleteCarro
                  id={carro.id}
                  onDelete={(deletedId) => {
                    setCarros((prev) =>
                      prev.filter((c) => String(c.id) !== String(deletedId))
                    );
                  }}
                />
              </CardFooter>
            )}

          </Card>
        ))}
      </div>
    </div>
  );
}
