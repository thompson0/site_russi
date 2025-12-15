import { prisma } from "@/lib/prisma";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

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
        fotos: {
          select: { id: true, foto_url: true, ordem: true },
          orderBy: { ordem: 'asc' }
        }
      },
    });

    return new Response(
      JSON.stringify(
        carros,
        (_, v) => (typeof v === "bigint" ? Number(v) : v)
      ),
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("erro:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
