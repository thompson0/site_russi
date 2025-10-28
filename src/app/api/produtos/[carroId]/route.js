import { prisma } from "@/lib/prisma"

export async function GET(req, context) {
  try {

    const { carroId } = await context.params


    const carro = await prisma.carros.findUnique({
      where: { id: BigInt(carroId) },
      include: {
        produtos: {
          include: { produto: true },
        },
      },
    })

    if (!carro) {
      return new Response(
        JSON.stringify({ message: "Carro não encontrado" }),
        { status: 404 }
      )
    }

    const produtos = carro.produtos.map((p) => p.produto)

    return new Response(
      JSON.stringify(
        produtos,
        (_, v) => (typeof v === "bigint" ? v.toString() : v)
      ),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.error("Erro ao buscar produtos:", error)
    return new Response(
      JSON.stringify({ message: "Erro ao buscar produtos" }),
      { status: 500 }
    )
  }
}
