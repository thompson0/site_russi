import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

const CARGO_LABELS = {
  supervisor: "Supervisor",
  vendedor_interno: "Vendedor Interno",
  instalador: "Instalador",
};

export async function GET(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const cargoFilter = searchParams.get('cargo');
    const showAll = searchParams.get('all') === 'true';

    let whereClause = {};

    if (user.role === 'admin') {
      if (!showAll) {
        whereClause.ativo = true;
      }
      if (cargoFilter && cargoFilter !== 'all') {
        whereClause.cargo = cargoFilter;
      }
    } else {
      whereClause.ativo = true;
      whereClause.cargo = user.role;
    }

    const videos = await prisma.videos_internos.findMany({
      where: whereClause,
      orderBy: [{ cargo: 'asc' }, { ordem: 'asc' }, { data_criacao: 'desc' }],
      include: {
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
      cargo: v.cargo,
      cargo_label: v.cargo ? CARGO_LABELS[v.cargo] : null,
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

    const { titulo, descricao, url, thumbnail, cargo, ordem } = await request.json();

    if (!titulo || !url) {
      return Response.json({ error: "Título e URL são obrigatórios" }, { status: 400 });
    }

    if (!cargo) {
      return Response.json({ error: "Cargo é obrigatório" }, { status: 400 });
    }

    const validCargos = ['supervisor', 'vendedor_interno', 'instalador'];
    if (!validCargos.includes(cargo)) {
      return Response.json({ error: "Cargo inválido" }, { status: 400 });
    }

    const video = await prisma.videos_internos.create({
      data: {
        titulo,
        descricao,
        url,
        thumbnail,
        cargo,
        criado_por: user.id,
        ordem: ordem || 0,
      },
      include: {
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
      cargo: video.cargo,
      cargo_label: video.cargo ? CARGO_LABELS[video.cargo] : null,
      criador: video.criador ? { id: Number(video.criador.id), nome: video.criador.nome } : null,
      ordem: video.ordem,
      ativo: video.ativo,
    }, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar vídeo interno:", error);
    return Response.json({ error: "Erro ao criar vídeo" }, { status: 500 });
  }
}
