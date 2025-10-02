"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const StarIcon = () => (
  <svg className="h-5 w-5 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const ArrowLeftIcon = () => (
  <Image 
    src="/images/68d31db99c409979c65f407b.svg" 
    alt="Previous" 
    width={20} 
    height={20} 
    className="h-5 w-5"
  />
)

const ArrowRightIcon = () => (
  <Image 
    src="/images/68d31db926b7f7196b761ca2.svg" 
    alt="Next" 
    width={20} 
    height={20} 
    className="h-5 w-5"
  />
)

const testimonials = [
  {
    id: 1,
    image: "/images/68d322374b657614823658e1.jpg",
    customer: {
      name: "Chris Arnesen",
      avatar: "/chris-arnesen-avatar.jpg",
      platform: "Google",
    },
    rating: 5,
    comment:
      "I recently used Luke's Marina for boat services, and the experience was outstanding. The team was incredibly helpful, highly professional, knowledgeable, and passionate about what they do. Every detail, from cleaning and maintenance to customer care, was handled with precision and a genuine commitment to excellence.\n\nThey offer a wide range of services that keep your boat in pristine condition, and their crew goes above and beyond to ensure you're satisfied. Communication was smooth, timelines were respected, and the workmanship was top-notch.",
  },
  {
    id: 2,
    image: "/images/68d32237e4f8ae36dfaa36e4.png",
    customer: {
      name: "Sarah Johnson",
      avatar: "/sarah-johnson-avatar.jpg",
      platform: "Google",
    },
    rating: 5,
    comment:
      "Luke's Marina exceeded all my expectations! Their attention to detail in boat maintenance is unmatched. The staff is incredibly knowledgeable and always goes the extra mile to ensure everything is perfect. I've been using their services for over two years now and couldn't be happier with the quality of work they provide.",
  },
  {
    id: 3,
    image: "/images/68d32237037a1359f5e09262.png",
    customer: {
      name: "Mike Rodriguez",
      avatar: "/mike-rodriguez-avatar.jpg",
      platform: "Google",
    },
    rating: 5,
    comment:
      "Outstanding service from start to finish! Luke's Marina handled my boat's complete overhaul with professionalism and expertise. Their team kept me informed throughout the entire process, and the final result was beyond my expectations. Highly recommend their services to anyone looking for top-quality marina work.",
  },
  {
    id: 4,
    image: "/images/68d32be026b7f789aa799726.jpg",
    customer: {
      name: "Emily Carter",
      avatar: "/emily-carter-avatar.jpg",
      platform: "Google",
    },
    rating: 5,
    comment:
      "Professional, friendly, and detail-obsessed. Luke’s Marina handled our spring detailing and the boat looked better than delivery day. Communication was fast and scheduling was easy—will definitely book again.",
  },
  {
    id: 5,
    image: "/images/testimonial 2.jpg",
    customer: {
      name: "Daniel Lee",
      avatar: "/daniel-lee-avatar.jpg",
      platform: "Google",
    },
    rating: 5,
    comment:
      "Their shrink wrap service was immaculate—tight, vented, and secure. The boat came out of winter storage spotless and dry. The crew was on time and super courteous.",
  },
  {
    id: 6,
    image: "/images/testimonial 1.jpg",
    customer: {
      name: "Olivia Martinez",
      avatar: "/olivia-martinez-avatar.jpg",
      platform: "Google",
    },
    rating: 5,
    comment:
      "We needed dock hardware replaced before a busy weekend. Luke’s team inspected, sourced parts, and had everything fixed quickly. Solid workmanship and great people.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null)

  const goToPrevious = () => {
    if (isTransitioning) return
    setDirection('prev')
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
      setDirection(null)
    }, 500)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setDirection('next')
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
      setDirection(null)
    }, 500)
  }

  const getTestimonialByPosition = (offset: number) => {
    const index = (currentIndex + offset + testimonials.length) % testimonials.length
    return testimonials[index]
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#106264]">Loyal Customers</span> Say
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden xl:flex items-end justify-between gap-6">
            {/* Left Small Image - Previous */}
            <div className="flex-shrink-0">
              <div
                className={`relative w-[233px] h-[320px] rounded-lg overflow-hidden shadow-md opacity-60 hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer ${
                  isTransitioning 
                    ? 'transform translate-x-2 scale-95' 
                    : 'transform translate-x-0 scale-100'
                }`}
                onClick={goToPrevious}
              >
                <Image
                  src={getTestimonialByPosition(-1).image || "/placeholder.svg"}
                  alt="Previous testimonial"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>

            {/* Center Image and Comment Container */}
            <div className="flex items-end gap-4">
            {/* Center Large Image - Current */}
              <div className="flex-shrink-0">
                <div className={`relative w-[378.88px] h-[542px] rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${
                  isTransitioning 
                    ? direction === 'next' 
                      ? 'transform scale-95 opacity-70' 
                      : 'transform scale-95 opacity-70'
                    : 'transform scale-100 opacity-100'
                }`}>
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt="Current testimonial"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
                
              </div>
            </div>

              {/* Comment Area - Right next to center image */}
              <div className={`flex-shrink-0 w-80 h-[500px] bg-transparent rounded-lg p-4 flex flex-col transition-all duration-500 ease-in-out ${
                isTransitioning 
                  ? 'transform translate-x-2 opacity-70' 
                  : 'transform translate-x-0 opacity-100'
              }`}>
                {/* Customer Info */}
                <div className="flex items-center gap-2 mb-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={currentTestimonial.customer.avatar || "/placeholder.svg"}
                      alt={currentTestimonial.customer.name}
                    />
                    <AvatarFallback className="bg-teal-600 text-white text-sm">
                      {currentTestimonial.customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{currentTestimonial.customer.name}</div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/google.svg"
                        alt="Google"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <div className="flex">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                      <span className="sr-only">Google</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed text-sm whitespace-pre-line flex-1 overflow-y-auto">
                  {currentTestimonial.comment}
                </blockquote>
              </div>
            </div>

            {/* Right Small Image - Next */}
            <div className="flex-shrink-0">
              <div
                className={`relative w-[233px] h-[320px] rounded-lg overflow-hidden shadow-md opacity-60 hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer ${
                  isTransitioning 
                    ? 'transform -translate-x-2 scale-95' 
                    : 'transform translate-x-0 scale-100'
                }`}
                onClick={goToNext}
              >
                <Image
                  src={getTestimonialByPosition(1).image || "/placeholder.svg"}
                  alt="Next testimonial"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Large Tablet/Small Desktop Layout */}
          <div className="hidden lg:flex xl:hidden items-end justify-between gap-4">
            {/* Left Small Image - Previous */}
            <div className="flex-shrink-0">
              <div
                className={`relative w-24 h-32 rounded-lg overflow-hidden shadow-md opacity-60 hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer ${
                  isTransitioning 
                    ? 'transform translate-x-1 scale-95' 
                    : 'transform translate-x-0 scale-100'
                }`}
                onClick={goToPrevious}
              >
                <Image
                  src={getTestimonialByPosition(-1).image || "/placeholder.svg"}
                  alt="Previous testimonial"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>

            {/* Center Image and Comment Container */}
            <div className="flex items-end gap-3">
              {/* Center Large Image - Current */}
              <div className="flex-shrink-0">
                <div className={`relative w-64 h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${
                  isTransitioning 
                    ? direction === 'next' 
                      ? 'transform scale-95 opacity-70' 
                      : 'transform scale-95 opacity-70'
                    : 'transform scale-100 opacity-100'
                }`}>
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt="Current testimonial"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  
                </div>
              </div>

              {/* Comment Area - Right next to center image */}
              <div className={`flex-shrink-0 w-64 h-80 bg-transparent rounded-lg p-3 flex flex-col transition-all duration-500 ease-in-out ${
                isTransitioning 
                  ? 'transform translate-x-1 opacity-70' 
                  : 'transform translate-x-0 opacity-100'
              }`}>
              {/* Customer Info */}
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={currentTestimonial.customer.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.customer.name}
                  />
                  <AvatarFallback className="bg-teal-600 text-white text-xs">
                    {currentTestimonial.customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{currentTestimonial.customer.name}</div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/google.svg"
                      alt="Google"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <div className="flex">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <span className="sr-only">Google</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed text-sm whitespace-pre-line flex-1 overflow-y-auto">
                {currentTestimonial.comment}
              </blockquote>
              </div>
            </div>

            {/* Right Small Image - Next */}
            <div className="flex-shrink-0">
              <div
                className={`relative w-24 h-32 rounded-lg overflow-hidden shadow-md opacity-60 hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer ${
                  isTransitioning 
                    ? 'transform -translate-x-1 scale-95' 
                    : 'transform translate-x-0 scale-100'
                }`}
                onClick={goToNext}
              >
                <Image
                  src={getTestimonialByPosition(1).image || "/placeholder.svg"}
                  alt="Next testimonial"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden items-end justify-between gap-4">
            {/* Left Small Image - Previous */}
            <div className="flex-shrink-0">
              <div
                className="relative w-20 h-28 rounded-lg overflow-hidden shadow-md opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
                onClick={goToPrevious}
              >
                <Image
                  src={getTestimonialByPosition(-1).image || "/placeholder.svg"}
                  alt="Previous testimonial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Image and Comment Container */}
            <div className="flex items-end gap-3">
            {/* Center Large Image - Current */}
              <div className="flex-shrink-0">
              <div className="relative w-48 h-60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt="Current testimonial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

              {/* Comment Area - Right next to center image */}
              <div className="flex-shrink-0 w-48 h-60 bg-transparent rounded-lg p-3 flex flex-col">
              {/* Customer Info */}
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src={currentTestimonial.customer.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.customer.name}
                  />
                  <AvatarFallback className="bg-teal-600 text-white text-xs">
                    {currentTestimonial.customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                  <div>
                  <div className="font-semibold text-gray-900 text-xs">{currentTestimonial.customer.name}</div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/google.svg"
                      alt="Google"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5"
                    />
                    <div className="flex">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <span className="sr-only">Google</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed text-xs whitespace-pre-line flex-1 overflow-y-auto">
                {currentTestimonial.comment}
              </blockquote>
              </div>
            </div>

            {/* Right Small Image - Next */}
            <div className="flex-shrink-0">
              <div
                className="relative w-20 h-28 rounded-lg overflow-hidden shadow-md opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
                onClick={goToNext}
              >
                <Image
                  src={getTestimonialByPosition(1).image || "/placeholder.svg"}
                  alt="Next testimonial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Small Mobile Layout */}
          <div className="sm:hidden">
            {/* Main Testimonial Card */}
            <div className="mx-auto max-w-xs">
              {/* Main Image */}
              <div className={`relative w-full h-48 rounded-lg overflow-hidden shadow-lg mb-3 transition-all duration-500 ease-in-out ${
                isTransitioning 
                  ? direction === 'next' 
                    ? 'transform scale-95 opacity-70' 
                    : 'transform scale-95 opacity-70'
                  : 'transform scale-100 opacity-100'
              }`}>
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt="Current testimonial"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={currentTestimonial.customer.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.customer.name}
                  />
                  <AvatarFallback className="bg-teal-600 text-white text-xs">
                    {currentTestimonial.customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{currentTestimonial.customer.name}</div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/google.svg"
                      alt="Google"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5"
                    />
                    <div className="flex">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <span className="sr-only">Google</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed text-xs whitespace-pre-line">
                {currentTestimonial.comment}
              </blockquote>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="hidden sm:flex md:hidden relative">
            {/* Main Testimonial Card */}
            <div className="relative mx-auto max-w-sm">
              {/* Main Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt="Current testimonial"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={currentTestimonial.customer.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.customer.name}
                  />
                  <AvatarFallback className="bg-teal-600 text-white text-sm">
                    {currentTestimonial.customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900 text-base">{currentTestimonial.customer.name}</div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/google.svg"
                      alt="Google"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <div className="flex">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <span className="sr-only">Google</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                {currentTestimonial.comment}
              </blockquote>
            </div>

            {/* Side Preview Images */}
            {/* Left Preview */}
            <div
              className="absolute left-0 top-0 w-16 h-20 rounded-lg overflow-hidden shadow-md opacity-60 cursor-pointer"
              onClick={goToPrevious}
            >
              <Image
                src={getTestimonialByPosition(-1).image || "/placeholder.svg"}
                alt="Previous testimonial"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Preview */}
            <div
              className="absolute right-0 top-0 w-16 h-20 rounded-lg overflow-hidden shadow-md opacity-60 cursor-pointer"
              onClick={goToNext}
            >
              <Image
                src={getTestimonialByPosition(1).image || "/placeholder.svg"}
                alt="Next testimonial"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              disabled={isTransitioning}
              className={`w-16 sm:w-20 h-6 sm:h-8 cursor-pointer border border-black hover:border-black hover:border-2 rounded-full flex items-center justify-center hover:border-[#106264] hover:text-[#106264] transition ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              }`}
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={goToNext}
              disabled={isTransitioning}
              className={`w-16 sm:w-20 h-6 sm:h-8 cursor-pointer border border-black hover:border-black hover:border-2 rounded-full flex items-center justify-center hover:border-[#106264] hover:text-[#106264] transition ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              }`}
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
