import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { nome, email, senha, permissao } = await req.json();

    if (!nome || !email || !senha) {
      return new Response("Campos obrigatórios ausentes", { status: 400 });
    }

    const existing = await prisma.usuarios.findFirst({ where: { email } });
    if (existing) {
      return new Response("Email já cadastrado", { status: 400 });
    }

    const senhaHash = await bcrypt.hash(senha, 10);
    const novo = await prisma.usuarios.create({
      data: { nome, email, senha: senhaHash, permissao: permissao || "user" },
    });

    const safe = JSON.parse(
      JSON.stringify(novo, (_k, v) => (typeof v === "bigint" ? v.toString() : v))
    );

    return Response.json({ ok: true, user: safe }, { status: 201 });
  } catch (err) {
    if (err?.code === "P2002") {
      return new Response("Email já cadastrado", { status: 400 });
    }
    console.error(err);
    return new Response("Erro ao criar usuário", { status: 500 });
  }
}
