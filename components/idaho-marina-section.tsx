import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function IdahoMarinaSection() {
  return (
    <section className="py-16 px-2 md:px-6 bg-white ">
      <div className=" mx-auto px-2 md:px-6">
        <h2 className="text-4xl lg:text-7xl font-semibold text-black mb-6 uppercase">Lukes Marina Services</h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-light leading-relaxed pb-2 mx-auto">
          Luke Marina Services was born from a lifelong love for Lake Coeur d'Alene, a dedication to exceptional craftsmanship, and a vision to redefine marina care. More than just a service, Luke Marina is a hub for premium boat detailing, shrink wrapping, and dock maintenance, tailored to the needs of local boat owners and lake enthusiasts in CDA Idaho.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-light leading-relaxed pb-2 mx-auto">Our mission is simple yet powerful: to deliver every client a seamless, luxurious boating experience with expert care and secure solutions. Combining local expertise with a commitment to excellence, we serve boat owners, captains, and maritime enthusiasts, ensuring their vessels shine on the pristine waters of Lake Coeur d'Alene.</p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-light leading-relaxed pb-2 mb-8 mx-auto">
        Whether you're seeking meticulous maintenance, a safe berth for your vessel, or a premium lakeside service, Luke Marina is your trusted partner. Our global network of trusted maritime partners enhances our offerings, making us the go-to choice for an unparalleled boating lifestyle in Idaho.
        </p>

        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative h-48 w-72 rounded-lg overflow-hidden">
            <Image src="/images/68d27e30448d7b53eadec69e.jpg" alt="Marina dock view" fill className="object-cover" />
          </div>
          <div className="relative h-48 w-72 rounded-lg overflow-hidden">
            <Image src="/images/68d27e30448d7b5b0bdec69f.jpg" alt="Boat detailing service" fill className="object-cover" />
          </div>
          <div className="relative h-48 w-72 rounded-lg overflow-hidden">
            <Image src="/images/68d27e3076bc7cae83629a25.jpg" alt="Shrink wrapped boat" fill className="object-cover" />
          </div>
          
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/contact">
            <div
              className="w-[280px] flex items-center justify-center bg-[#106264] text-white px-6 py-3 rounded-full shadow transition-colors duration-200 cursor-pointer border-2 border-transparent hover:bg-white hover:text-[#106264] hover:border-[#106264]"
            >
              <span className="font-medium mr-2">Get in Touch</span>
              {/* Diagonal down-right arrow (↘) follows current text color */}
              <svg
                className="w-5 h-5 transform rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}
