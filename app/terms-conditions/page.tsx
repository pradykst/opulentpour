import Navbar from "@/components/navbar"
import { Separator } from "@/components/ui/separator"

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-12 tracking-wider">TERMS & CONDITIONS</h1>

        <div className="prose max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Opulent Pour website and services, you accept and agree to be bound by the terms
            and provisions of this agreement.
          </p>

          <h2>2. Reservation Policy</h2>
          <p>
            Reservations are recommended to ensure availability. A credit card is required to secure your reservation.
            Please note that for parties of 6 or more, a 50% deposit may be required.
          </p>

          <h2>3. Cancellation Policy</h2>
          <p>
            Cancellations must be made at least 24 hours in advance. Late cancellations or no-shows may result in a
            cancellation fee equivalent to the price of the set menu per person.
          </p>

          <h2>4. Dress Code</h2>
          <p>
            Smart casual attire is required. We reserve the right to refuse entry to guests who do not adhere to our
            dress code.
          </p>

          <h2>5. Children Policy</h2>
          <p>
            Children above the age of 8 years are welcome. We request parents to ensure that children maintain the
            ambiance of the restaurant.
          </p>

          <h2>6. Payment Methods</h2>
          <p>
            We accept all major credit cards, debit cards, and cash payments. All prices are inclusive of taxes unless
            otherwise stated.
          </p>

          <h2>7. Privacy Policy</h2>
          <p>
            We respect your privacy and are committed to protecting it. Please refer to our Privacy Policy for
            information on how we collect, use, and disclose information.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of
            Opulent Pour and is protected by copyright laws.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            Opulent Pour shall not be liable for any direct, indirect, incidental, special, or consequential damages
            resulting from the use or inability to use our services.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India, and you
            irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
          </p>

          <Separator className="my-8" />

          <p className="text-sm text-gray-500">
            Last updated: April 7, 2025. Opulent Pour reserves the right to modify these terms and conditions at any
            time without prior notice.
          </p>
        </div>
      </div>
    </main>
  )
}
