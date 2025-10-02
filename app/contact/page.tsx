"use client"
import { AboutHeroSection } from "@/components/about-hero-section";
import { ContactUsSection } from "@/components/contact-us-section";
import { FooterSection } from "@/components/footer-section";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import WaveDivider from "@/components/lake-wave-test";
import { FaqSection } from "@/components/faq-section";
import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"

// If you use shadcn Button, keep the import. Otherwise you can remove it.
// import { Button } from "@/components/ui/button"

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

type FormState = {
  name: string
  phone: string
  email: string
  address: string
  service: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

export default function ContactPage() {



  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [focusedField, setFocusedField] = useState<keyof FormState | null>(null)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [hasAgreed, setHasAgreed] = useState(false)
  const [hasSmsConsent, setHasSmsConsent] = useState(false)
  const [hasMarketingConsent, setHasMarketingConsent] = useState(false)

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  // --- Validation helpers ---
  const digitsOnly = (v: string) => v.replace(/\D/g, "")

  const validate = (values: FormState): FormErrors => {
    const e: FormErrors = {}
    if (!values.name.trim()) e.name = "Name is required"

    if (!values.phone.trim()) e.phone = "Phone is required"
    else if (digitsOnly(values.phone).length < 7) e.phone = "Enter a valid phone number"

    if (!values.email.trim()) e.email = "Email is required"
    else if (!values.email.includes("@")) e.email = "Email must contain '@'"

    if (!values.address.trim()) e.address = "Address is required"

    if (!values.service.trim()) e.service = "Please select a service"

    if (!values.message.trim()) e.message = "Message is required"
    else if (values.message.trim().length < 5) e.message = "Message is too short"

    return e
  }

  const validateField = (field: keyof FormState, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required"
        if (!/^[A-Za-z ]+$/.test(value.trim())) return "Only letters and spaces are allowed"
        return ""
      case "phone":
        if (!value.trim()) return "Phone is required"
        if (digitsOnly(value).length < 7) return "Enter a valid phone number"
        return ""
      case "email":
        if (!value.trim()) return "Email is required"
        if (!value.includes("@")) return "Email must contain '@'"
        return ""
      case "address":
        if (!value.trim()) return "Address is required"
        return ""
      case "service":
        if (!value.trim()) return "Please select a service"
        return ""
      case "message":
        if (!value.trim()) return "Message is required"
        if (value.trim().length < 5) return "Message is too short"
        return ""
      default:
        return ""
    }
  }

  const isFormValid = useMemo(
    () => Object.keys(validate(formData)).length === 0 && hasAgreed,
    [formData, hasAgreed]
  )

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target
    let { value } = e.target

    if (name === "phone") {
      value = value.replace(/\D/g, "") // digits only
    }

    if (name === "name") {
      value = value.replace(/[^A-Za-z\s]/g, "") // letters and spaces only
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field as user types
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const currentErrors = validate(formData)
    setErrors(currentErrors)
    if (Object.keys(currentErrors).length > 0) {
      // Focus first invalid field
      const firstKey = Object.keys(currentErrors)[0] as keyof FormState
      setFocusedField(firstKey)
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/efeLuf1RDRQ9zn1iHhtC/webhook-trigger/819816b0-b7a9-4654-b19f-e99f4ea78339",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            smsConsent: hasSmsConsent,
            marketingConsent: hasMarketingConsent,
            termsAgreed: hasAgreed
          }),
        }
      )

      if (!response.ok) throw new Error("Failed to submit form")

      setIsSuccess(true)
      setFormData({ name: "", phone: "", email: "", address: "", service: "", message: "" })
      setHasSmsConsent(false)
      setHasMarketingConsent(false)
      setHasAgreed(false)
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (err) {
      console.error("Form submission error:", err)
      setError("Failed to submit form. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Close the service dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceDropdownOpen(false)
      }
    }
    if (isServiceDropdownOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isServiceDropdownOpen])




  return (
    <div className="min-h-screen"   >
      <section
      className="relative min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: ` url('/images/68d1586583739a42f2657185.jpg')`,
      }}
    >
      {/* 50% dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <Navbar />

      <div className="flex-1 flex items-center  justify-start relative z-10">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-7xl ">
            
            <h1 className="text-2xl mr-12 md:mr-0 sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About Luke Marina: Passion for Precision, Commitment to Luxury
            </h1>
            
            <nav className="mt-8">
                <ol className="flex items-center space-x-2 text-sm text-white/80">
                  <li>
                    <a href="/" className="text-white font-bold transition-colors">
                      Home
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white font-bold">Contact Us</span>
                  </li>
                </ol>
              </nav>


          </div>
        </div>
      </div>
      {/* Social Media Icons - Right Side */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-4">
      <a 
          href="https://www.facebook.com/profile.php?id=61559601274027" 
          className="w-12 h-12 rounded-full hover:bg-black  bg-transparent flex items-center justify-center  transition-colors duration-300"
          aria-label="facebook"
        >
          <Image 
            src="/images/68d6bf82b606d6160dfda08d.svg" 
            alt="facebook" 
            width={42} 
            height={42} 
            className="text-white"
          />
        </a>
        {/* Instagram */}
  <a
    href="#"
    className="group w-12 h-12 rounded-full bg-transparent flex items-center justify-center transition-colors duration-300 hover:bg-black"
    aria-label="Instagram"
  >
    <Image
      src="/images/68d303ca26b7f7665c729e4d.svg"
      alt="Instagram"
      width={42}
      height={42}
      className="transition duration-300 group-hover:filter-none"
    />
  </a>

  

  {/* YouTube */}
  <a
    href="#"
    className="group w-12 h-12 rounded-full bg-transparent flex items-center justify-center transition-colors duration-300 hover:bg-black"
    aria-label="YouTube"
  >
    <Image
      src="/images/68d303ca0f427167f6d7410e.svg"
      alt="YouTube"
      width={42}
      height={42}
      className="transition duration-300 group-hover:filter-none"
    />
  </a>
      </div>
      
      <WaveDivider />

      
      
    </section>
    <div className="py-12 bg-white">

      </div>
      <section className="py-16 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-8xl font-bold text-black leading-tight mb-6 uppercase">CONTACT US</h2>

        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed uppercase">
          WE ARE EXCITED TO ASSIST YOU WITH YOUR boating and dock
        </p>
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl mb-2 leading-relaxed uppercase">
          SERVICE NEEDS
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-8 mt-4">
              <div className="transition-all duration-300 ease-in-out hover:translate-x-2">
                <h3 className="text-black font-bold text-xl mb-3 transition-colors duration-300 hover:text-[#106264]">ADDRESS</h3>
                <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-300 hover:text-gray-800">2600 A E Seltice #415, Post</p>
                <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-300 hover:text-gray-800">Falls, Idaho, 83854</p>
              </div>

              <div className="transition-all duration-300 ease-in-out hover:translate-x-2">
                <h3 className="text-black font-bold text-xl mb-3 transition-colors duration-300 hover:text-[#106264]">EMAIL ADDRESS</h3>
                <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-300 hover:text-gray-800">lukesmarinaservices@gmail.com</p>
              </div>

              <div className="transition-all duration-300 ease-in-out hover:translate-x-2">
                <h3 className="text-black font-bold text-xl mb-3 transition-colors duration-300 hover:text-[#106264]">CONTACT NUMBER</h3>
                <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-300 hover:text-gray-800">208-415-2743</p>
                <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-300 hover:text-gray-800">208-415-2743</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-transparent p-8 transition-all duration-500 ease-in-out hover:bg-black/5 rounded-2xl">
            <div className="rounded-2xl py-4 mb-8 transition-all duration-300 ease-in-out">
              <h3 className="text-black text-4xl font-semibold transition-all duration-300 ease-in-out hover:text-[#106264]">LET'S DISCUSS YOUR SERVICES!</h3>
            </div>

            {isSuccess && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg transition-all duration-500 ease-in-out animate-in fade-in-0 slide-in-from-top-2">
                <p className="text-green-700 text-sm">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg transition-all duration-500 ease-in-out animate-in fade-in-0 slide-in-from-top-2">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit} noValidate>
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => {
                      setFocusedField(null)
                      const msg = validateField("name", formData.name)
                      setErrors((prev) => ({ ...prev, name: msg }))
                    }}
                    aria-invalid={!!errors.name}
                    required
                    inputMode="text"
                    pattern="[A-Za-z ]+"
                    title="Only letters and spaces are allowed"
                    className={`w-full bg-transparent text-black placeholder-gray-300 border-0 border-b pb-3 focus:outline-none text-lg transition-all duration-300 ease-in-out ${
                      focusedField === "name" ? "border-black" : "border-black/30 hover:border-black/50"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="PHONE NUMBER"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => {
                      setFocusedField(null)
                      const msg = validateField("phone", formData.phone)
                      setErrors((prev) => ({ ...prev, phone: msg }))
                    }}
                    aria-invalid={!!errors.phone}
                    required
                    inputMode="numeric"
                    pattern="\\d+"
                    title="Only digits are allowed"
                    className={`w-full bg-transparent text-black placeholder-gray-300 border-0 border-b pb-3 focus:outline-none text-lg transition-all duration-300 ease-in-out ${
                      focusedField === "phone" ? "border-black" : "border-black/30 hover:border-black/50"
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="ENTER YOUR EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => {
                    setFocusedField(null)
                    const msg = validateField("email", formData.email)
                    setErrors((prev) => ({ ...prev, email: msg }))
                  }}
                  aria-invalid={!!errors.email}
                  required
                  pattern="[^@\\s]+@[^@\\s]+"
                  title="Email must contain '@'"
                  className={`w-full bg-transparent text-black placeholder-gray-300 border-0 border-b pb-2 focus:outline-none transition-all duration-300 ease-in-out ${
                    focusedField === "email" ? "border-black" : "border-black/30 hover:border-black/50"
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
              </div>

              {/* Address Input */}
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  placeholder="ENTER YOUR ADDRESS"
                  value={formData.address}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("address")}
                  onBlur={() => {
                    setFocusedField(null)
                    const msg = validateField("address", formData.address)
                    setErrors((prev) => ({ ...prev, address: msg }))
                  }}
                  aria-invalid={!!errors.address}
                  required
                  className={`w-full bg-transparent text-black placeholder-gray-300 border-0 border-b pb-3 focus:outline-none text-lg transition-all duration-300 ease-in-out ${
                    focusedField === "address" ? "border-black" : "border-black/30 hover:border-black/50"
                  }`}
                />
                {errors.address && <p className="mt-1 text-xs text-red-300">{errors.address}</p>}
              </div>

              {/* Service Selection */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  className={`w-full bg-transparent text-black border-0 border-b pb-3 focus:outline-none text-lg transition-all duration-300 ease-in-out flex items-center justify-between ${
                    focusedField === "service" ? "border-black" : "border-black/30 hover:border-black/50"
                  }`}
                  onClick={() => {
                    setIsServiceDropdownOpen((o) => !o)
                    setFocusedField("service")
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={isServiceDropdownOpen}
                  aria-invalid={!!errors.service}
                >
                  <span>{formData.service || "SELECT A SERVICE"}</span>
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {errors.service && <p className="mt-1 text-xs text-red-300">{errors.service}</p>}

                {/* Custom Dropdown */}
                {isServiceDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full z-50">
                    <div className="relative">
                      <div className="absolute -top-2 left-6 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-white"></div>
                      <div className="bg-white rounded-lg shadow-lg py-2">
                        {[
                          "Detailing",
                          "Shrink Wrap",
                          "Dock Repair & Maintenance",
                        ].map((label) => (
                          <div key={label}>
                            <button
                              type="button"
                              className="block w-full px-4 py-3 text-black bg-white hover:text-white hover:!bg-[#709392] transition-all duration-200 text-left"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, service: label }))
                                setIsServiceDropdownOpen(false)
                                setFocusedField(null)
                                setErrors((prev) => ({ ...prev, service: "" }))
                              }}
                              role="option"
                              aria-selected={formData.service === label}
                            >
                              <div className="font-medium">{label}</div>
                            </button>
                            <div className="border-t border-gray-200"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => {
                    setFocusedField(null)
                    const msg = validateField("message", formData.message)
                    setErrors((prev) => ({ ...prev, message: msg }))
                  }}
                  rows={3}
                  aria-invalid={!!errors.message}
                  required
                  className={`w-full bg-transparent text-black placeholder-gray-300 border-0 border-b pb-3 focus:outline-none resize-none text-lg transition-all duration-300 ease-in-out ${
                    focusedField === "message" ? "border-black" : "border-black/30 hover:border-black/50"
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
              </div>

              {/* Agreement and Consent Checkboxes */}
              <div className="space-y-4">
                {/* Terms and Privacy Policy Agreement */}
                <div className="flex items-start gap-2">
                  <input
                    id="agree-contact-page"
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    checked={hasAgreed}
                    onChange={(e) => setHasAgreed(e.target.checked)}
                    aria-required="true"
                  />
                  <label htmlFor="agree-contact-page" className="text-black text-sm">
                    I agree to the <Link href="/terms-and-conditions" className="underline">Terms and Conditions</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
                  </label>
                </div>

                {/* SMS Consent Checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    id="sms-consent-contact"
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    checked={hasSmsConsent}
                    onChange={(e) => setHasSmsConsent(e.target.checked)}
                  />
                  <label htmlFor="sms-consent-contact" className="text-black text-sm">
                    I consent to receive SMS notifications and service updates from Luke's Marina Services. Message frequency varies. Message and data rates may apply. Text HELP for assistance. Reply STOP to opt out at any time.
                  </label>
                </div>

                {/* Marketing Communications Consent */}
                <div className="flex items-start gap-2">
                  <input
                    id="marketing-consent-contact"
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    checked={hasMarketingConsent}
                    onChange={(e) => setHasMarketingConsent(e.target.checked)}
                  />
                  <label htmlFor="marketing-consent-contact" className="text-black text-sm">
                    I want to receive news, updates, and promotional offers about boat detailing, shrink wrap, and dock maintenance services from Luke's Marina Services.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !isFormValid}
                className={`w-full flex mt-4 items-center justify-center px-6 py-3 rounded-full shadow transition-all duration-300 ease-in-out transform ${
                  isLoading || !isFormValid
                    ? "bg-[#106264]/50 cursor-not-allowed"
                    : "bg-[#106264] hover:bg-[#0a4a4c] hover:scale-105 hover:shadow-lg active:scale-95"
                }`}
                aria-disabled={isLoading || !isFormValid}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    <span className="font-medium text-black">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="font-medium pr-4 text-black">Schedule the Call</span>
                    <svg
                      className="w-5 h-5 transform rotate-45 text-black transition-transform duration-300 ease-in-out"
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
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
      <FaqSection />
      <FooterSection />
    </div>
  )
}