import SingleProduto from "@/components/Produto/SingleProduto";

export default async function CatalogoProdutoDetalhe({ params }) {
  const { id } = await params;
  return (
    <div className="min-h-screen p-6">
      <SingleProduto id={id} />
    </div>
  );
}
