'use client'

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/bolg-data"
import { useState, useEffect } from "react"
import WaveDivider from "@/components/lake-wave-test"

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getBlogPostBySlug(params.slug)
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.relatedPosts)
  const totalSections = post.content.sections.length

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = parseInt(entry.target.id.split('-')[1])
          setActiveSection(sectionIndex)
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('[id^="section-"]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="section-"]')
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      
      if (docHeight > 0) {
        const progress = Math.min((scrollTop / docHeight) * 100, 100)
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
      className="relative min-h-screen flex flex-col bg-gray-900 bg-cover bg-center"
      style={{
        backgroundImage: ` url('/images/68d337e64b6576e3fb3989f0.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Navbar />

      <div className="flex-1 flex items-center justify-start">
        <div className=" px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-7xl">
            
            <h1 className="text-2xl mr-12 md:mr-8 sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
            </h1>
            
            <nav className="mt-8">
                <ol className="flex items-center space-x-2 text-sm text-white/80">
                  <li>
                    <a href="/" className="text-white font-bold transition-colors">
                      Home
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white font-bold">Blog</span>
                  </li>
                  <li className="flex items-center">  
                  <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white font-bold">{post.title}</span>
                  </li>
                </ol>
              </nav>


          </div>
        </div>
      </div>
      {/* Social Media Icons - Right Side */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-4">
      <a 
          href="https://www.facebook.com/profile.php?id=61559601274027" 
          className="w-12 h-12 rounded-full hover:bg-black  bg-transparent flex items-center justify-center  transition-colors duration-300"
          aria-label="facebook"
        >
          <Image 
            src="/images/68d6bf82b606d6160dfda08d.svg" 
            alt="facebook" 
            width={42} 
            height={42} 
            className="text-white"
          />
        </a>
        {/* Instagram */}
  <a
    href="#"
    className="group w-12 h-12 rounded-full bg-transparent flex items-center justify-center transition-colors duration-300 hover:bg-black"
    aria-label="Instagram"
  >
    <Image
      src="/images/68d303ca26b7f7665c729e4d.svg"
      alt="Instagram"
      width={42}
      height={42}
      className="transition duration-300 group-hover:filter-none"
    />
  </a>

  

  {/* YouTube */}
  <a
    href="#"
    className="group w-12 h-12 rounded-full bg-transparent flex items-center justify-center transition-colors duration-300 hover:bg-black"
    aria-label="YouTube"
  >
    <Image
      src="/images/68d303ca0f427167f6d7410e.svg"
      alt="YouTube"
      width={42}
      height={42}
      className="transition duration-300 group-hover:filter-none"
    />
  </a>
      </div>
      
      <WaveDivider />
    </section>

      {/* Main Content Section */}
      <section className="bg-white text-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                      width={48}
                      height={48}
                className="object-cover"
              />
            </div>
            <div>
                    <p className="text-gray-900 font-medium text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{post.author.name}</p>
                    <p className="text-gray-600 text-xs" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {post.author.date} • {post.readTime}
              </p>
            </div>
          </div>

                {/* Table of Contents */}
                <div className="mb-8">
                  <h3 className="text-gray-900 font-bold text-sm mb-4"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>TABLE OF CONTENTS</h3>
                  <nav className="space-y-2">
                    {post.content.sections.map((section, index) => (
                      <a
                        key={index}
                        href={`#section-${index}`}
                        className={`block text-sm transition-colors py-1 ${
                          activeSection === index
                            ? 'text-[#709392] bg-[#709392]/10 px-2 rounded'
                            : 'text-gray-600 hover:text-[#709392]'
                        }`}
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {section.heading}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Scroll Progress */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    <span>Progress</span>
                    <span>{activeSection + 1}/{totalSections}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div 
                      className="bg-[#FACC15] h-1 rounded-full transition-all duration-300"
                      style={{ width: `${((activeSection + 1) / totalSections) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
          {/* Content Sections */}
              <div className="space-y-16">
            {post.content.sections.map((section, index) => (
                  <div key={index} id={`section-${index}`}>
                    <h2 className="text-[#709392] text-3xl md:text-4xl font-light mb-8" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      {section.heading}
                    </h2>
                    <div className="text-gray-700 leading-relaxed text-lg space-y-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      <p>{section.content}</p>
                    </div>
                {section.image && (
                      <div className="relative aspect-video rounded-lg overflow-hidden mt-8">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.heading}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="bg-white text-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#709392] text-4xl md:text-5xl font-semibold mb-12" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            You May Also Like
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.slice(0, 3).map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <h3 className="text-gray-900 text-lg font-medium mb-2 group-hover:text-[#709392] transition-colors" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{relatedPost.excerpt}</p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{relatedPost.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
