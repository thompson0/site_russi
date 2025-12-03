import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const setores = await prisma.setores.findMany({
      orderBy: { nome: "asc" },
    });
    return NextResponse.json(setores);
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return NextResponse.json(
      { error: "Erro ao buscar setores" },
      { status: 500 }
    );
  }
}
