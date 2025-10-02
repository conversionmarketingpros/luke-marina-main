import { Navbar } from "@/components/navbar"
import Image from "next/image"
import WaveDivider from "@/components/lake-wave-test"

export function TermsAndConditionsHeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: ` url('/images/68d3385f26b7f722c17b613b.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 50% dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-2xl mr-12 md:mr-0 sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">Terms & Conditions</h1>
            <nav className="flex items-center space-x-2 text-white/80">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <span>{">"}</span>
              <span className="text-white">Terms and Conditions</span>
            </nav>
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
