import { prisma } from "@/lib/prisma";

import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";
import { serialize } from "cookie";

export async function POST(req) {


  const { email, senha } = await req.json();

 const user = await prisma.usuarios.findFirst({
    where: { email },
  });

  if (!user) {
    return new Response(JSON.stringify({ message: "Usuário não encontrado" }), {
      status: 401,
    });
  }


  const isValid = await bcrypt.compare(senha, user.senha);
  if (!isValid) {
    return new Response(JSON.stringify({ message: "Senha incorreta ou E-mail incorretos" }), {
      status: 401,
    });
  }

  const token = signToken({ id: user.id, permissao: user.permissao });
  const cookie = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600,
    path: "/",
  });

  return new Response(
    JSON.stringify({ message: "Login feito com sucesso", permissao: user.permissao }),
    {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
        "Content-Type": "application/json",
      },
    }
  );
}
