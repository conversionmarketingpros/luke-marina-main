"use client"
import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { ContactForm } from "@/components/contact-form"
import { RotatingProjectShowcase } from "@/components/rotating-project-showcase"
import { FinalCtaBanner } from "@/components/final-cta-banner"
import { Button } from "@/components/ui/button"
import AnimatedWave from "@/components/wave-divider"
import BeforeAfter from "@/components/BeforeAfter"
import WaveDivider from "@/components/lake-wave-test"
import Link from "next/link"
import { OptimizedHero } from "@/components/optimized-hero"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { PreloadResources } from "@/components/preload-resources"
import { IdahoMarinaSection } from "@/components/idaho-marina-section"
import { StatsSection } from "@/components/stats-section"
import { OurServicesSection } from "@/components/our-services-section"
import { PartnerLogos } from "@/components/partner-logos"
import { OurGallery } from "@/components/our-gallery"
import { CtaShowcaseSection } from "@/components/cta-showcase-section"
import { ProjectsGallery } from "@/components/projects-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactUsSection } from "@/components/contact-us-section"
import { FaqSection } from "@/components/faq-section"
import { BlogsSection } from "@/components/blogs-section"
import { FooterSection } from "@/components/footer-section"
// import { ImageTest } from "@/components/image-test"

const ArrowUpRightIcon = () => (
  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[49px] h-[49px]">
    <rect y="0" width="49" height="49" rx="24.5" fill="#1F2023" />
    <path d="M20 29L30 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 19H30V29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowDownRightIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M17 7v10H7" />
  </svg>
)

const ArrowDownIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

export default function Home() {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({
    name: false,
    phone: false,
    email: false,
    address: false,
    service: false,
    message: false,
  })
  const [hasAgreed, setHasAgreed] = useState(false)
  const [hasSmsConsent, setHasSmsConsent] = useState(false)
  const [hasMarketingConsent, setHasMarketingConsent] = useState(false)

  // Simple field validations
  const isNameValid = /^[A-Za-z ]+$/.test(formData.name.trim())
  const isPhoneValid = /^\d+$/.test(formData.phone.trim())
  const isEmailValid = formData.email.includes('@')

  // Check if all required fields are filled and valid
  const isFormValid =
    formData.name.trim() !== "" && isNameValid &&
    formData.phone.trim() !== "" && isPhoneValid &&
    formData.email.trim() !== "" && isEmailValid &&
    formData.address.trim() !== "" &&
    formData.service.trim() !== "" &&
    formData.message.trim() !== "" &&
    hasAgreed

  const getFieldError = (field: keyof typeof formData): string => {
    switch (field) {
      case 'name':
        if (formData.name.trim() === '') return 'Name is required'
        if (!isNameValid) return 'Only letters and spaces are allowed'
        return ''
      case 'phone':
        if (formData.phone.trim() === '') return 'Phone is required'
        if (!isPhoneValid) return 'Only digits are allowed'
        return ''
      case 'email':
        if (formData.email.trim() === '') return 'Email is required'
        if (!isEmailValid) return "Email must contain '@'"
        return ''
      case 'address':
        if (formData.address.trim() === '') return 'Address is required'
        return ''
      case 'service':
        if (formData.service.trim() === '') return 'Please select a service'
        return ''
      case 'message':
        if (formData.message.trim() === '') return 'Message is required'
        return ''
      default:
        return ''
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    let { value } = e.target

    if (name === 'phone') {
      // Keep only digits
      value = value.replace(/\D/g, '')
    }

    if (name === 'name') {
      // Allow only letters and spaces
      value = value.replace(/[^A-Za-z\s]/g, '')
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  // Handle service selection
  const handleServiceSelect = (service: string) => {
    setSelectedService(service)
    setFormData(prev => ({
      ...prev,
      service: service
    }))
    setTouched(prev => ({ ...prev, service: true }))
    setIsServiceDropdownOpen(false)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/efeLuf1RDRQ9zn1iHhtC/webhook-trigger/819816b0-b7a9-4654-b19f-e99f4ea78339', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          service: formData.service,
          message: formData.message,
          smsConsent: hasSmsConsent,
          marketingConsent: hasMarketingConsent,
          termsAgreed: hasAgreed,
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          service: "",
          message: ""
        })
        setSelectedService("")
        setHasSmsConsent(false)
        setHasMarketingConsent(false)
        setHasAgreed(false)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Performance optimizations */}
      <PreloadResources />
      <PerformanceMonitor />

      {/* Optimized Hero Section with Next.js Image */}
      <OptimizedHero>
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center px-4 sm:px-6 py-8 sm:py-12">
          <div className="w-full max-w-7xl mx-auto">
            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden">
              {/* Mobile Content */}
              <div className="text-center space-y-6 sm:space-y-8 ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Providing Top-Notch Marina
                  Detail & Shrink Wrap Services in
                  Idaho
                </h1>
                <p className="text-sm sm:text-base md:text-lg font-normal text-white leading-relaxed max-w-2xl mx-auto">
                  Discover A World Of Luxury With Premier Detailing, Shrink Wrapping, And Dock Maintenance On Lake Coeur D'Alene, Where Pristine Waters Meet Expert Craftsmanship. Unlock Your Boating Season's Finest Moments Today.
                </p>
                  
                  {/* Mobile Make a Call Button */}
                  <div className="pt-4 mb-12 sm:mb-16">
                    <Link href="/Services">
                      <button className="group relative flex items-center justify-center w-48 bg-white text-black px-6 py-3 rounded-full shadow-lg transition-all duration-500 overflow-hidden hover:bg-gradient-to-r hover:from-white hover:to-rose-200 mx-auto">
                        {/* Default Content (Book Now + Arrow in black circle) */}
                        <span className="flex items-center group-hover:opacity-0 transition-opacity duration-300">
                          <span className="mr-3 font-medium">Make a Call</span>
                          <span className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
                            <svg
                              className="w-4 h-4 transform -rotate-45"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </span>

                        {/* Hover Content (Circle + Make a Call + Arrow) */}
                        <span className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 font-medium transition-opacity duration-300 text-black">
                          {/* Circle with anchor icon */}
                          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-black"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="5" r="1" />
                              <path d="M12 22V6" />
                              <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                              <path d="M9 16h6" />
                            </svg>
                          </span>

                          {/* Text */}
                          <span>Make a Call</span>

                          {/* Arrow after text */}
                          <svg
                            className="w-5 h-5 transform -rotate-45 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                        </span>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:flex gap-8 xl:gap-12 2xl:gap-16 items-center">
                {/* Left Column - Text Content (at least 50% width) */}
                <div className="flex-1 min-w-[50%] space-y-6 lg:space-y-8 xl:space-y-10">
                  <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-[-2%] text-white leading-tight text-left">
                    Providing Top Notch Detail, Shrink wrap and Dock Repair and Maintenance Services in Idaho
                  </h1>
                  <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white tracking-[1%] leading-relaxed text-left">
                    Discover A World Of Luxury With Premier Detailing, Shrink Wrapping, And Dock Maintenance On Lake Coeur D'Alene, Where Pristine Waters Meet Expert Craftsmanship. Unlock Your Boating Season's Finest Moments Today.
                  </p>
                </div>

                {/* Right Column - Form Container */}
                <div className="flex-shrink-0 flex justify-end">
                  <form onSubmit={handleSubmit} className="w-full max-w-md xl:max-w-lg 2xl:max-w-xl bg-transparent backdrop-blur-sm rounded-[41px] p-6 lg:p-8 xl:p-10 2xl:p-12 border border-white/20">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white mb-6 xl:mb-8 2xl:mb-10">
                      LET'S DISCUSS YOUR SERVICES!
                    </h2>
                    
                    {/* Form completion indicator */}
                    <div className="mb-4">
                      <div className="text-white/70 text-sm mb-2">
                        Complete all fields to submit
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-white h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${(Object.values(formData).filter(value => value.trim() !== "").length / 6) * 100}%` 
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-200 text-sm">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
                        Sorry, there was an error sending your message. Please try again.
                      </div>
                    )}
                    
                    <div className="space-y-4 lg:space-y-5 xl:space-y-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Your Name *"
                          required
                          inputMode="text"
                          pattern="[A-Za-z ]+"
                          title="Only letters and spaces are allowed"
                          className={`w-full bg-transparent border-b text-white placeholder-white/70 py-3 lg:py-4 xl:py-5 focus:outline-none transition-colors text-sm lg:text-base xl:text-lg min-h-[44px] ${
                            formData.name.trim() === "" 
                              ? "border-white/30 focus:border-white" 
                              : "border-white/60"
                          }`}
                        />
                        {touched.name && getFieldError('name') && (
                          <p className="mt-1 text-xs text-red-300">{getFieldError('name')}</p>
                        )}
                      </div>
                      
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Phone Number *"
                          required
                          inputMode="numeric"
                          pattern="\\d+"
                          title="Only digits are allowed"
                          className={`w-full bg-transparent border-b text-white placeholder-white/70 py-3 lg:py-4 xl:py-5 focus:outline-none transition-colors text-sm lg:text-base xl:text-lg min-h-[44px] ${
                            formData.phone.trim() === "" 
                              ? "border-white/30 focus:border-white" 
                              : "border-white/60"
                          }`}
                        />
                        {touched.phone && getFieldError('phone') && (
                          <p className="mt-1 text-xs text-red-300">{getFieldError('phone')}</p>
                        )}
                      </div>
                      
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Enter Your Email *"
                          required
                          pattern="[^@\s]+@[^@\s]+"
                          title="Email must contain '@'"
                          className={`w-full bg-transparent border-b text-white placeholder-white/70 py-3 lg:py-4 xl:py-5 focus:outline-none transition-colors text-sm lg:text-base xl:text-lg min-h-[44px] ${
                            formData.email.trim() === "" 
                              ? "border-white/30 focus:border-white" 
                              : "border-white/60"
                          }`}
                        />
                        {touched.email && getFieldError('email') && (
                          <p className="mt-1 text-xs text-red-300">{getFieldError('email')}</p>
                        )}
                      </div>
                      
                      <div>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Enter Your Address *"
                          required
                          className={`w-full bg-transparent border-b text-white placeholder-white/70 py-3 lg:py-4 xl:py-5 focus:outline-none transition-colors text-sm lg:text-base xl:text-lg min-h-[44px] ${
                            formData.address.trim() === "" 
                              ? "border-white/30 focus:border-white" 
                              : "border-white/60"
                          }`}
                        />
                        {touched.address && getFieldError('address') && (
                          <p className="mt-1 text-xs text-red-300">{getFieldError('address')}</p>
                        )}
                      </div>
                      
                      <div className="relative" ref={dropdownRef}>
                        <button 
                          type="button"
                          className={`w-full bg-transparent hover:cursor-pointer border-b text-white py-3 lg:py-4 xl:py-5 focus:outline-none transition-colors text-sm lg:text-base xl:text-lg text-left flex items-center justify-between min-h-[44px] ${
                            formData.service.trim() === "" 
                              ? "border-white/30 focus:border-white" 
                              : "border-white/60"
                          }`}
                          onClick={() => {
                            setTouched(prev => ({ ...prev, service: true }))
                            setIsServiceDropdownOpen(!isServiceDropdownOpen)
                          }}
                        >
                          <span>{selectedService || "Select a Service *"}</span>
                          <svg className={`ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-200 ${isServiceDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Custom Dropdown */}
                        {isServiceDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-full z-50">
                            {/* Bubble pointer at the top */}
                            <div className="relative">
                              <div className="absolute -top-2 left-6 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-white"></div>
                              <div className="bg-white rounded-lg shadow-lg py-2">
                                <button
                                  type="button"
                                  className="block w-full px-4 py-3 text-black bg-white hover:text-white hover:!bg-[#709392] transition-all duration-200 text-left min-h-[44px] flex items-center"
                                  onClick={() => handleServiceSelect("Detailing")}
                                >
                                  <div className="font-medium">Detailing</div>
                                </button>
                                
                                <div className="border-t border-gray-200"></div>
                                
                                <button
                                  type="button"
                                  className="block w-full px-4 py-3 text-black bg-white hover:text-white hover:!bg-[#709392] transition-all duration-200 text-left min-h-[44px] flex items-center"
                                  onClick={() => handleServiceSelect("Shrink Wrap")}
                                >
                                  <div className="font-medium">Shrink Wrap</div>
                                </button>
                                
                                <div className="border-t border-gray-200"></div>
                                
                                <button
                                  type="button"
                                  className="block w-full px-4 py-3 text-black bg-white hover:text-white hover:!bg-[#709392] transition-all duration-200 text-left min-h-[44px] flex items-center"
                                  onClick={() => handleServiceSelect("Dock Repair & Maintenance")}
                                >
                                  <div className="font-medium">Dock Repair & Maintenance</div>
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {touched.service && getFieldError('service') && (
                        <p className="mt-1 text-xs text-red-300">{getFieldError('service')}</p>
                      )}
                      
                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Your Message *"
                          rows={4}
                          required
                          className={`w-full bg-transparent  border-b text-white placeholder-white/70 py-3 lg:py-4 xl:py-5 focus:outline-none transition-colors resize-none text-sm lg:text-base xl:text-lg min-h-[44px] ${
                            formData.message.trim() === "" 
                              ? "border-white/30 focus:border-white" 
                              : "border-white/60"
                          }`}
                        />
                        {touched.message && getFieldError('message') && (
                          <p className="mt-1 text-xs text-red-300">{getFieldError('message')}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Agreement and Consent Checkboxes */}
                    <div className="pt-2 space-y-3">
                      {/* Terms and Privacy Policy Agreement */}
                      <div className="flex items-start gap-2">
                        <input
                          id="agree-terms-hero"
                          type="checkbox"
                          className="mt-1 h-4 w-4"
                          checked={hasAgreed}
                          onChange={(e) => setHasAgreed(e.target.checked)}
                          aria-required="true"
                        />
                        <label htmlFor="agree-terms-hero" className="text-white/90 text-sm lg:text-base">
                          I agree to the <Link href="/terms-and-conditions" className="underline">Terms and Conditions</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
                        </label>
                      </div>

                      {/* SMS Consent Checkbox */}
                      <div className="flex items-start gap-2">
                        <input
                          id="sms-consent-hero"
                          type="checkbox"
                          className="mt-1 h-4 w-4"
                          checked={hasSmsConsent}
                          onChange={(e) => setHasSmsConsent(e.target.checked)}
                        />
                        <label htmlFor="sms-consent-hero" className="text-white/90 text-sm lg:text-base">
                          I consent to receive SMS notifications and service updates from Luke's Marina Services. Message frequency varies. Message and data rates may apply. Text HELP for assistance. Reply STOP to opt out at any time.
                        </label>
                      </div>

                      {/* Marketing Communications Consent */}
                      <div className="flex items-start gap-2">
                        <input
                          id="marketing-consent-hero"
                          type="checkbox"
                          className="mt-1 h-4 w-4"
                          checked={hasMarketingConsent}
                          onChange={(e) => setHasMarketingConsent(e.target.checked)}
                        />
                        <label htmlFor="marketing-consent-hero" className="text-white/90 text-sm lg:text-base">
                          I want to receive news, updates, and promotional offers about boat detailing, shrink wrap, and dock maintenance services from Luke's Marina Services.
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                      className="w-full flex mt-6 hover:cursor-pointer lg:mt-8 xl:mt-10 items-center justify-center px-6 py-3 lg:py-4 xl:py-5 rounded-full shadow transition min-h-[44px]
                      bg-white text-[#106264]
                      hover:bg-[#106264] hover:text-white
                      disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"
                    >
                      <span className="font-medium tracking-[3%] pr-4 text-sm lg:text-base xl:text-lg">
                        {isSubmitting ? 'Sending...' : 'Schedule the Call'}
                      </span>
                      {!isSubmitting && (
                      <svg
                          className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 transform rotate-45"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                      )}
                    </button>
                    
                    {/* Form validation message */}
                    {!isFormValid && (
                      <div className="mt-3 text-center text-white/60 text-sm">
                        Please fill in all required fields to submit
                  </div>
                    )}
                  </form>
                </div>
              </div>
          </div>
        </div>
      </OptimizedHero>

      {/* Image Test Section - Temporary - REMOVED */}

      {/* Above-fold sections - keep SSR for SEO */}
      <IdahoMarinaSection />
      <StatsSection />
      <OurServicesSection />
      
      {/* Below-fold sections - Performance optimized with preloading */}
      <PartnerLogos />
      <OurGallery />
      <CtaShowcaseSection />
      <ProjectsGallery />
      <TestimonialsSection />
      <ContactUsSection />
      <FaqSection />
      <BlogsSection />
      <FooterSection />


      
    </div>
  )
}
