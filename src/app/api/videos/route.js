import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

const toJson = (data) =>
  JSON.stringify(data, (_, v) => (typeof v === "bigint" ? Number(v) : v));

export async function GET() {
  try {
    const videos = await prisma.videos.findMany({
      select: { id: true, titulo: true, descricao: true, url: true },
    });

    return new Response(toJson(videos), {
      headers: {
        "Cache-Control":
          "public, max-age=60, s-maxage=3600, stale-while-revalidate=600",
        "Content-Type": "application/json",
      },
    });

  } catch (err) {
    return new Response(toJson({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const newVideo = await prisma.videos.create({
      data: {
        titulo: body.titulo,
        descricao: body.descricao,
        url: body.url,
      },
    });

    return new Response(toJson(newVideo), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(toJson({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
