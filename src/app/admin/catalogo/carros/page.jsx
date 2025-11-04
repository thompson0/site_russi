import AllCarros from "@/components/Carro/AllCarros";

export default function AdminCatalogoCarrosPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Catálogo de Carros</h1>
      <AllCarros />
    </div>
  );
}
