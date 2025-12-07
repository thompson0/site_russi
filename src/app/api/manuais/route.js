import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export const revalidate = 0;

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return Response.json({ error: "Token inválido" }, { status: 401 });
    }

    const manuais = await prisma.manuais.findMany({
      orderBy: [{ ordem: 'asc' }, { titulo: 'asc' }],
    });

    return new Response(
      JSON.stringify(
        manuais.map(m => ({
          id: Number(m.id),
          titulo: m.titulo,
          descricao: m.descricao,
          conteudo: m.conteudo,
          ordem: m.ordem ? Number(m.ordem) : 0,
          categoria_id: m.categoria_id ? Number(m.categoria_id) : null,
        })),
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
    console.error("Erro ao buscar manuais:", error);
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
      return Response.json({ error: "Apenas administradores podem criar manuais" }, { status: 403 });
    }

    const { titulo, descricao, conteudo, ordem } = await req.json();

    if (!titulo || !titulo.trim()) {
      return Response.json({ error: "Título do manual é obrigatório" }, { status: 400 });
    }

    const novoManual = await prisma.manuais.create({
      data: {
        titulo: titulo.trim(),
        descricao: descricao?.trim() || null,
        conteudo: conteudo?.trim() || null,
        ordem: ordem || 0,
      },
    });

    return Response.json({
      id: Number(novoManual.id),
      titulo: novoManual.titulo,
      descricao: novoManual.descricao,
      conteudo: novoManual.conteudo,
      ordem: novoManual.ordem ? Number(novoManual.ordem) : 0,
    }, { status: 201 });

  } catch (error) {
    console.error("Erro ao criar manual:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
