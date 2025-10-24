import { prisma } from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const user = await getUserFromCookie();
    if (!user) return new Response("Não autorizado", { status: 401 });

    const { nome, email, senha } = await req.json();

    const data = {};
    if (typeof nome !== "undefined") data.nome = nome;
    if (typeof email !== "undefined") data.email = email;
    if (senha && senha.trim() !== "") {
      const hash = await bcrypt.hash(senha, 10);
      data.senha = hash;
    }

    await prisma.usuarios.update({
      where: { id: user.id },
      data,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return new Response("Erro ao atualizar usuário", { status: 500 });
  }
}
