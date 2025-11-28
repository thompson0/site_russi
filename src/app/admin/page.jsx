import { prisma } from "@/lib/prisma";
import { Car, Package, Users, PlayCircle, ArrowUpRight, ArrowDownRight, Headphones } from "lucide-react";
import Image from "next/image";

async function getStats() {
  try {
    const [carrosCount, produtosCount, usuariosCount, videosCount] = await Promise.all([
      prisma.carros.count(),
      prisma.produtos.count(),
      prisma.usuarios.count(),
      prisma.videos.count(),
    ]);

    const recentCarros = await prisma.carros.findMany({
      take: 5,
      orderBy: { data_criacao: 'desc' },
      include: { montadora: true }
    });

    const recentProdutos = await prisma.produtos.findMany({
      take: 5,
      orderBy: { id: 'desc' }
    });

    return { carrosCount, produtosCount, usuariosCount, videosCount, recentCarros, recentProdutos };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return { carrosCount: 0, produtosCount: 0, usuariosCount: 0, videosCount: 0, recentCarros: [], recentProdutos: [] };
  }
}

export default async function AdminPage() {
  const stats = await getStats();

  const statCards = [
    {
      title: "Total de Carros",
      value: stats.carrosCount,
      icon: Car,
      trend: "+12%",
      trendUp: true,
      bgColor: "bg-blue-100 dark:bg-blue-500/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Total de Produtos",
      value: stats.produtosCount,
      icon: Package,
      trend: "+8%",
      trendUp: true,
      bgColor: "bg-emerald-100 dark:bg-emerald-500/20",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Usuários Ativos",
      value: stats.usuariosCount,
      icon: Users,
      trend: "+5%",
      trendUp: true,
      bgColor: "bg-purple-100 dark:bg-purple-500/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Vídeos",
      value: stats.videosCount,
      icon: PlayCircle,
      trend: "-2%",
      trendUp: false,
      bgColor: "bg-orange-100 dark:bg-orange-500/20",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Bem-vindo de volta!</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Aqui está um resumo do seu painel administrativo.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors border border-slate-200 dark:border-slate-700">
            Exportar
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25">
            + Novo Item
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statCards.map((stat, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-5 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${stat.trendUp ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                {stat.trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value.toLocaleString()}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 overflow-hidden">
          <div className="p-5 border-b border-slate-200 dark:border-slate-700/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Carros Recentes</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Últimos veículos adicionados</p>
              </div>
              <a href="/admin/catalogo/carros" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                Ver todos
              </a>
            </div>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {stats.recentCarros.length > 0 ? (
              stats.recentCarros.map((carro) => (
                <div key={carro.id.toString()} className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    {carro.foto_url ? (
                      <img src={carro.foto_url} alt={carro.nome} className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <Car className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 dark:text-white truncate">{carro.nome}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{carro.montadora?.nome || 'Sem montadora'}</p>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">
                    {carro.ano_de ? `${carro.ano_de}` : '-'}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                Nenhum carro cadastrado ainda
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 overflow-hidden">
          <div className="p-5 border-b border-slate-200 dark:border-slate-700/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Produtos Recentes</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Últimos produtos adicionados</p>
              </div>
              <a href="/admin/catalogo/produtos" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                Ver todos
              </a>
            </div>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {stats.recentProdutos.length > 0 ? (
              stats.recentProdutos.map((produto) => (
                <div key={produto.id.toString()} className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    {produto.foto_url ? (
                      <img src={produto.foto_url} alt={produto.nome} className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <Package className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 dark:text-white truncate">{produto.nome}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{produto.codigo || 'Sem código'}</p>
                  </div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">
                    {produto.preco ? `R$ ${Number(produto.preco).toFixed(2)}` : '-'}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                Nenhum produto cadastrado ainda
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 p-6 md:p-8 overflow-hidden">
        <div className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-6 items-center">
          <div className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px]">
            <Image 
              src="/support-illustration.png" 
              alt="Suporte" 
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Headphones className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Precisa de ajuda?</h3>
            </div>
            <p className="text-slate-300 mt-1 mb-4">
              Nossa equipe de suporte técnico está disponível para ajudar você com qualquer dúvida ou problema.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30">
                Contatar Suporte
              </button>
              <button className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20">
                Ver FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
