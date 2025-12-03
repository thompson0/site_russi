import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const setores = await prisma.setores.findMany({
      orderBy: { nome: 'asc' },
      include: {
        _count: {
          select: {
            usuarios: true,
            videos_internos: true,
          },
        },
      },
    });

    return Response.json(setores);
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return Response.json({ error: "Erro ao buscar setores" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { nome, descricao } = await request.json();

    if (!nome) {
      return Response.json({ error: "Nome é obrigatório" }, { status: 400 });
    }

    const setor = await prisma.setores.create({
      data: {
        nome,
        descricao,
      },
    });

    return Response.json(setor, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar setor:", error);
    return Response.json({ error: "Erro ao criar setor" }, { status: 500 });
  }
}
