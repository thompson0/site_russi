import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const produtos = await prisma.produtos.findMany({
      select: { id: true, nome: true, codigo: true, foto_url: true, video_url: true, views: true },
    });

    const normalized = produtos.map((p) => ({
      ...p,
      views: typeof p.views === "number" ? p.views : 0,
    }));

    return new Response(
      JSON.stringify(
        normalized,
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