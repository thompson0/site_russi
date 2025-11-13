import SingleProduto from "@/components/Produto/SingleProduto";

export default async function VisitanteProdutoPage({ params }) {
  const { id } = await params;
  return <SingleProduto qrcode={true} id={id} />;
}
