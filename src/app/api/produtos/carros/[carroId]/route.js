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
    const { carroId } = await params || {};
    let carroIdBig;
    try {
      carroIdBig = BigInt(carroId);
    } catch {
      return Response.json({ error: "carroId inválido" }, { status: 400 });
    }

    const produtos = await prisma.produtos.findMany({
      where: {
        carros: { some: { carro_id: carroIdBig } },
      },
      select: {
        id: true,
        nome: true,
        codigo: true,
        foto_url: true,
        video_url: true,
      },
    });

    return Response.json(
      produtos.map((p) => ({ ...p, id: Number(p.id) })),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao buscar produtos por carro:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  try {
    const authResult = await requireAdmin()
    if (authResult.error) {
      return Response.json({ error: authResult.error }, { status: authResult.status })
    }

    const { carroId } = await params || {};
    let carroIdBig;
    try {
      carroIdBig = BigInt(carroId);
    } catch {
      return Response.json({ error: "carroId inválido" }, { status: 400 });
    }

    const carroExists = await prisma.carros.findUnique({
      where: { id: carroIdBig },
      select: { id: true },
    });
    if (!carroExists) {
      return Response.json({ error: "Carro não encontrado" }, { status: 404 });
    }

    const body = await req.json();
    const { nome, codigo, foto_url, video_url } = body;

    if (!nome || !codigo)
      return Response.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });

    const novoProduto = await prisma.produtos.create({
      data: { nome, codigo, foto_url, video_url },
    });

    await prisma.carro_produtos.create({
      data: {
        carro_id: carroIdBig,
        produto_id: novoProduto.id,
      },
    });

    return Response.json(
      { ...novoProduto, id: Number(novoProduto.id) },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const authResult = await requireAdmin()
    if (authResult.error) {
      return Response.json({ error: authResult.error }, { status: authResult.status })
    }

    const { carroId } = params || {};
    let carroIdBig;
    try {
      carroIdBig = BigInt(carroId);
    } catch {
      return Response.json({ error: "carroId inválido" }, { status: 400 });
    }

    const body = await req.json();
    const { produtoId } = body;

    if (!produtoId)
      return Response.json({ error: "produtoId é obrigatório" }, { status: 400 });

    await prisma.carro_produtos.deleteMany({
      where: {
        carro_id: carroIdBig,
        produto_id: BigInt(produtoId),
      },
    });

    const isLinked = await prisma.carro_produtos.findFirst({
      where: { produto_id: BigInt(produtoId) },
    });

    if (!isLinked) {
      await prisma.produtos.delete({
        where: { id: BigInt(produtoId) },
      });
    }

    return Response.json(
      { message: "Produto removido com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
