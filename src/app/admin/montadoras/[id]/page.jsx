import CarroCard from "../../../../components/Carro/CarroCard";

export default async function MontadoraPageId({ params }) {
  const { id } = await params;
  return (
    <div className="dark bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
    
      </h1>
      <CarroCard montadoraId={id}></CarroCard>
        </div>
  );
}
