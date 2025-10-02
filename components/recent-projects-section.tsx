import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function RecentProjectsSection() {
  const projects = [
    {
      image: "/marina-boat-detailing-project-1.jpg",
      title: "Luxury Boat Detailing",
    },
    {
      image: "/marina-boat-detailing-project-2.jpg",
      title: "Speedboat Restoration",
    },
    {
      image: "/marina-boat-detailing-project-3.jpg",
      title: "Sailboat Maintenance",
    },
    {
      image: "/marina-boat-detailing-project-4.jpg",
      title: "Dock Repair Project",
    },
    {
      image: "/marina-boat-detailing-project-5.jpg",
      title: "Shrink Wrap Service",
    },
    {
      image: "/marina-boat-detailing-project-6.jpg",
      title: "Marina Maintenance",
    },
  ]

  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Recent Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-transparent border-0 shadow-none">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">OUR CLIENTS DESERVE</h3>
            <h4 className="text-xl text-gray-300">EXCEPTIONAL RESULTS</h4>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
