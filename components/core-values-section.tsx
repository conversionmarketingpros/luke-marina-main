export function CoreValuesSection() {
  const values = [
    {
      title: "Continuous Improvement",
      description:
        "The maritime industry is ever-evolving, and so are we. We constantly refine our services, facilities, and expertise to stay ahead, guaranteeing our clients receive the best in modern marina operations.",
      icon: (
        <img 
          src="/images/68d15c3c1a53e2c73bdc728f.svg" 
          alt="Integrity icon" 
          className="w-6 h-6"
        />
      ),
    },
    {
      title: "Integrity",
      description:
        "We believe trust is built on honesty and transparency. Every service we deliver is guided by the highest ethical standards, ensuring strong and lasting relationships with our clients.",
      icon: (
        <img 
          src="/images/68d15c0461585e119b4996d7.svg" 
          alt="Integrity icon" 
          className="w-6 h-6"
        />
      ),
    },
    {
      title: "Client-Centered Approach",
      description:
        "Every boat, every captain, and every crew is unique. We tailor our services to fit your specific needs, offering a personalized experience that reflects the luxury and sophistication of the Luke Marina brand.",
      icon: (
        <img 
          src="/images/68d15d3dfefaa963bf3a4386.svg" 
          alt="Integrity icon" 
          className="w-6 h-6"
        />
      ),
    },
    {
      title: "Excellence in service",
      description:
        "Our philosophy is to provide more than what's expected—every interaction is delivered with the utmost care and precision, ensuring your time with us is truly exceptional.",
      icon: (
        <img 
          src="/images/68d15d0d4f8c5fbf82dd0ac7.svg" 
          alt="Integrity icon" 
          className="w-6 h-6"
        />
      ),
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
          Our Core <span className="text-[#106264]">Values</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div key={index} className="group flex gap-4 pb-8 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex-shrink-0">
                <div className="w-8 h-8  rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {value.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#106264] mb-3 transition-colors duration-300 group-hover:text-[#0a4a4c]">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4 transition-opacity duration-300 group-hover:opacity-90">{value.description}</p>
                {/* Colored bar below each part */}
                <div className="h-1 bg-[#106264] rounded-full w-12 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
