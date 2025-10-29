"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ProgressDemo } from "@/components/ProgressDemo"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import * as React from "react"
import { Button } from "../ui/button"
import { Separator } from "@radix-ui/react-dropdown-menu"
export default function AllCarros() {
  const [carros, setCarros] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCarros() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        const res = await fetch(`${baseUrl}/api/carros`)
        if (!res.ok) throw new Error("Erro ao buscar carros")

        const data = await res.json()
        setCarros(data)
      } catch (err) {
        console.error("Erro ao buscar carros:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchCarros()
  }, [])

  if (loading) {
    return (
      <div className="text-center mt-10">
        <p>Carregando carros...</p>
        <ProgressDemo />
      </div>
    )
  }

  if (carros.length === 0) {
    return <p className="text-center mt-10">Nenhum carro encontrado.</p>
  }

  return (
    <ScrollArea className="w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Carros</h4>

        {carros.map((carro) => (
          <React.Fragment key={carro.id}>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <img
                  src={carro.foto_url || carro.imagem || "/no-image.png"}
                  alt={carro.nome || "Carro"}
                  className="w-10 h-10 object-cover rounded-md border"
                />
                <div>
                  <p className="font-medium">{carro.nome || "Sem nome"}</p>
                  <p className="text-xs text-muted-foreground">
                    {carro.versao || "Sem versão"} •{" "}
                    {carro.ano_de && carro.ano_ate
                      ? `${carro.ano_de} - ${carro.ano_ate}`
                      : "Ano não informado"}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                <Link href={`/admin/produtos/${carro.id}`}>
                  <Button size="sm" variant="secondary">
                    Ver Produtos
                  </Button>
                </Link>
                <Link href={`/admin/carros/${carro.id}/editar`}>
                  <Button size="sm" variant="outline">
                    Editar
                  </Button>
                </Link>
              </div>
            </div>

            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
