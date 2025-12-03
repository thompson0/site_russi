"use client";

import { useState, useEffect } from "react";
import { 
  BookOpen, 
  Video, 
  HelpCircle, 
  Phone, 
  FileText,
  ChevronDown,
  ChevronUp,
  Play,
  Mail,
  Building2
} from "lucide-react";

function TabButton({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
        active 
          ? "bg-blue-500 text-white" 
          : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function VideoRHCard({ video }) {
  const [playing, setPlaying] = useState(false);

  const getEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
      {playing ? (
        <div className="aspect-video">
          <iframe
            src={getEmbedUrl(video.url)}
            title={video.titulo}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div 
          className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center cursor-pointer group"
          onClick={() => setPlaying(true)}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      )}
      
      <div className="p-4">
        <span className="text-xs text-purple-400 font-medium">{video.categoria}</span>
        <h3 className="text-white font-medium mt-1">{video.titulo}</h3>
        {video.descricao && (
          <p className="text-slate-400 text-sm mt-1">{video.descricao}</p>
        )}
      </div>
    </div>
  );
}

function FAQItem({ duvida }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <span className="text-white font-medium pr-4">{duvida.pergunta}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      
      {open && (
        <div className="px-4 pb-4 border-t border-slate-700/50 pt-4">
          <p className="text-slate-300">{duvida.resposta}</p>
        </div>
      )}
    </div>
  );
}

function ManualCard({ manual }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
        <FileText className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">{manual.titulo}</h3>
      {manual.descricao && (
        <p className="text-slate-400 text-sm mb-4">{manual.descricao}</p>
      )}
      {manual.conteudo && (
        <div className="text-slate-300 text-sm prose prose-invert prose-sm max-w-none">
          {manual.conteudo.substring(0, 200)}...
        </div>
      )}
    </div>
  );
}

function ContatoCard({ contato }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-all">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
          <Building2 className="w-5 h-5 text-orange-400" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium">{contato.departamento}</h3>
          {contato.colaborador && (
            <p className="text-slate-400 text-sm">{contato.colaborador}</p>
          )}
          
          <div className="mt-2 space-y-1">
            {contato.ramal && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-slate-500" />
                <span className="text-slate-300">Ramal: {contato.ramal}</span>
              </div>
            )}
            {contato.telefone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-slate-500" />
                <span className="text-slate-300">{contato.telefone}</span>
              </div>
            )}
            {contato.email && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-slate-500" />
                <span className="text-slate-300 truncate">{contato.email}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecursosPage() {
  const [activeTab, setActiveTab] = useState("rh");
  const [rhVideos, setRhVideos] = useState([]);
  const [duvidas, setDuvidas] = useState([]);
  const [manuais, setManuais] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [rhRes, duvidasRes, manuaisRes, contatosRes] = await Promise.all([
          fetch("/api/rh"),
          fetch("/api/comum/duvidas"),
          fetch("/api/comum/manuais"),
          fetch("/api/comum/contatos"),
        ]);

        if (rhRes.ok) setRhVideos(await rhRes.json());
        if (duvidasRes.ok) setDuvidas(await duvidasRes.json());
        if (manuaisRes.ok) setManuais(await manuaisRes.json());
        if (contatosRes.ok) setContatos(await contatosRes.json());
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const tabs = [
    { id: "rh", label: "Procedimentos RH", icon: Video },
    { id: "manuais", label: "Manuais", icon: FileText },
    { id: "faq", label: "Dúvidas Frequentes", icon: HelpCircle },
    { id: "contatos", label: "Ramais e Contatos", icon: Phone },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Recursos & RH
            </h1>
            <p className="text-slate-400 text-sm">
              Procedimentos, manuais e informações importantes
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            icon={tab.icon}
            label={tab.label}
          />
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        </div>
      ) : (
        <>
          {activeTab === "rh" && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Vídeos de Procedimentos do RH</h2>
              {rhVideos.length === 0 ? (
                <p className="text-slate-400">Nenhum vídeo de RH disponível.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rhVideos.map((video) => (
                    <VideoRHCard key={video.id} video={video} />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "manuais" && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Manuais e Apostilas</h2>
              {manuais.length === 0 ? (
                <p className="text-slate-400">Nenhum manual disponível.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {manuais.map((manual) => (
                    <ManualCard key={manual.id} manual={manual} />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "faq" && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Dúvidas Frequentes</h2>
              {duvidas.length === 0 ? (
                <p className="text-slate-400">Nenhuma dúvida frequente cadastrada.</p>
              ) : (
                <div className="space-y-3">
                  {duvidas.map((duvida) => (
                    <FAQItem key={duvida.id} duvida={duvida} />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "contatos" && (
            <div id="contatos">
              <h2 className="text-xl font-semibold text-white mb-4">Ramais e Contatos</h2>
              {contatos.length === 0 ? (
                <p className="text-slate-400">Nenhum contato cadastrado.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {contatos.map((contato) => (
                    <ContatoCard key={contato.id} contato={contato} />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
