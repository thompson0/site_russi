"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function LastCarro() {
  const [carro, setCarro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/carros/last")
      .then((res) => res.json())
      .then((data) => {
        setCarro(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar carro:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !carro || carro.error) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Último carro</CardTitle>
          <CardDescription>Carregando...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <Card className="shadow-sm border border-border/50">
        <CardHeader>
          <CardTitle>Último carro adicionado</CardTitle>
          <CardDescription>{carro.nome}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-3">
          {carro.foto_url && (
            <img
              src={carro.foto_url}
              alt={carro.nome}
              className="w-40 h-40 object-cover rounded-lg border"
            />
          )}

          <p className="text-xs text-muted-foreground">
            Criado em:{" "}
            {new Date(carro.data_criacao).toLocaleString("pt-BR")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
