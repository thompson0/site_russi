import { connectDB } from "@/lib/db";
import Carro from "@/models/Carro";
import Montadora from "@/models/Montadora";
import CarroCard from "../../../../components/Carro/CarroCard";

export default async function MontadoraPageId({ params }) {
  const { id } = await params;
  await connectDB();

  const montadora = await Montadora.findById(id);
  const carros = await Carro.find({ montadoraId: id });

  return (
    <div className="dark bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        {montadora?.nome || "Montadora"}
      </h1>

      {carros.length === 0 ? (
        <p className="text-gray-400 text-center">Nenhum carro encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {carros.map((carro) => (
            <CarroCard key={carro._id} modelo={carro.modelo} foto={carro.foto} ano={carro.ano} />
          ))}
        </div>
      )}
    </div>
  );
}
