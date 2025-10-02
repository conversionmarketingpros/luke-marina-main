import { Navbar } from "@/components/navbar"
import WaveDivider from "@/components/lake-wave-test"
 
import Image from "next/image"

export function AboutHeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: ` url('/images/68d1586583739a42f2657185.jpg')`,
      }}
    >
      {/* 50% dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <Navbar />

      <div className="flex-1 flex items-center  justify-start relative z-10">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-7xl ">
            
            <h1 className="text-2xl mr-8 md:mr-0 sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About Luke Marina:<br /> Passion for Precision, Commitment to Luxury
            </h1>
            
            <nav className="mt-8">
                <ol className="flex items-center space-x-2 text-sm text-white/80">
                  <li>
                    <a href="/" className="text-white font-bold transition-colors">
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
                    <span className="text-white font-bold">About</span>
                  </li>
                </ol>
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
