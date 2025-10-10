"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CarroCard from "../Carro/CarroCard";

export function SheetMontadora({ nome, montadoraId }) {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregarCarros = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/carros/${montadoraId}`);

      const data = await res.json();
      setCarros(data);
    } catch (err) {
      console.error("Erro ao carregar carros:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={(carregarCarros)}>
          Ver carros
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{nome}</SheetTitle>
          <SheetDescription>Modelos cadastrados</SheetDescription>
        </SheetHeader>

        <div className="grid gap-3 mt-4">
          {loading ? (
            <p className="text-gray-400 text-sm">Carregando...</p>
          ) : carros.length > 0 ? (
            <div className="max-h-[500px] overflow-y-auto p-4 space-y-4 snap-x snap-mandatory  scrollbar-none">
              {carros.map((carro) => (
                <CarroCard
                  key={carro._id}
                  modelo={carro.modelo}
                  ano={carro.ano}
                  foto={carro.foto}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">
              Nenhum carro encontrado para esta montadora.
            </p>
          )}
        </div>

        <SheetFooter className="mt-6">
          <SheetClose asChild>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
