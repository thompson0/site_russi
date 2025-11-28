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
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot and content - Mobile */}
                <div className="flex gap-4 sm:hidden flex-1">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                      {item.icon}
                    </div>
                    {index < timelineItems.length - 1 && (
                      <div className="w-1 h-12 bg-blue-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <Badge className="bg-blue-500/20 text-blue-700 border-blue-300 mb-2">
                      {item.year}
                    </Badge>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>

                {/* Timeline content - Desktop */}
                <div className="hidden sm:flex sm:flex-1 justify-end">
                  {index % 2 === 0 && (
                    <div className="w-full max-w-xs text-right pr-6">
                      <Badge className="bg-blue-500/20 text-blue-700 border-blue-300 mb-2 float-right">
                        {item.year}
                      </Badge>
                      <h3 className="text-lg font-bold text-foreground clear-both">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  )}
                </div>

                {/* Timeline dot - Desktop */}
                <div className="hidden sm:flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold shadow-lg border-4 border-background">
                    {item.icon}
                  </div>
                </div>

                {/* Timeline content - Desktop right */}
                <div className="hidden sm:flex sm:flex-1">
                  {index % 2 === 1 && (
                    <div className="w-full max-w-xs pl-6">
                      <Badge className="bg-blue-500/20 text-blue-700 border-blue-300 mb-2">
                        {item.year}
                      </Badge>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
