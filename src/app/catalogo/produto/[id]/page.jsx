"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, QrCode, Play, Package, Download } from "lucide-react";

export default function CatalogoProdutoDetalhePage() {
  const params = useParams();
  const produtoId = params.id;
  
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const res = await fetch(`/api/produtos/${produtoId}`);
        if (res.ok) {
          const data = await res.json();
          setProduto(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto();
  }, [produtoId]);

  const getEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
    }
    return url;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <p className="text-white font-medium mb-1">Produto não encontrado</p>
          <Link
            href="/catalogo/montadoras"
            className="text-green-400 hover:text-green-300 text-sm"
          >
            Voltar ao catálogo
          </Link>
        </div>
      </div>
    );
  }

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const qrUrl = `${baseUrl}/visitante/produto/${produtoId}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar
        </button>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gray-50 flex items-center justify-center p-8 relative">
            {showVideo && produto.video_url ? (
              <iframe
                src={getEmbedUrl(produto.video_url)}
                title={produto.nome}
                className="w-full h-full absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={produto.foto_url || "/placeholder.png"}
                  alt={produto.nome}
                  className="max-w-full max-h-full object-contain"
                />
                {produto.video_url && (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    Ver vídeo
                  </button>
                )}
              </>
            )}
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {produto.nome}
                </h1>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-mono font-medium">
                    Código: {produto.codigo}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => setShowQR(!showQR)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                  showQR 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <QrCode className="w-5 h-5" />
                {showQR ? 'Ocultar QR' : 'Gerar QR Code'}
              </button>
            </div>

            {showQR && (
              <div className="mb-6 p-6 bg-gray-50 rounded-2xl text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Escaneie o QR Code para acessar a página pública do produto
                </p>
                <div className="inline-block p-4 bg-white rounded-xl shadow-md">
                  <img
                    id="qr-code-image"
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrUrl)}`}
                    alt="QR Code do produto"
                    className="w-48 h-48"
                  />
                </div>
                <p className="mt-4 text-xs text-gray-400 break-all max-w-md mx-auto">
                  {qrUrl}
                </p>
                <a
                  href={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=${encodeURIComponent(qrUrl)}`}
                  download={`qrcode-${produto.codigo}.png`}
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Baixar QR Code
                </a>
              </div>
            )}

            {produto.descricao && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Descrição</h2>
                <p className="text-gray-600 leading-relaxed">{produto.descricao}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100">
              <Link
                href="/catalogo/montadoras"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao catálogo
              </Link>
              
              {produto.video_url && !showVideo && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Ver vídeo de instalação
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
