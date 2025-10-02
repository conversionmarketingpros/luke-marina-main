"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Loading skeleton components
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}>
    <div className="text-gray-400">Loading...</div>
  </div>
)

const GallerySkeleton = () => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="h-8 bg-gray-200 animate-pulse rounded mb-8 mx-auto max-w-md"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>
    </div>
  </div>
)

const TestimonialsSkeleton = () => (
  <div className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="h-8 bg-gray-200 animate-pulse rounded mb-8 mx-auto max-w-md"></div>
      <div className="grid md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 animate-pulse rounded-full"></div>
              <div className="space-y-2 flex-1">
                <div className="h-3 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-3 bg-gray-200 animate-pulse rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Dynamically imported components with loading states - Fixed for named exports
export const LazyStatsSection = dynamic(
  () => import('@/components/stats-section'),
  {
    loading: () => <SectionSkeleton height="h-64" />,
    ssr: true
  }
)

export const LazyOurServicesSection = dynamic(
  () => import('@/components/our-services-section'),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: true
  }
)

export const LazyPartnerLogos = dynamic(
  () => import('@/components/partner-logos'),
  {
    loading: () => <SectionSkeleton height="h-32" />,
    ssr: false // Can be loaded client-side
  }
)

export const LazyOurGallery = dynamic(
  () => import('@/components/our-gallery'),
  {
    loading: () => <GallerySkeleton />,
    ssr: false
  }
)

export const LazyCtaShowcaseSection = dynamic(
  () => import('@/components/cta-showcase-section'),
  {
    loading: () => <SectionSkeleton height="h-80" />,
    ssr: true
  }
)

export const LazyProjectsGallery = dynamic(
  () => import('@/components/projects-gallery'),
  {
    loading: () => <GallerySkeleton />,
    ssr: false
  }
)

export const LazyTestimonialsSection = dynamic(
  () => import('@/components/testimonials-section'),
  {
    loading: () => <TestimonialsSkeleton />,
    ssr: false
  }
)

export const LazyContactUsSection = dynamic(
  () => import('@/components/contact-us-section'),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: true
  }
)

export const LazyFaqSection = dynamic(
  () => import('@/components/faq-section'),
  {
    loading: () => <SectionSkeleton height="h-80" />,
    ssr: false
  }
)

export const LazyBlogsSection = dynamic(
  () => import('@/components/blogs-section'),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: false
  }
)

export const LazyFooterSection = dynamic(
  () => import('@/components/footer-section'),
  {
    loading: () => <SectionSkeleton height="h-64" />,
    ssr: true
  }
)

// Special components that need to be above fold
export const LazyIdahoMarinaSection = dynamic(
  () => import('@/components/idaho-marina-section'),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: true // Keep above fold content server-side rendered
  }
)

export const LazyRotatingProjectShowcase = dynamic(
  () => import('@/components/rotating-project-showcase').then(mod => ({ default: mod.RotatingProjectShowcase })),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: false
  }
)

// Wrapper component with intersection observer for even more performance
export const LazySection = ({ 
  children, 
  fallback, 
  className = "",
  threshold = 0.1 
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
  threshold?: number
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback || <SectionSkeleton />}>
        {children}
      </Suspense>
    </div>
  )
}
