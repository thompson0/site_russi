import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  try {
    const { carroId } = await params;

    const produtos = await prisma.produtos.findMany({
      where: {
        carros: { some: { carro_id: BigInt(carroId) } },
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
    const { carroId } = await params;
    const body = await req.json();
    const { nome, codigo, foto_url, video_url } = body;

    if (!nome || !codigo)
      return Response.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });

    const novoProduto = await prisma.produtos.create({
      data: { nome, codigo, foto_url, video_url },
    });

    await prisma.carro_produtos.create({
      data: {
        carro_id: BigInt(carroId),
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
    const { carroId } = params;
    const body = await req.json();
    const { produtoId } = body;

    if (!produtoId)
      return Response.json({ error: "produtoId é obrigatório" }, { status: 400 });


    await prisma.carro_produtos.deleteMany({
      where: {
        carro_id: BigInt(carroId),
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
