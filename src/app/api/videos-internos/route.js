import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

export async function GET(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const setorId = searchParams.get('setor_id');
    const showAll = searchParams.get('all') === 'true';

    let whereClause = {};

    if (user.role === 'admin') {
      if (!showAll) {
        whereClause.ativo = true;
      }
      if (setorId && setorId !== 'all') {
        whereClause.setor_id = BigInt(setorId);
      }
    } else if (user.role === 'supervisor') {
      whereClause.ativo = true;
      if (user.setor_id) {
        whereClause.setor_id = user.setor_id;
      }
    } else {
      whereClause.ativo = true;
      if (user.setor_id) {
        whereClause.setor_id = user.setor_id;
      } else {
        return Response.json([]);
      }
    }

    const videos = await prisma.videos_internos.findMany({
      where: whereClause,
      orderBy: [{ setor_id: 'asc' }, { ordem: 'asc' }, { data_criacao: 'desc' }],
      include: {
        setor: {
          select: { id: true, nome: true },
        },
        criador: {
          select: { id: true, nome: true },
        },
      },
    });

    const formattedVideos = videos.map(v => ({
      id: Number(v.id),
      titulo: v.titulo,
      descricao: v.descricao,
      url: v.url,
      thumbnail: v.thumbnail,
      setor_id: v.setor_id ? Number(v.setor_id) : null,
      setor: v.setor ? { id: Number(v.setor.id), nome: v.setor.nome } : null,
      criador: v.criador ? { id: Number(v.criador.id), nome: v.criador.nome } : null,
      ordem: v.ordem,
      ativo: v.ativo,
      data_criacao: v.data_criacao,
    }));

    return Response.json(formattedVideos);
  } catch (error) {
    console.error("Erro ao buscar vídeos internos:", error);
    return Response.json({ error: "Erro ao buscar vídeos" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin', 'supervisor'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { titulo, descricao, url, thumbnail, setor_id, ordem } = await request.json();

    if (!titulo || !url) {
      return Response.json({ error: "Título e URL são obrigatórios" }, { status: 400 });
    }

    if (!setor_id) {
      return Response.json({ error: "Setor é obrigatório" }, { status: 400 });
    }

    let targetSetorId = BigInt(setor_id);

    if (user.role === 'supervisor' && user.setor_id) {
      targetSetorId = user.setor_id;
    }

    const video = await prisma.videos_internos.create({
      data: {
        titulo,
        descricao,
        url,
        thumbnail,
        setor_id: targetSetorId,
        criado_por: user.id,
        ordem: ordem || 0,
      },
      include: {
        setor: true,
        criador: {
          select: { id: true, nome: true },
        },
      },
    });

    return Response.json({
      id: Number(video.id),
      titulo: video.titulo,
      descricao: video.descricao,
      url: video.url,
      thumbnail: video.thumbnail,
      setor_id: video.setor_id ? Number(video.setor_id) : null,
      setor: video.setor ? { id: Number(video.setor.id), nome: video.setor.nome } : null,
      criador: video.criador ? { id: Number(video.criador.id), nome: video.criador.nome } : null,
      ordem: video.ordem,
      ativo: video.ativo,
    }, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar vídeo interno:", error);
    return Response.json({ error: "Erro ao criar vídeo" }, { status: 500 });
  }
}
