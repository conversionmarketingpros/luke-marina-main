"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const ArrowRightIcon = () => (
  <img
    src="/images/68d1478ffefaa97c7c34878c.svg"
    alt="Arrow right"
    className="h-4 w-4"
  />
)

export function FooterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [isScrolledToFooter, setIsScrolledToFooter] = useState(false)
  const footerRef = useRef<HTMLElement>(null)
  const lukesmarinaRef = useRef<HTMLDivElement>(null)

  // --- Email validation ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Simplified scroll detection for footer animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Trigger when near bottom (within 100px)
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
      setIsScrolledToFooter(isNearBottom)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // basic required + format validation
    if (!email.trim() || !emailRegex.test(email)) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/efeLuf1RDRQ9zn1iHhtC/webhook-trigger/338a25a7-2afc-44e2-98ef-20e6b0c1cc0b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            source: "Lukes Marina Newsletter Subscription",
            timestamp: new Date().toISOString(),
            website: "Lukes Marina Services",
            leadType: "Newsletter Subscription",
          }),
        }
      )

      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      setSubmitStatus("success")
      setEmail("")
    } catch (error) {
      console.error("Error submitting subscription:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer
      ref={footerRef}
      className={`text-white transition-all duration-1000 ease-in-out relative ${
        isScrolledToFooter ? "min-h-screen" : "bg-black"
      }`}
    >
      {/* Background Image - Only render when scrolled to footer */}
      {isScrolledToFooter && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/68d2de874b65769d611e49e1.jpg"
            alt="Marina footer background"
            fill
            className="object-cover object-bottom"
            quality={60}
            loading="lazy"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}
      {/* 1) Top Call-to-Action Banner */}
      <div
        className={`relative z-10 py-8 sm:py-16 px-4 sm:px-6 transition-all duration-1000 ease-in-out ${
          isScrolledToFooter ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-normal  tracking-[3%] text-white mb-4">
            Find the perfect trip for you and discover extraordinary adventures with us!
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#FCFCFD] font-extralight mb-8 tracking-[3%] max-w-2xl mx-auto">
            Whether you're seeking awe-inspiring landscapes, thrilling outdoor adventures, or immersive cultural experiences, Snaeland has the perfect itinerary for you.
          </p>
          <div className="flex justify-center ">
            <Link href="/contact">
              <button className="group relative flex items-center justify-center w-48 bg-white text-black px-6 py-3 rounded-full shadow-lg transition-all duration-500 overflow-hidden hover:bg-gradient-to-r hover:from-white hover:to-rose-200">
                {/* Default Content (Book Now + Arrow in black circle) */}
                <span className="flex items-center group-hover:opacity-0 transition-opacity duration-300">
                  <span className="mr-3 font-medium">Book Now</span>
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
      </div>

      {/* 2) Middle Content Grid */}
      <div
        className={`relative z-10 py-8 sm:py-16 px-4 sm:px-6 transition-all duration-1000 ease-in-out ${
          isScrolledToFooter ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Newsletter (40% width) */}
            <div className="lg:w-2/5 space-y-6">
              {/* Circular Logo */}
              <Link href="/" className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center">
                <Image
                  src="/images/68cafb12357b4e3b698de878.svg"
                  alt="Luke Marina Services Logo"
                  width={88}
                  height={88}
                  className="w-full h-full object-contain"
                  priority
                  quality={100}
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </Link>

              {/* Newsletter Sign-up */}
              <div>
                <h3 className="text-white font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="flex items-center border-b border-white/30 pb-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent text-white placeholder-white/70 flex-1 outline-none"
                      disabled={isSubmitting}
                      required
                      aria-invalid={
                        submitStatus === "error" && (!email || !emailRegex.test(email))
                          ? true
                          : undefined
                      }
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || !emailRegex.test(email)}
                      className="text-white hover:text-white/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-disabled={isSubmitting || !emailRegex.test(email)}
                      title={
                        isSubmitting
                          ? "Submitting..."
                          : !emailRegex.test(email)
                          ? "Enter a valid email"
                          : "Subscribe"
                      }
                    >
                      <Image
                        src="/images/68d1478ffefaa97c7c34878c.svg"
                        alt="Arrow right"
                        width={20}
                        height={20}
                        className="hover:cursor-pointer"
                      />
                    </button>
                  </div>
                  {submitStatus === "success" && (
                    <p className="text-green-400 text-sm">Thank you for subscribing!</p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-400 text-sm">Please enter a valid email and try again.</p>
                  )}
                </form>
              </div>
            </div>

            {/* Right Columns - Other sections (60% width) */}
            <div className="lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mx-auto">
              {/* Second Column - HOURS */}
              <div className="mx-auto text-center md:text-left">
                <h4 className="text-white font-semibold mb-6  uppercase">Hours</h4>
                <div className=" text-xs text-white/90">
                  <p className="mb-2">MON–08:00 AM – 05:00 PM</p>
                  <p className="mb-2">TUE–08:00 AM – 05:00 PM</p>
                  <p className="mb-2">WED–08:00 AM – 05:00 PM</p>
                  <p className="mb-2">THURS–08:00 AM – 05:00 PM</p>
                  <p className="mb-2">FRI–08:00 AM – 05:00 PM</p>
                  <p className="mb-2">SAT–CLOSED</p>
                  <p>SUN–CLOSED</p>
                </div>
              </div>

              {/* Third Column - HOME */}
              <div className="mx-auto text-center md:text-left">
                <h4 className="text-white font-semibold mb-6 uppercase">Home</h4>
                <ul className=" text-white/90">
                  <li>
                    <Link href="/about" className="hover:text-white text-sm text-white/90 transition-colors">
                      About Us
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="/blog" className="hover:text-white text-sm text-white/90 transition-colors">
                      Blog
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="/contact" className="hover:text-white text-sm text-white/90 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Fourth Column - SERVICES */}
              <div className="mx-auto text-center md:text-left">
                <h4 className="text-white font-semibold mb-6 uppercase">Services</h4>
                <ul className=" text-white/90">
                  <li>
                    <Link
                      href="/services/detailing"
                      className="hover:text-white text-sm text-white/90 transition-colors"
                    >
                      Detailing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/shrink-wrap"
                      className="hover:text-white text-sm text-white/90 transition-colors"
                    >
                      Shrink Wrap
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/dock-repair"
                      className="hover:text-white text-sm text-white/90 transition-colors"
                    >
                      Dock Repair & Maintenance
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Fifth Column - Help & Information */}
              <div className="mx-auto text-center md:text-left">
                <h4 className="text-white font-semibold mb-6 uppercase">Help & Information</h4>
                <ul className="text-white/90">
                  <li>
                    <Link
                      href="/terms-and-conditions"
                      className="hover:text-white text-sm text-white/90 transition-colorss"
                    >
                      Terms & Condition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:text-white text-sm text-white/90 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Center - LUKESMARINA wordmark with image mask */}
      <div
        ref={lukesmarinaRef}
        className={`relative z-10 text-center font-bold uppercase transition-all duration-1000 ease-in-out ${
          isScrolledToFooter ? "py-16 sm:py-32 text-white" : "py-4 sm:py-8 "
        }`}
        style={{
          width: "90vw",
          maxWidth: "100%",
          margin: "0 auto",
          backgroundImage: isScrolledToFooter
            ? "none"
            : "url('/images/68d2ded1c65175ecffe26093.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: isScrolledToFooter ? "initial" : "text",
          WebkitTextFillColor: isScrolledToFooter ? "white" : "transparent",
          backgroundClip: isScrolledToFooter ? "initial" : "text",
          letterSpacing: "0.1em",
          fontSize: isScrolledToFooter ? "clamp(1.5rem, 6vw, 4rem)" : "clamp(1rem, 4vw, 2.5rem)",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        LUKES MARINA SERVICES
      </div>

      {/* 3) Bottom Row */}
      <div
        className={`relative z-10 border-t border-white/20 py-6 sm:py-8 px-4 sm:px-6 transition-all duration-1000 ease-in-out ${
          isScrolledToFooter ? "opacity-100" : "opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Left side - Legal links */}
            <div
              className={`flex flex-wrap gap-6 text-sm text-white/70 transition-all duration-1000 ease-in-out ${
                isScrolledToFooter ? "opacity-100" : "opacity-100"
              }`}
            >
              <a href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy
              </a>
            </div>

            {/* Right side - Copyright */}
            <div className="text-sm text-white/70">© 2025 Copyright By Lukes Marina Services</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
