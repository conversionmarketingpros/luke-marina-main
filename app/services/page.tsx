import { ServicesHeroSection } from "@/components/services-hero-section"
import { OurServicesSection } from "@/components/our-services-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaBannerSection } from "@/components/cta-banner-section"
import { ContactUsSection } from "@/components/contact-us-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"
import { PartnerLogos } from "@/components/partner-logos"
import { CtaShowcaseSection } from "@/components/cta-showcase-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHeroSection />
      <OurServicesSection />
      <StatsSection />
      {/* Partner logos */}
      <PartnerLogos />

      <TestimonialsSection />
      {/* Stats Section */}
      <CtaShowcaseSection />
      <ContactUsSection />
      <FaqSection />
      
      <FooterSection />
    </main>
  )
}
