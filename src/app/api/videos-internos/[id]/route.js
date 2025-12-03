import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

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
        setor: true,
        criador: {
          select: { id: true, nome: true },
        },
      },
    });

    if (!video) {
      return Response.json({ error: "Vídeo não encontrado" }, { status: 404 });
    }

    if (user.role !== 'admin' && video.setor_id && video.setor_id !== user.setor_id) {
      return Response.json({ error: "Sem permissão para acessar este vídeo" }, { status: 403 });
    }

    return Response.json(video);
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
    const { titulo, descricao, url, thumbnail, setor_id, ordem, ativo } = await request.json();

    const existingVideo = await prisma.videos_internos.findUnique({
      where: { id: BigInt(id) },
    });

    if (!existingVideo) {
      return Response.json({ error: "Vídeo não encontrado" }, { status: 404 });
    }

    if (user.role === 'supervisor') {
      if (existingVideo.setor_id !== user.setor_id) {
        return Response.json({ error: "Sem permissão para editar este vídeo" }, { status: 403 });
      }
    }

    const video = await prisma.videos_internos.update({
      where: { id: BigInt(id) },
      data: {
        titulo,
        descricao,
        url,
        thumbnail,
        setor_id: user.role === 'admin' && setor_id !== undefined ? (setor_id ? BigInt(setor_id) : null) : undefined,
        ordem,
        ativo,
      },
      include: {
        setor: true,
        criador: {
          select: { id: true, nome: true },
        },
      },
    });

    return Response.json(video);
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

    if (user.role === 'supervisor' && existingVideo.setor_id !== user.setor_id) {
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
