"use client"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ChevronDownIcon = () => (
  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
    setHoverTimeout(timeout)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 relative z-50 sticky top-0 md:static">
        {/* Logo on left */}
        <div className="flex items-center">
          <Link href="/" className="w-12 h-12 md:w-22 md:h-22 flex items-center justify-center">
            <Image
              src="/images/2 21.png"
              alt="Luke Marina Services Logo"
              width={88}
              height={88}
              className="w-full h-full object-contain"
              priority
              quality={100}
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop only */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center text-white hover:text-gray-200 transition-colors"
              onClick={() => window.location.href = '/services'}
            >
              Services
              <ChevronDownIcon />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 z-50">
                <div className="relative">
                  <div className="absolute -top-2 left-6 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-white"></div>
                  <div className="bg-white rounded-lg shadow-lg py-2">
                    <Link
                      href="/services/detailing"
                      className="block w-full px-4 py-3 text-black bg-white hover:text-white hover:!bg-[#709392] transition-all duration-200 text-left min-h-[44px] flex items-center"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium">Detailing</div>
                    </Link>

                    <div className="border-t border-gray-200"></div>

                    <Link
                      href="/services/shrink-wrap"
                      className="block w-full px-4 py-3 text-black bg-white hover:text-white hover:!bg-[#709392] transition-all duration-200 text-left min-h-[44px] flex items-center"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium">Shrink Wrap</div>
                    </Link>

                    <div className="border-t border-gray-200"></div>

                    <Link
                      href="/services/dock-repair"
                      className="block w-full px-4 py-3 text-black bg-white hover:text-white hover:!bg-[#709392] transition-all duration-200 text-left min-h-[44px] flex items-center"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium">Dock Repair & Maintenance</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-white hover:text-gray-200 transition-colors">
            Blogs
          </Link>
        </div>

        {/* Right side: Contact button (desktop) + Hamburger (mobile) */}
        <div className="flex items-center space-x-4">
          {/* Contact button - hidden on mobile */}
          <Link href="/contact">
            <button
              className="hidden md:block group relative flex items-center justify-center w-48 bg-white text-black px-6 py-3 rounded-full shadow-lg transition-all duration-500 overflow-hidden hover:bg-gradient-to-r hover:from-white hover:to-rose-200"
            >
              <span className="flex items-center group-hover:opacity-0 transition-opacity duration-300">
                <span className="mr-3 font-medium">Contact Us</span>
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

              <span className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 font-medium transition-opacity duration-300 text-black">
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
                <span>Make a Call</span>
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

          {/* Hamburger - mobile only */}
          <button
            className="md:hidden text-white hover:text-gray-200 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-[55] backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[60] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">Menu</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full min-h-0">
              <div className="flex-1 py-6 overflow-y-auto min-h-0">
                <nav className="space-y-1 px-6">
                  <Link 
                    href="/" 
                    onClick={closeMobileMenu} 
                    className="flex items-center px-4 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#709392] rounded-lg transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </Link>
                  
                  <Link 
                    href="/about" 
                    onClick={closeMobileMenu} 
                    className="flex items-center px-4 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#709392] rounded-lg transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    About Us
                  </Link>

                  {/* Services Section with Split Functionality */}
                  <div>
                    <div className="flex items-center rounded-lg overflow-hidden">
                      {/* Main Services Link */}
                      <Link
                        href="/services"
                        onClick={closeMobileMenu}
                        className="flex items-center flex-1 px-4 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#709392] transition-all duration-200 font-medium"
                      >
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Services
                      </Link>
                      
                      {/* Dropdown Toggle Button */}
                      <button
                        onClick={toggleMobileServices}
                        className="flex items-center justify-center px-3 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#709392] transition-all duration-200 border-l border-gray-200"
                        aria-label="Toggle services dropdown"
                      >
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    {isMobileServicesOpen && (
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-100 pl-4">
                        <Link 
                          href="/services/detailing" 
                          onClick={closeMobileMenu} 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#709392] rounded-lg transition-all duration-200"
                        >
                          Detailing
                        </Link>
                        <Link 
                          href="/services/shrink-wrap" 
                          onClick={closeMobileMenu} 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#709392] rounded-lg transition-all duration-200"
                        >
                          Shrink Wrap
                        </Link>
                        <Link 
                          href="/services/dock-repair" 
                          onClick={closeMobileMenu} 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#709392] rounded-lg transition-all duration-200"
                        >
                          Dock Repair & Maintenance
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link 
                    href="/blog" 
                    onClick={closeMobileMenu} 
                    className="flex items-center px-4 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#709392] rounded-lg transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Blogs
                  </Link>
                  <Link 
                    href="/contact" 
                    onClick={closeMobileMenu} 
                    className="flex items-center px-4 py-3 text-gray-900 hover:bg-gray-50 hover:text-[#709392] rounded-lg transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Contact Us
                  </Link>

                   {/* Logo at Bottom Center - Fixed Position */}
              <div className="flex-shrink-0 p-6 border-t border-gray-100 bg-white mt-auto">
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/2 21.png"
                    alt="Luke Marina Services Logo"
                    width={96}
                    height={96}
                    className="w-22 h-22 object-contain opacity-80"
                    quality={100}
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                </div>
              </div>
                </nav>
              </div>

              
            </div>
          </div>
        </>
      )}
    </>
  )
}