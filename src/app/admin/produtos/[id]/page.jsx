import ProdutoCard from "@/components/Produto/ProdutoCard";

export default async function MontadoraPageId({ params }) {
  const { id } = await params;
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
      Produtos 
      </h1>
      <ProdutoCard carroId={id}></ProdutoCard>
        </div>
  );
}