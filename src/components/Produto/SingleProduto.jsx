"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { ProgressDemo } from "@/components/Home/ProgressDemo";
import EditProduto from "./EditProduto";
import QrCodeButton from "./QrCode";
import { useRefresh } from "@/context/RefreshContext";
import ProdutoVideo from "../Videos/ProdutoVideo";
import ImageCarousel from "@/components/ui/ImageCarousel";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function SingleProduto({ id, qrcode = false }) {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    async function fetchData() {
      try {
        const [produtoRes, userRes] = await Promise.all([
          fetch(`/api/produtos/${id}?k=${refreshKey}`),
          fetch("/api/me")
        ]);

        if (produtoRes.ok) {
          const data = await produtoRes.json();
          setProduto(data);
        }

        if (userRes.ok) {
          const userData = await userRes.json();
          setIsAdmin(userData.role === "admin");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id, refreshKey]);

  if (loading)
    return (
      <div className="text-center mt-10">
        <p className="text-gray-400 mb-4">Carregando produto...</p>
        <ProgressDemo />
      </div>
    );

  if (!produto)
    return <p className="text-center text-gray-400 mt-10">Produto não encontrado.</p>;

  const images = produto.fotos?.length > 0 
    ? produto.fotos.map(f => f.foto_url)
    : (produto.foto_url ? [produto.foto_url] : []);
        
  return (
    <div className="flex justify-center items-start min-h-full">
      <Card className="max-w-4xl w-full shadow-lg">

        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">{produto.nome}</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-4">
          <div className="w-full max-w-md">
            <ImageCarousel 
              images={images}
              aspectRatio="aspect-square"
              showThumbnails={images.length > 1}
            />
          </div>

          <p className="text-lg">
            <strong>Código:</strong> {produto.codigo}
          </p>

          <ProdutoVideo url={produto.video_url} />
        </CardContent>

        {!qrcode && (
          <CardFooter className="flex justify-between">
            {isAdmin ? (
              <>
                <EditProduto produto={produto} />
                <QrCodeButton
                  url={`${baseUrl}/visitante/produto/${id}`}
                  productname={produto.nome}
                />
              </>
            ) : (
              <QrCodeButton
                url={`${baseUrl}/visitante/produto/${id}`}
                productname={produto.nome}
              />
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
