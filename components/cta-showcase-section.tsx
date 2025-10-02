import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function CtaShowcaseSection() {
  return (
    <section className="py-12  px-6 h-[265px] bg-[#709392] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/wave-overlay.png" alt="" fill className="object-cover opacity-100" priority={false} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-xl lg:text-4xl font-light text-white text-balance">
          Our go-to team for 
        </h2>
        <h2 className="text-xl lg:text-4xl font-light text-white mb-4 text-balance">
        everything on the lake
        </h2>

        <div className="flex justify-center py-4">
        <Link href="/contact"> 
  <button
    className="group relative flex items-center justify-center w-48 bg-white text-black px-6 py-3 rounded-full shadow-lg transition-all duration-500 overflow-hidden hover:bg-gradient-to-r hover:from-white hover:to-rose-200"
  >
    {/* Default Content (Book Now + Arrow in black circle) */}
    <span className="flex items-center group-hover:opacity-0 transition-opacity duration-300">
      <span className="mr-3 font-medium">Contact Us</span>
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
    </section>
  )
}
