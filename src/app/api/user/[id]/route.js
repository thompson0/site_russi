import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function GET(req, context) {
  const { params } = await context 

  try {
    const user = await prisma.usuarios.findUnique({
      where: { id: BigInt(params.id) },
    })

    if (!user) return new Response("Usuário não encontrado", { status: 404 })

    const safeUser = JSON.parse(
      JSON.stringify(user, (_, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    )

    return new Response(JSON.stringify(safeUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("Erro ao buscar usuário:", err)
    return new Response("Erro interno ao buscar usuário", { status: 500 })
  }
}

export async function PUT(req, context) {
  const { params } = await context 

  try {
    const { nome, email, senha, permissao, role, setor_id } = await req.json()
    const data = {}

    if (nome) data.nome = nome
    if (email) data.email = email
    if (permissao) data.permissao = permissao
    if (role) data.role = role
    if (setor_id !== undefined) {
      data.setor_id = setor_id === null ? null : parseInt(setor_id)
    }
    if (senha && senha.trim() !== "") {
      const hash = await bcrypt.hash(senha, 10)
      data.senha = hash
    }

    const updated = await prisma.usuarios.update({
      where: { id: BigInt(params.id) },
      data,
    })


    const safeUser = JSON.parse(
      JSON.stringify(updated, (_, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    )

    return new Response(JSON.stringify({ ok: true, user: safeUser }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("Erro ao atualizar usuário:", err)
    return new Response("Erro interno ao atualizar usuário", { status: 500 })
  }
}
