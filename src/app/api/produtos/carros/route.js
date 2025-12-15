import { prisma } from "@/lib/prisma";

function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (_, v) => (typeof v === "bigint" ? Number(v) : v))
  )
}

export async function POST(req, { params }) {
  try {
    const { carroId } = await params;
    const body = await req.json();
    const { nome, codigo, foto_url, video_url, fotos } = body;

    if (!nome || !codigo)
      return Response.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });

    const novoProduto = await prisma.produtos.create({
      data: { 
        nome, 
        codigo, 
        foto_url: fotos?.[0] || foto_url, 
        video_url,
        fotos: fotos?.length > 0 ? {
          create: fotos.map((url, index) => ({
            foto_url: url,
            ordem: index
          }))
        } : undefined,
      },
      include: {
        fotos: { orderBy: { ordem: 'asc' } }
      }
    });

    await prisma.carro_produtos.create({
      data: {
        carro_id: BigInt(carroId),
        produto_id: novoProduto.id,
      },
    });

    return Response.json(serializeBigInt(novoProduto), { status: 201 });
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
