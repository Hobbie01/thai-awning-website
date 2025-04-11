"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortfolioItemProps {
  title: string
  description: string
  type: "image" | "video"
  media: string
  poster?: string
}

export function PortfolioItem({ title, description, type, media, poster }: PortfolioItemProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-64 relative">
        {type === "video" ? (
          <div className="w-full h-full relative">
            <video
              src={media}
              className="w-full h-full object-cover"
              poster={poster}
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer"
                onClick={handlePlay}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30 hover:text-white"
                >
                  <Play className="h-6 w-6 fill-white" />
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Image src={media || "/placeholder.svg"} alt={title} fill className="object-cover" />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

