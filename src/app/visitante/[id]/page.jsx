import SingleProduto from "@/components/Produto/SingleProduto";
import { Card } from "@/components/ui/card";

export default function VisitantePage({ params }) {
  const { id } = params;
  return (
    <Card className="w-full min-h-screen flex justify-center">
      <SingleProduto qrcode="true" id={id} />
    </Card>
  );
}
