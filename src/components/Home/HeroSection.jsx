"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Award, Users, Calendar } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/fundo.png')",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-800/80" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-1.5 text-sm">
              <Award className="w-4 h-4 mr-2" />
              35 anos de experiência
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-1.5 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Desde 1986
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Especialistas em
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Acessórios Automotivos
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed">
            Líder em terceirização para concessionárias. Oferecemos soluções completas 
            em acessórios automotivos com qualidade, treinamento e suporte técnico 
            especializado para as principais marcas do mercado.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="#contato">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-xl shadow-blue-500/25"
              >
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/visitante/videos">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Vídeos
              </Button>
            </Link>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">35+</div>
              <div className="text-sm text-slate-400">Anos no Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">215</div>
              <div className="text-sm text-slate-400">Funcionários</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">108K+</div>
              <div className="text-sm text-slate-400">Produtos/Ano</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">9+</div>
              <div className="text-sm text-slate-400">Marcas Atendidas</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
