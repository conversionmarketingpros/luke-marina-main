import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function IdahoMarinaIntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16"> <span className="text-gray-900 text-4xl lg:text-5xl font-normal">About</span> Lukes Marina Services</h2>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div className="space-y-8">
            {/* First Point */}
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">A Passion Born on Lake Coeur d'Alene</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Luke Marina Services was born from a lifelong love for the crystal-clear waters of Lake Coeur d'Alene, a deep-rooted dedication to exceptional craftsmanship, and a vision to redefine the way marina care is delivered. What began as a passion for boating and a desire to serve the local community has evolved into a premier destination for those who value both the beauty of the lake and the precision of expert marine services.
                </p>
              </div>
            </div>

            {/* Second Point */}
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">More Than Just a Service — A Trusted Hub</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are more than just a service provider — Luke Marina is a trusted hub where premium boat detailing, professional shrink wrapping, and meticulous dock maintenance come together under one commitment: to protect, preserve, and perfect your boating lifestyle. Every solution is thoughtfully tailored to meet the needs of local boat owners and lake enthusiasts in CDA, Idaho, ensuring peace of mind and pride in vessel ownership.
                </p>
              </div>
            </div>

            {/* Third Point */}
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission: Excellence in Every Detail</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to deliver a seamless, luxurious boating experience through expert care, secure solutions, and unmatched attention to detail — ensuring every vessel performs flawlessly and shines on Lake Coeur d'Alene.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            
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

          <div className="relative">
            <Image
              src="/images/68d15910cc2a797a0e99bebf.jpg"
              alt="Boat under shrink wrap at marina dock"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        
      </div>
       {/* Image row */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          <img
            src="/images/68d159d1da43d8e487289692.jpg"
            alt="Boat detailing service"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/68d15a0ffefaa9807939d7e1.png"
            alt="Dock maintenance work"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/68d15a8056c44502590739c6.png"
            alt="Boat shrink wrapping"
            className="w-full h-48 object-cover rounded-lg"
          />
          
         </div>
       </div>
    </section>
  )
}
