"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

function MostView() {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch("/api/catalogo/produtos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const maisVisto = data.reduce((max, p) =>
            p.views > max.views ? p : max
          );
          setProduto(maisVisto);
        }
      })
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  if (!produto) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Mais acessado</CardTitle>
          <CardDescription>Carregando...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm border border-border/50">
      <CardHeader>
        <CardTitle> Produto mais acessado</CardTitle>
        <CardDescription>{produto.nome}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-3">
        {produto.foto_url && (
          <img
            src={produto.foto_url}
            alt={produto.nome}
            className="w-40 h-40 object-cover rounded-lg border"
          />
        )}
        <p className="text-sm text-center text-muted-foreground">
          Visualizações:{" "}
          <span className="font-semibold text-foreground">
            {produto.views}
          </span>
        </p>
      </CardContent>
    </Card>
  );
}

export default MostView;
