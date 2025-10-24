import { prisma } from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const user = await getUserFromCookie(); 
    if (!user) return new Response("Não autorizado", { status: 401 });

    const { id } = await req.json(); 


    if (user.permissao !== "admin")
      return new Response("Acesso negado", { status: 403 });

    await prisma.usuarios.delete({
      where: { id: typeof id === "bigint" ? id : BigInt(id) },
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return new Response("Erro ao deletar usuário", { status: 500 });
  }
}
