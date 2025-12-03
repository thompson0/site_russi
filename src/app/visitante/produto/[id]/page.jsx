import VisitorProductView from "@/components/Produto/VisitorProductView";

export default async function VisitanteProdutoPage({ params }) {
  const { id } = await params;
  return <VisitorProductView id={id} />;
}
