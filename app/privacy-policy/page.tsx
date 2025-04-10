import Navbar from "@/components/navbar"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-12 tracking-wider">PRIVACY POLICY</h1>

        <div className="prose max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you make a reservation, sign up for
            our newsletter, or contact us. This may include your name, email address, phone number, and dietary
            preferences.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and confirm your reservations</li>
            <li>Send you promotional emails about special events and offers</li>
            <li>Improve our website and services</li>
            <li>Respond to your inquiries and provide customer support</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except as
            described below:
          </p>
          <ul>
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>When required by law or to protect our rights</li>
            <li>In the event of a merger, acquisition, or sale of all or a portion of our assets</li>
          </ul>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We have no control over and assume no responsibility
            for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also object to or
            restrict the processing of your personal information. To exercise these rights, please contact us.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@opulentpour.com.</p>

          <Separator className="my-8" />

          <p className="text-sm text-gray-500">
            Last updated: April 7, 2025. Opulent Pour reserves the right to modify this privacy policy at any time
            without prior notice.
          </p>
        </div>
      </div>
    </main>
  )
}
