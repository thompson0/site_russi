"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import DeleteProduto from "./DeleteProduto";
import AddProduto from "./AddProduto";

export default function ProdutoCard({ carroId }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/produtos/carros/${carroId}`);
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
  }, [carroId]);

  if (loading)
    return <p className="text-gray-400 text-center mt-10">Carregando produtos...</p>;

  if (produtos.length === 0)
    return <p className="text-gray-400 text-center mt-10">Nenhum produto encontrado.</p>;

  return (
    <Card>
      <div className="flex fle-end">

        <AddProduto carroId={carroId} />
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {produtos.map((p) => (
        <Card
          key={p.id}
          className="group flex flex-col justify-between hover:shadow-lg transition-all duration-300"
        >
          <CardHeader className="flex items-center justify-center h-48">
            <img
              src={p.foto_url || "/placeholder.png"}
              alt={p.nome}
              className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
            />
          </CardHeader>

          <CardContent className="text-center">
            <h2 className="text-lg font-semibold truncate">{p.nome}</h2>
            <p className="text-sm text-muted-foreground">Código: {p.codigo}</p>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Link href={`/admin/produto/${p.id}`}>
              Ver detalhes
            </Link>
              <DeleteProduto produtoId={p.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
    </Card>
  );
}
