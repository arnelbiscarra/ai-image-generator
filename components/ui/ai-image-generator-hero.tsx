"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  images: ImageCard[]
}

export function ImageCarouselHero({
  images,
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [rotatingCards, setRotatingCards] = useState<number[]>([])
  const [centerRotation, setCenterRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((_, i) => (prev[i] + 0.5) % 360))
      setCenterRotation((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setRotatingCards(images.map((_, i) => i * (360 / images.length)))
  }, [images.length])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="https://videos.pexels.com/video-files/5025519/5025519-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      {/* Black overlay 30% opacity */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.30)", zIndex: 1 }} />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full max-w-4xl h-[600px] sm:h-[700px]"
        >
          {/* Center rotating image */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl"
              style={{ transform: `rotate(${centerRotation}deg)` }}
            >
              <Image
                src="https://arnelbiscarra.great-site.net/wp-content/uploads/2026/06/alienbeach.png"
                alt="Center logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center perspective">
            {images.map((image, index) => {
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180)
              const radius = 270
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              const perspectiveX = (mousePosition.x - 0.5) * 20
              const perspectiveY = (mousePosition.y - 0.5) * 20

              return (
                <div
                  key={image.id}
                  className="absolute w-36 h-44 sm:w-44 sm:h-56 transition-all duration-300"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotateX(${perspectiveY}deg) rotateY(${perspectiveX}deg) rotateZ(${image.rotation}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
