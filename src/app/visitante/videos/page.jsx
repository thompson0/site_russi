"use client";

import { useEffect, useState } from "react";
import ProdutoVideoCard from "@/components/Videos/ProdutoVideoCard";
import NavHome from "@/components/Home/NavHome";
import { VideoCameraIcon } from "@heroicons/react/24/outline";

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

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

      <section className="pt-24 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
