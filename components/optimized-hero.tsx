"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import WaveDivider from "@/components/lake-wave-test"

interface OptimizedHeroProps {
  children?: React.ReactNode
}

export function OptimizedHero({ children }: OptimizedHeroProps) {
  return (
    <div className="relative min-h-screen">
      {/* Optimized Background Image with Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/68cafa8ba17f970eb20942ea.jpg"
          alt="Marina background - Lake Coeur d'Alene with boats and docks"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Hero Content - This will be passed as children */}
        {children}

        {/* Desktop Make a Call Button */}
        <div className="hidden lg:flex justify-center py-6 sm:py-8 lg:py-10 mb-16 lg:mb-20 xl:mb-24">
          <Link href="/services">
            <button className="group relative flex items-center justify-center w-48 bg-white text-black px-6 py-3 rounded-full shadow-lg transition-all duration-500 overflow-hidden hover:bg-gradient-to-r hover:from-white hover:to-rose-200">
              {/* Default Content (Book Now + Arrow in black circle) */}
              <span className="flex items-center group-hover:opacity-0 transition-opacity duration-300">
                <span className="mr-3 font-medium">Make a Call</span>
                <span className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
                  <svg
                    className="w-4 h-4 transform -rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>

              {/* Hover Content (Circle + Make a Call + Arrow) */}
              <span className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 font-medium transition-opacity duration-300 text-black">
                {/* Circle with anchor icon */}
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="5" r="1" />
                    <path d="M12 22V6" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                    <path d="M9 16h6" />
                  </svg>
                </span>

                {/* Text */}
                <span>Make a Call</span>

                {/* Arrow after text */}
                <svg
                  className="w-5 h-5 transform -rotate-45 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Wave Divider at the bottom of hero section */}
      <div className="absolute bottom-0 left-0 w-full">
        <WaveDivider />
      </div>
    </div>
  )
}
