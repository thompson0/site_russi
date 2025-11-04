import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (_, v) => (typeof v === "bigint" ? Number(v) : v))
  )
}

export async function GET() {
  try {
    const carros = await prisma.carros.findMany({
      select: {
        id: true,
        nome: true,
        ano_de: true,
        ano_ate: true,
        versao: true,
        montadora_id: true,
        foto_url: true,
        imagem: true,
      },
    })

    return NextResponse.json(serializeBigInt(carros), {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=3600, stale-while-revalidate=600",
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Erro ao buscar carros:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


export async function POST(req) {
  try {
    const body = await req.json()
    const { nome, ano_de, ano_ate, versao, montadora_id, foto_url, imagem } = body

    const anoDeVal = ano_de !== undefined && ano_de !== null && `${ano_de}` !== ""
      ? BigInt(ano_de)
      : null
    const anoAteVal = ano_ate !== undefined && ano_ate !== null && `${ano_ate}` !== ""
      ? BigInt(ano_ate)
      : null
    const montadoraIdVal = montadora_id !== undefined && montadora_id !== null && `${montadora_id}` !== ""
      ? BigInt(montadora_id)
      : null

    const novoCarro = await prisma.carros.create({
      data: {
        nome,
        ano_de: anoDeVal,
        ano_ate: anoAteVal,
        versao,
        montadora_id: montadoraIdVal,
        foto_url,
        imagem,
      },
    })

    return NextResponse.json(serializeBigInt(novoCarro), { status: 201 })
  } catch (error) {
    console.error("Erro ao criar carro:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(req) {
  try {
    const body = await req.json()
    const { id, ...dados } = body

    if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 })

    const carroAtualizado = await prisma.carros.update({
      where: { id: BigInt(id) },
      data: {
        ...dados,
        ano_de: dados.ano_de ? BigInt(dados.ano_de) : undefined,
        ano_ate: dados.ano_ate ? BigInt(dados.ano_ate) : undefined,
        montadora_id: dados.montadora_id ? BigInt(dados.montadora_id) : undefined,
      },
    })

    return NextResponse.json(serializeBigInt(carroAtualizado))
  } catch (error) {
    console.error("Erro ao atualizar carro:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 })

    await prisma.$transaction([
      prisma.carro_produtos.deleteMany({ where: { carro_id: BigInt(id) } }),
      prisma.carros.delete({ where: { id: BigInt(id) } }),
    ])

    return NextResponse.json({ message: "Carro deletado com sucesso" })
  } catch (error) {
    console.error("Erro ao deletar carro:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
