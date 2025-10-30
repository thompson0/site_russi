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

        <div className="h-screen flex flex-col">
            <CardHeader className="py-4">
                <CardTitle className="text-center text-4xl">{produto.nome}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col flex-grow items-center justify-center gap-6 overflow-hidden">
            
                <img
                    src={produto.foto_url ? `/static/${produto.foto_url}` : "/placeholder.png"}
                    alt={produto.nome}
                    className="max-w-[80%] max-h-[40vh] object-contain rounded-md border"
                />

                {produto?.video_url && (
                    <div className="w-full flex justify-center">
                        <div className="w-[80%] h-[40vh] rounded-lg overflow-hidden">
                            <EmbedVideo embedUrl={produto.video_url} />
                        </div>
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-between border-t py-4 px-8">
                <Button variant="outline" onClick={() => router.back()}>
                    Voltar
                </Button>
            </CardFooter>
        </div>

    )
}
