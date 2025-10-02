interface ServiceContactSectionProps {
  title: string
  description: string
  image: string
}

export function ServiceContactSection({ title, description, image }: ServiceContactSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-balance"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{description}</p>
        </div>

        <div className="mt-12">
          <img
            src={image || "/placeholder.svg"}
            alt="Service excellence"
            className="w-full h-[341px] lg:h-96 sm:h-[200px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
