import { prisma } from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function DELETE(req) {
  try {
    const user = await getUserFromCookie();
    if (!user) return new Response("Não autorizado", { status: 401 });

    const { id } = await req.json();

    if (!id || isNaN(id)) {
      console.error("ID inválido recebido:", id);
      return new Response("ID inválido", { status: 400 });
    }
    if (user.permissao !== "admin")
      return new Response("Acesso negado", { status: 403 });

    await prisma.usuarios.delete({
      where: { id: BigInt(id) },
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return new Response("Erro ao deletar usuário", { status: 500 });
  }
}
