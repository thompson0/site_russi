"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function EmbedVideo({ embedUrl, fotoUrl, nome }) {
  const normalizedEmbed = embedUrl?.includes("watch?v=")
    ? embedUrl.replace("watch?v=", "embed/")
    : embedUrl

  return (
    <AspectRatio ratio={16 / 9} className="w-full h-96 mx-auto bg-muted rounded-lg overflow-hidden">
        <iframe
          src={normalizedEmbed}
          title={nome}
          allowFullScreen
          className="h-96 w-full rounded-lg border-0"
        />
    </AspectRatio>
  )
}
