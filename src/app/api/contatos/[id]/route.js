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

    const contato = await prisma.contatos.findUnique({
      where: { id: Number(id) },
    });

    if (!contato) {
      return Response.json({ error: "Contato não encontrado" }, { status: 404 });
    }

    return Response.json({
      id: Number(contato.id),
      departamento: contato.departamento,
      colaborador: contato.colaborador,
      telefone: contato.telefone,
      ramal: contato.ramal,
      email: contato.email,
    });

  } catch (error) {
    console.error("Erro ao buscar contato:", error);
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
      return Response.json({ error: "Apenas administradores podem editar contatos" }, { status: 403 });
    }

    const { id } = await params;
    const { departamento, colaborador, telefone, ramal, email } = await req.json();

    if (!departamento || !departamento.trim()) {
      return Response.json({ error: "Nome do departamento é obrigatório" }, { status: 400 });
    }

    const contatoAtualizado = await prisma.contatos.update({
      where: { id: Number(id) },
      data: {
        departamento: departamento.trim(),
        colaborador: colaborador?.trim() || null,
        telefone: telefone?.trim() || null,
        ramal: ramal?.trim() || null,
        email: email?.trim() || null,
      },
    });

    return Response.json({
      id: Number(contatoAtualizado.id),
      departamento: contatoAtualizado.departamento,
      colaborador: contatoAtualizado.colaborador,
      telefone: contatoAtualizado.telefone,
      ramal: contatoAtualizado.ramal,
      email: contatoAtualizado.email,
    });

  } catch (error) {
    console.error("Erro ao atualizar contato:", error);
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
      return Response.json({ error: "Apenas administradores podem excluir contatos" }, { status: 403 });
    }

    const { id } = await params;

    await prisma.contatos.delete({
      where: { id: Number(id) },
    });

    return Response.json({ message: "Contato excluído com sucesso" });

  } catch (error) {
    console.error("Erro ao excluir contato:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
