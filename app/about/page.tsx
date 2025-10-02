import { AboutHeroSection } from "@/components/about-hero-section"
import { IdahoMarinaIntroSection } from "@/components/idaho-marina-intro-section"
import { CoreValuesSection } from "@/components/core-values-section"
import { StatsSection } from "@/components/stats-section"
import { WhyUsSection } from "@/components/why-us-section"
import { RecentProjectsSection } from "@/components/recent-projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaBannerSection } from "@/components/cta-banner-section"
import { ContactUsSection } from "@/components/contact-us-section" // Using shared ContactUsSection instead of ContactSection
import { FaqSection } from "@/components/faq-section"
import { FinalCtaBannerSection } from "@/components/final-cta-banner-section"
import { FooterSection } from "@/components/footer-section"
import { CtaShowcaseSection } from "@/components/cta-showcase-section"
import { OurGallery } from "@/components/our-gallery"
import { PartnerLogos } from "@/components/partner-logos"

export default function AboutPage() {
  return (
    <main className="min-h-screen ">
      
      <AboutHeroSection />
      
      <IdahoMarinaIntroSection />
      <CoreValuesSection />
      <StatsSection />
      {/* Partner logos */}
      <PartnerLogos />

      <WhyUsSection />
      {/* Our Gallery Section */}
      <OurGallery />
      <TestimonialsSection />
      {/* Call-to-Action Showcase Section */}
      <CtaShowcaseSection />
      <ContactUsSection /> {/* Using shared ContactUsSection component */}
      <FaqSection />
      <FooterSection />
    </main>
  )
}
