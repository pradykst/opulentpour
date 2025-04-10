import Navbar from "@/components/navbar"
import Image from "next/image"

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-12 tracking-wider font-serif">ABOUT US</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/about-us-image.jpeg"
              alt="Opulent Pour Interior"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-light border-b border-amber-800 pb-2 mb-4 font-serif">OUR STORY</h2>
            <p className="text-gray-700 leading-relaxed">
              At Opulent Pour, we redefine fine dining by fusing exclusive wine-tasting experiences with a carefully
              curated gourmet cuisine setup. Set in the premium locale of Khar West, Mumbai, our vision is to offer more
              than just a meal—it's about storytelling through wine and food.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We cater to a discerning audience—wine lovers, professionals, expatriates, and global tourists—all of whom
              seek a deeper connection to what's on their plate and in their glass. Through collaborations with renowned
              vineyards, expert sommeliers, and seasoned chefs, we ensure that every tasting is rich in authenticity and
              flavor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our sessions are hosted mainly during evenings and weekends, with private and corporate bookings available
              on weekdays. From intimate gatherings to luxury events, Opulent Pour offers a setting where education
              meets indulgence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By blending strategic partnerships, exceptional service, and experiential marketing, we aim to be the
              go-to destination for wine appreciation in India.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
