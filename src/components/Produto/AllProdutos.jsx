"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { LoadingGrid } from "@/components/ui/LoadingSpinner";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { useRefresh } from "@/context/RefreshContext";
import EditProduto from "./EditProduto";
import DeleteProduto from "./DeleteProduto";
import AddProduto from "./AddProduto";



export default function AllProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const res = await fetch(`/api/catalogo/produtos?k=${refreshKey}`);
        if (!res.ok) throw new Error("Erro ao buscar produtos");
        const data = await res.json();
        setProdutos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos();
  }, [refreshKey]);

  if (loading)
    return (
      <div className="space-y-6">
        <p className="text-gray-400 text-center">Carregando produtos...</p>
        <LoadingGrid count={6} />
      </div>
    );

if (produtos.length === 0)
  return (
    <div className="flex flex-col gap-6">
      <p className="text-gray-400 text-center mt-10">Nenhum produto encontrado.</p>

      <div className="flex justify-end px-4">
        <AddProduto
          Allprodutos={true}
          onCreated={(novo) => {
            if (!novo) return;
            setProdutos((prev) => [novo, ...prev]);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end px-4">
        <AddProduto
          Allprodutos={true}
          onCreated={(novo) => {
            if (!novo) return;
            setProdutos((prev) => [novo, ...prev]);
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((p, index) => (
          <Card 
            key={p.id} 
            className="group overflow-hidden hover-lift animate-fadeInUp opacity-0"
            style={{ animationDelay: `${Math.min(index * 50, 300)}ms`, animationFillMode: 'forwards' }}
          >
            <CardHeader className="p-0 cursor-pointer overflow-hidden">
              <OptimizedImage
                src={p.foto_url}
                alt={p.nome}
                className="p-3 group-hover:scale-105 transition-transform duration-300"
                containerClassName="h-48"
                aspectRatio=""
              />
            </CardHeader>

            <CardContent className="text-center">
              <h2 className="text-lg font-semibold truncate">{p.nome}</h2>
              {p.codigo && (
                <p className="text-sm text-muted-foreground">Código: {p.codigo}</p>
              )}
            </CardContent>

            <CardFooter className="flex flex-col items-center text-sm text-muted-foreground gap-3">
              <Link href={`/admin/produto/${p.id}`} className="underline hover:no-underline">
                Ver detalhes
              </Link>
              <div className="flex gap-4 justify-center">
                <EditProduto produto={p} />
                <DeleteProduto produtoId={p.id} />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
