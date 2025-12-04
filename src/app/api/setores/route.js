import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const setores = await prisma.setores.findMany({
      orderBy: { nome: "asc" },
    });

    const formattedSetores = setores.map(setor => ({
      id: Number(setor.id),
      nome: setor.nome,
      descricao: setor.descricao,
    }));

    return NextResponse.json(formattedSetores);
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return NextResponse.json(
      { error: "Erro ao buscar setores" },
      { status: 500 }
    );
  }
}
