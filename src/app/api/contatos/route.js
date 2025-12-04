import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export const revalidate = 0;

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return Response.json({ error: "Token inválido" }, { status: 401 });
    }

    const contatos = await prisma.contatos.findMany({
      orderBy: { departamento: 'asc' },
    });

    return new Response(
      JSON.stringify(
        contatos.map(c => ({
          id: Number(c.id),
          departamento: c.departamento,
          colaborador: c.colaborador,
          telefone: c.telefone,
          ramal: c.ramal,
          email: c.email,
        })),
        (_, v) => (typeof v === "bigint" ? Number(v) : v)
      ),
      {
        headers: {
          "Cache-Control": "no-store",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erro ao buscar contatos:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ error: "Não autorizado" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== "admin") {
      return Response.json({ error: "Apenas administradores podem criar contatos" }, { status: 403 });
    }

    const { departamento, colaborador, telefone, ramal, email } = await req.json();

    if (!departamento || !departamento.trim()) {
      return Response.json({ error: "Nome do departamento é obrigatório" }, { status: 400 });
    }

    const novoContato = await prisma.contatos.create({
      data: {
        departamento: departamento.trim(),
        colaborador: colaborador?.trim() || null,
        telefone: telefone?.trim() || null,
        ramal: ramal?.trim() || null,
        email: email?.trim() || null,
      },
    });

    return Response.json({
      id: Number(novoContato.id),
      departamento: novoContato.departamento,
      colaborador: novoContato.colaborador,
      telefone: novoContato.telefone,
      ramal: novoContato.ramal,
      email: novoContato.email,
    }, { status: 201 });

  } catch (error) {
    console.error("Erro ao criar contato:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
