"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TagIcon, 
  QrCodeIcon, 
  PlayCircleIcon,
  SparklesIcon,
  CheckBadgeIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import ProdutoVideo from "../Videos/ProdutoVideo";

export default function VisitorProductView({ id }) {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const res = await fetch(`/api/produtos/${id}`);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center space-y-4">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
          </div>
          <p className="text-slate-400 text-lg">Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Card className="max-w-md w-full mx-4 bg-slate-800/50 border-slate-700 backdrop-blur-xl">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">!</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Produto não encontrado</h2>
            <p className="text-slate-400">O produto que você está procurando não existe ou foi removido.</p>
            <Link href="/">
              <Button className="mt-4 bg-blue-600 hover:bg-blue-500">
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-1.5 text-sm backdrop-blur-sm">
            <QrCodeIcon className="w-4 h-4 mr-2" />
            Acesso via QR Code
          </Badge>
          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-1.5 text-sm backdrop-blur-sm">
            <CheckBadgeIcon className="w-4 h-4 mr-2" />
            Produto Oficial Russi
          </Badge>
        </div>

        <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`relative transition-all duration-500 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <img
                      src={produto.foto_url || "/placeholder.png"}
                      alt={produto.nome}
                      className="max-w-full max-h-[350px] object-contain rounded-lg shadow-2xl"
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                  
                  {!imageLoaded && (
                    <div className="w-64 h-64 bg-slate-700/50 rounded-lg animate-pulse flex items-center justify-center">
                      <SparklesIcon className="w-12 h-12 text-slate-600" />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {produto.nome}
                  </h1>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-lg">
                      <TagIcon className="w-5 h-5 text-blue-400" />
                      <span className="text-slate-300 text-sm">Código:</span>
                      <span className="text-white font-mono font-semibold">{produto.codigo}</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Informações</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                      <p className="text-xs text-slate-500 mb-1">Marca</p>
                      <p className="text-white font-medium">Russi Acessórios</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                      <p className="text-xs text-slate-500 mb-1">Qualidade</p>
                      <p className="text-white font-medium">Original</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-4 border border-blue-500/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckBadgeIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Garantia Russi</p>
                      <p className="text-slate-400 text-sm">Produto com garantia estendida e suporte técnico especializado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {produto.video_url && (
              <div className="border-t border-slate-700/50 p-6 sm:p-8 bg-slate-900/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <PlayCircleIcon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Vídeo do Produto</h3>
                    <p className="text-slate-400 text-sm">Veja o produto em detalhes</p>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden border border-slate-700/50 shadow-xl">
                  <ProdutoVideo url={produto.video_url} />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50">
            <Image
              src="/logo_index.png"
              alt="Russi Acessórios"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Russi Acessórios</p>
              <p className="text-slate-400 text-xs">35 anos de excelência</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
