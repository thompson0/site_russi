import { prisma } from "@/lib/prisma";
import { getUserFromCookie, hasRole } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getUserFromCookie();
    
    if (!user) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const contatos = await prisma.contatos.findMany({
      orderBy: { departamento: 'asc' },
    });

    return Response.json(contatos);
  } catch (error) {
    console.error("Erro ao buscar contatos:", error);
    return Response.json({ error: "Erro ao buscar contatos" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await getUserFromCookie();
    
    if (!user || !hasRole(user, ['admin'])) {
      return Response.json({ error: "Sem permissão" }, { status: 403 });
    }

    const { departamento, colaborador, telefone, ramal, email } = await request.json();

    const contato = await prisma.contatos.create({
      data: {
        departamento,
        colaborador,
        telefone,
        ramal,
        email,
      },
    });

    return Response.json(contato, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar contato:", error);
    return Response.json({ error: "Erro ao criar contato" }, { status: 500 });
  }
}
