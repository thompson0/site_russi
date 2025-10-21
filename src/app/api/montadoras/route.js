import { prisma } from "@/lib/prisma";

export const revalidate = 3600; 

export async function GET() {
  try {
    const montadoras = await prisma.montadoras.findMany({
      select: { id: true, nome: true, logo_url: true },
    });
    return new Response(
      JSON.stringify(
        montadoras,
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
