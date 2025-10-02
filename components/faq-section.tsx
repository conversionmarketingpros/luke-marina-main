"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What measures does Luke Marina Services take to ensure the safety of my high-value boat during detailing?",
      answer:
        "Our expert team uses state-of-the-art equipment and premium materials, conducting thorough safety checks before and after each detailing session. We also provide a detailed report to ensure your boat’s multi-million-dollar investment remains pristine and secure.",
    },
    {
      question: "What is the process for scheduling urgent dock repairs for my estate’s private marina?",
      answer:
        "We recommend scheduling services at least 2-3 weeks in advance, especially during peak seasons (spring and fall). For urgent repairs or emergency services, we offer expedited scheduling based on availability.",
    },
    {
      question: "Can Luke Marina Services provide maintenance plans for my boat and dock throughout the season?",
      answer:
        "Yes, we offer mobile services for many of our offerings including boat detailing, shrink wrapping, and minor repairs. Our mobile units are fully equipped to provide professional service at your location.",
    },
    {
      question: "Can Luke Marina Services provide maintenance plans for my boat and dock throughout the season?",
      answer:
        "We stand behind our work with comprehensive warranties. Detailing services include a 30-day satisfaction guarantee, shrink wrap installations are warranted for the entire season, and repair work comes with a 1-year warranty on parts and labor.",
    },
    
  ]

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `url('/images/68d6c53c6923c10d8687437f.jpeg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 20% dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-normal text-white tracking-[-2%] text-center mb-16">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden transition-all duration-300 ease-in-out" style={{ backgroundColor: 'rgba(27, 27, 27, 0.66)' }}>
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 ease-in-out"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm  md:text-lg lg:text-xl font-normal text-white mr-[10px] transition-colors duration-300">{faq.question}</span>
                <img
                  src="/images/68d127fb2ca02b60675f1af9.svg"
                  alt="FAQ toggle"
                  className={`w-5 h-5 transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                style={{ backgroundColor: 'rgba(27, 27, 27, 0.66)' }}
              >
                <div className="px-6 pb-4">
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-[-2%] font-normal transition-all duration-300 ease-in-out">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
