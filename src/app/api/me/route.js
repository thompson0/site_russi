import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return Response.json({ error: "Token inválido" }, { status: 401 });
    }

    const user = await prisma.usuarios.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        nome: true,
        email: true,
        role: true,
        setor_id: true,
        setor: {
          select: {
            id: true,
            nome: true,
          },
        },
      },
    });

    if (!user) {
      return Response.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    return Response.json({
      id: Number(user.id),
      nome: user.nome,
      email: user.email,
      role: user.role,
      setor_id: user.setor_id ? Number(user.setor_id) : null,
      setor: user.setor,
    });

  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
