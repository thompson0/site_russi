"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ProgressDemo } from "@/components/Home/ProgressDemo";
import { ArrowLeft } from "lucide-react";

export default function CatalogoProdutosPorCarroPage() {
  const params = useParams();
  const carroId = params.carroId;
  
  const [produtos, setProdutos] = useState([]);
  const [carro, setCarro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [produtosRes, carroRes] = await Promise.all([
          fetch(`/api/produtos/carros/${carroId}`),
          fetch(`/api/carros?id=${carroId}`)
        ]);

        if (produtosRes.ok) {
          const data = await produtosRes.json();
          setProdutos(data);
        }

        if (carroRes.ok) {
          const data = await carroRes.json();
          setCarro(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [carroId]);

  if (loading) {
    return (
      <div>
        <p className="text-gray-400 text-center mt-10">Carregando produtos...</p>
        <ProgressDemo />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/catalogo/carros"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Catálogo
        </Link>

        <h1 className="text-3xl font-bold text-center mb-2">
          Produtos {carro?.nome ? `- ${carro.nome}` : ""}
        </h1>
        
        {carro && (
          <p className="text-center text-muted-foreground mb-8">
            {carro.ano_de} - {carro.ano_ate} {carro.versao && `| ${carro.versao}`}
          </p>
        )}

        {produtos.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">
            Nenhum produto encontrado para este veículo.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {produtos.map((p) => (
              <Card
                key={p.id}
                className="group flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/catalogo/produto/${p.id}`}>
                  <CardHeader className="flex items-center justify-center h-48 cursor-pointer bg-gray-50">
                    <img
                      src={p.foto_url || "/placeholder.png"}
                      alt={p.nome}
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardHeader>
                </Link>

                <CardContent className="text-center py-4">
                  <h2 className="text-lg font-semibold truncate">{p.nome}</h2>
                  <p className="text-sm text-muted-foreground">Código: {p.codigo}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
