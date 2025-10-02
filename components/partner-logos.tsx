"use client"

import Image from "next/image"

export { PartnerLogos }
export default PartnerLogos

function PartnerLogos() {
  const logos = [
    {
      src: "/images/68cc2b9f09fa3e3faca60045.svg",
      alt: "Harris",
      width: 120,
    },
    {
      src: "/images/68cc2bc1b80003aedd1c665d.svg",
      alt: "Rebal",
      width: 120,
    },
    {
      src: "/images/68cc2bd54fae2cf20dcf0831.svg",
      alt: "Malilbu",
      width: 120,
    },
    {
      src: "/images/68cc2bfdf782ba9e18a86487.svg",
      alt: "Mercury",
      width: 120,
    },
    {
      src: "/images/68cc2c1009fa3edcf6a6b865.svg",
      alt: "MasterCraft.",
      width: 120,
    },
  ]

  return (
    <div className="bg-black border-t border-white/20 pt-8 pb-8 w-full overflow-hidden">
      <div className="flex items-center gap-12 animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={`first-${index}`} className="h-8 mr-20 flex-shrink-0">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}

        {logos.map((logo, index) => (
          <div key={`second-${index}`} className="h-8 mr-20 flex-shrink-0">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}

        {logos.map((logo, index) => (
          <div key={`third-${index}`} className="h-8 mr-20 flex-shrink-0">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  )
}
