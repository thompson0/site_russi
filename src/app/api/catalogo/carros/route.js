import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

export async function GET() {
  try {
    const carros = await prisma.carros.findMany({
      select: {
        id: true,
        nome: true,
        ano_de: true,
        ano_ate: true,
        versao: true,
        montadora_id: true,
        foto_url: true,
        imagem: true,
      },
    });

    return new Response(
      JSON.stringify(
        carros,
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
    console.error("erro:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
