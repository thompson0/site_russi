import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    
    const setor = await prisma.setores.findUnique({
      where: { id: BigInt(id) },
      include: {
        usuarios: {
          select: {
            id: true,
            nome: true,
            email: true,
            role: true,
          },
        },
        videos_internos: true,
      },
    });

    if (!setor) {
      return Response.json({ error: "Setor não encontrado" }, { status: 404 });
    }

    return Response.json(setor);
  } catch (error) {
    console.error("Erro ao buscar setor:", error);
    return Response.json({ error: "Erro ao buscar setor" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { id } = await params;
    const { nome, descricao } = await request.json();

    const setor = await prisma.setores.update({
      where: { id: BigInt(id) },
      data: {
        nome,
        descricao,
      },
    });

    return Response.json(setor);
  } catch (error) {
    console.error("Erro ao atualizar setor:", error);
    return Response.json({ error: "Erro ao atualizar setor" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { id } = await params;

    await prisma.setores.delete({
      where: { id: BigInt(id) },
    });

    return Response.json({ message: "Setor excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir setor:", error);
    return Response.json({ error: "Erro ao excluir setor" }, { status: 500 });
  }
}
