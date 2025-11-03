"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { ProgressDemo } from "@/components/ProgressDemo";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function AllProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const res = await fetch(`${baseUrl}/api/catalogo/produtos`);
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
  }, []);

  if (loading)
    return (
      <div>
        <p className="text-gray-400 text-center mt-10">Carregando produtos...</p>
        <ProgressDemo />
      </div>
    );

  if (produtos.length === 0)
    return <p className="text-gray-400 text-center mt-10">Nenhum produto encontrado.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {produtos.map((p) => (
        <Card key={p.id} className="group overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="flex items-center justify-center h-48 cursor-pointer">
              <img
                src={p.foto_url || "/placeholder.png"}
                alt={p.nome}
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
              />
            </CardHeader>
  
          <CardContent className="text-center">
            <h2 className="text-lg font-semibold truncate">{p.nome}</h2>
            {p.codigo && (
              <p className="text-sm text-muted-foreground">Código: {p.codigo}</p>
            )}
          </CardContent>
          <CardFooter className="justify-center text-sm text-muted-foreground">
            <Link href={`/admin/produto/${p.id}`} className="underline hover:no-underline">
              Ver detalhes
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
