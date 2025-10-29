import { prisma } from "@/lib/prisma"

export async function GET(req, context) {
  try {
    const { produtoId } = await context.params

    const produto = await prisma.produtos.findUnique({
      where: { id: BigInt(produtoId) },
    })

    if (!produto) {
      return new Response(
        JSON.stringify({ message: "Produto não encontrado" }),
        { status: 404 }
      )
    }

    return new Response(
      JSON.stringify(produto, (_, v) => (typeof v === "bigint" ? v.toString() : v)),
      { headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error("Erro ao buscar Produto:", error)
    return new Response(
      JSON.stringify({ message: "Erro ao buscar Produto" }),
      { status: 500 }
    )
  }
}
