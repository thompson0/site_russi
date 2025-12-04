"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import DeleteProduto from "./DeleteProduto";
import AddProduto from "./AddProduto";
import { useRefresh } from "@/context/RefreshContext";
import { ProgressDemo } from "@/components/Home/ProgressDemo";

export default function ProdutoCard({ carroId }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    async function fetchData() {
      try {
        const [produtosRes, userRes] = await Promise.all([
          fetch(`/api/produtos/carros/${carroId}?k=${refreshKey}`),
          fetch("/api/me")
        ]);

        if (produtosRes.ok) {
          const data = await produtosRes.json();
          setProdutos(data);
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
  }, [carroId, refreshKey]);

  if (loading)
    return (
      <div>
        <p className="text-gray-400 text-center mt-10">Carregando produtos...</p>
        <ProgressDemo />
      </div>
    );

  if (produtos.length === 0)
    return(
    <div className="flex flex-col justify-center mb-4">
      <p className="text-gray-400 text-center">
        {isAdmin 
          ? 'Nenhum produto encontrado. Clique em "+" para adicionar.'
          : 'Nenhum produto encontrado.'}
      </p>
      {isAdmin && <AddProduto carroId={carroId} />}
    </div>
  )

   return (
    <Card className="p-4">
      {isAdmin && (
        <div className="flex justify-end mb-4">
          <AddProduto carroId={carroId} />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((p) => (
          <Card
            key={p.id}
            className="group flex flex-col justify-between hover:shadow-lg transition-all duration-300"
          >
            <Link href={`/admin/produto/${p.id}`}>
              <CardHeader className="flex items-center justify-center h-48 cursor-pointer">
                <img
                  src={p.foto_url || "/placeholder.png"}
                  alt={p.nome}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                />
              </CardHeader>
            </Link>

            <CardContent className="text-center">
              <h2 className="text-lg font-semibold truncate">{p.nome}</h2>
              <p className="text-sm text-muted-foreground">Código: {p.codigo}</p>
            </CardContent>

            {isAdmin && (
              <CardFooter className="flex justify-center">
                <DeleteProduto produtoId={p.id} />
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Card>
  );
}
