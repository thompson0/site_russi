import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ count: 0 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return Response.json({ count: 0 });
    }

    const count = await prisma.videos_internos.count({
      where: {
        ativo: true,
        ...(decoded.role !== 'admin' && decoded.setor_id ? { setor_id: decoded.setor_id } : {}),
      },
    });

    return Response.json({ count });
  } catch (error) {
    console.error("Erro ao contar vídeos:", error);
    return Response.json({ count: 0 });
  }
}
