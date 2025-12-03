import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole, canAccessSectorVideos } from "@/lib/auth";

export async function GET(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const setorId = searchParams.get('setor_id');

    let whereClause = { ativo: true };

    if (user.role === 'admin') {
      if (setorId) {
        whereClause.setor_id = BigInt(setorId);
      }
    } else {
      if (user.setor_id) {
        whereClause.setor_id = user.setor_id;
      } else {
        whereClause.setor_id = null;
      }
    }

    const videos = await prisma.videos_internos.findMany({
      where: whereClause,
      orderBy: [{ ordem: 'asc' }, { data_criacao: 'desc' }],
      include: {
        setor: {
          select: { id: true, nome: true },
        },
        criador: {
          select: { id: true, nome: true },
        },
      },
    });

    return Response.json(videos);
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

    let targetSetorId = setor_id ? BigInt(setor_id) : null;

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

    return Response.json(video, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar vídeo interno:", error);
    return Response.json({ error: "Erro ao criar vídeo" }, { status: 500 });
  }
}
