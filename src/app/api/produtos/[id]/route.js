import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

async function requireAdmin() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  if (!token) {
    return { error: "Não autorizado", status: 401 }
  }

  const decoded = verifyToken(token)
  if (!decoded || decoded.role !== "admin") {
    return { error: "Apenas administradores podem realizar esta ação", status: 403 }
  }

  return { user: decoded }
}

export async function GET(req, { params }) {
  try {
    const { id } = await params || {};
    let idBigInt;
    try {
      idBigInt = BigInt(id);
    } catch {
      return Response.json({ error: "ID inválido" }, { status: 400 });
    }


    prisma.produtos.update({
      where: { id },
      data: { views: { increment: 1 } },
    }).catch(() => { });

    const produto = await prisma.produtos.findUnique({
      where: { id: idBigInt },
      include: {
        carros: {
          select: { carro_id: true },
        },
      },
    });

    if (!produto)
      return Response.json({ error: "Produto não encontrado" }, { status: 404 });

    return Response.json(
      {
        ...produto,
        id: Number(produto.id),
        carros: produto.carros.map((c) => Number(c.carro_id)),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const authResult = await requireAdmin()
    if (authResult.error) {
      return Response.json({ error: authResult.error }, { status: authResult.status })
    }

    const { id } = await params || {};
    let idBigInt;
    try {
      idBigInt = BigInt(id);
    } catch {
      return Response.json({ error: "ID inválido" }, { status: 400 });
    }

    const { nome, codigo, foto_url, video_url } = await req.json();

    const data = {};
    if (nome !== undefined) data.nome = nome;
    if (codigo !== undefined) data.codigo = codigo;
    if (foto_url !== undefined) data.foto_url = foto_url;
    if (video_url !== undefined) data.video_url = video_url;



    const produto = await prisma.produtos.update({
      where: { id: idBigInt },
      data,
    });

    return Response.json({ ...produto, id: Number(produto.id) }, { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const authResult = await requireAdmin()
    if (authResult.error) {
      return Response.json({ error: authResult.error }, { status: authResult.status })
    }

    const { id } = await params || {};
    let idBigInt;
    try {
      idBigInt = BigInt(id);
    } catch {
      return Response.json({ error: "ID inválido" }, { status: 400 });
    }

    await prisma.carro_produtos.deleteMany({
      where: { produto_id: idBigInt },
    });

    await prisma.produtos.delete({
      where: { id: idBigInt },
    });

    return Response.json({ message: "Produto deletado com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
