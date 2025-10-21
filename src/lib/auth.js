import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { cache } from "react";
import { prisma } from "@/lib/prisma";

export const getUserFromCookie = cache(async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    const user = await prisma.usuarios.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        nome: true,
        username: true,
        permissao: true,
      },
    });
    return user;
  } catch (err) {
    console.error("Token inválido:", err);
    return null;
  }
});
