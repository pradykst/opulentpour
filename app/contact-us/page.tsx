import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-12 tracking-wider font-serif">CONTACT US</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-light border-b border-amber-800 pb-2 mb-6 font-serif">GET IN TOUCH</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <Input id="phone" placeholder="Your phone number" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>

              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8">Send Message</Button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-light border-b border-amber-800 pb-2 mb-6 font-serif">FIND US</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-800 mt-1" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">14, Nargis Dutt Rd, Union Park, Khar West, Mumbai, Maharashtra 400052</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-amber-800 mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+91-9875022502</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-amber-800 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">reservations@opulentpour.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-amber-800 mt-1" />
                <div>
                  <h3 className="font-medium">Opening Hours</h3>
                  <p className="text-gray-600">Lunch: 12:00 PM - 3:00 PM</p>
                  <p className="text-gray-600">Dinner: 7:00 PM - 11:30 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 h-96 w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1123883886747!2d72.83073307596371!3d19.07248055146636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b88ff2c5a7%3A0x764794344b0a0a7c!2s14%2C%20Nargis%20Dutt%20Rd%2C%20Union%20Park%2C%20Khar%20West%2C%20Mumbai%2C%20Maharashtra%20400052!5e0!3m2!1sen!2sin!4v1712507234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
