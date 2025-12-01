"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ArrowLeftIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

const contactCards = [
  {
    title: "Recursos Humanos",
    description: "Currículos, vagas e assuntos relacionados a RH",
    email: "rh@russiacessorios.com.br",
    icon: UserGroupIcon,
    color: "blue"
  },
  {
    title: "Contato Geral",
    description: "Dúvidas, sugestões e informações gerais",
    email: "contato@russiacessorios.com.br",
    icon: ChatBubbleLeftRightIcon,
    color: "indigo"
  }
];

export default function SACPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10">
        <header className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm sm:text-base">Voltar ao início</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold hidden sm:block">Central de Atendimento</span>
            </div>
          </div>
        </header>

        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                SAC - Serviço de Atendimento ao Cliente
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Como podemos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  ajudar?
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Estamos à disposição para atender você. Escolha o canal de contato mais conveniente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.color === "blue" ? "from-blue-500/20 to-blue-600/20" : "from-indigo-500/20 to-purple-600/20"} rounded-2xl blur-xl transition-opacity duration-500 ${hoveredCard === index ? "opacity-100" : "opacity-0"}`} />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:border-slate-600/50 transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color === "blue" ? "from-blue-500 to-blue-600" : "from-indigo-500 to-purple-600"} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-slate-400 mb-4">{card.description}</p>
                    <a 
                      href={`mailto:${card.email}`}
                      className={`inline-flex items-center gap-2 text-${card.color === "blue" ? "blue" : "indigo"}-400 hover:text-${card.color === "blue" ? "blue" : "indigo"}-300 font-medium transition-colors group/link`}
                    >
                      <EnvelopeIcon className="w-5 h-5" />
                      <span className="group-hover/link:underline">{card.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <a 
                href="tel:+551123717000"
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Telefone</h3>
                <p className="text-emerald-400 font-medium text-lg">(11) 2371-7000</p>
                <p className="text-slate-500 text-sm mt-2">Clique para ligar</p>
              </a>

              <a
                href="https://maps.google.com/?q=R.+Gomes+Nogueira,+299+-+Ipiranga,+São+Paulo+-+SP,+04265-010"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Endereço</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  R. Gomes Nogueira, 299<br />
                  Ipiranga, São Paulo - SP<br />
                  CEP: 04265-010
                </p>
                <p className="text-slate-500 text-sm mt-2">Clique para ver no mapa</p>
              </a>

              <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Horário de Atendimento</h3>
                <div className="space-y-1 text-slate-300 text-sm">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p className="text-slate-500">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <BuildingOffice2Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Russi Acessórios</h3>
                  <p className="text-slate-400">
                    Há mais de 35 anos oferecendo as melhores soluções em acessórios automotivos para concessionárias em todo o Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="py-8 px-4 border-t border-slate-800">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Russi Acessórios. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
