"use client"

import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import BeforeAfter from "./BeforeAfter"

interface Project {
  id: string
  name: string
  beforeSrc: string
  afterSrc: string
  thumbnailSrc: string
  description: string
}

const ArrowLeftIcon = () => (
  <Image 
    src="/images/68d68fc46bb7f52651cbb95a.svg" 
    alt="Previous" 
    width={20} 
    height={20} 
    className="h-5 w-5 transition group-hover:opacity-70"
  />
)

const ArrowRightIcon = () => (
  <Image 
    src="/images/68d68fc4f838e20c00533457.svg" 
    alt="Next" 
    width={20} 
    height={20} 
    className="h-5 w-5 transition group-hover:opacity-70"
  />
)

export function ProjectsGallery() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with center image
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const projects: Project[] = [
    {
      id: "boat-detailing-1",
      name: "Boat Deck Detailing",
      beforeSrc: "/images/68d2c0004b6576bc0eebc9a7.jpeg",
      afterSrc: "/images/68d2c000f80381954f496dfb.jpeg",
      thumbnailSrc: "/images/68d2c000f80381954f496dfb.jpeg",
      description: "Complete deck restoration and detailing"
    },
    {
      id: "boat-detailing-2", 
      name: "Interior Restoration",
      beforeSrc: "/images/68d2c03ae6849c70b381acbf.jpg",
      afterSrc: "/images/68d2c03a26b7f77c113509ab.jpg",
      thumbnailSrc: "/images/68d2c03a26b7f77c113509ab.jpg",
      description: "Interior cleaning and restoration"
    },
    {
      id: "shrink-wrap-1",
      name: "Winter Protection",
      beforeSrc: "/images/68d2c0669c4099b187188c4c.jpg", 
      afterSrc: "/images/dock repair .jpg",
      thumbnailSrc: "/images/dock repair .jpg",
      description: "Professional shrink wrapping service"
    },
    {
      id: "dock-repair-1",
      name: "Dock Maintenance",
      beforeSrc: "/images/68d2c0b4e6849ceef58285ce.jpeg",
      afterSrc: "/images/68d2c0b44b65765ae0ecccc4.jpeg", 
      thumbnailSrc: "/images/68d2c0b4e6849ceef58285ce.jpeg",
      description: "Dock repair and structural maintenance"
    },
    {
      id: "boat-detailing-3",
      name: "Engine Detail",
      beforeSrc: "/images/68d2c107037a1329a6a083b8.jpg",
      afterSrc: "/images/68d2c1079c4099a44019892b.jpeg",
      thumbnailSrc: "/images/68d2c1079c4099a44019892b.jpeg",
      description: "Engine cleaning and maintenance"
    }
  ]

  const currentProject = projects[currentIndex]

  const nextImage = () => {
    if (isTransitioning) return
    setDirection('next')
    setIsTransitioning(true)
    setIsLoading(true)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
      setIsLoading(false)
      setDirection(null)
    }, 500)
  }

  const prevImage = () => {
    if (isTransitioning) return
    setDirection('prev')
    setIsTransitioning(true)
    setIsLoading(true)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
      setIsLoading(false)
      setDirection(null)
    }, 500)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Stage */}
      <div className="absolute inset-0">
        <Image
          src="/images/68d32483037a1317d2e0c731.jpg"
          alt="Marina backdrop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Logo Medallion */}
          <div className="flex justify-center mb-6">
              <Image
                src="/images/2 21.png"
                alt="Luke Marina Services Logo"
                width={52}
                height={52}
                className="w-14 h-14 object-contain"
              />
            
          </div>
          
          {/* Eyebrow */}
          <p className="text-[#A1A1A1] text-md font-medium tracking-[20%] uppercase mb-4">
            PROJECTS GALLERY
          </p>
          
          {/* Intro Copy */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mx-auto leading-relaxed">
            At Lukes Marina Services, we invite you to explore our portfolio of exceptional boat detailing, 
            shrink wrapping, and dock maintenance projects. Each transformation showcases our commitment to 
            quality, attention to detail & precision.
          </p>
        </div>

        {/* Horizontal Carousel Layout */}
        <div className="relative">

          {/* Image Carousel */}
          <div className="flex items-end justify-center gap-4 overflow-visible sm:overflow-hidden">
            {/* Left Images */}
            <div className="hidden sm:flex gap-3 items-end">
              {[
                projects[(currentIndex - 2 + projects.length) % projects.length],
                projects[(currentIndex - 1 + projects.length) % projects.length]
              ].map((project, index) => (
                <div
                  key={`left-${project.id}`}
                  className={`relative rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out transform ${
                    index === 0 
                      ? `w-24 h-40 opacity-50 ${isTransitioning ? 'translate-x-2 scale-95' : 'translate-x-0 scale-100'}` // Smallest (furthest left)
                      : `w-42 h-[250px] opacity-60 ${isTransitioning ? 'translate-x-1 scale-98' : 'translate-x-0 scale-100'}` // Half height of center (closer to center)
                  }`}
                >
                  <Image
                    src={project.thumbnailSrc}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Center Before/After Viewer */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <div className={`relative w-full sm:w-96 h-[500px] rounded-[10px] overflow-hidden shadow-2xl transition-all duration-500 ease-in-out ${
                isTransitioning 
                  ? direction === 'next' 
                    ? 'transform scale-95 opacity-70' 
                    : 'transform scale-95 opacity-70'
                  : 'transform scale-100 opacity-100'
              }`}>
                <BeforeAfter
                  beforeSrc={currentProject.id === "dock-repair-1" ? currentProject.afterSrc : currentProject.beforeSrc}
                  afterSrc={currentProject.id === "dock-repair-1" ? currentProject.beforeSrc : currentProject.afterSrc}
                  beforeLabel="Before"
                  afterLabel="After"
                  initialPosition={0.5}
                  aspectRatio={undefined}
                  height="100%"
                  className="w-full h-full"
                />
                
                {/* Loading Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Images */}
            <div className="hidden sm:flex gap-3 items-end">
              {[
                projects[(currentIndex + 1) % projects.length],
                projects[(currentIndex + 2) % projects.length]
              ].map((project, index) => (
                <div
                  key={`right-${project.id}`}
                  className={`relative rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out transform ${
                    index === 1 
                      ? `w-24 h-40 opacity-50 ${isTransitioning ? '-translate-x-2 scale-95' : 'translate-x-0 scale-100'}` // Smallest (furthest right)
                      : `w-42 h-[250px] opacity-60 ${isTransitioning ? '-translate-x-1 scale-98' : 'translate-x-0 scale-100'}` // Half height of center (closer to center)
                  }`}
                >
                  <Image
                    src={project.thumbnailSrc}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Bottom */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevImage}
            disabled={isTransitioning}
            className={`group w-16 sm:w-20 h-6 sm:h-8 cursor-pointer border border-white hover:border-gray-300 hover:border-2 rounded-full flex items-center justify-center hover:text-gray-300 transition ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
          >
            <ArrowLeftIcon />
          </button>
          
          <button
            onClick={nextImage}
            disabled={isTransitioning}
            className={`group w-16 sm:w-20 h-6 sm:h-8 cursor-pointer border border-white hover:border-gray-300 hover:border-2 rounded-full flex items-center justify-center hover:text-gray-300 transition ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
          >
            <ArrowRightIcon />
          </button>
        </div>

        {/* Project Info */}
        {/* <div className="text-center mt-8">
          <h3 className="text-white text-xl font-semibold mb-2">
            {currentProject.name}
          </h3>
          <p className="text-white/80 text-sm">
            {currentProject.description}
          </p>
        </div> */}
      </div>
    </section>
  )
}
