import { getUserFromCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Phone,
  Video,
  Clock,
  TrendingUp
} from "lucide-react";

const ROLE_LABELS = {
  admin: "Administrador",
  supervisor: "Supervisor",
  vendedor_interno: "Vendedor Interno",
  instalador: "Instalador",
};

export default async function InternoPage() {
  const user = await getUserFromCookie();

  const videosCount = await prisma.videos_internos.count({
    where: {
      ativo: true,
      ...(user.role !== 'admin' && user.setor_id ? { setor_id: user.setor_id } : {}),
    },
  });

  const quickLinks = [
    {
      href: "/interno/treinamentos",
      label: "Treinamentos",
      description: `${videosCount} vídeos disponíveis`,
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      href: "/interno/recursos",
      label: "Recursos & RH",
      description: "Procedimentos e documentos",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
  ];

  if (user.role !== 'instalador') {
    quickLinks.push({
      href: "/catalogo/montadoras",
      label: "Catálogo Digital",
      description: "Produtos e acessórios",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
    });
  }

  quickLinks.push({
    href: "/interno/recursos#contatos",
    label: "Ramais",
    description: "6 departamentos",
    icon: Phone,
    color: "from-orange-500 to-amber-500",
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Olá, {user.nome?.split(' ')[0]}!
        </h1>
        <p className="text-slate-400">
          Bem-vindo ao Portal Interno da Russi Acessórios
        </p>
        {user.setor && (
          <p className="text-sm text-slate-500 mt-1">
            Setor: {user.setor.nome}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-slate-600 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4`}>
              <link.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-1">
              {link.label}
            </h3>
            <p className="text-sm text-slate-400">
              {link.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Video className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Últimos Treinamentos</h2>
          </div>
          
          <div className="space-y-3">
            <p className="text-slate-400 text-sm">
              Acesse seus treinamentos do setor para se manter atualizado.
            </p>
            <Link 
              href="/interno/treinamentos"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              Ver todos os treinamentos
              <TrendingUp className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Informações Importantes</h2>
          </div>
          
          <div className="space-y-3">
            <p className="text-slate-400 text-sm">
              Confira os procedimentos do RH, manuais de treinamento e dúvidas frequentes.
            </p>
            <Link 
              href="/interno/recursos"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium"
            >
              Acessar recursos
              <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
