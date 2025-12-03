"use client";

import { useEffect, useState } from "react";
import ProdutoVideoCard from "@/components/Videos/ProdutoVideoCard";
import NavHome from "@/components/Home/NavHome";
import {
  PlayCircleIcon,
  VideoCameraIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const features = [
    {
      icon: WrenchScrewdriverIcon,
      title: "Instalação",
      description: "Tutoriais passo a passo para instalação de acessórios",
    },
    {
      icon: LightBulbIcon,
      title: "Dicas Técnicas",
      description: "Orientações profissionais para melhor aproveitamento",
    },
    {
      icon: AcademicCapIcon,
      title: "Treinamento",
      description: "Capacitação para instaladores e profissionais",
    },
  ];

  async function fetchVideos() {
    try {
      const res = await fetch("/api/videos", { cache: "no-store" });
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.error("Erro ao buscar vídeos:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen">
      <NavHome />
      
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
            <VideoCameraIcon className="w-4 h-4" />
            <span>Central de Vídeos Informativos</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Aprenda com Nossos
            <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Vídeos Tutoriais
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Acesse nossa biblioteca completa de vídeos informativos e tutoriais
            técnicos. Conteúdo exclusivo para instaladores, revendedores e
            profissionais do setor automotivo.
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-blue-100/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

   
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Biblioteca de Vídeos
            </h2>
            <p className="text-muted-foreground mt-1">
              Explore nosso conteúdo técnico e informativo
            </p>
          </div>

          {videos.length > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <VideoCameraIcon className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {videos.length} vídeos disponíveis
              </span>
            </div>
          )}
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground py-10">
            Carregando vídeos...
          </p>
        ) : !videos.length ? (
          <div className="text-center py-16 px-4">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum vídeo disponível
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {videos.map((v) => (
              <ProdutoVideoCard key={v.id} video={v} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
