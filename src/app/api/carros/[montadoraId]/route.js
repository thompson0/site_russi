import { prisma } from "@/lib/prisma";

export const revalidate = 3600; 

export async function GET(req, context) {
  try {
    const { montadoraId } = await context.params; 

    const carros = await prisma.carros.findMany({
      where: {
        montadora_id: BigInt(montadoraId),
      },
    });

    return new Response(
      JSON.stringify(
        carros,
        (_, v) => (typeof v === "bigint" ? v.toString() : v)
      ),
      {
        status: 200,
        headers: {
          "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=120",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erro ao buscar carros:", error);
    return new Response(
      JSON.stringify({ message: "Erro ao buscar carros" }),
      { status: 500 }
    );
  }
}
