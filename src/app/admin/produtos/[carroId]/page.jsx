import ProdutoCard from "@/components/Produto/ProdutoCard";

export default async function ProdutosPorCarro({ params }) {
    const { carroId } = await params;

    return (
        <ProdutoCard carroId={carroId}>

        </ProdutoCard>
    );
}
