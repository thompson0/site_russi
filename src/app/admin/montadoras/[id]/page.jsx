import CarroCard from "@/components/Carro/CarroCard";
import Link from "next/link";
export default async function MontadoraPageId({ params }) {
  const { id } = await params;
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
      Carros 
      </h1>
    
      <CarroCard montadoraId={id}></CarroCard>
 
        </div>
  );
}
