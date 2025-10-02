import { notFound } from "next/navigation"
import { ServiceDetailHeroSection } from "@/components/service-detail-hero-section"
import { ServiceDetailContentSection } from "@/components/service-detail-content-section"
import { ServiceProcessSection } from "@/components/service-process-section"
import { ServiceContactSection } from "@/components/service-contact-section"
import { CtaBannerSection } from "@/components/cta-banner-section"
import { ContactUsSection } from "@/components/contact-us-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaBannerSection } from "@/components/final-cta-banner-section"
import { FooterSection } from "@/components/footer-section"
import { CtaShowcaseSection } from "@/components/cta-showcase-section"

// Service data configuration
const serviceData = {
  detailing: {
    title: "Expert Detailing Service to Enhance Your Boat's Shine",
    breadcrumb: "Detailing Services",
    heroImage: "/images/68d6bb94b606d6b19cf0fab4.jpg",
    services: [
      {
        title: "WASHDOWNS",
        description:
          "To maintain your boat's appearance between waxing, we offer a weekly or biweekly washing schedule that protects your boat from the North Idaho elements.",
        image: "/images/68d32be0037a13a1d0e2bae0.jpeg",
      },
      {
        title: "WAXING",
        description:
          "We use high-quality marine wax or wax of your preference . Waxing protects the surface and brings back a beautiful shine to your boat's paint or gel-coat. Due to the sun's intense UV rays in South Florida, we recommend keeping your investment protected every 3 months to avoid oxidation.",
        image: "/images/68d330cfef40ca237dc8e22f.png",
      },
      {
        title: "GEL COAT RESTORATION",
        description:
          "we remove old oxidized dead gel coat from your boat and refine the surface to a smooth, waxed, scratch free surface",
        image: "/images/68d33127037a136388e38cad.jpg",
      },
    ],
    processSteps: [
      {
        title: "Initial Consultation",
        description: "We assess your boat's current condition and discuss your specific detailing needs.",
      },
      {
        title: "Detailed Assessment",
        description: "Thorough inspection and documentation of areas requiring attention.",
      },
      {
        title: "Service Execution",
        description: "Professional application of our detailing services using premium products.",
      },
      {
        title: "Final Inspection",
        description: "Quality assurance check to ensure everything meets our high standards.",
      },
    ],
    contactTitle: "Our Contact us for a <span class='text-[#106264]'>Detailing Services</span> that defines excellence",
    contactDescription:
      "Luke’s Marina Services delivers premium boat detailing to keep your vessel in immaculate condition, whether you need ongoing maintenance or a one-time deep clean. Our comprehensive range of services ensures your boat always looks its absolute best, inside and out. We use only high-grade, marine-safe cleaning and finishing products, delivering a flawless finish that protects your investment. Contact us today to discover how our expert marine detailing can elevate your boating experience.",
    contactImage: "/images/68d331f54b657682cd38d7a9.jpg",
  },
  "shrink-wrap": {
    title: "Professional Shrink Wrap Services for Ultimate Boat Protection",
    breadcrumb: "Shrink Wrap Services",
    heroImage: "/images/68d333de26b7f7bb727ace22.jpg",
    services: [
      {
        title: "WINTER STORAGE",
        description:
          "Complete shrink wrap protection for winter storage, keeping your boat safe from harsh weather conditions and environmental damage.",
        image: "/images/68d3337cc50899baa1f844f2.jpg",
      },
      {
        title: "TRANSPORT PROTECTION",
        description:
          "Secure shrink wrapping for boat transportation, ensuring your vessel arrives at its destination in perfect condition.",
        image: "/images/68d333a3c651756759f9be9e.jpeg",
      },
      {
        title: "CUSTOM FITTING",
        description:
          "Tailored shrink wrap solutions for boats of all sizes and configurations, providing optimal protection and ventilation.",
        image: "/images/68d333de26b7f7bb727ace22.jpg",
      },
    ],
    processSteps: [
      {
        title: "Boat Preparation",
        description: "We prepare your boat by removing loose items and securing all equipment.",
      },
      {
        title: "Frame Installation",
        description: "Professional installation of support framework to ensure proper wrap tension.",
      },
      {
        title: "Shrink Wrap Application",
        description: "Careful application and heat-shrinking of marine-grade wrap material.",
      },
      {
        title: "Ventilation & Finishing",
        description: "Installation of proper ventilation and final quality inspection.",
      },
    ],
    contactTitle: "Our Contact us for <span class='text-[#106264]'>Shrink Wrap Services</span> that defines protection",
    contactDescription:
      "Protect your investment with our professional shrink wrap services. Our team has years of experience in marine protection, using only the highest quality materials and proven techniques. Whether for winter storage or transport, we ensure your boat stays in pristine condition.",
    contactImage: "/images/68d334a026b7f758457aea4d.jpg",
  },
  "dock-repair": {
    title: "Expert Dock Repair & Maintenance Services",
    breadcrumb: "Dock Repair & Maintenance",
    heroImage: "/images/68d128e456313eb4ca6a6f25.jpg",
    services: [
      {
        title: "STRUCTURAL REPAIR",
        description:
          "Complete structural repairs for damaged docks, including foundation work, decking replacement, and framework restoration.",
        image: "/images/68d159d1da43d8e487289692.jpg",
      },
      {
        title: "MAINTENANCE",
        description:
          "Regular maintenance services to keep your dock in optimal condition, including cleaning, staining, and hardware inspection.",
        image: "/images/68d335a84b6576b4233947a3.jpg",
      },
      {
        title: "UPGRADES",
        description:
          "Dock enhancement and upgrade services including lighting, electrical work, and modern safety features installation.",
        image: "/images/68d335efe4f8ae792eadc846.jpg",
      },
    ],
    processSteps: [
      {
        title: "Site Inspection",
        description: "Comprehensive assessment of your dock's current condition and repair needs.",
      },
      {
        title: "Repair Planning",
        description: "Detailed planning and material sourcing for optimal repair solutions.",
      },
      {
        title: "Professional Repair",
        description: "Expert execution of repairs using marine-grade materials and techniques.",
      },
      {
        title: "Quality Assurance",
        description: "Final inspection and testing to ensure safety and durability standards.",
      },
    ],
    contactTitle: "Contact us for <span class='text-[#106264]'> Dock Repair & Maintenance Services</span> you can trust",
    contactDescription:
      "Trust Luke Marina for all your dock repair and maintenance needs. Our skilled craftsmen have extensive experience in marine construction and use only the finest materials designed to withstand harsh marine environments. From minor repairs to complete dock reconstruction, we deliver lasting solutions.",
    contactImage: "/images/68d335ca037a13584de42617.jpg"
  }
}

interface ServiceDetailPageProps {
  params: {
    service: string
  }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = serviceData[params.service as keyof typeof serviceData]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <ServiceDetailHeroSection
        title={service.title}
        breadcrumb={service.breadcrumb}
        backgroundImage={service.heroImage}
      />

      <ServiceDetailContentSection services={service.services} />

      <ServiceProcessSection
        steps={service.processSteps}
        imageUrl={
          params.service === "shrink-wrap"
            ? "/images/68d333a3c651756759f9be9e.jpeg"
            : params.service === "dock-repair"
            ? "/images/68d335ca037a13584de42617.jpg"
            : undefined
        }
      />

      <ServiceContactSection
        title={service.contactTitle}
        description={service.contactDescription}
        image={service.contactImage}
      />

      <CtaShowcaseSection />
      

      <ContactUsSection />

      <FaqSection />

      

      <FooterSection />
    </div>
  )
}

export function generateStaticParams() {
  return [{ service: "detailing" }, { service: "shrink-wrap" }, { service: "dock-repair" }]
}
