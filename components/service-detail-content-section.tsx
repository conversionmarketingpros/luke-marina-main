interface Service {
  title: string
  description: string
  image: string
}

interface ServiceDetailContentSectionProps {
  services: Service[]
}

export function ServiceDetailContentSection({ services }: ServiceDetailContentSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-28">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Detailing <span className="text-[#106264]">Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Luke Marina offers premium boat detailing services designed to keep your vessel looking its absolute best.
            Our experienced team uses only the finest products and proven techniques to deliver exceptional results that
            protect and enhance your boat's appearance. Contact us today to schedule your detailing service and experience
            the difference that professional care can make for your vessel.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`relative overflow-hidden rounded-lg mb-6 shadow-lg ${
                index === 1 ? 'md:-mt-14 mt-4' : 'mt-4'
              }`}>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    index === 1 ? 'h-80' : 'h-64'
                  }`}
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
