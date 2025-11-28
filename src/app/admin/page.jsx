import { prisma } from "@/lib/prisma";
import { Car, Package, Users, PlayCircle, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

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
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      title: "Total de Produtos",
      value: stats.produtosCount,
      icon: Package,
      trend: "+8%",
      trendUp: true,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500"
    },
    {
      title: "Usuários Ativos",
      value: stats.usuariosCount,
      icon: Users,
      trend: "+5%",
      trendUp: true,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500"
    },
    {
      title: "Vídeos",
      value: stats.videosCount,
      icon: PlayCircle,
      trend: "-2%",
      trendUp: false,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-500"
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Bem-vindo de volta!</h1>
          <p className="text-muted-foreground mt-1">Aqui está um resumo do seu painel administrativo.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg text-sm font-medium transition-colors">
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
            className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" 
                 style={{ background: `linear-gradient(135deg, var(--${stat.iconColor.split('-')[1]}-500), transparent)` }} />
            
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                {stat.trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-3xl font-bold text-foreground">{stat.value.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
          <div className="p-5 border-b border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Carros Recentes</h3>
                <p className="text-sm text-muted-foreground">Últimos veículos adicionados</p>
              </div>
              <a href="/admin/catalogo/carros" className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                Ver todos
              </a>
            </div>
          </div>
          <div className="divide-y divide-border/50">
            {stats.recentCarros.length > 0 ? (
              stats.recentCarros.map((carro) => (
                <div key={carro.id.toString()} className="p-4 flex items-center gap-4 hover:bg-accent/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                    {carro.foto_url ? (
                      <img src={carro.foto_url} alt={carro.nome} className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <Car className="w-6 h-6 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{carro.nome}</p>
                    <p className="text-sm text-muted-foreground">{carro.montadora?.nome || 'Sem montadora'}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {carro.ano_de ? `${carro.ano_de}` : '-'}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                Nenhum carro cadastrado ainda
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
          <div className="p-5 border-b border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Produtos Recentes</h3>
                <p className="text-sm text-muted-foreground">Últimos produtos adicionados</p>
              </div>
              <a href="/admin/catalogo/produtos" className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                Ver todos
              </a>
            </div>
          </div>
          <div className="divide-y divide-border/50">
            {stats.recentProdutos.length > 0 ? (
              stats.recentProdutos.map((produto) => (
                <div key={produto.id.toString()} className="p-4 flex items-center gap-4 hover:bg-accent/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                    {produto.foto_url ? (
                      <img src={produto.foto_url} alt={produto.nome} className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <Package className="w-6 h-6 text-emerald-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{produto.nome}</p>
                    <p className="text-sm text-muted-foreground">{produto.codigo || 'Sem código'}</p>
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {produto.preco ? `R$ ${Number(produto.preco).toFixed(2)}` : '-'}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                Nenhum produto cadastrado ainda
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Precisa de ajuda?</h3>
            <p className="text-blue-100 mt-1">Entre em contato com o suporte técnico para qualquer dúvida.</p>
          </div>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Contatar Suporte
          </button>
        </div>
      </div>
    </div>
  );
}
