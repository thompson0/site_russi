import { prisma } from "@/lib/prisma"

export async function GET(req, { params }) {
  try {
    const { carroId } = params || {}

    if (!carroId || !/^\d+$/.test(String(carroId))) {
      return new Response(
        JSON.stringify({ message: "carroId inválido" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    // Busca direta de produtos relacionados ao carro
    const produtos = await prisma.produtos.findMany({
      where: { carros: { some: { carro_id: BigInt(carroId) } } },
      select: {
        id: true,
        nome: true,
        codigo: true,
        foto_url: true,
        video_url: true,
      },
    })

    return new Response(
      JSON.stringify(
        produtos,
        (_, v) => (typeof v === "bigint" ? Number(v) : v)
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60, s-maxage=3600, stale-while-revalidate=600",
        },
      }
    )
  } catch (error) {
    console.error("Erro ao buscar produtos:", error)
    return new Response(
      JSON.stringify({ message: "Erro ao buscar produtos" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}

