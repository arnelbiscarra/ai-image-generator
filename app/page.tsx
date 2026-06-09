"use client"

import { ImageCarouselHero } from "@/components/ui/ai-image-generator-hero"

export default function Home() {
  const demoImages = [
    { id: "1", src: "https://www.kawayanholidayresort.com/wp-content/uploads/2023/08/DSCN018812.jpg", alt: "Kawayan Resort", rotation: -15 },
    { id: "2", src: "https://www.kawayanholidayresort.com/wp-content/uploads/2024/01/IMG_4450.jpg", alt: "Kawayan Resort", rotation: -8 },
    { id: "3", src: "https://www.kawayanholidayresort.com/wp-content/uploads/2025/04/IMG_20200318_155207_800_800.jpg", alt: "Kawayan Resort", rotation: 5 },
    { id: "4", src: "https://www.kawayanholidayresort.com/wp-content/uploads/2024/01/Cambugahay-Falls.jpg", alt: "Cambugahay Falls", rotation: 12 },
    { id: "5", src: "https://www.kawayanholidayresort.com/wp-content/uploads/2022/05/butterfly2.jpg", alt: "Butterfly", rotation: -12 },
    { id: "6", src: "https://www.kawayanholidayresort.com/wp-content/uploads/2021/11/PICT0057.jpg", alt: "Kawayan Resort", rotation: 8 },
    { id: "7", src: "https://www.kawayanholidayresort.com/wp-content/uploads/2024/01/Mt.-Bandilaan.jpg", alt: "Mt. Bandilaan", rotation: 8 },
    { id: "8", src: "https://www.kawayanholidayresort.com/wp-content/uploads/2023/08/IMG_0981.jpg", alt: "Kawayan Resort", rotation: 8 },
  ]

  return (
    <ImageCarouselHero
      images={demoImages}
    />
  )
}
