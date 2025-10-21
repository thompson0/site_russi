import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

import { prisma } from "@/lib/prisma";

export async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    const user = await prisma.usuarios.findUnique({
      where: { id: decoded.id },
    });
    return user;
  } catch (err) {
    console.error("Token inválido:", err);
    return null;
  }
}