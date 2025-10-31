import { prisma } from "@/lib/prisma";


export async function POST(req, { params }) {
  try {
    const { carroId } = await params;
    const body = await req.json();
    const { nome, codigo, foto_url, video_url, } = body;

    if (!nome || !codigo)
      return Response.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });

    const novoProduto = await prisma.produtos.create({
      data: { nome, codigo, foto_url, video_url, },
    });

    await prisma.carro_produtos.create({
      data: {
        carro_id: BigInt(carroId),
        produto_id: novoProduto.id,
      },
    });

    return Response.json(
      { ...novoProduto, id: Number(novoProduto.id) },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}