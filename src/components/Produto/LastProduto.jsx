"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function LastProduto() {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/produtos/last")
      .then((res) => res.json())
      .then((data) => {
        setProduto(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produto:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !produto || produto.error) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Último produto</CardTitle>
          <CardDescription>Carregando...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <Card className="shadow-sm border border-border/50">
        <CardHeader>
          <CardTitle>Último produto adicionado</CardTitle>
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
      
          <p className="text-xs text-muted-foreground">
            Criado em:{" "}
            {new Date(produto.data_criacao).toLocaleString("pt-BR")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
