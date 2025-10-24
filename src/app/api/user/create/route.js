import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { nome, email, senha, permissao = "user" } = await req.json();

    if (!nome || !email || !senha) {
      return new Response("Campos obrigatórios ausentes", { status: 400 });
    }

    const existing = await prisma.usuarios.findUnique({ where: { email } });
    if (existing) {
      return new Response("Email já cadastrado", { status: 400 });
    }

    const senhaHash = await bcrypt.hash(senha, 10);
    const novo = await prisma.usuarios.create({
      data: { nome, email, senha: senhaHash, permissao },
    });

    return Response.json({ ok: true, user: novo });
  } catch (err) {
    console.error(err);
    return new Response("Erro ao criar usuário", { status: 500 });
  }
}
