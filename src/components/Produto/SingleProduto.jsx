"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgressDemo } from "@/components/ProgressDemo"
import EmbedVideo from "@/components/Produto/EmbedVideo"

export default function SingleProduto() {
    const { id } = useParams()
    const router = useRouter()
    const [produto, setProduto] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProduto() {
            try {
                const baseUrl =
                    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
                const res = await fetch(`${baseUrl}/api/produtos/acessorios/${id}`)

                if (!res.ok) throw new Error("Erro ao buscar produto")

                const data = await res.json()
                setProduto(data)
            } catch (err) {
                console.error("Erro ao carregar produto:", err)
            } finally {
                setLoading(false)
            }
        }

        if (id) fetchProduto()
    }, [id])

    if (loading)
        return (
            <div className="flex flex-col items-center mt-10">
                <p className="text-gray-500 mb-3">Carregando produto...</p>
                <ProgressDemo />
            </div>
        )

    if (!produto)
        return (
            <div className="text-center mt-10 text-gray-500">
                Produto não encontrado.
            </div>
        )

    return (

        <Card className="m-8 min-h-[80vh] flex flex-col">
            <CardHeader>
                <CardTitle className="text-center text-4xl">
                    {produto.nome}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col items-center  text-center gap-6 ">
                <img
                    src={produto.foto_url ? `/static/${produto.foto_url}` : "/placeholder.png"}
                    alt={produto.nome}
                    className="w-96 h-96 object-contain rounded-md border mx-auto"
                />
                {produto?.video_url ? (
                    <EmbedVideo embedUrl={produto.video_url} />
                ) : null}
        
            </CardContent>

            <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline" onClick={() => router.back()}>
                    Voltar
                </Button>
                <Button onClick={() => alert("Função editar futura")}>
                    Editar
                </Button>
            </CardFooter>
        </Card>

    )
}
