"use client";

import { useState, useEffect } from "react";

export default function VideoLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [mounted]);

  if (!mounted || isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900">
        <div className="relative flex flex-col items-center">
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-slate-700" />
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"
              style={{ animationDuration: '1s' }}
            />
            <div 
              className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-500 border-l-indigo-400 animate-spin"
              style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
            />
            <div 
              className="absolute inset-4 rounded-full border-4 border-transparent border-b-purple-500 border-r-purple-400 animate-spin"
              style={{ animationDuration: '2s' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <img 
              src="/logo_index.png" 
              alt="Russi" 
              className="w-12 h-12 object-contain opacity-80"
            />
            <span className="text-2xl font-bold text-white">Russi Acessórios</span>
          </div>

          <div className="w-64 h-1.5 bg-slate-700 rounded-full overflow-hidden mb-3">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <p className="text-slate-400 text-sm animate-pulse">
            Carregando experiência...
          </p>

          <div className="absolute -inset-32 pointer-events-none">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                style={{
                  left: `${50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                  top: `${50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '2s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
}
