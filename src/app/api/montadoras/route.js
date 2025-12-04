import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const montadoras = await prisma.montadoras.findMany({
      orderBy: { nome: 'asc' },
    });

    const montadorasFormatadas = montadoras.map((m) => {
      let logo = m.logo_url;

      if (m.logo_url && Buffer.isBuffer(m.logo_url)) {
        logo = `data:image/png;base64,${m.logo_url.toString("base64")}`;
      }

      return {
        id: Number(m.id),
        nome: m.nome,
        logo_url: logo || null,
      };
    });

    return new Response(
      JSON.stringify(montadorasFormatadas),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
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
