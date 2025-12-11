"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, PlayIcon, TrophyIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import FuturisticBackground from "./FuturisticBackground";
import { useEffect, useState } from "react";

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span id={`counter-${end}`}>
      {count}{suffix}
    </span>
  );
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      setMousePosition({
        x: (e.clientX / width - 0.5) * 20,
        y: (e.clientY / height - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Local Video Background - z-0 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/api/video" type="video/mp4" />
          <source src="/speedmetter.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Dark overlay - z-[1] */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-900/65 to-slate-800/55 z-[1]" />
      
      {/* FuturisticBackground - z-[2] */}
      <div className="absolute inset-0 z-[2]">
        <FuturisticBackground />
      </div>

      <div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 sm:py-20 sm:pt-32"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default">
              <TrophyIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              35 anos de experiência
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm backdrop-blur-sm hover:bg-emerald-500/30 transition-all duration-300 hover:scale-105 cursor-default">
              <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Desde 1986
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Especialistas em</span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Acessórios Automotivos
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed px-2">
            Líder em terceirização para concessionárias. Oferecemos soluções completas 
            em acessórios automotivos com qualidade, treinamento e suporte técnico 
            especializado para as principais marcas do mercado.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4">
            <Link href="#contato" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl shadow-blue-500/25 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Fale Conosco
                <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link href="/visitante/videos" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <PlayIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Ver Vídeos
              </Button>
            </Link>
          </div>

          <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-2">
            {[
              { value: 35, suffix: "+", label: "Anos no Mercado" },
              { value: 215, suffix: "", label: "Funcionários" },
              { value: 108, suffix: "K+", label: "Produtos/Ano" },
              { value: 9, suffix: "+", label: "Marcas Atendidas" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-default"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-slate-400 transition-colors group-hover:text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5 sm:pt-2 hover:border-white/50 transition-colors cursor-pointer">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
