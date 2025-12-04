"use client";

import { useState, useEffect } from "react";
import { 
  GraduationCap, 
  Play, 
  Clock, 
  Filter,
  Search,
  ExternalLink
} from "lucide-react";

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  
  return url;
}

function VideoCard({ video, onPlay }) {
  const thumbnailUrl = video.thumbnail || 
    `https://img.youtube.com/vi/${video.url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1]}/maxresdefault.jpg`;

  return (
    <div 
      className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300 cursor-pointer"
      onClick={() => onPlay(video)}
    >
      <div className="relative aspect-video bg-slate-900">
        {thumbnailUrl && thumbnailUrl !== video.url ? (
          <img 
            src={thumbnailUrl} 
            alt={video.titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
            <GraduationCap className="w-12 h-12 text-white/50" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>

        {video.setor && (
          <span className="absolute top-2 left-2 px-2 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
            {video.setor.nome}
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-white font-medium mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {video.titulo}
        </h3>
        {video.descricao && (
          <p className="text-slate-400 text-sm line-clamp-2">
            {video.descricao}
          </p>
        )}
        {video.criador && (
          <p className="text-slate-500 text-xs mt-2">
            Por: {video.criador.nome}
          </p>
        )}
      </div>
    </div>
  );
}

function VideoModal({ video, onClose }) {
  if (!video) return null;

  const embedUrl = getYouTubeEmbedUrl(video.url);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video bg-black">
          <iframe
            src={embedUrl}
            title={video.titulo}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-2">{video.titulo}</h2>
          {video.descricao && (
            <p className="text-slate-400">{video.descricao}</p>
          )}
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
            {video.setor && (
              <span className="text-sm text-slate-500">
                Setor: {video.setor.nome}
              </span>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TreinamentosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/videos-internos");
        if (res.ok) {
          const data = await res.json();
          setVideos(data);
        }
      } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video =>
    video.titulo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.descricao?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Treinamentos
            </h1>
            <p className="text-slate-400 text-sm">
              Vídeos de treinamento do seu setor
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar treinamentos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        </div>
      ) : filteredVideos.length === 0 ? (
        <div className="text-center py-20">
          <GraduationCap className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Nenhum treinamento encontrado
          </h3>
          <p className="text-slate-400">
            {searchTerm 
              ? "Tente buscar por outros termos" 
              : videos.length === 0 
                ? "Você ainda não possui um setor atribuído ou não há vídeos disponíveis para seu setor. Entre em contato com o RH."
                : "Não há vídeos de treinamento correspondentes à sua busca"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onPlay={setSelectedVideo}
            />
          ))}
        </div>
      )}

      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </div>
  );
}
