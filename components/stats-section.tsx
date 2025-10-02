"use client"

import { useRef, useState, useEffect } from "react"

export function StatsSection() {
  const statsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState({
    customers: 0,
    boats: 0,
    docks: 0
  })

  const targetValues = {
    customers: 100,
    boats: 70,
    docks: 20
  }

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Animation effect
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60 // 60 steps for smooth animation
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      
      setAnimatedValues({
        customers: Math.floor(targetValues.customers * progress),
        boats: Math.floor(targetValues.boats * progress),
        docks: Math.floor(targetValues.docks * progress)
      })

      if (step >= steps) {
        clearInterval(timer)
        setAnimatedValues(targetValues)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  const partnerLogos = [
    { name: "Harris", logo: "/harris-logo.png" },
    { name: "Mercury", logo: "/mercury-logo.png" },
    { name: "Yamaha", logo: "/yamaha-logo.png" },
    { name: "Brunswick", logo: "/brunswick-logo.png" },
    { name: "MasterCraft", logo: "/mastercraft-logo.png" },
  ]

  return (
    <section className="bg-[#709392] py-8 sm:py-16 font-serif">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {/* Happy Customers */}
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cormorant-garamond transition-all duration-300" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              {animatedValues.customers}+
            </div>
            <div className="text-base sm:text-lg md:text-xl text-white font-medium font-cormorant-garamond" style={{ fontFamily: "Cormorant Garamond, serif" }}>Happy customers</div>
          </div>

          {/* Boats Detailed */}
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cormorant-garamond transition-all duration-300" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              {animatedValues.boats}+
            </div>
            <div className="text-base sm:text-lg md:text-xl text-white font-medium font-cormorant-garamond" style={{ fontFamily: "Cormorant Garamond, serif" }}>Boats detailed</div>
          </div>

          {/* Docks Repaired */}
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-cormorant-garamond transition-all duration-300" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              {animatedValues.docks}+
            </div>
            <div className="text-base sm:text-lg md:text-xl text-white font-medium font-cormorant-garamond" style={{ fontFamily: "Cormorant Garamond, serif" }}>Docks repaired</div>
          </div>
        </div>
      </div>
    </section>
  )
}
