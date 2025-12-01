import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";
import { serialize } from "cookie";
import crypto from "crypto";

export async function POST(req) {
  const { email, senha } = await req.json();

  const user = await prisma.usuarios.findUnique({
    where: { email },
  });

  if (!user) {
    return new Response(JSON.stringify({ message: "Usuário não encontrado" }), {
      status: 401,
    });
  }

  const hash = user.senha;
  let isValid = false;


  if (hash.startsWith("$2a$") || hash.startsWith("$2b$") || hash.startsWith("$2y$")) {
    isValid = await bcrypt.compare(senha, hash);
  }


 
  else if (hash.startsWith("scrypt:")) {
  
    const [meta, salt, storedKey] = hash.replace("scrypt:", "").split("$");
    const [N, r, p] = meta.split(":").map(Number);

    const derivedKey = crypto.scryptSync(senha, salt, storedKey.length / 2, {
      cost: N,
      blockSize: r,
      parallelization: p,
      maxmem: 64 * 1024 * 1024 
    });

    isValid = crypto.timingSafeEqual(
      Buffer.from(storedKey, "hex"),
      derivedKey
    );
  }


  else {
    return new Response(JSON.stringify({ message: "Hash inválido ou desconhecido" }), {
      status: 500,
    });
  }

  if (!isValid) {
    return new Response(JSON.stringify({ message: "Senha incorreta ou E-mail incorretos" }), {
      status: 401,
    });
  }

  const token = signToken({ id: Number(user.id), permissao: user.permissao });

  const cookie = serialize("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
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
