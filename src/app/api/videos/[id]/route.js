import { prisma } from "@/lib/prisma";

const toJson = (data) =>
  JSON.stringify(data, (_, v) => (typeof v === "bigint" ? Number(v) : v));

export async function GET(_, { params }) {
  try {
    const video = await prisma.videos.findUnique({
      where: { id: await params.id },
    });

    if (!video) {
      return new Response(
        toJson({ error: "Vídeo não encontrado" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(toJson(video), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(
      toJson({ error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}


export async function PUT(req, { params }) {
  try {
    const { videoId } = await params
    const body = await req.json();

    const updated = await prisma.videos.update({
      where: { id: params.id },
      data: {
        titulo: body.titulo,
        descricao: body.descricao,
        url: body.url,
      },
    });

    return new Response(toJson(updated), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(
      toJson({ error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}


export async function DELETE(_, { params }) {
  try {
    await prisma.videos.delete({
      where: { id: await params.id },
    });

    return new Response(
      toJson({ message: "Vídeo deletado com sucesso" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (err) {
    return new Response(
      toJson({ error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
