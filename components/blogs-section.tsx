"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect, useMemo } from "react"
import { blogPosts } from "@/lib/bolg-data"

export function BlogsSection() {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null)
  const [displayBlogs, setDisplayBlogs] = useState<typeof blogPosts>([])
  
  // Memoize the blogs array to prevent infinite re-renders
  const blogs = useMemo(() => blogPosts.slice(0, 6), [])

  // Initialize display blogs
  useEffect(() => {
    const firstBlog = blogs[currentBlogIndex]
    const secondBlog = blogs[(currentBlogIndex + 1) % blogs.length]
    setDisplayBlogs([firstBlog, secondBlog])
  }, [currentBlogIndex, blogs])

  const nextBlog = () => {
    if (isTransitioning) return
    setDirection('next')
    setIsTransitioning(true)
    
    // Start exit animation
    setTimeout(() => {
      setCurrentBlogIndex((prev) => (prev + 2) % blogs.length)
      // Reset transition state after new content loads
      setTimeout(() => {
        setIsTransitioning(false)
        setDirection(null)
      }, 300)
    }, 250)
  }

  const prevBlog = () => {
    if (isTransitioning) return
    setDirection('prev')
    setIsTransitioning(true)
    
    // Start exit animation
    setTimeout(() => {
      setCurrentBlogIndex((prev) => (prev - 2 + blogs.length) % blogs.length)
      // Reset transition state after new content loads
      setTimeout(() => {
        setIsTransitioning(false)
        setDirection(null)
      }, 300)
    }, 250)
  }


  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className=" mb-12">
          <p className="text-black text-3xl mb-4">
            Collection of my insights latest trends, tips, and thought-provoking
          </p>
          <h2 className="text-5xl lg:text-8xl font-bold text-[#106264] mb-8">Blogs</h2>
        </div>

        {/* Blog Cards Container */}
        <div className="relative">

          {/* Two Blog Cards with Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayBlogs.map((blog, index) => (
              <div
                key={`${currentBlogIndex}-${index}`}
                className={`group bg-white transition-all duration-700 ease-in-out ${
                  isTransitioning 
                    ? direction === 'next' 
                      ? 'transform translate-x-full opacity-0' 
                      : 'transform -translate-x-full opacity-0'
                    : 'transform translate-x-0 opacity-100'
                }`}
                style={{
                  transitionDelay: isTransitioning ? '0ms' : `${index * 150}ms`
                }}
              >
                {/* Blog Image */}
                <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="mt-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-3 tracking-[-3%] group-hover:text-[#106264] transition-colors">
                  {blog.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    <Image
                        src={blog.author.image || "/placeholder.svg"}
                        alt={blog.author.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">{blog.author.name}</span>
                      <span>•</span>
                      <span>{blog.author.date}</span>
                    <span>•</span>
                      <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {blog.excerpt}
                </p>

                {/* View Blog Button */}
                  <Link href={`/blog/${blog.slug}`}>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-black hover:text-[#106264] font-medium transition-colors relative group/button"
                >
                  View Blog
                  <div className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-black group-hover/button:bg-[#106264] transition-colors mt-3"></div>
                </Button>
                  </Link>
                </div>
              </div>
            ))}
            </div>
        </div>

        {/* Navigation Buttons - Bottom */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={prevBlog}
            disabled={isTransitioning}
            className={`w-16 sm:w-20 h-6 sm:h-8 cursor-pointer border border-black hover:border-black hover:border-2 rounded-full flex items-center justify-center hover:border-[#106264] hover:text-[#106264] transition ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
          >
            <Image 
              src="/images/68d31db99c409979c65f407b.svg" 
              alt="Previous" 
              width={20} 
              height={20} 
              className="h-5 w-5" 
            />
          </button>
          
          <button
            onClick={nextBlog}
            disabled={isTransitioning}
            className={`w-16 sm:w-20 h-6 sm:h-8 cursor-pointer border border-black hover:border-black hover:border-2 rounded-full flex items-center justify-center hover:border-[#106264] hover:text-[#106264] transition ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
          >
            <Image 
              src="/images/68d31db926b7f7196b761ca2.svg" 
              alt="Next" 
              width={20} 
              height={20} 
              className="h-5 w-5" 
            />
          </button>
        </div>
      </div>
    </section>
  )
}
