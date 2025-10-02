import { Navbar } from "@/components/navbar"
import WaveDivider from "@/components/lake-wave-test"
import Image from "next/image"

export function ServicesHeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/68d32fae26b7f717147a55fa.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-roledescription="hero banner"
      aria-label="Services hero section"
    >
      <Navbar />

      <div className="flex-1 flex items-center justify-start">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-7xl">
            <h1 className="text-2xl mr-6 md:mr-0 sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Luke Marina Services: Expert Care for Your Lakefront Vessel and dock
            </h1>

            <nav className="mt-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-white/80">
                <li>
                  <a href="/" className="hover:text-white font-bold transition-colors">
                    Home
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">{">"}</span>
                  <span className="text-white font-bold">Services</span>
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
