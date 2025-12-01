"use client";

import { useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function CardsHome({ titulo, texto, destaque = "Diferencial", icon }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTransform({ rotateX, rotateY });
    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
      }}
    >
      <Card className="group relative w-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden hover:border-blue-500/30">
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(59, 130, 246, 0.2), transparent 50%)`,
          }}
        />
        
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="relative z-10 pb-2 sm:pb-3 text-center pt-6 sm:pt-8 px-4 sm:px-6">
          {icon && (
            <div className="w-full flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                {icon}
              </div>
            </div>
          )}

          <Badge className="mx-auto w-fit rounded-full border-blue-400/30 bg-blue-500/20 text-[10px] sm:text-[11px] font-semibold tracking-wide text-blue-300 group-hover:bg-blue-500/30 transition-colors">
            {destaque}
          </Badge>

          <CardTitle className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold leading-tight text-white group-hover:text-blue-200 transition-colors">
            {titulo}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 pt-0 pb-6 sm:pb-8 px-4 sm:px-6">
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 whitespace-pre-line text-center group-hover:text-slate-200 transition-colors">
            {texto}
          </p>
        </CardContent>

        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </div>
  );
}

export default CardsHome;
