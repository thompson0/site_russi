"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ImageCarousel({ 
  images = [], 
  className = "",
  aspectRatio = "aspect-video",
  showThumbnails = true,
  showIndicators = true
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const allImages = images.length > 0 ? images : []
  
  if (allImages.length === 0) {
    return (
      <div className={cn("relative bg-gray-100 rounded-lg flex items-center justify-center", aspectRatio, className)}>
        <ImageIcon className="h-12 w-12 text-gray-300" />
      </div>
    )
  }
  
  const goToPrevious = (e) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }
  
  const goToNext = (e) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
  }
  
  const goToIndex = (index) => {
    setCurrentIndex(index)
  }
  
  const currentImage = allImages[currentIndex]

  return (
    <div className={cn("relative group", className)}>
      <div className={cn("relative overflow-hidden rounded-lg bg-gray-100", aspectRatio)}>
        <img
          src={typeof currentImage === 'string' ? currentImage : currentImage?.foto_url}
          alt={`Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            e.target.src = ""
            e.target.style.display = "none"
          }}
        />
        
        {allImages.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      
      {showIndicators && allImages.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                goToIndex(index)
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentIndex 
                  ? "bg-white" 
                  : "bg-white/50 hover:bg-white/75"
              )}
            />
          ))}
        </div>
      )}
      
      {showThumbnails && allImages.length > 1 && (
        <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
          {allImages.map((img, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={cn(
                "flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-colors",
                index === currentIndex
                  ? "border-blue-500"
                  : "border-transparent hover:border-gray-300"
              )}
            >
              <img
                src={typeof img === 'string' ? img : img?.foto_url}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none"
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
