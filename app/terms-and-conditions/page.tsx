import { TermsAndConditionsHeroSection } from "@/components/terms-and-conditions-hero-section"
import { TermsAndConditionsContentSection } from "@/components/terms-and-conditions-content-section"
import { CtaShowcaseSection } from "@/components/cta-showcase-section"
import { FooterSection } from "@/components/footer-section"

export default function TermsAndConditionsPage() {
  return (
    <main>
      <TermsAndConditionsHeroSection />
      <TermsAndConditionsContentSection />
      <CtaShowcaseSection />
      <FooterSection />
    </main>
  )
}
