"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { ProgressDemo } from "@/components/ProgressDemo";
import EditProduto from "./EditProduto";
import QrCodeButton from "./QrCode";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export default function SingleProduto({ id }) {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/produtos/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar produto");
        const data = await res.json();
        setProduto(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto();
  }, [id]);

  if (loading)
    return (
      <div className="text-center mt-10">
        <p className="text-gray-400 mb-4">Carregando produto...</p>
        <ProgressDemo />
      </div>
    );

  if (!produto)
    return <p className="text-center text-gray-400 mt-10">Produto não encontrado.</p>;

  return (
    <Card className="max-w-4xl mx-auto mt-10 p-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{produto.nome}</CardTitle>
      </CardHeader>
     

      <CardContent className="space-y-4">
        <img
          src={produto.foto_url || "/placeholder.png"}
          alt={produto.nome}
          className="mx-auto w-64 h-64 object-contain"
        />

        <p><strong>Código:</strong> {produto.codigo}</p>

        {produto.video_url && (
          <video
            src={produto.video_url}
            controls
            className="w-full rounded-lg mt-4"
          />
        )}
        <CardFooter className="flex justify-between">

        <EditProduto produto={produto}></EditProduto>
           <QrCodeButton url={`${baseUrl}/visitante/produtos/${id}`} productname={produto.nome}></QrCodeButton>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
