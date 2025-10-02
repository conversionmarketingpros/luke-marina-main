import { Button } from "@/components/ui/button"

export function CtaBannerSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Our go-to team for everything on the lake
        </h2>
        <Button
          size="lg"
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
        >
          Contact Us
        </Button>
      </div>
    </section>
  )
}
