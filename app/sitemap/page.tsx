import Navbar from "@/components/navbar"
import Link from "next/link"

export default function Sitemap() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-12 tracking-wider">SITEMAP</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-medium mb-4 border-b border-amber-800 pb-2">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-800 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-amber-800 hover:underline">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-amber-800 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/images" className="text-amber-800 hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-amber-800 hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-amber-800 hover:underline">
                  Reservation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4 border-b border-amber-800 pb-2">Legal Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-amber-800 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-amber-800 hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-amber-800 hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4 border-b border-amber-800 pb-2">Other</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="text-amber-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  className="text-amber-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com"
                  className="text-amber-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TripAdvisor
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
