import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const manuais = await prisma.manuais.findMany({
      orderBy: [{ ordem: 'asc' }],
    });

    return Response.json(manuais);
  } catch (error) {
    console.error("Erro ao buscar manuais:", error);
    return Response.json({ error: "Erro ao buscar manuais" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { titulo, descricao, conteudo, categoria_id, ordem } = await request.json();

    if (!titulo) {
      return Response.json({ error: "Título é obrigatório" }, { status: 400 });
    }

    const manual = await prisma.manuais.create({
      data: {
        titulo,
        descricao,
        conteudo,
        categoria_id: categoria_id ? BigInt(categoria_id) : null,
        ordem: ordem || 0,
      },
    });

    return Response.json(manual, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar manual:", error);
    return Response.json({ error: "Erro ao criar manual" }, { status: 500 });
  }
}
