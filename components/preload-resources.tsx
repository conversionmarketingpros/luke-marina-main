"use client"

import { useEffect } from "react"

export function PreloadResources() {
  useEffect(() => {
    if (typeof document === "undefined") return

    // Preload critical images for above-the-fold content
    const criticalImages = [
      "/images/68cafa8ba17f970eb20942ea.jpg", // Hero background - most critical
      "/images/68d32be0037a13a1d0e2bae0.jpeg", // Why us section
      "/images/68d32be026b7f789aa799726.jpg", // Why us section
      "/images/68d32be0ef40ca20b1c8281a.jpg", // Why us section
      "/images/68d28a9526b7f7c47425e1ae.jpeg", // Gallery images
      "/images/68d28a95448d7b7da6e47f16.jpeg",
      "/images/68d28a954b6576e394dbbf31.jpg",
    ]

    // Preload images with different priorities
    criticalImages.forEach((src, index) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      // Add fetchpriority for the most critical image
      if (index === 0) {
        link.setAttribute("fetchpriority", "high")
      }
      document.head.appendChild(link)
    })

    // Preload critical fonts
    const fonts = [
      "/_next/static/media/plus-jakarta-sans.woff2",
      // Add more font files if needed
    ]

    fonts.forEach((fontUrl) => {
      const fontLink = document.createElement("link")
      fontLink.rel = "preload"
      fontLink.as = "font"
      fontLink.type = "font/woff2"
      fontLink.crossOrigin = "anonymous"
      fontLink.href = fontUrl
      document.head.appendChild(fontLink)
    })

    // Preload critical CSS files
    const criticalCSS = [
      "/_next/static/css/app/layout.css",
      "/_next/static/css/app/page.css", // If exists
    ]

    criticalCSS.forEach((cssUrl) => {
      const cssLink = document.createElement("link")
      cssLink.rel = "preload"
      cssLink.as = "style"
      cssLink.href = cssUrl
      document.head.appendChild(cssLink)
    })

    // Prefetch important pages for faster navigation
    const importantPages = [
      "/services",
      "/about",
      "/contact",
      "/blog",
    ]

    importantPages.forEach((pageUrl) => {
      const prefetchLink = document.createElement("link")
      prefetchLink.rel = "prefetch"
      prefetchLink.href = pageUrl
      document.head.appendChild(prefetchLink)
    })

    // DNS prefetch for external resources
    const externalDomains = [
      "https://services.leadconnectorhq.com", // For form submission
      "https://fonts.googleapis.com", // If using Google Fonts
      "https://www.googletagmanager.com", // If using GTM
    ]

    externalDomains.forEach((domain) => {
      const dnsLink = document.createElement("link")
      dnsLink.rel = "dns-prefetch"
      dnsLink.href = domain
      document.head.appendChild(dnsLink)
    })

    // Add resource hints for better performance
    const resourceHints = document.createElement("link")
    resourceHints.rel = "preconnect"
    resourceHints.href = "https://services.leadconnectorhq.com"
    document.head.appendChild(resourceHints)

    // Prefetch next likely images based on user behavior
    let prefetchTimer: NodeJS.Timeout
    const handleUserInteraction = () => {
      clearTimeout(prefetchTimer)
      prefetchTimer = setTimeout(() => {
        // Prefetch gallery images after user shows interest
        const galleryImages = [
          "/images/68d2bd2a1dbafc3707757dce.jpeg",
          "/images/68d2bd2a26b7f7aaac32a6e1.jpg",
          "/images/68d2bd2a4b65760637e9a0ec.jpg",
          "/images/68d2bd2aee4bdc02a1cb2a65.jpg",
        ]

        galleryImages.forEach((src) => {
          const link = document.createElement("link")
          link.rel = "prefetch"
          link.as = "image"
          link.href = src
          document.head.appendChild(link)
        })
      }, 2000) // Wait 2 seconds after interaction
    }

    // Listen for user interactions to trigger smart prefetching
    document.addEventListener('mouseenter', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })
    document.addEventListener('scroll', handleUserInteraction, { once: true })

    console.log("🚀 Critical resources preloaded for optimal performance")

    return () => {
      clearTimeout(prefetchTimer)
      document.removeEventListener('mouseenter', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('scroll', handleUserInteraction)
      
      // Note: We don't remove the preload links as they should stay for the page lifetime
    }
  }, [])

  return null
}
