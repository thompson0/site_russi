import ProdutoVideoCard from "@/components/Videos/ProdutoVideoCard";
import { PlayCircle, Video, Lightbulb, Wrench, GraduationCap } from "lucide-react";

export const revalidate = 60;

async function getVideos() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/videos`, { next: { revalidate } });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function VideosPage() {
  const videos = await getVideos();

  const features = [
    {
      icon: Wrench,
      title: "Instalação",
      description: "Tutoriais passo a passo para instalação de acessórios"
    },
    {
      icon: Lightbulb,
      title: "Dicas Técnicas",
      description: "Orientações profissionais para melhor aproveitamento"
    },
    {
      icon: GraduationCap,
      title: "Treinamento",
      description: "Capacitação para instaladores e profissionais"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
            <Video className="w-4 h-4" />
            <span>Central de Vídeos Informativos</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Aprenda com Nossos
            <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Vídeos Tutoriais
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Acesse nossa biblioteca completa de vídeos informativos e tutoriais técnicos. 
            Conteúdo exclusivo para instaladores, revendedores e profissionais do setor automotivo.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-white/80">
              <PlayCircle className="w-5 h-5 text-blue-300" />
              <span>{videos.length} vídeos disponíveis</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/80">
              <GraduationCap className="w-5 h-5 text-purple-300" />
              <span>Conteúdo profissional</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Biblioteca de Vídeos</h2>
            <p className="text-muted-foreground mt-1">Explore nosso conteúdo técnico e informativo</p>
          </div>
          
          {videos.length > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Video className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {videos.length} {videos.length === 1 ? 'vídeo' : 'vídeos'} encontrado{videos.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>

        {!videos?.length ? (
          <div className="text-center py-16 px-4">
            <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-6">
              <Video className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Nenhum vídeo disponível</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Estamos preparando conteúdo incrível para você. Volte em breve para conferir nossos vídeos tutoriais.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {videos.map((v) => (
              <ProdutoVideoCard key={v.id} video={v} />
            ))}
          </div>
        )}
      </section>

      {videos.length > 0 && (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tem alguma dúvida?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa equipe de suporte técnico está pronta para ajudar você com qualquer questão sobre nossos produtos e instalações.
            </p>
            <a 
              href="/#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
            >
              Entre em Contato
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
