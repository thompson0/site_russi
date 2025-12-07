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

    const manual = await prisma.manuais.findUnique({
      where: { id: Number(id) },
    });

    if (!manual) {
      return Response.json({ error: "Manual não encontrado" }, { status: 404 });
    }

    return Response.json({
      id: Number(manual.id),
      titulo: manual.titulo,
      descricao: manual.descricao,
      conteudo: manual.conteudo,
      ordem: manual.ordem ? Number(manual.ordem) : 0,
    });

  } catch (error) {
    console.error("Erro ao buscar manual:", error);
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
      return Response.json({ error: "Apenas administradores podem editar manuais" }, { status: 403 });
    }

    const { id } = await params;
    const { titulo, descricao, conteudo, ordem } = await req.json();

    if (!titulo || !titulo.trim()) {
      return Response.json({ error: "Título do manual é obrigatório" }, { status: 400 });
    }

    const manualAtualizado = await prisma.manuais.update({
      where: { id: Number(id) },
      data: {
        titulo: titulo.trim(),
        descricao: descricao?.trim() || null,
        conteudo: conteudo?.trim() || null,
        ordem: ordem || 0,
      },
    });

    return Response.json({
      id: Number(manualAtualizado.id),
      titulo: manualAtualizado.titulo,
      descricao: manualAtualizado.descricao,
      conteudo: manualAtualizado.conteudo,
      ordem: manualAtualizado.ordem ? Number(manualAtualizado.ordem) : 0,
    });

  } catch (error) {
    console.error("Erro ao atualizar manual:", error);
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
      return Response.json({ error: "Apenas administradores podem excluir manuais" }, { status: 403 });
    }

    const { id } = await params;

    await prisma.manuais.delete({
      where: { id: Number(id) },
    });

    return Response.json({ message: "Manual excluído com sucesso" });

  } catch (error) {
    console.error("Erro ao excluir manual:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
