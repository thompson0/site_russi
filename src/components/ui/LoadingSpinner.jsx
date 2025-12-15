"use client"

import { cn } from "@/lib/utils"

export function LoadingSpinner({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
    xl: "w-16 h-16 border-4"
  }

  return (
    <div 
      className={cn(
        "rounded-full border-green-500/30 border-t-green-500 spinner",
        sizeClasses[size],
        className
      )}
    />
  )
}

export function LoadingOverlay({ message = "Carregando..." }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-4 animate-scaleIn">
        <LoadingSpinner size="lg" />
        <p className="text-slate-600 dark:text-slate-300 font-medium">{message}</p>
      </div>
    </div>
  )
}

export function LoadingCard() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md animate-fadeIn">
      <div className="h-48 skeleton" />
      <div className="p-4 space-y-3">
        <div className="h-5 skeleton rounded w-3/4" />
        <div className="h-4 skeleton rounded w-1/2" />
      </div>
    </div>
  )
}

export function LoadingGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  )
}
