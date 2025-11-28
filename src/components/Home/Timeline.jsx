"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getItemStyle = (index) => {
    const isVisible = visibleItems.has(index);
    return {
      opacity: isVisible ? 1 : 0.3,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  const getIconStyle = (index) => {
    const isVisible = visibleItems.has(index);
    const hue = (index / timelineItems.length) * 60 + 200;
    return {
      background: isVisible 
        ? `linear-gradient(135deg, hsl(${hue}, 80%, 50%), hsl(${hue + 30}, 70%, 40%))`
        : "linear-gradient(135deg, #64748b, #475569)",
      transform: isVisible ? "scale(1)" : "scale(0.8)",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  const progressHeight = visibleItems.size > 0 
    ? `${((Math.max(...visibleItems) + 1) / timelineItems.length) * 100}%`
    : "0%";

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
          {/* Desktop vertical line - starts from first dot center, ends at last dot center */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-slate-300 dark:bg-slate-700 z-0"
               style={{ top: "32px", bottom: "32px" }} />
          
          {/* Animated progress line */}
          <div 
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 z-0 transition-all duration-700 ease-out"
            style={{ top: "32px", height: progressHeight, maxHeight: "calc(100% - 64px)" }} 
          />

          <div className="space-y-8 md:space-y-0">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className="relative"
                  style={getItemStyle(index)}
                >
                  {/* Mobile Layout */}
                  <div className="flex gap-4 md:hidden">
                    <div className="flex flex-col items-center">
                      <div 
                        className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg ring-4 ring-background"
                        style={getIconStyle(index)}
                      >
                        {item.icon}
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div 
                          className="w-1 flex-1 min-h-[60px] mt-2 transition-all duration-500"
                          style={{
                            background: visibleItems.has(index) 
                              ? "linear-gradient(to bottom, #3b82f6, #6366f1)" 
                              : "#cbd5e1"
                          }}
                        />
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
                      {isEven ? (
                        <div className="inline-block">
                          <Badge className="bg-blue-500/20 text-blue-700 border-blue-300 mb-2">
                            {item.year}
                          </Badge>
                          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      ) : (
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
                      <div 
                        className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg ring-4 ring-background"
                        style={getIconStyle(index)}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Right content (empty placeholder for layout balance) */}
                    <div className={`${isEven ? 'order-3' : 'order-1 text-right pr-4'}`} />
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
