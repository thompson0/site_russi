"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Phone,
  Video,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Play,
  Mail,
  Building2,
  Car,
  User,
  Clock,
  Users,
  Briefcase
} from "lucide-react";

const STATIC_FAQ = [
  {
    id: 1,
    pergunta: "Como faço para solicitar férias?",
    resposta: "Para solicitar férias, acesse o sistema de RH ou entre em contato diretamente com o departamento de Recursos Humanos pelo ramal 201. É necessário fazer a solicitação com pelo menos 30 dias de antecedência."
  },
  {
    id: 2,
    pergunta: "Qual é o horário de funcionamento da empresa?",
    resposta: "O horário de funcionamento é de segunda a sexta-feira, das 8h às 18h. O horário de almoço é das 12h às 13h30."
  },
  {
    id: 3,
    pergunta: "Como solicitar materiais de escritório?",
    resposta: "Os materiais de escritório devem ser solicitados através do seu supervisor direto, que encaminhará o pedido para o departamento Administrativo."
  },
  {
    id: 4,
    pergunta: "Como funciona o vale-transporte e vale-refeição?",
    resposta: "Os benefícios são creditados no início de cada mês. O vale-transporte é calculado conforme a necessidade informada no momento da admissão. O vale-refeição possui valor fixo definido em acordo coletivo."
  },
  {
    id: 5,
    pergunta: "Como reportar problemas técnicos no sistema?",
    resposta: "Problemas técnicos devem ser reportados ao departamento de TI através do ramal 205 ou pelo e-mail ti@russi.com.br. Descreva o problema detalhadamente para agilizar o atendimento."
  },
  {
    id: 6,
    pergunta: "Como faço para atualizar meus dados cadastrais?",
    resposta: "Para atualização de dados cadastrais (endereço, telefone, conta bancária, etc.), entre em contato com o RH pelo ramal 201 ou compareça pessoalmente ao departamento com os documentos comprobatórios."
  },
  {
    id: 7,
    pergunta: "Qual o procedimento para justificar faltas?",
    resposta: "Faltas devem ser justificadas com atestado médico ou documento comprobatório entregue ao RH em até 48 horas. Comunique seu supervisor imediatamente em caso de ausência."
  },
  {
    id: 8,
    pergunta: "Como funciona o programa de treinamentos?",
    resposta: "Os treinamentos são definidos conforme o setor e função. Acesse a área de Treinamentos neste portal para ver os vídeos disponíveis para sua área. Treinamentos presenciais são agendados pelo supervisor."
  }
];

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
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
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
          className="aspect-video bg-gradient-to-br from-purple-600/80 to-pink-600/80 flex items-center justify-center cursor-pointer relative overflow-hidden"
          onClick={() => setPlaying(true)}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform z-10 border border-white/30">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      )}
      
      <div className="p-4">
        <h3 className="text-white font-semibold">{video.titulo}</h3>
        {video.descricao && (
          <p className="text-slate-400 text-sm mt-1 line-clamp-2">{video.descricao}</p>
        )}
      </div>
    </div>
  );
}

function FAQItem({ duvida, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bg-slate-800/60 border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-blue-500/50' : 'hover:border-slate-600'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${open ? 'bg-blue-500' : 'bg-slate-700'} transition-colors`}>
          <span className="text-white font-bold text-xs">{index + 1}</span>
        </div>
        <span className="text-white font-medium flex-1 text-sm">{duvida.pergunta}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-blue-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-400" />
        )}
      </button>
      
      {open && (
        <div className="px-4 pb-4 pt-0">
          <div className="pt-3 pl-10 border-t border-slate-700/50">
            <p className="text-slate-300 text-sm leading-relaxed">{duvida.resposta}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ManualCard({ manual }) {
  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:border-green-500/50 transition-all duration-300 group">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">{manual.titulo}</h3>
          {manual.descricao && (
            <p className="text-slate-400 text-xs mt-1 line-clamp-2">{manual.descricao}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ContatoCard({ contato }) {
  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:border-orange-500/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm">{contato.departamento}</h3>
          {contato.colaborador && (
            <p className="text-slate-400 text-xs">{contato.colaborador}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        {contato.ramal && (
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-slate-300">Ramal: <strong>{contato.ramal}</strong></span>
          </div>
        )}
        {contato.telefone && (
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-300">{contato.telefone}</span>
          </div>
        )}
        {contato.email && (
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-slate-300 truncate text-xs">{contato.email}</span>
          </div>
        )}
      </div>
    </div>
  );
}

const TABS = [
  { id: "inicio", label: "Início", icon: User },
  { id: "rh", label: "RH", icon: Video },
  { id: "manuais", label: "Manuais", icon: FileText },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "contatos", label: "Ramais", icon: Phone },
];

export default function InternoPage() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [user, setUser] = useState(null);
  const [videosCount, setVideosCount] = useState(0);
  const [rhVideos, setRhVideos] = useState([]);
  const [manuais, setManuais] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, rhRes, manuaisRes, contatosRes] = await Promise.all([
          fetch("/api/me"),
          fetch("/api/rh"),
          fetch("/api/manuais"),
          fetch("/api/contatos")
        ]);

        if (userRes.ok) {
          const userData = await userRes.json();
          setUser(userData);
        }
        if (rhRes.ok) setRhVideos(await rhRes.json());
        if (manuaisRes.ok) setManuais(await manuaisRes.json());
        if (contatosRes.ok) setContatos(await contatosRes.json());

        const videosRes = await fetch("/api/videos-internos/count");
        if (videosRes.ok) {
          const data = await videosRes.json();
          setVideosCount(data.count || 0);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Carregando...</p>
        </div>
      </div>
    );
  }

  const canAccessCatalog = user?.role !== 'instalador';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
          Olá, {user?.nome?.split(' ')[0] || 'Colaborador'}!
        </h1>
        <p className="text-slate-400 text-sm">
          Portal Interno Russi Acessórios
          {user?.setor?.nome && <span className="text-slate-500"> | {user.setor.nome}</span>}
        </p>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/60 hover:text-white'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "inicio" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/interno/treinamentos"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Treinamentos</h3>
                <p className="text-white/80 text-sm">Vídeos de capacitação</p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
                  {videosCount} disponíveis
                </div>
              </div>
            </Link>

            {canAccessCatalog && (
              <Link
                href="/catalogo/montadoras"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/20"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Catálogo Digital</h3>
                  <p className="text-white/80 text-sm">Produtos e acessórios</p>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
                    Ver montadoras
                  </div>
                </div>
              </Link>
            )}

            <button
              onClick={() => setActiveTab("contatos")}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/20 text-left"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Ramais</h3>
                <p className="text-white/80 text-sm">Contatos internos</p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
                  {contatos.length} departamentos
                </div>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Recursos Disponíveis</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setActiveTab("rh")}
                  className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl hover:bg-slate-700/50 transition-colors group"
                >
                  <Video className="w-5 h-5 text-purple-400" />
                  <div className="text-left">
                    <p className="text-white text-sm font-medium">Vídeos RH</p>
                    <p className="text-slate-500 text-xs">{rhVideos.length} vídeos</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab("manuais")}
                  className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl hover:bg-slate-700/50 transition-colors group"
                >
                  <FileText className="w-5 h-5 text-green-400" />
                  <div className="text-left">
                    <p className="text-white text-sm font-medium">Manuais</p>
                    <p className="text-slate-500 text-xs">{manuais.length} documentos</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab("faq")}
                  className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl hover:bg-slate-700/50 transition-colors group"
                >
                  <HelpCircle className="w-5 h-5 text-blue-400" />
                  <div className="text-left">
                    <p className="text-white text-sm font-medium">FAQ</p>
                    <p className="text-slate-500 text-xs">{STATIC_FAQ.length} perguntas</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab("contatos")}
                  className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl hover:bg-slate-700/50 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-orange-400" />
                  <div className="text-left">
                    <p className="text-white text-sm font-medium">Ramais</p>
                    <p className="text-slate-500 text-xs">{contatos.length} contatos</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Informações</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl">
                  <Users className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-white text-sm font-medium">Setor</p>
                    <p className="text-slate-400 text-xs">{user?.setor?.nome || 'Não atribuído'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl">
                  <Briefcase className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-white text-sm font-medium">Cargo</p>
                    <p className="text-slate-400 text-xs capitalize">{user?.role?.replace('_', ' ') || 'Colaborador'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-white text-sm font-medium">Horário</p>
                    <p className="text-slate-400 text-xs">Seg-Sex: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "rh" && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Procedimentos do RH</h2>
              <p className="text-slate-400 text-sm">Vídeos sobre políticas e procedimentos</p>
            </div>
          </div>

          {rhVideos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
              <Video className="w-12 h-12 text-slate-500 mb-3" />
              <p className="text-white font-medium">Nenhum vídeo disponível</p>
              <p className="text-slate-400 text-sm">Os vídeos serão adicionados em breve.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rhVideos.map((video) => (
                <VideoRHCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "manuais" && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Manuais e Apostilas</h2>
              <p className="text-slate-400 text-sm">Documentação de treinamento</p>
            </div>
          </div>

          {manuais.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
              <FileText className="w-12 h-12 text-slate-500 mb-3" />
              <p className="text-white font-medium">Nenhum manual disponível</p>
              <p className="text-slate-400 text-sm">Os manuais serão adicionados em breve.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {manuais.map((manual) => (
                <ManualCard key={manual.id} manual={manual} />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "faq" && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Dúvidas Frequentes</h2>
              <p className="text-slate-400 text-sm">Respostas para as perguntas mais comuns</p>
            </div>
          </div>

          <div className="space-y-3 max-w-4xl">
            {STATIC_FAQ.map((duvida, index) => (
              <FAQItem key={duvida.id} duvida={duvida} index={index} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "contatos" && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Ramais e Contatos</h2>
              <p className="text-slate-400 text-sm">Lista dos departamentos</p>
            </div>
          </div>

          {contatos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
              <Phone className="w-12 h-12 text-slate-500 mb-3" />
              <p className="text-white font-medium">Nenhum contato disponível</p>
              <p className="text-slate-400 text-sm">Os contatos serão adicionados em breve.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contatos.map((contato) => (
                <ContatoCard key={contato.id} contato={contato} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
