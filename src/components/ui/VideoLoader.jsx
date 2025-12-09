"use client";

import { useState, useEffect } from "react";

export default function VideoLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const video = document.createElement('video');
    video.muted = true;
    video.preload = 'auto';
    
    const handleCanPlay = () => {
      setVideoReady(true);
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('canplay', handleCanPlay);
    video.src = '/api/video';
    video.load();

    const timeout = setTimeout(() => {
      setVideoReady(true);
    }, 5000);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('canplay', handleCanPlay);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const target = videoReady ? 100 : 85;
        if (prev >= target) {
          if (videoReady) clearInterval(interval);
          return target;
        }
        const increment = videoReady ? 20 : Math.random() * 10 + 3;
        return Math.min(prev + increment, target);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [mounted, videoReady]);

  useEffect(() => {
    if (videoReady && progress >= 95) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [videoReady, progress]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900" />
    );
  }

  if (isLoading) {
    const needleRotation = -135 + (progress * 2.7);
    
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <style jsx global>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
          @keyframes moveRoad {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
          }
        `}</style>

        <div className="relative flex flex-col items-center">
          {/* Speedometer */}
          <div className="relative w-48 h-48 mb-6">
            {/* Outer ring */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-slate-700"
              style={{ animation: 'glow 2s ease-in-out infinite' }}
            />
            
            {/* Speed marks */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {[...Array(11)].map((_, i) => {
                const angle = -135 + (i * 27);
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + 38 * Math.cos(rad);
                const y1 = 50 + 38 * Math.sin(rad);
                const x2 = 50 + 44 * Math.cos(rad);
                const y2 = 50 + 44 * Math.sin(rad);
                const isActive = (i * 10) <= progress;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isActive ? "#3b82f6" : "#475569"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>

            {/* Inner gradient ring */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600" />
            
            {/* Needle */}
            <div 
              className="absolute top-1/2 left-1/2 w-1 h-16 origin-bottom rounded-full"
              style={{
                background: 'linear-gradient(to top, #ef4444, #f97316)',
                transform: `translate(-50%, -100%) rotate(${needleRotation}deg)`,
                transition: 'transform 0.3s ease-out',
                boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
              }}
            />
            
            {/* Center cap */}
            <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 border-2 border-slate-500" />
            
            {/* Speed text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <span className="text-3xl font-bold text-white tabular-nums">{Math.round(progress)}</span>
              <span className="text-sm text-slate-400 ml-1">%</span>
            </div>
          </div>

          {/* Porsche-style car silhouette */}
          <div className="relative mb-6" style={{ animation: 'bounce 0.4s ease-in-out infinite' }}>
            <svg width="160" height="50" viewBox="0 0 160 50" fill="none">
              {/* Car body - Porsche 911 style */}
              <path 
                d="M10 35 L18 35 L22 28 L28 24 L38 18 L55 14 L75 13 L95 14 L110 16 L125 20 L138 28 L142 35 L150 35 L150 38 L145 42 L15 42 L10 38 Z" 
                fill="url(#porscheGradient)"
                stroke="#94a3b8"
                strokeWidth="0.5"
              />
              {/* Roof line - sloping Porsche style */}
              <path 
                d="M55 14 L52 13 L70 11 L95 12 L105 14"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="0.5"
              />
              {/* Rear window */}
              <path 
                d="M42 17 L55 13 L75 12 L78 13 L75 22 L45 22 Z" 
                fill="#0f172a"
                stroke="#64748b"
                strokeWidth="0.5"
              />
              {/* Side window */}
              <path 
                d="M80 13 L95 14 L105 17 L108 22 L80 22 Z" 
                fill="#0f172a"
                stroke="#64748b"
                strokeWidth="0.5"
              />
              {/* Door line */}
              <line x1="78" y1="22" x2="78" y2="35" stroke="#64748b" strokeWidth="0.5" />
              {/* Side intake */}
              <path d="M115 25 L125 22 L128 28 L118 30 Z" fill="#1e293b" />
              {/* Front bumper detail */}
              <path d="M135 30 L145 32 L145 35 L138 35 Z" fill="#334155" />
              {/* Rear spoiler */}
              <path d="M18 25 L10 23 L8 25 L15 27 Z" fill="#475569" />
              {/* Headlights - Porsche style round */}
              <ellipse cx="140" cy="30" rx="4" ry="3" fill="#fef3c7" style={{ animation: 'pulse 1s ease-in-out infinite' }} />
              <ellipse cx="140" cy="30" rx="2" ry="1.5" fill="#fbbf24" />
              {/* Tail lights */}
              <ellipse cx="15" cy="32" rx="3" ry="2" fill="#ef4444" style={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
              {/* Front wheel */}
              <circle cx="35" cy="38" r="9" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <circle cx="35" cy="38" r="6" fill="#1e293b" />
              <g style={{ transformOrigin: '35px 38px', animation: 'spin 0.3s linear infinite' }}>
                <circle cx="35" cy="38" r="3" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
                <line x1="35" y1="32" x2="35" y2="35" stroke="#94a3b8" strokeWidth="1" />
                <line x1="35" y1="41" x2="35" y2="44" stroke="#94a3b8" strokeWidth="1" />
                <line x1="29" y1="38" x2="32" y2="38" stroke="#94a3b8" strokeWidth="1" />
                <line x1="38" y1="38" x2="41" y2="38" stroke="#94a3b8" strokeWidth="1" />
              </g>
              {/* Rear wheel */}
              <circle cx="125" cy="38" r="9" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <circle cx="125" cy="38" r="6" fill="#1e293b" />
              <g style={{ transformOrigin: '125px 38px', animation: 'spin 0.3s linear infinite' }}>
                <circle cx="125" cy="38" r="3" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
                <line x1="125" y1="32" x2="125" y2="35" stroke="#94a3b8" strokeWidth="1" />
                <line x1="125" y1="41" x2="125" y2="44" stroke="#94a3b8" strokeWidth="1" />
                <line x1="119" y1="38" x2="122" y2="38" stroke="#94a3b8" strokeWidth="1" />
                <line x1="128" y1="38" x2="131" y2="38" stroke="#94a3b8" strokeWidth="1" />
              </g>
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="porscheGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="50%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Road */}
          <div className="relative w-64 h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
            <div 
              className="absolute inset-0 flex items-center"
              style={{ animation: 'moveRoad 0.5s linear infinite' }}
            >
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-4 h-0.5 bg-yellow-400 mx-2 rounded" />
              ))}
            </div>
            {/* Progress overlay */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500/30 to-transparent"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading text */}
          <p className="text-slate-400 text-sm">
            {progress < 30 && "Ligando motor..."}
            {progress >= 30 && progress < 60 && "Aquecendo..."}
            {progress >= 60 && progress < 90 && "Acelerando..."}
            {progress >= 90 && "Pronto para partir!"}
          </p>
        </div>

        {/* Background gears */}
        <div className="absolute top-10 left-10 opacity-10">
          <svg width="80" height="80" viewBox="0 0 100 100" style={{ animation: 'spin 10s linear infinite' }}>
            <path 
              d="M50 10 L55 25 L70 20 L65 35 L80 40 L70 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L30 50 L20 40 L35 35 L30 20 L45 25 Z"
              fill="#3b82f6"
            />
            <circle cx="50" cy="50" r="15" fill="#1e293b" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <svg width="60" height="60" viewBox="0 0 100 100" style={{ animation: 'spin 8s linear infinite reverse' }}>
            <path 
              d="M50 10 L55 25 L70 20 L65 35 L80 40 L70 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L30 50 L20 40 L35 35 L30 20 L45 25 Z"
              fill="#6366f1"
            />
            <circle cx="50" cy="50" r="15" fill="#1e293b" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="opacity-0"
      style={{
        animation: 'smoothFadeIn 1s ease-out forwards',
      }}
    >
      <style jsx global>{`
        @keyframes smoothFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
      {children}
    </div>
  );
}
