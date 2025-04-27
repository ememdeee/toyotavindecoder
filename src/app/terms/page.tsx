import Link from "next/link"
import { Metadata } from "next"
import { generateMetadataHelper } from "../componenets-global/MetaGenerator"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "Terms and Conditions: Your Agreement with Us",
    metaDescription: "Review the Terms and Conditions of Toyota VIN Decoder to understand your rights, responsibilities, and our policies.",
    canonical: "https://www.toyotavindecoder.com/terms", 
    title: "Terms and Conditions: Your Agreement with Us",
    description: "Review the Terms and Conditions of Toyota VIN Decoder to understand your rights, responsibilities, and our policies.",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background font-serif">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary text-center mb-6">Terms and Conditions</h1>
        <div className="w-32 h-1 bg-primary mx-auto mb-12"></div>

        <div className="space-y-8">
          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed">
              At ToyotaVINDecoder.com (&apos;Toyota VIN Decoder&apos;), we are committed to protecting your privacy and supporting
              a general policy of openness about how we collect, use and disclose your personal information. These Terms
              and Conditions govern your use of the Toyota VIN Decoder Services. By using any of our services, you agree
              to these terms. We recommend that you read these Terms and Conditions carefully and retain them for future
              reference. Any capitalized terms not defined here are defined in our Privacy Policy.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Use of Toyota VIN Decoder Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              By using the Toyota VIN Decoder Services, you agree to use them only for lawful purposes and in accordance
              with these Terms and Conditions. You are responsible for maintaining the confidentiality of your account
              and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              The content, organization, graphics, design, compilation, magnetic translation, digital conversion and
              other matters related to the Website and Services are protected under applicable copyrights, trademarks
              and other proprietary rights. The copying, redistribution, use or publication by you of any such matters
              or any part of the Website or Services is strictly prohibited.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Disclaimer of Warranties</h2>
            <p className="text-foreground/80 leading-relaxed">
              The Toyota VIN Decoder Services are provided &apos;as is&apos; without warranty of any kind, either express or
              implied, including, but not limited to, the implied warranties of merchantability and fitness for a
              particular purpose. Toyota VIN Decoder does not warrant that the functions contained in the materials will
              be uninterrupted or error-free, that defects will be corrected, or that this site or the server that makes
              it available are free of viruses or other harmful components.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              Toyota VIN Decoder shall not be liable for any special or consequential damages that result from the use
              of, or the inability to use, the services and products offered on this site, or the performance of the
              services and products.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Changes to Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              Toyota VIN Decoder reserves the right to modify, suspend, or discontinue any part of the Services at any
              time, with or without notice to you. We will not be liable to you or to any third party for any
              modification, suspension, or discontinuance of the Services.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Termination</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice
              or liability, under our sole discretion, for any reason whatsoever and without limitation, including but
              not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue
              using the Service or follow the account deletion process outlined in our Privacy Policy.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the United States, without
              regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms
              will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Changes to Terms and Conditions</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time without notice. The Terms and
              Conditions posted at any time or from time to time via this Website will be deemed to be the terms then in
              effect. We encourage you to periodically review these Terms and Conditions.
            </p>
          </section>

          <section className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at{" "}
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