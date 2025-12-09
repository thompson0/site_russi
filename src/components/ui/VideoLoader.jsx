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

          {/* Car silhouette */}
          <div className="relative mb-6" style={{ animation: 'bounce 0.5s ease-in-out infinite' }}>
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
              {/* Car body */}
              <path 
                d="M15 28 L25 28 L30 18 L45 12 L75 12 L90 18 L95 28 L105 28 L105 32 L100 35 L20 35 L15 32 Z" 
                fill="url(#carGradient)"
                stroke="#60a5fa"
                strokeWidth="1"
              />
              {/* Windows */}
              <path 
                d="M35 17 L45 14 L70 14 L80 17 L75 25 L40 25 Z" 
                fill="#1e3a5f"
                stroke="#3b82f6"
                strokeWidth="0.5"
              />
              {/* Front wheel */}
              <circle cx="30" cy="32" r="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
              <circle 
                cx="30" 
                cy="32" 
                r="4" 
                fill="#334155"
                style={{ transformOrigin: '30px 32px', animation: 'spin 0.5s linear infinite' }}
              />
              {/* Wheel spokes */}
              <g style={{ transformOrigin: '30px 32px', animation: 'spin 0.5s linear infinite' }}>
                <line x1="30" y1="28" x2="30" y2="36" stroke="#64748b" strokeWidth="1" />
                <line x1="26" y1="32" x2="34" y2="32" stroke="#64748b" strokeWidth="1" />
              </g>
              {/* Back wheel */}
              <circle cx="90" cy="32" r="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
              <circle 
                cx="90" 
                cy="32" 
                r="4" 
                fill="#334155"
                style={{ transformOrigin: '90px 32px', animation: 'spin 0.5s linear infinite' }}
              />
              {/* Wheel spokes */}
              <g style={{ transformOrigin: '90px 32px', animation: 'spin 0.5s linear infinite' }}>
                <line x1="90" y1="28" x2="90" y2="36" stroke="#64748b" strokeWidth="1" />
                <line x1="86" y1="32" x2="94" y2="32" stroke="#64748b" strokeWidth="1" />
              </g>
              {/* Headlight */}
              <ellipse cx="100" cy="26" rx="3" ry="2" fill="#fbbf24" style={{ animation: 'pulse 1s ease-in-out infinite' }} />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="carGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e40af" />
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
        animation: 'smoothFadeIn 1.2s ease-out forwards',
      }}
    >
      <style jsx global>{`
        @keyframes smoothFadeIn {
          0% {
            opacity: 0;
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      {children}
    </div>
  );
}
