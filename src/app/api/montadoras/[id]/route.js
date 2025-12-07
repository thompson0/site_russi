import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const montadora = await prisma.montadoras.findUnique({
      where: { id: Number(id) },
    });

    if (!montadora) {
      return Response.json({ error: "Montadora não encontrada" }, { status: 404 });
    }

    let logo = montadora.logo_url;
    if (montadora.logo_url && Buffer.isBuffer(montadora.logo_url)) {
      logo = montadora.logo_url.toString("base64");
    }

    return Response.json({
      id: Number(montadora.id),
      nome: montadora.nome,
      logo_url: logo,
    });

  } catch (error) {
    console.error("Erro ao buscar montadora:", error);
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
      return Response.json({ error: "Apenas administradores podem editar montadoras" }, { status: 403 });
    }

    const { id } = await params;
    const { nome, logo_url } = await req.json();

    if (!nome || !nome.trim()) {
      return Response.json({ error: "Nome da montadora é obrigatório" }, { status: 400 });
    }

    const montadoraAtualizada = await prisma.montadoras.update({
      where: { id: Number(id) },
      data: {
        nome: nome.trim(),
        logo_url: logo_url || null,
      },
    });

    return Response.json({
      id: Number(montadoraAtualizada.id),
      nome: montadoraAtualizada.nome,
      logo_url: montadoraAtualizada.logo_url,
    });

  } catch (error) {
    console.error("Erro ao atualizar montadora:", error);
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
      return Response.json({ error: "Apenas administradores podem excluir montadoras" }, { status: 403 });
    }

    const { id } = await params;

    await prisma.montadoras.delete({
      where: { id: Number(id) },
    });

    return Response.json({ message: "Montadora excluída com sucesso" });

  } catch (error) {
    console.error("Erro ao excluir montadora:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
