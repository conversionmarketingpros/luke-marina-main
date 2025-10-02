import { Button } from "@/components/ui/button"

export function FinalCtaBannerSection() {
  return (
    <section
      className="py-32 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/scenic-lake-with-mountains-and-boats.jpg')`,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Find the perfect trip for you and discover extraordinary adventures with us!
        </h2>
        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg rounded-full">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}
