import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

export async function GET() {
  try {
    const montadoras = await prisma.montadoras.findMany({
      select: { id: true, nome: true, logo_url: true, },
    });

    const montadorasComBase64 = montadoras.map((m) => {
      let logo = m.logo_url;

      if (m.logo_url && Buffer.isBuffer(m.logo_url)) {
        logo = m.logo_url.toString("base64");
      }

      return {
        id: m.id,
        nome: m.nome,
        logo_url: logo,
      };
    });

    return new Response(
      JSON.stringify(
        montadorasComBase64,
        (_, v) => (typeof v === "bigint" ? Number(v) : v)
      ),
      {
        headers: {
          "Cache-Control":
            "public, max-age=60, s-maxage=3600, stale-while-revalidate=600",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("erro:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
