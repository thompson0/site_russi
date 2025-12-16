import { prisma } from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const usePagination = searchParams.has("page") || searchParams.has("limit");
    
    if (usePagination) {
      const page = parseInt(searchParams.get("page") || "1", 10);
      const limit = parseInt(searchParams.get("limit") || "12", 10);
      const skip = (page - 1) * limit;

      const [produtos, total] = await Promise.all([
        prisma.produtos.findMany({
          select: { 
            id: true, 
            nome: true, 
            codigo: true, 
            foto_url: true,
            views: true,
          },
          orderBy: { id: 'desc' },
          skip,
          take: limit,
        }),
        prisma.produtos.count(),
      ]);

      const normalized = produtos.map((p) => ({
        ...p,
        views: typeof p.views === "number" ? p.views : 0,
      }));

      const response = {
        produtos: normalized,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
          hasMore: skip + produtos.length < total,
        },
      };

      return new Response(
        JSON.stringify(response, (_, v) => (typeof v === "bigint" ? Number(v) : v)),
        {
          headers: {
            "Cache-Control": "public, max-age=60, s-maxage=3600, stale-while-revalidate=600",
            "Content-Type": "application/json",
          },
        }
      );
    }

    const produtos = await prisma.produtos.findMany({
      select: { 
        id: true, 
        nome: true, 
        codigo: true, 
        foto_url: true, 
        video_url: true, 
        views: true,
      },
      orderBy: { id: 'desc' },
    });

    const normalized = produtos.map((p) => ({
      ...p,
      views: typeof p.views === "number" ? p.views : 0,
    }));

    return new Response(
      JSON.stringify(normalized, (_, v) => (typeof v === "bigint" ? Number(v) : v)),
      {
        headers: {
          "Cache-Control": "public, max-age=60, s-maxage=3600, stale-while-revalidate=600",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("erro:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
