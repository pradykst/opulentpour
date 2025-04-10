import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, HotelIcon as TripAdvisor, MapPin, Phone, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/bar-background.jpeg"
          alt="Opulent Pour Bar Interior"
          fill
          className="object-cover brightness-75"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="flex flex-col items-center">
            <Image
              src="/logo-white.png"
              alt="Opulent Pour Logo"
              width={300}
              height={300}
              className="drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
            />
            <h2 className="text-2xl md:text-3xl font-light font-serif tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Mumbai
            </h2>

            <div className="flex space-x-6 mt-8">
              <Link href="https://www.tripadvisor.com" aria-label="TripAdvisor">
                <TripAdvisor className="w-6 h-6" />
              </Link>
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider font-serif">WELCOME TO OPULENT POUR</h2>
          <p className="text-gray-700 mb-10 leading-relaxed">
            At Opulent Pour, we bring together the rich heritage of wine with the soul of gourmet cuisine. Whether
            you're a wine connoisseur or simply seeking a sophisticated evening, our curated sessions invite you to
            explore the finest selections from local and international vineyards—all perfectly paired with seasonally
            inspired dishes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="/menu">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6 text-lg">Explore Menu</Button>
            </Link>
            <Link href="/images">
              <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50 px-8 py-6 text-lg">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wider font-serif">CONTACT US</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-800 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Address</h3>
              <p className="text-gray-600">14, Nargis Dutt Rd, Union Park, Khar West, Mumbai, Maharashtra 400052</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-800 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Reservations</h3>
              <p className="text-gray-600">+91-9875022502</p>
              <p className="text-gray-600">reservations@opulentpour.com</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-800 flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Opening Hours</h3>
              <p className="text-gray-600">Lunch: 12:00 PM - 3:00 PM</p>
              <p className="text-gray-600">Dinner: 7:00 PM - 11:30 PM</p>
              <p className="text-gray-600 font-medium mt-2">Open All Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">
                At Opulent Pour, we bring together the rich heritage of wine with the soul of gourmet cuisine.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>14, Nargis Dutt Rd, Union Park</li>
                <li>Khar West, Mumbai</li>
                <li>Maharashtra 400052</li>
                <li>+91-9875022502</li>
                <li>reservations@opulentpour.com</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Opening Hours</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Lunch: 12:00 PM - 3:00 PM</li>
                <li>Dinner: 7:00 PM - 11:30 PM</li>
                <li className="font-medium text-white">Open All Days</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.tripadvisor.com"
                  aria-label="TripAdvisor"
                  className="text-gray-400 hover:text-white"
                >
                  <TripAdvisor className="w-6 h-6" />
                </Link>
                <Link href="https://www.facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>&copy; {new Date().getFullYear()} Opulent Pour. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
