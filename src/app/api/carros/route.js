import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { cookies } from "next/headers"
import { verifyToken } from "@/lib/jwt"

function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (_, v) => (typeof v === "bigint" ? Number(v) : v))
  )
}

async function requireAdmin() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  if (!token) {
    return { error: "Não autorizado", status: 401 }
  }

  const decoded = verifyToken(token)
  if (!decoded || decoded.role !== "admin") {
    return { error: "Apenas administradores podem realizar esta ação", status: 403 }
  }

  return { user: decoded }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (id) {
      const carro = await prisma.carros.findUnique({
        where: { id: BigInt(id) },
        select: {
          id: true,
          nome: true,
          ano_de: true,
          ano_ate: true,
          versao: true,
          montadora_id: true,
          foto_url: true,
          imagem: true,
          fotos: {
            select: { id: true, foto_url: true, ordem: true },
            orderBy: { ordem: 'asc' }
          },
        },
      })

      if (!carro) {
        return NextResponse.json({ error: "Carro não encontrado" }, { status: 404 })
      }

      return NextResponse.json(serializeBigInt(carro), {
        headers: {
          "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=120",
          "Content-Type": "application/json",
        },
      })
    }

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
        fotos: {
          select: { id: true, foto_url: true, ordem: true },
          orderBy: { ordem: 'asc' }
        },
      },
      orderBy: { nome: 'asc' },
    })

    return NextResponse.json(serializeBigInt(carros), {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=120",
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
    const authResult = await requireAdmin()
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: authResult.status })
    }

    const body = await req.json()
    const { nome, ano_de, ano_ate, versao, montadora_id, foto_url, imagem, fotos } = body

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
        foto_url: fotos?.[0] || foto_url,
        imagem,
        fotos: fotos?.length > 0 ? {
          create: fotos.map((url, index) => ({
            foto_url: url,
            ordem: index
          }))
        } : undefined,
      },
      include: {
        fotos: { orderBy: { ordem: 'asc' } }
      }
    })

    return NextResponse.json(serializeBigInt(novoCarro), { 
      status: 201,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Erro ao criar carro:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(req) {
  try {
    const authResult = await requireAdmin()
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: authResult.status })
    }

    const body = await req.json()
    const { id, fotos, ...dados } = body

    if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 })

    const updateData = {
      ...dados,
      ano_de: dados.ano_de ? BigInt(dados.ano_de) : undefined,
      ano_ate: dados.ano_ate ? BigInt(dados.ano_ate) : undefined,
      montadora_id: dados.montadora_id ? BigInt(dados.montadora_id) : undefined,
    }

    // Only update photos if fotos array is explicitly provided (not undefined)
    // This prevents accidental deletion when form submits without photo changes
    if (fotos !== undefined) {
      const validFotos = Array.isArray(fotos) ? fotos.filter(url => url && url.trim() !== '') : []
      
      // Delete existing photos and recreate
      await prisma.carro_fotos.deleteMany({ where: { carro_id: BigInt(id) } })
      
      if (validFotos.length > 0) {
        updateData.foto_url = validFotos[0]
        updateData.fotos = {
          create: validFotos.map((url, index) => ({
            foto_url: url,
            ordem: index
          }))
        }
      } else {
        updateData.foto_url = dados.foto_url || null
      }
    }

    const carroAtualizado = await prisma.carros.update({
      where: { id: BigInt(id) },
      data: updateData,
      include: {
        fotos: { orderBy: { ordem: 'asc' } }
      }
    })

    return NextResponse.json(serializeBigInt(carroAtualizado), {
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Erro ao atualizar carro:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


export async function DELETE(req) {
  try {
    const authResult = await requireAdmin()
    if (authResult.error) {
      return NextResponse.json({ error: authResult.error }, { status: authResult.status })
    }

    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 })

    await prisma.$transaction([
      prisma.carro_fotos.deleteMany({ where: { carro_id: BigInt(id) } }),
      prisma.carro_produtos.deleteMany({ where: { carro_id: BigInt(id) } }),
      prisma.carros.delete({ where: { id: BigInt(id) } }),
    ])

    return NextResponse.json({ message: "Carro deletado com sucesso" }, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Erro ao deletar carro:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
