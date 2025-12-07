import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { getUserFromCookie, hasRole, canManageUser } from "@/lib/auth";

export async function POST(req) {
  try {
    const currentUser = await getUserFromCookie();
    
    if (!currentUser || !hasRole(currentUser, ['admin', 'supervisor'])) {
      return new Response("Sem permissão", { status: 403 });
    }

    const { nome, email, senha, permissao, role, setor_id } = await req.json();

    if (!nome || !email || !senha) {
      return new Response("Campos obrigatórios ausentes", { status: 400 });
    }

    const targetRole = role || 'vendedor_interno';
    
    if (currentUser.role === 'supervisor') {
      if (targetRole !== 'vendedor_interno') {
        return new Response("Supervisores só podem criar usuários do tipo Vendedor Interno", { status: 403 });
      }
      
      if (!currentUser.setor_id) {
        return new Response("Você precisa estar associado a um setor para criar usuários", { status: 403 });
      }
      
      if (setor_id && BigInt(setor_id) !== currentUser.setor_id) {
        return new Response("Você só pode criar usuários para o seu próprio setor", { status: 403 });
      }
    }

    if (!canManageUser(currentUser, targetRole, setor_id)) {
      return new Response("Sem permissão para criar usuário com este cargo", { status: 403 });
    }

    const existing = await prisma.usuarios.findFirst({ where: { email } });
    if (existing) {
      return new Response("Email já cadastrado", { status: 400 });
    }

    const senhaHash = await bcrypt.hash(senha, 10);
    
    const finalSetorId = currentUser.role === 'supervisor' 
      ? currentUser.setor_id 
      : (setor_id ? BigInt(setor_id) : null);

    const novo = await prisma.usuarios.create({
      data: { 
        nome, 
        email, 
        senha: senhaHash, 
        permissao: permissao || "user",
        role: targetRole,
        setor_id: finalSetorId,
      },
      include: {
        setor: true,
      },
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
