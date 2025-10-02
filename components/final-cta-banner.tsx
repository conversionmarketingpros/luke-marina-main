import { Button } from "@/components/ui/button"

export function FinalCtaBanner() {
  return (
    <section className="relative py-20 px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/scenic-lake-view.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-balance">
          Discover endless adventures on pristine waters
        </h2>

        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full">Get in Touch</Button>
      </div>
    </section>
  )
}
