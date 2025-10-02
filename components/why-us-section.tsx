import Image from "next/image"

export function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#106264]">Lukes Marina Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            At Luke Marina, we combine passion, precision, and trust to deliver unmatched 
          </p>
          <p className="text-lg text-gray-600">care for you and your vessel.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Image - Unmatched Craftsmanship */}
          <div className="relative group sm:col-span-2 lg:col-span-1">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/68d32be0037a13a1d0e2bae0.jpeg"
                alt="Unmatched Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300 ease-in-out">Unmatched Craftsmanship</h3>
                <p className="text-white/90 text-xs sm:text-sm group-hover:translate-y-[-2px] transition-transform duration-300 ease-in-out delay-75">
                  Elevate your boat's elegance with our expert detailing and maintenance—trust us to protect your luxury investment today.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Image - Boat Interior */}
          <div className="relative group sm:col-span-2 lg:col-span-1">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/68d32be026b7f789aa799726.jpg"
                alt="Unmatched Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300 ease-in-out">Tailored Solutions</h3>
                <p className="text-white/90 text-xs sm:text-sm group-hover:translate-y-[-2px] transition-transform duration-300 ease-in-out delay-75">
                Experience custom shrink wrapping and dock repairs designed for your boat's unique needs—secure your vessel's future now.
                 </p>
              </div>
            </div>
          </div>

          {/* Right Image - Boat Cockpit */}
          <div className="relative group sm:col-span-2 lg:col-span-1">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/68d32be0ef40ca20b1c8281a.jpg"
                alt="Unmatched Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300 ease-in-out">Dedicated Expertise</h3>
                <p className="text-white/90 text-xs sm:text-sm group-hover:translate-y-[-2px] transition-transform duration-300 ease-in-out delay-75">
                Rely on our local team's precision and care for seamless service—schedule your premium marina care today.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}