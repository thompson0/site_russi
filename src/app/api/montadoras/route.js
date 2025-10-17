import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const montadoras = await prisma.montadoras.findMany();
    return new Response(JSON.stringify(montadoras, (_, v) =>
      typeof v === "bigint" ? Number(v) : v
    ));
  } catch (error) {
    console.error("erro:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}