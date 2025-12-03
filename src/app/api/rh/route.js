import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const videos = await prisma.videos_rh_procedimentos.findMany({
      where: { ativo: true },
      orderBy: [{ categoria: 'asc' }, { ordem: 'asc' }],
    });

    return Response.json(videos);
  } catch (error) {
    console.error("Erro ao buscar vídeos RH:", error);
    return Response.json({ error: "Erro ao buscar vídeos" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { titulo, descricao, url, categoria, ordem } = await request.json();

    if (!titulo || !url) {
      return Response.json({ error: "Título e URL são obrigatórios" }, { status: 400 });
    }

    const video = await prisma.videos_rh_procedimentos.create({
      data: {
        titulo,
        descricao,
        url,
        categoria,
        ordem: ordem || 0,
      },
    });

    return Response.json(video, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar vídeo RH:", error);
    return Response.json({ error: "Erro ao criar vídeo" }, { status: 500 });
  }
}
