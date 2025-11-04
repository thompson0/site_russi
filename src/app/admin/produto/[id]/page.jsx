import SingleProduto from "@/components/Produto/SingleProduto";

export default async function ProdutoDetalhe({ params }) {
  const { id } = await params;
    return(
        <>
        <SingleProduto className="" id={id}></SingleProduto>
        </>
    )
}
