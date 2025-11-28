"use client";

import { Badge } from "@/components/ui/badge";

export default function Timeline() {
  const timelineItems = [
    {
      year: "1986",
      title: "Fundação",
      icon: "⭐",
      description: "Nascimento da Russi Acessórios"
    },
    {
      year: "1992",
      title: "Ingresso no Ramo de Concessionárias",
      icon: "🚗",
      description: "Entrada oficial no mercado de concessionárias"
    },
    {
      year: "2006",
      title: "Implantação do Sistema de Gestão ERP",
      icon: "💻",
      description: "Modernização dos processos empresariais"
    },
    {
      year: "2010",
      title: "Construção da 1ª Sede",
      icon: "🏢",
      description: "Sede de 390m² para operações"
    },
    {
      year: "2013",
      title: "Expansão Nacional",
      icon: "🌎",
      description: "Atingindo 139 concessionárias no Brasil"
    },
    {
      year: "2014",
      title: "Nova Sede Administrativa",
      icon: "🏛️",
      description: "Sede de 440m² para expansão"
    },
    {
      year: "2017",
      title: "Modernização Integrada",
      icon: "🔄",
      description: "Atualização de Telefonia, Logomarca e Hardware"
    },
    {
      year: "2019",
      title: "Novo Sistema ERP",
      icon: "⚙️",
      description: "Implantação de sistema de gestão avançado"
    },
    {
      year: "2021",
      title: "Código de Barras",
      icon: "📦",
      description: "Introdução de leitor e código de barras no estoque"
    },
    {
      year: "2023",
      title: "Transformação Digital",
      icon: "🌐",
      description: "Implementação de plataforma e-commerce integrada"
    },
    {
      year: "2024",
      title: "Expansão de Serviços",
      icon: "📈",
      description: "Lançamento de novos serviços ao cliente"
    },
    {
      year: "2025",
      title: "Inovação Contínua",
      icon: "🚀",
      description: "Investimentos em IA e automação de processos"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Nossa Trajetória
          </span>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            39 Anos de Inovação
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Acompanhe o crescimento e evolução da Russi Acessórios desde sua fundação
          </p>
        </div>

        <div className="relative">
          {/* Vertical line - centered with pseudo-element approach */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-indigo-600 z-0" />

          <div className="space-y-8 md:space-y-0">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Mobile Layout */}
                  <div className="flex gap-4 md:hidden">
                    <div className="flex flex-col items-center">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl shadow-lg ring-4 ring-background">
                        {item.icon}
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div className="w-1 flex-1 min-h-[60px] bg-gradient-to-b from-blue-400 to-indigo-500 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <Badge className="bg-blue-500/20 text-blue-700 border-blue-300 mb-2">
                        {item.year}
                      </Badge>
                      <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>

                  {/* Desktop Layout - 3 column grid */}
                  <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] md:gap-4 md:items-center md:py-4">
                    {/* Left content */}
                    <div className={`${isEven ? 'text-right pr-4' : 'order-3 text-left pl-4'}`}>
                      {isEven && (
                        <div className="inline-block">
                          <Badge className="bg-blue-500/20 text-blue-700 border-blue-300 mb-2">
                            {item.year}
                          </Badge>
                          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      )}
                      {!isEven && (
                        <div>
                          <Badge className="bg-blue-500/20 text-blue-700 border-blue-300 mb-2">
                            {item.year}
                          </Badge>
                          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className={`flex justify-center ${!isEven ? 'order-2' : ''}`}>
                      <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl shadow-lg ring-4 ring-background">
                        {item.icon}
                      </div>
                    </div>

                    {/* Right content (empty for even, content for odd) */}
                    <div className={`${isEven ? 'order-3' : 'order-1 text-right pr-4'}`}>
                      {/* Empty placeholder for layout balance */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
