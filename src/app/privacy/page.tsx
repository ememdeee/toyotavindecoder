import Link from "next/link"
import { Metadata } from "next"
import { generateMetadataHelper } from "../componenets-global/MetaGenerator"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "Privacy Policy: Your Information Protection",
    metaDescription: "Read our Privacy Policy to understand how Toyota VIN Decoder protects your information.",
    canonical: "https://www.toyotavindecoder.com/privacy", 
    title: "Privacy Policy: Your Information Protection",
    description: "Read our Privacy Policy to understand how Toyota VIN Decoder protects your information.",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-serif">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary text-center mb-6">Privacy Policy</h1>
        <div className="w-32 h-1 bg-primary mx-auto mb-12"></div>

        <div className="space-y-8">
          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed">
              At ToyotaVINDecoder.com (&apos;Toyota VIN Decoder&apos;), we are committed to protecting your privacy and supporting
              a general policy of openness about how we collect, use and disclose your personal information. This
              Privacy Policy informs you about our practices relating to the collection, use and disclosure of personal
              information through your access to or use of the Toyota VIN Decoder Services. By using any of our
              services, you consent to the collection, use and disclosure of your personal information as described in
              this policy. For definitions of capitalized terms not defined here, please refer to our Terms and
              Conditions page.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Personal Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              For the purpose of this Privacy Policy, &apos;personal information&apos; means information about an identifiable
              individual. We may collect personal information that you provide when using our services, including but
              not limited to: contact information (such as name, address, postal code, e-mail address and telephone
              number), login credentials, IP addresses, browser information, and full URL clickstream to, through, and
              from our Website. You can choose not to provide certain information, but this may limit your ability to
              use some features of our services.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Personal Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use your personal information to: provide and improve our services, respond to your search requests,
              enable certain functionalities, administer our services and website, personalize your experience, conduct
              research and analysis, and communicate with you. We may also use your information for marketing purposes,
              unless you opt out. We may employ third parties to perform certain functions on our behalf, who may
              receive access to your personal information, but only as required to perform their functions.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Cookies</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use cookies to recognize your browser and provide more efficient service. We may also use cookies to
              collect traffic data and other information about your use of our Website. This information is used in
              aggregated and anonymous form to analyze usage and improve our services. You can set your browser to
              reject cookies, but this may affect the functionality of our Website.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">How We Protect Your Personal Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              We are committed to protecting your personal information against loss, theft, and unauthorized access. We
              use industry-standard encryption for password-protected areas of our services and restrict access to your
              personal information to selected employees, representatives, and third parties as described in this
              policy.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Changes to this Privacy Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to modify this Privacy Policy at any time without notice. The Privacy Policy posted
              on this Website at any given time will be deemed to be the policy then in effect.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Contacting Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have any questions about this Privacy Policy or if you believe we may have failed to adhere to it,
              please contact us at{" "}
              <Link href="mailto:info@toyotavindecoder.com" className="text-primary hover:underline">
                info@toyotavindecoder.com
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}