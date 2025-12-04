import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export const revalidate = 0;

export async function GET() {
  try {
    const montadoras = await prisma.montadoras.findMany({
      select: { id: true, nome: true, logo_url: true },
      orderBy: { nome: 'asc' },
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
          "Cache-Control": "no-store",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erro ao buscar montadoras:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ error: "Não autorizado" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== "admin") {
      return Response.json({ error: "Apenas administradores podem criar montadoras" }, { status: 403 });
    }

    const { nome, logo_url } = await req.json();

    if (!nome || !nome.trim()) {
      return Response.json({ error: "Nome da montadora é obrigatório" }, { status: 400 });
    }

    const novaMontadora = await prisma.montadoras.create({
      data: {
        nome: nome.trim(),
        logo_url: logo_url || null,
      },
    });

    return Response.json({
      id: Number(novaMontadora.id),
      nome: novaMontadora.nome,
      logo_url: novaMontadora.logo_url,
    }, { status: 201 });

  } catch (error) {
    console.error("Erro ao criar montadora:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
