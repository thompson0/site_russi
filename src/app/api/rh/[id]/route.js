import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function GET(req, { params }) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return Response.json({ error: "Token inválido" }, { status: 401 });
    }

    const { id } = await params;

    const video = await prisma.videos_rh_procedimentos.findUnique({
      where: { id: Number(id) },
    });

    if (!video) {
      return Response.json({ error: "Vídeo não encontrado" }, { status: 404 });
    }

    return Response.json({
      id: Number(video.id),
      titulo: video.titulo,
      descricao: video.descricao,
      url: video.url,
      categoria: video.categoria,
      ordem: video.ordem,
      ativo: video.ativo,
    });

  } catch (error) {
    console.error("Erro ao buscar vídeo RH:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ error: "Não autorizado" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== "admin") {
      return Response.json({ error: "Apenas administradores podem editar vídeos" }, { status: 403 });
    }

    const { id } = await params;
    const { titulo, descricao, url, categoria, ordem, ativo } = await req.json();

    if (!titulo || !titulo.trim()) {
      return Response.json({ error: "Título do vídeo é obrigatório" }, { status: 400 });
    }

    if (!url || !url.trim()) {
      return Response.json({ error: "URL do vídeo é obrigatória" }, { status: 400 });
    }

    const videoAtualizado = await prisma.videos_rh_procedimentos.update({
      where: { id: Number(id) },
      data: {
        titulo: titulo.trim(),
        descricao: descricao?.trim() || null,
        url: url.trim(),
        categoria: categoria?.trim() || null,
        ordem: ordem || 0,
        ativo: ativo !== undefined ? ativo : true,
      },
    });

    return Response.json({
      id: Number(videoAtualizado.id),
      titulo: videoAtualizado.titulo,
      descricao: videoAtualizado.descricao,
      url: videoAtualizado.url,
      categoria: videoAtualizado.categoria,
      ordem: videoAtualizado.ordem,
      ativo: videoAtualizado.ativo,
    });

  } catch (error) {
    console.error("Erro ao atualizar vídeo RH:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ error: "Não autorizado" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== "admin") {
      return Response.json({ error: "Apenas administradores podem excluir vídeos" }, { status: 403 });
    }

    const { id } = await params;

    await prisma.videos_rh_procedimentos.delete({
      where: { id: Number(id) },
    });

    return Response.json({ message: "Vídeo excluído com sucesso" });

  } catch (error) {
    console.error("Erro ao excluir vídeo RH:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
