import AllProdutos from "@/components/Produto/AllProdutos";

export default function CatalogoProdutosPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Catálogo de Produtos</h1>
      <AllProdutos />
    </div>
  );
}

