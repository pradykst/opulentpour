"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Determine if we're on the homepage
  const isHomePage = pathname === "/"

  // Text color class based on page
  const textColorClass = isHomePage ? "text-white" : "text-amber-800"
  const mobileTextColorClass = isHomePage ? "text-white" : "text-amber-800"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${!isHomePage ? "bg-white/90 backdrop-blur-sm shadow-sm" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <Image
                  src="/logo-white.png"
                  alt="Opulent Pour Logo"
                  width={60}
                  height={60}
                  className={`drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] ${!isHomePage ? "filter brightness-0 saturate-100 invert-[25%] sepia-[30%] saturate-[1000%] hue-rotate-[335deg]" : ""}`}
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <Link href="/" className={`${textColorClass} hover:text-amber-600 px-3 py-2 text-sm font-medium`}>
                Home
              </Link>
              <Link href="/menu" className={`${textColorClass} hover:text-amber-600 px-3 py-2 text-sm font-medium`}>
                Menu
              </Link>
              <Link href="/about-us" className={`${textColorClass} hover:text-amber-600 px-3 py-2 text-sm font-medium`}>
                About Us
              </Link>
              <Link href="/images" className={`${textColorClass} hover:text-amber-600 px-3 py-2 text-sm font-medium`}>
                Images
              </Link>
              <Link
                href="/contact-us"
                className={`${textColorClass} hover:text-amber-600 px-3 py-2 text-sm font-medium`}
              >
                Contact Us
              </Link>
              <Link href="/reservation">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white">Reservation</Button>
              </Link>
            </nav>
          </div>

          <div className="md:hidden">
            <button type="button" className={textColorClass} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-white hover:text-amber-200 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-white hover:text-amber-200 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/about-us"
              className="text-white hover:text-amber-200 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/images"
              className="text-white hover:text-amber-200 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Images
            </Link>
            <Link
              href="/contact-us"
              className="text-white hover:text-amber-200 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/reservation"
              className="bg-amber-800 hover:bg-amber-900 text-white block px-3 py-2 text-base font-medium rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
