"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "",
  containerClassName = "",
  fallback = "/placeholder.png",
  aspectRatio = "aspect-square"
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "100px" }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const imageSrc = error || !src ? fallback : src

  return (
    <div 
      ref={imgRef}
      className={cn("relative overflow-hidden bg-gray-100 dark:bg-slate-800", aspectRatio, containerClassName)}
    >
      {!loaded && isVisible && (
        <div className="absolute inset-0 skeleton" />
      )}
      
      {isVisible && (
        <img
          src={imageSrc}
          alt={alt}
          className={cn(
            "w-full h-full object-contain transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true)
            setLoaded(true)
          }}
          loading="lazy"
        />
      )}
    </div>
  )
}
