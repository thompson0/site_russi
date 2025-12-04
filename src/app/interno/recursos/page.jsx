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
  Building2,
  Headphones,
  MessageCircle,
  ArrowRight,
  Clock,
  Users,
  Shield,
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

function QuickAccessCard({ icon: Icon, title, description, color, onClick, count }) {
  const colorClasses = {
    purple: "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    green: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
    blue: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    orange: "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
  };

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden bg-gradient-to-br ${colorClasses[color]} p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${color}-500/25 group w-full`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
        
        {count !== undefined && count > 0 && (
          <div className="mt-4 flex items-center gap-2">
            <span className="px-2.5 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
              {count} disponíveis
            </span>
            <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
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
    <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
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
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform z-10 border border-white/30">
            <Play className="w-10 h-10 text-white ml-1" />
          </div>
        </div>
      )}
      
      <div className="p-5">
        {video.categoria && (
          <span className="inline-flex items-center gap-1 text-xs text-purple-400 font-medium bg-purple-500/10 px-2 py-1 rounded-full">
            <Video className="w-3 h-3" />
            {video.categoria}
          </span>
        )}
        <h3 className="text-white font-semibold mt-2 text-lg">{video.titulo}</h3>
        {video.descricao && (
          <p className="text-slate-400 text-sm mt-2 line-clamp-2">{video.descricao}</p>
        )}
      </div>
    </div>
  );
}

function FAQItem({ duvida, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' : 'hover:border-slate-600'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${open ? 'bg-blue-500' : 'bg-slate-700'} transition-colors`}>
          <span className="text-white font-bold text-sm">{index + 1}</span>
        </div>
        <span className="text-white font-medium flex-1 pr-4">{duvida.pergunta}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${open ? 'bg-blue-500/20' : 'bg-slate-700/50'} transition-colors`}>
          {open ? (
            <ChevronUp className="w-5 h-5 text-blue-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </div>
      </button>
      
      {open && (
        <div className="px-5 pb-5 pt-0 border-t border-slate-700/50">
          <div className="pt-4 pl-12">
            <p className="text-slate-300 leading-relaxed">{duvida.resposta}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ManualCard({ manual }) {
  return (
    <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <FileText className="w-7 h-7 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-green-400 transition-colors">{manual.titulo}</h3>
          {manual.descricao && (
            <p className="text-slate-400 text-sm line-clamp-2">{manual.descricao}</p>
          )}
        </div>
      </div>
      
      {manual.conteudo && (
        <div className="mt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/30">
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {manual.conteudo}
          </p>
        </div>
      )}
    </div>
  );
}

function ContatoCard({ contato }) {
  return (
    <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-orange-500/50 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-lg">{contato.departamento}</h3>
          {contato.colaborador && (
            <p className="text-slate-400 text-sm mt-0.5">{contato.colaborador}</p>
          )}
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        {contato.ramal && (
          <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Ramal</p>
              <p className="text-white font-medium">{contato.ramal}</p>
            </div>
          </div>
        )}
        
        {contato.telefone && (
          <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Telefone</p>
              <p className="text-white font-medium">{contato.telefone}</p>
            </div>
          </div>
        )}
        
        {contato.email && (
          <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500">E-mail</p>
              <p className="text-white font-medium truncate">{contato.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionHeader({ icon: Icon, title, subtitle, color = "purple" }) {
  const colorClasses = {
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    blue: "from-blue-500 to-cyan-500",
    orange: "from-orange-500 to-amber-500",
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
      <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-slate-500" />
      </div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <p className="text-slate-400 text-sm text-center max-w-sm">{description}</p>
    </div>
  );
}

export default function RecursosPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [rhVideos, setRhVideos] = useState([]);
  const [manuais, setManuais] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [rhRes, manuaisRes, contatosRes] = await Promise.all([
          fetch("/api/rh"),
          fetch("/api/manuais"),
          fetch("/api/contatos")
        ]);

        if (rhRes.ok) setRhVideos(await rhRes.json());
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Carregando recursos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 mb-6 shadow-2xl shadow-purple-500/30">
          <Headphones className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Central de Suporte
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Tudo que você precisa em um só lugar: vídeos, manuais, dúvidas frequentes e contatos dos departamentos
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full">
            <Clock className="w-4 h-4 text-green-400" />
            <span className="text-slate-300 text-sm">Disponível 24/7</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 text-sm">Para todos os funcionários</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full">
            <Shield className="w-4 h-4 text-purple-400" />
            <span className="text-slate-300 text-sm">Conteúdo atualizado</span>
          </div>
        </div>
      </div>

      {!activeSection && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <QuickAccessCard
            icon={Video}
            title="Procedimentos RH"
            description="Vídeos sobre políticas, benefícios e procedimentos internos"
            color="purple"
            onClick={() => setActiveSection("rh")}
            count={rhVideos.length}
          />
          <QuickAccessCard
            icon={FileText}
            title="Manuais e Apostilas"
            description="Documentação de treinamento e guias do sistema"
            color="green"
            onClick={() => setActiveSection("manuais")}
            count={manuais.length}
          />
          <QuickAccessCard
            icon={HelpCircle}
            title="Dúvidas Frequentes"
            description="Respostas rápidas para as principais perguntas"
            color="blue"
            onClick={() => setActiveSection("faq")}
            count={STATIC_FAQ.length}
          />
          <QuickAccessCard
            icon={Phone}
            title="Ramais e Contatos"
            description="Lista completa dos departamentos e contatos"
            color="orange"
            onClick={() => setActiveSection("contatos")}
            count={contatos.length}
          />
        </div>
      )}

      {activeSection && (
        <div className="mb-6">
          <button
            onClick={() => setActiveSection(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para Central de Suporte</span>
          </button>
        </div>
      )}

      {activeSection === "rh" && (
        <section>
          <SectionHeader 
            icon={Video}
            title="Procedimentos do RH"
            subtitle="Vídeos explicativos sobre políticas e procedimentos"
            color="purple"
          />
          {rhVideos.length === 0 ? (
            <EmptyState 
              icon={Video}
              title="Nenhum vídeo disponível"
              description="Os vídeos de procedimentos do RH serão adicionados em breve."
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rhVideos.map((video) => (
                <VideoRHCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </section>
      )}

      {activeSection === "manuais" && (
        <section>
          <SectionHeader 
            icon={FileText}
            title="Manuais e Apostilas"
            subtitle="Documentação de treinamento e guias técnicos"
            color="green"
          />
          {manuais.length === 0 ? (
            <EmptyState 
              icon={FileText}
              title="Nenhum manual disponível"
              description="Os manuais e apostilas serão adicionados em breve."
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {manuais.map((manual) => (
                <ManualCard key={manual.id} manual={manual} />
              ))}
            </div>
          )}
        </section>
      )}

      {activeSection === "faq" && (
        <section>
          <SectionHeader 
            icon={HelpCircle}
            title="Dúvidas Frequentes"
            subtitle="Respostas para as perguntas mais comuns"
            color="blue"
          />
          <div className="space-y-4 max-w-4xl">
            {STATIC_FAQ.map((duvida, index) => (
              <FAQItem key={duvida.id} duvida={duvida} index={index} />
            ))}
          </div>
        </section>
      )}

      {activeSection === "contatos" && (
        <section id="contatos">
          <SectionHeader 
            icon={Phone}
            title="Ramais e Contatos"
            subtitle="Lista completa dos departamentos"
            color="orange"
          />
          {contatos.length === 0 ? (
            <EmptyState 
              icon={Phone}
              title="Nenhum contato disponível"
              description="Os contatos dos departamentos serão adicionados em breve."
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contatos.map((contato) => (
                <ContatoCard key={contato.id} contato={contato} />
              ))}
            </div>
          )}
        </section>
      )}

      {!activeSection && (
        <div className="mt-12 p-8 bg-gradient-to-r from-slate-800/80 to-slate-800/40 rounded-3xl border border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-white mb-1">Precisa de mais ajuda?</h3>
              <p className="text-slate-400">
                Não encontrou o que procurava? Entre em contato com o seu supervisor ou com o departamento de RH.
              </p>
            </div>
            <button 
              onClick={() => setActiveSection("contatos")}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors flex items-center gap-2"
            >
              Ver contatos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
