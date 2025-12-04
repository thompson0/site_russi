"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ProgressDemo } from "@/components/Home/ProgressDemo";
import { ArrowLeft } from "lucide-react";

export default function CatalogoCarrosPorMontadoraPage() {
  const params = useParams();
  const montadoraId = params.id;

  const [carros, setCarros] = useState([]);
  const [montadora, setMontadora] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [carrosRes, montadorasRes] = await Promise.all([
          fetch("/api/carros"),
          fetch("/api/montadoras")
        ]);

        if (carrosRes.ok) {
          const allCarros = await carrosRes.json();
          const filteredCarros = allCarros.filter(
            (c) => String(c.montadora_id) === String(montadoraId)
          );
          setCarros(filteredCarros);
        }

        if (montadorasRes.ok) {
          const allMontadoras = await montadorasRes.json();
          const found = allMontadoras.find(
            (m) => String(m.id) === String(montadoraId)
          );
          setMontadora(found);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [montadoraId]);

  if (loading) {
    return (
      <div>
        <p className="text-gray-400 text-center mt-10">Carregando veículos...</p>
        <ProgressDemo />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/catalogo/montadoras"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar às Montadoras
        </Link>

        <div className="flex items-center justify-center gap-4 mb-8">
          {montadora?.logo_url && (
            <img
              src={montadora.logo_url}
              alt={montadora.nome}
              className="w-16 h-16 object-contain"
            />
          )}
          <h1 className="text-3xl font-bold text-center">
            {montadora?.nome || "Veículos"}
          </h1>
        </div>

        {carros.length === 0 ? (
          <p className="text-center text-muted-foreground mt-10">
            Nenhum veículo encontrado para esta montadora.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {carros.map((carro) => (
              <Card key={carro.id} className="group overflow-hidden transition-all hover:shadow-lg">
                <Link href={`/catalogo/produtos/${carro.id}`}>
                  <CardHeader className="flex items-center justify-center h-48 bg-gray-50 cursor-pointer">
                    <img
                      src={carro.foto_url || "/placeholder.png"}
                      alt={carro.nome}
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardHeader>
                </Link>

                <CardContent className="text-center py-4">
                  <CardTitle className="text-xl font-semibold truncate">{carro.nome}</CardTitle>
                  <p className="text-sm mt-1 text-muted-foreground">
                    Ano: <span className="font-medium">{carro.ano_de} - {carro.ano_ate}</span>
                  </p>
                  {carro.versao && (
                    <p className="text-sm text-muted-foreground">Versão: {carro.versao}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
