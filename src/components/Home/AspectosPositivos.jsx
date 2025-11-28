"use client";

import { CheckCircle } from "lucide-react";

export default function AspectosPositivos() {
  const aspectos = [
    "Desburocratização da venda e pós venda de acessórios",
    "Alivia a estrutura organizacional da concessionária (vendedoras, instaladores e emissão de Nota Fiscal)",
    "Zero Estoque para o concessionário (temos estoque próprio, com entregas diárias)",
    "Sem problemas com produtos de garantia (prazo por lei 90 dias, porém estendemos para 1 ano)",
    "Maior especialização na prestação de serviços relativos a acessórios automotivos",
    "Diversificação de produtos",
    "Dedicação total ao cliente na parte dos acessórios",
    "Crescimento do volume de vendas",
    "Pagamento ao concessionário a vista, independente da condição de pagamento do cliente final"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Os aspectos positivos da terceirização
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {aspectos.map((aspecto, index) => (
            <div key={index} className="flex gap-3 sm:gap-4 items-start group">
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mt-0.5 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-200 group-hover:text-white transition-colors">
                {aspecto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
