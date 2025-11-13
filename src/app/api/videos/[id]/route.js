import { prisma } from "@/lib/prisma";

const toJson = (data) =>
  JSON.stringify(data, (_, v) => (typeof v === "bigint" ? Number(v) : v));


export async function GET(_, { params }) {
  try {
    const video = await prisma.videos.findUnique({
      where: { id: Number(params.id) },
    });

    if (!video) {
      return Response.json({ error: "Vídeo não encontrado" }, { status: 404 });
    }

    return new Response(toJson(video), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}


export async function PUT(req, { params }) {
  try {
    const body = await req.json();

    const updated = await prisma.videos.update({
      where: { id: Number(params.id) },
      data: {
        titulo: body.titulo,
        descricao: body.descricao,
        url: body.url,
      },
    });

    return Response.json(updated);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}


export async function DELETE(_, { params }) {
  try {
    await prisma.videos.delete({
      where: { id: Number(params.id) },
    });

    return Response.json({ message: "Vídeo deletado com sucesso" });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
