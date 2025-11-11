import { prisma } from "@/lib/prisma";

export async function GET(req, {params}) {
    
    try {
        const last = await prisma.carros.findFirst({
            orderBy: { data_criacao: "desc" }
        });

        if (!last)
            return Response.json({ error: "Nenhum Carro encontrado" }, { status: 404 });

           return new Response(
      JSON.stringify(
        last,
        (_, v) => (typeof v === "bigint" ? Number(v) : v)
      ),
      {
        headers: {
          "Cache-Control": "public, max-age=60, s-maxage=3600, stale-while-revalidate=600",
          "Content-Type": "application/json",
        },
      }
    );

    } catch (error) {
        console.error("Erro ao buscar último Carro:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
