import { PrivacyPolicyHeroSection } from "@/components/privacy-policy-hero-section"
import { PrivacyPolicyContentSection } from "@/components/privacy-policy-content-section"
import { CtaShowcaseSection } from "@/components/cta-showcase-section"
import { FooterSection } from "@/components/footer-section"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <PrivacyPolicyHeroSection />
      <PrivacyPolicyContentSection />
      <CtaShowcaseSection />
      <FooterSection />
    </main>
  )
}
