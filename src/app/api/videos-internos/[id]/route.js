import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

const CARGO_LABELS = {
  supervisor: "Supervisor",
  vendedor_interno: "Vendedor Interno",
  instalador: "Instalador",
};

export async function GET(request, { params }) {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const { id } = await params;
    
    const video = await prisma.videos_internos.findUnique({
      where: { id: BigInt(id) },
      include: {
        criador: {
          select: { id: true, nome: true },
        },
      },
    });

    if (!video) {
      return Response.json({ error: "Vídeo não encontrado" }, { status: 404 });
    }

    if (user.role !== 'admin' && video.cargo && video.cargo !== user.role) {
      return Response.json({ error: "Sem permissão para acessar este vídeo" }, { status: 403 });
    }

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
    });
  } catch (error) {
    console.error("Erro ao buscar vídeo interno:", error);
    return Response.json({ error: "Erro ao buscar vídeo" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin', 'supervisor'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { id } = await params;
    const { titulo, descricao, url, thumbnail, cargo, ordem, ativo } = await request.json();

    const existingVideo = await prisma.videos_internos.findUnique({
      where: { id: BigInt(id) },
    });

    if (!existingVideo) {
      return Response.json({ error: "Vídeo não encontrado" }, { status: 404 });
    }

    if (user.role === 'supervisor' && existingVideo.cargo !== user.role) {
      return Response.json({ error: "Sem permissão para editar este vídeo" }, { status: 403 });
    }

    const validCargos = ['supervisor', 'vendedor_interno', 'instalador'];
    if (cargo && !validCargos.includes(cargo)) {
      return Response.json({ error: "Cargo inválido" }, { status: 400 });
    }

    const video = await prisma.videos_internos.update({
      where: { id: BigInt(id) },
      data: {
        titulo,
        descricao,
        url,
        thumbnail,
        cargo: user.role === 'admin' ? cargo : undefined,
        ordem,
        ativo,
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
    });
  } catch (error) {
    console.error("Erro ao atualizar vídeo interno:", error);
    return Response.json({ error: "Erro ao atualizar vídeo" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin', 'supervisor'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { id } = await params;

    const existingVideo = await prisma.videos_internos.findUnique({
      where: { id: BigInt(id) },
    });

    if (!existingVideo) {
      return Response.json({ error: "Vídeo não encontrado" }, { status: 404 });
    }

    if (user.role === 'supervisor' && existingVideo.cargo !== user.role) {
      return Response.json({ error: "Sem permissão para excluir este vídeo" }, { status: 403 });
    }

    await prisma.videos_internos.delete({
      where: { id: BigInt(id) },
    });

    return Response.json({ message: "Vídeo excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir vídeo interno:", error);
    return Response.json({ error: "Erro ao excluir vídeo" }, { status: 500 });
  }
}
