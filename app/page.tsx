"use client"

import { ImageCarouselHero } from "@/components/ui/ai-image-generator-hero"

export default function Home() {
  const demoImages = [
    { id: "1", src: "https://images.unsplash.com/photo-1684369176170-463e84248b70?auto=format&fit=crop&q=60&w=900", alt: "Mountain landscape", rotation: -15 },
    { id: "2", src: "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?auto=format&fit=crop&q=60&w=900", alt: "Abstract art", rotation: -8 },
    { id: "3", src: "https://images.unsplash.com/photo-1524673360092-e07b7ae58845?auto=format&fit=crop&q=60&w=900", alt: "City skyline", rotation: 5 },
    { id: "4", src: "https://plus.unsplash.com/premium_photo-1680610653084-6e4886519caf?auto=format&fit=crop&q=60&w=900", alt: "Nature photography", rotation: 12 },
    { id: "5", src: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?auto=format&fit=crop&q=60&w=900", alt: "Digital art", rotation: -12 },
    { id: "6", src: "https://images.unsplash.com/photo-1562575214-da9fcf59b907?auto=format&fit=crop&q=60&w=900", alt: "Tropical leaves", rotation: 8 },
    { id: "7", src: "https://plus.unsplash.com/premium_photo-1676637656210-390da73f4951?auto=format&fit=crop&q=60&w=900", alt: "Sci-fi", rotation: 8 },
    { id: "8", src: "https://images.unsplash.com/photo-1664448003794-2d446c53dcae?auto=format&fit=crop&q=60&w=900", alt: "Abstract", rotation: 8 },
  ]

  return (
    <ImageCarouselHero
      images={demoImages}
    />
  )
}
