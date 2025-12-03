import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const duvidas = await prisma.duvidas.findMany({
      orderBy: [{ ordem: 'asc' }, { posicao: 'asc' }],
    });

    return Response.json(duvidas);
  } catch (error) {
    console.error("Erro ao buscar dúvidas:", error);
    return Response.json({ error: "Erro ao buscar dúvidas" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { pergunta, resposta, ordem } = await request.json();

    if (!pergunta || !resposta) {
      return Response.json({ error: "Pergunta e resposta são obrigatórias" }, { status: 400 });
    }

    const duvida = await prisma.duvidas.create({
      data: {
        pergunta,
        resposta,
        ordem: ordem || 0,
      },
    });

    return Response.json(duvida, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar dúvida:", error);
    return Response.json({ error: "Erro ao criar dúvida" }, { status: 500 });
  }
}
