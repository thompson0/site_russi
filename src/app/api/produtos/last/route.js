import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const last = await prisma.produtos.findFirst({
      orderBy: { data_criacao: "desc" },
      include: {
        carros: { select: { carro_id: true } },
      },
    });

    if (!last)
      return Response.json({ error: "Nenhum produto encontrado" }, { status: 404 });

    return Response.json(
      {
        ...last,
        id: Number(last.id),
        carros: last.carros.map((c) => Number(c.carro_id)),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao buscar último produto:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
