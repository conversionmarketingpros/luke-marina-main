import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
// Performance components temporarily disabled
// import { PerformanceMonitor } from "@/components/performance-monitor"
// import { PreloadResources } from "@/components/preload-resources"
// import { ServiceWorkerRegister } from "@/components/service-worker-register"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Lukes Marina Services",
  description:
    "Premier detailing, shrink wrapping, and dock maintenance services at Lake Coeur D'Alene. Expert craftsmanship for your boating needs.",
  generator: "Next.js",
  keywords: ["marina services", "boat detailing", "shrink wrap", "dock maintenance", "Lake Coeur D'Alene", "Idaho"],
  authors: [{ name: "Luke Netzel" }],
  creator: "Luke Netzel",
  publisher: "Lukes Marina Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lukesmarina.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Lukes Marina Services",
    description: "Premier detailing, shrink wrapping, and dock maintenance services at Lake Coeur D'Alene. Expert craftsmanship for your boating needs.",
    url: 'https://lukesmarina.com',
    siteName: 'Lukes Marina Services',
    images: [
      {
        url: '/images/68cafa8ba17f970eb20942ea.jpg',
        width: 1200,
        height: 630,
        alt: 'Lukes Marina Services - Lake Coeur D\'Alene',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lukes Marina Services",
    description: "Premier detailing, shrink wrapping, and dock maintenance services at Lake Coeur D'Alene.",
    images: ['/images/68cafa8ba17f970eb20942ea.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: {
      url: "/images/68d6bd59538c9f12eea7f807.svg",
      type: "image/svg+xml",
    },
    apple: {
      url: "/images/68d6bd59538c9f12eea7f807.svg",
      type: "image/svg+xml",
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${plusJakartaSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
