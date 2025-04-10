import Navbar from "@/components/navbar"
import Image from "next/image"

export default function Gallery() {
  const images = [
    { src: "/gallery-image1.jpeg", alt: "Bar Interior with Chandeliers" },
    { src: "/gallery-image2.jpeg", alt: "Wine Collection Display" },
    { src: "/gallery-image3.jpeg", alt: "Restaurant Interior" },
    { src: "/gallery-image4.jpeg", alt: "Wine Wall Display" },
    { src: "/gallery-image5.jpeg", alt: "Dining Area" },
    { src: "/gallery-image6.jpeg", alt: "Rustic Interior with Staircase" },
    { src: "/bar-background.jpeg", alt: "Bar Counter" },
    { src: "/about-us-image.jpeg", alt: "Table Setting" },
    { src: "/gallery-image7.jpeg", alt: "Rustic Bar with Wooden Beams" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-12 tracking-wider font-serif">OUR GALLERY</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
