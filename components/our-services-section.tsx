import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function OurServicesSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4"><span className='text-[#106264] font-bold'>Services</span> We Offer</h2>
        </div>

        <div className="space-y-6">
          {/* First Row - Two Large Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/services/detailing" className="block">
              <Card className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-0">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/images/68d28a95448d7b7da6e47f16.jpeg"
                    alt="Detailing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Navigation Button */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-transparent flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Image 
                        src="/images/68d2843c448d7bca70e383c4.svg" 
                        alt="Arrow" 
                        width={20} 
                        height={20} 
                        className="group-hover:hidden"
                      />
                      <Image 
                        src="/images/68d286a176bc7c2e5e670793.svg" 
                        alt="Arrow" 
                        width={20} 
                        height={20} 
                        className="hidden group-hover:block"
                      />
                    </div>
                  </div>
                  
                  {/* Default Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 underline decoration-2 underline-offset-8">Detailing</h3>
                  </div>
                  
                  {/* Hover Overlay with Details */}
                  <div className="absolute inset-x-0 bottom-0 m-2 bg-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-lg">
                    <div className="text-white">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 underline underline-offset-8">Detailing</h3>
                      <p className="text-sm leading-relaxed ">
                        Premium interior and exterior boat detailing tailored for Lake Coeur d'Alene. We wash, polish, and protect gelcoat, brighten metal, and refresh upholstery so your vessel looks showroom-ready and stays protected on the water.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </Card>
            </Link>

            <Link href="/services/shrink-wrap" className="block">
              <Card className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-0">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/images/68d28a9526b7f7c47425e1ae.jpeg"
                    alt="Shrink Wrap"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Navigation Button */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-transparent flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Image 
                        src="/images/68d2843c448d7bca70e383c4.svg" 
                        alt="Arrow" 
                        width={20} 
                        height={20} 
                        className="group-hover:hidden"
                      />
                      <Image 
                        src="/images/68d286a176bc7c2e5e670793.svg" 
                        alt="Arrow" 
                        width={20} 
                        height={20} 
                        className="hidden group-hover:block"
                      />
                    </div>
                  </div>
                  
                  {/* Default Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 underline decoration-2 underline-offset-8">Shrink Wrap</h3>
                  </div>
                  
                  {/* Hover Overlay with Details */}
                  <div className="absolute inset-x-0 bottom-0 m-2 bg-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-lg">
                    <div className="text-white">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 underline underline-offset-8">Shrink Wrap</h3>
                      <p className="text-sm leading-relaxed">
                        Professional shrink wrapping for off-season storage and transport. Tight, vented wraps shield your boat from snow, moisture, dust, and UV—delivering a clean, secure, and worry-free winterization.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          <div>
            <Link href="/services/dock-repair" className="block">
              <Card className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-0">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/images/68d28a954b6576e394dbbf31.jpg"
                    alt="Dock Repair & Maintenance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Navigation Button */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-transparent flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Image 
                        src="/images/68d2843c448d7bca70e383c4.svg" 
                        alt="Arrow" 
                        width={20} 
                        height={20} 
                        className="group-hover:hidden"
                      />
                      <Image 
                        src="/images/68d286a176bc7c2e5e670793.svg" 
                        alt="Arrow" 
                        width={20} 
                        height={20} 
                        className="hidden group-hover:block"
                      />
                    </div>
                  </div>
                  
                  {/* Default Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 underline decoration-2 underline-offset-8">Dock Repair & Maintenance</h3>
                  </div>
                  
                  {/* Hover Overlay with Details */}
                  <div className="absolute inset-x-0 bottom-0 m-2 bg-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-lg">
                    <div className="text-white">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 underline underline-offset-8">Dock Repair & Maintenance</h3>
                      <p className="text-sm leading-relaxed">
                        Reliable dock repair and preventative maintenance. We inspect structure and hardware, replace damaged decking and fasteners, and service cleats and bumpers—keeping your moorage safe, sturdy, and lake-ready.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
