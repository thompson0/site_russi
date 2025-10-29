"use client"

import { useEffect, useState } from "react"
import { ProgressDemo } from "@/components/ProgressDemo"
import ProdutoItem from "./ProdutoItem";

function ProdutoCard({ carroId }) {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const baseUrl =
                    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
                const res = await fetch(`${baseUrl}/api/produtos/${carroId}`);

                if (!res.ok) throw new Error("Erro ao buscar produtos");

                const data = await res.json();
                setProdutos(data);
            } catch (error) {
                console.error("Erro:", error);
            } finally {
                setLoading(false);
            }
        }

        if (carroId) {
            fetchProdutos()
        }
    }, [carroId]);

    if (loading)

        return (
            <div>
                <p className="text-center mt-10">Carregando produtos...</p>;
                <ProgressDemo />
            </div>
        )


    if (produtos.length === 0)
        return <p className="text-center mt-10">Nenhuma produto encontrada.</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {produtos.map((produto) => (
                <ProdutoItem key={produto.id} produto={produto}>
                </ProdutoItem>
            ))}
        </div>
    );
}

export default ProdutoCard;