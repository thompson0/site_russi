import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

export async function GET(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const url = new URL(request.url);
    const showAll = url.searchParams.get('all') === 'true';
    const isAdmin = user.role === 'admin';

    const videos = await prisma.videos_rh_procedimentos.findMany({
      where: showAll && isAdmin ? {} : { ativo: true },
      orderBy: [{ categoria: 'asc' }, { ordem: 'asc' }],
    });

    const formattedVideos = videos.map(v => ({
      id: Number(v.id),
      titulo: v.titulo,
      descricao: v.descricao,
      url: v.url,
      categoria: v.categoria,
      ordem: v.ordem,
      ativo: v.ativo,
    }));

    return Response.json(formattedVideos);
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

    return Response.json({
      id: Number(video.id),
      titulo: video.titulo,
      descricao: video.descricao,
      url: video.url,
      categoria: video.categoria,
      ordem: video.ordem,
      ativo: video.ativo,
    }, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar vídeo RH:", error);
    return Response.json({ error: "Erro ao criar vídeo" }, { status: 500 });
  }
}
