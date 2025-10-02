"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function OurGallery() {
  // Array of gallery images - using placeholder images for now
  const galleryImages = [
    { id: 1, src: "/images/68d2bd2aee4bdc02a1cb2a65.jpg", alt: "Boat on water" },
    { id: 2, src: "/images/68d2bd2aee4bdccc2ecb2a69.jpg", alt: "Wooden dock" },
    { id: 3, src: "/images/68d2bd2af80381a3f1484fa4.jpg", alt: "Boat engine detail" },
    { id: 4, src: "/images/68d2bd2a26b7f7aaac32a6e1.jpg", alt: "Boat engine detail close up" },
    { id: 5, src: "/images/68d2bd2a4b65760637e9a0ec.jpg", alt: "Wooden dock planks" },
    { id: 6, src: "/images/68d2bd2a1dbafc3707757dce.jpeg", alt: "Boat engine maintenance" },
    { id: 7, src: "/images/IMG_1015.png", alt: "White boat on shore" },
    { id: 8, src: "/images/68d2be5f9c40995e4e1611e8.jpeg", alt: "Boat engine detail work" },
    { id: 9, src: "/images/68d2be63ee4bdc2985cb6044.jpeg", alt: "Boat on water with blue sky" },
    { id: 10, src: "/images/68d2be5efd1a289cf09d9a49.jpeg", alt: "Boat engine close up detail" },
    { id: 11, src: "/images/68d2be5e1dbafc258175aac7.jpeg", alt: "Green water marina dock" },
    { id: 12, src: "/images/68d2bf1fee4bdc04f2cbeae4.jpg", alt: "Boat engine maintenance detail" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)

  // Auto-slide functionality for mobile
  useEffect(() => {
    // Clear any existing interval to keep image and dots in sync
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = window.setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [currentImageIndex, galleryImages.length])

  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 underline decoration-2 text-white underline-offset-8">
            Our Gallery
          </h2>
          <div className="flex justify-center">
            <div className="w-4/5 h-0.5 bg-[#106264]"></div>
          </div>
        </div>

        {/* Mobile Slider - Only visible on mobile */}
        <div className="block sm:hidden">
          <div className="relative overflow-hidden rounded-lg shadow-lg mx-auto max-w-sm">
            <div className="relative h-[300px]">
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex ? 'bg-[#106264]' : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-[300px] md:h-[350px] lg:h-[395px]"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}