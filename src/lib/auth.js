import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { cache } from "react";
import { prisma } from "@/lib/prisma";

export const getUserFromCookie = cache(async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = verifyToken(token);
    const user = await prisma.usuarios.findUnique({
      where: { id: decoded.id },
      include: {
        setor: true,
      },
    });
    return user;
  } catch (err) {
    console.error("Token inválido:", err);
    return null;
  }
});

export function hasRole(user, allowedRoles) {
  if (!user || !user.role) return false;
  return allowedRoles.includes(user.role);
}

export function canManageUser(currentUser, targetUserRole, targetSetorId = null) {
  if (!currentUser) return false;
  
  if (currentUser.role === 'admin') return true;
  
  if (currentUser.role === 'supervisor') {
    if (targetUserRole !== 'vendedor_interno') {
      return false;
    }
    if (targetSetorId && currentUser.setor_id) {
      return BigInt(targetSetorId) === currentUser.setor_id;
    }
    return true;
  }
  
  return false;
}

export function canAccessSectorVideos(user, videoSetorId) {
  if (!user) return false;
  
  if (user.role === 'admin') return true;
  
  if (!videoSetorId) return true;
  
  return user.setor_id === videoSetorId;
}

export function canAccessAdminSection(user, section) {
  if (!user) return false;
  
  if (user.role === 'admin') return true;
  
  if (user.role === 'supervisor') {
    const allowedSections = ['videos-internos', 'user', 'rh'];
    return allowedSections.includes(section);
  }
  
  return false;
}
