"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RotatingProjectShowcase() {
  const projects = [
    {
      image: "/marina-boat-detailing-project-1.jpg",
      title: "Luxury Boat Detailing",
    },
    {
      image: "/marina-boat-detailing-project-2.jpg",
      title: "Speedboat Restoration",
    },
    {
      image: "/marina-boat-detailing-project-3.jpg",
      title: "Sailboat Maintenance",
    },
    {
      image: "/marina-boat-detailing-project-4.jpg",
      title: "Dock Repair Project",
    },
    {
      image: "/marina-boat-detailing-project-5.jpg",
      title: "Shrink Wrap Service",
    },
    {
      image: "/marina-boat-detailing-project-6.jpg",
      title: "Marina Maintenance",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [projects.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [projects.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 5000) // 5 second intervals
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        prevSlide()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  const getLeftIndex = () => (currentIndex - 1 + projects.length) % projects.length
  const getRightIndex = () => (currentIndex + 1) % projects.length

  return (
    <section
      className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project showcase carousel"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Rotating Project Showcase</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent marina projects and see the quality craftsmanship we deliver
          </p>
        </div>

        {/* Desktop & Tablet Gallery (≥768px) */}
        <div className="hidden md:block relative">
          <div className="flex items-center justify-center mb-8">
            {/* Left Thumbnail */}
            <div
              className="relative cursor-pointer transition-all duration-400 ease-out transform hover:scale-95"
              style={{
                width: "20%",
                transform: "scale(0.9)",
                opacity: 0.75,
                zIndex: 1,
              }}
              onClick={() => goToSlide(getLeftIndex())}
              role="button"
              tabIndex={0}
              aria-label={`View ${projects[getLeftIndex()].title}`}
              onKeyDown={(e) => e.key === "Enter" && goToSlide(getLeftIndex())}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={projects[getLeftIndex()].image || "/placeholder.svg?height=300&width=400"}
                  alt={projects[getLeftIndex()].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Active Image */}
            <div
              className="relative"
              style={{
                width: "60%",
                zIndex: 2,
              }}
              aria-label={`Current project: ${projects[currentIndex].title}, ${currentIndex + 1} of ${projects.length}`}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl relative">
                <Image
                  src={projects[currentIndex].image || "/placeholder.svg?height=400&width=600"}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-6">
                  <h3 className="text-white font-bold text-2xl lg:text-3xl">{projects[currentIndex].title}</h3>
                </div>
              </div>
            </div>

            {/* Right Thumbnail */}
            <div
              className="relative cursor-pointer transition-all duration-400 ease-out transform hover:scale-95"
              style={{
                width: "20%",
                transform: "scale(0.9)",
                opacity: 0.75,
                zIndex: 1,
              }}
              onClick={() => goToSlide(getRightIndex())}
              role="button"
              tabIndex={0}
              aria-label={`View ${projects[getRightIndex()].title}`}
              onKeyDown={(e) => e.key === "Enter" && goToSlide(getRightIndex())}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={projects[getRightIndex()].image || "/placeholder.svg?height=300&width=400"}
                  alt={projects[getRightIndex()].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-0"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-0"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Gallery (<768px) */}
        <div className="md:hidden">
          {/* Main Image */}
          <div className="relative mb-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl relative">
              <Image
                src={projects[currentIndex].image || "/placeholder.svg?height=300&width=400"}
                alt={projects[currentIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-4">
                <h3 className="text-white font-bold text-xl">{projects[currentIndex].title}</h3>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="flex items-center gap-2 bg-transparent"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </Button>

              <div className="flex gap-2">
                {/* Small preview thumbnails */}
                <div className="w-16 h-12 rounded overflow-hidden opacity-60">
                  <Image
                    src={projects[getLeftIndex()].image || "/placeholder.svg?height=48&width=64"}
                    alt=""
                    width={64}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-12 rounded overflow-hidden opacity-60">
                  <Image
                    src={projects[getRightIndex()].image || "/placeholder.svg?height=48&width=64"}
                    alt=""
                    width={64}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="flex items-center gap-2 bg-transparent"
                aria-label="Next project"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-teal-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? "⏸ Pause" : "▶ Play"} Auto-rotation
          </button>
        </div>
      </div>
    </section>
  )
}
