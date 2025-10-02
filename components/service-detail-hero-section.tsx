import { Navbar } from "./navbar"
import WaveDivider from "@/components/lake-wave-test"
import Image from "next/image"

interface ServiceDetailHeroSectionProps {
  title: string
  breadcrumb: string
  backgroundImage: string
}

export function ServiceDetailHeroSection({ title, breadcrumb, backgroundImage }: ServiceDetailHeroSectionProps) {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-gray-900"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60" style={{ background: "rgba(0, 0, 0, 0.6)" }} />

      <div className="relative  flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1 flex items-center justify-start">
          <div className="px-4 lg:px-8">
            <div className="max-w-7xl">
              {/* Breadcrumb */}
              

              {/* Main heading */}
              <h1 className="text-2xl mr-12 md:mr-0 sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight text-balance pr-4">
                {title}
              </h1>

              <nav className="mt-8">
                <ol className="flex items-center space-x-2 text-sm text-white/80">
                  <li>
                    <a href="/" className="hover:text-white transition-colors">
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
                    <span>Services</span>
                  </li>
                  <li className="flex items-center pr-6 md:pr-0">
                    <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="pr-6 md:pr-0">{breadcrumb}</span>
                  </li>
                </ol>
              </nav>
            </div>
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
  )
}
