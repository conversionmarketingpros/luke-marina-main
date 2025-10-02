"use client"

import { useState, useEffect, useRef } from "react"

interface ProcessStep {
  title: string
  description: string
}

interface ServiceProcessSectionProps {
  steps: ProcessStep[]
  imageUrl?: string
}

export function ServiceProcessSection({ steps, imageUrl }: ServiceProcessSectionProps) {
  const [openStep, setOpenStep] = useState<number | null>(null)
  const [currentStepIndex, setCurrentStepIndex] = useState(-1)
  const sectionRef = useRef<HTMLElement>(null)

  // Animate steps sequentially when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setOpenStep(i)
              setCurrentStepIndex(i)
            }, i * 1000) // smoother delay
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [steps])

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white transition-all duration-500"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            Our Services <span className=" font-bold text-[#106264]">Process</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Process image */}
          <div className="relative">
            <img
              src={imageUrl || "/images/68d33153e1ce457918e7fdc8.png"}
              alt="Service process"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Process steps accordion */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transform transition-all ease-out duration-700 ${
                  index <= currentStepIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <button
                  className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-500 ${
                    openStep === index
                      ? "bg-[#709392]/10 border-b border-[#709392]"
                      : "hover:bg-gray-50 border-b border-gray-200"
                  }`}
                  onClick={() =>
                    setOpenStep(openStep === index ? null : index)
                  }
                >
                  <span
                    className={`font-bold text-xl transition-colors duration-300 ${
                      openStep === index ? "text-[#709392]" : "text-black"
                    }`}
                  >
                    {step.title}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-all duration-500 ${
                      openStep === index
                        ? "rotate-180 text-[#709392]"
                        : "rotate-0 text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openStep === index && (
                  <div className="px-6 pb-4 border-b border-[#709392]/30 overflow-hidden">
                    <div className="transition-all ease-out duration-700 opacity-100 translate-y-0">
                      <p className="text-black leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Scroll hint only at the end */}
          
        </div>
      </div>
    </section>
  )
}