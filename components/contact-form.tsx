"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    let value = e.target.value

    if (name === "phone") {
      // Digits only
      value = value.replace(/\D/g, "")
    }

    if (name === "name") {
      // Letters and spaces only
      value = value.replace(/[^A-Za-z\s]/g, "")
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Simple validity checks
  const isNameValid = formData.name.trim() !== "" && /^[A-Za-z ]+$/.test(formData.name.trim())
  const isPhoneValid = formData.phone.trim() !== "" && /^\d+$/.test(formData.phone.trim())
  const isEmailValid = formData.email.trim() !== "" && formData.email.includes("@")
  const isFormValid = isNameValid && isPhoneValid && isEmailValid && formData.service.trim() !== ""

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
          body: JSON.stringify(formData),
        },
      )

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        })
        // Reset success message after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000)
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.")
      console.error("Form submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-[41px] p-8 w-full max-w-md border border-white/20">
      <div className="rounded-2xl py-4 mb-6">
        <h3 className="text-white text-xl font-semibold ">LET'S DISCUSS YOUR SERVICES!</h3>
      </div>

      {isSuccess && (
        <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
          <p className="text-green-100 text-sm">Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
          <p className="text-red-100 text-sm">{error}</p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            inputMode="text"
            pattern="[A-Za-z ]+"
            title="Only letters and spaces are allowed"
            className="w-full bg-transparent text-white placeholder-gray-300 border-0 border-b border-white/30 pb-2 focus:border-white focus:outline-none"
          />
        </div>

        {/* Phone Input */}
        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
            inputMode="numeric"
            pattern="\\d+"
            title="Only digits are allowed"
            className="w-full bg-transparent text-white placeholder-gray-300 border-0 border-b border-white/30 pb-2 focus:border-white focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            pattern="[^@\s]+@[^@\s]+"
            title="Email must contain '@'"
            className="w-full bg-transparent text-white placeholder-gray-300 border-0 border-b border-white/30 pb-2 focus:border-white focus:outline-none"
          />
        </div>

        {/* Service Selection */}
        <div className="relative">
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent text-white border-0 border-b border-white/30 pb-2 focus:border-white focus:outline-none appearance-none"
          >
            <option value="" className="text-gray-800">
              Select a Service
            </option>
            <option value="detailing" className="text-gray-800">
              Detailing
            </option>
            <option value="shrink-wrap" className="text-gray-800">
              Shrink Wrap
            </option>
            <option value="dock-repair" className="text-gray-800">
              Dock Repair & Maintenance
            </option>
          </select>
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="w-full bg-transparent text-white placeholder-gray-300 border-0 border-b border-white/30 pb-2 focus:border-white focus:outline-none resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading || !isFormValid}
          className="w-full bg-white text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-full py-3 flex items-center justify-center gap-2 mt-8"
        >
          {isLoading ? "Sending..." : "Schedule the Call"}
          <ArrowRightIcon />
        </Button>
      </form>
    </div>
  )
}
