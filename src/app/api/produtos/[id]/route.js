import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const produto = await prisma.produtos.findUnique({
      where: { id: BigInt(id) },
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
    const { id } = await params;
    const { nome, codigo, foto_url, video_url } = await req.json();

    const data = {};
    if (nome !== undefined) data.nome = nome;
    if (codigo !== undefined) data.codigo = codigo;
    if (foto_url !== undefined) data.foto_url = foto_url;
    if (video_url !== undefined) data.video_url = video_url;

    const produto = await prisma.produtos.update({
      where: { id: BigInt(id) },
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
    const { id } = await params;


    await prisma.carro_produtos.deleteMany({
      where: { produto_id: BigInt(id) },
    });

    await prisma.produtos.delete({
      where: { id: BigInt(id) },
    });

    return Response.json({ message: "Produto deletado com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
