import Link from "next/link"
import { Car, FileText, Store, ArrowRight } from "lucide-react"
import { Metadata } from "next"
import { generateMetadataHelper } from "../componenets-global/MetaGenerator"
import SourceAndPartner from "../componenets-global/SourceAndPartner"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "About Us | Our Mission and Values",
    metaDescription: "Learn about Toyota Decoder by VIN, our journey, and vision for enhancing vehicle information experiences. Discover what drives us forward.",
    canonical: "https://www.toyotavindecoder.com/about-us", 
    title: "About Us | Our Mission and Values",
    description: "Learn about Toyota Decoder by VIN, our journey, and vision for enhancing vehicle information experiences. Discover what drives us forward.",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen w-full font-serif">
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary text-center mb-6">About Toyota VIN Decoder</h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="bg-white/70 backdrop-blur-sm p-8 border-2 border-primary/20 shadow-lg">
            <p className="text-foreground/80 leading-relaxed text-lg text-center mb-6">
              ToyotaVINDecoder.com is your reliable source for decoding Toyota vehicle VINs. We offer accurate and
              comprehensive VIN decoding services for all Toyota vehicle types and models, covering VINs from 17
              characters long, i.e., from modern cars to trucks.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg text-center">
              Our dedication to accuracy, trust, and data transparency ensures that every piece of information decoded
              from the VIN is precise and reliable. This enables car buyers to confidently verify the specifications,
              features, and factory details of any Toyota vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">What We Do</h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="vintage-card p-6 border-2 border-primary/20">
            <p className="text-foreground/80 leading-relaxed mb-4">
              At ToyotaVINDecoder.com, we instantly decode all Toyota VINs and provide comprehensive vehicle details in
              an easily downloadable and printable PDF format.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Our tool is affordable, reliable, and fast. It allows users to obtain detailed reports about their Toyota
              vehicles in just a few seconds, ensuring a seamless and efficient experience from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Our Services</h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/"
              className="vintage-card p-6 border-2 border-primary/20 hover:bg-primary/5 transition-colors group"
            >
              <Car className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">VIN Decoder</h3>
              <p className="text-foreground/70 mb-4">
                Comprehensive vehicle history and specifications for Toyota vehicles.
              </p>
              <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/window-sticker"
              className="vintage-card p-6 border-2 border-primary/20 hover:bg-primary/5 transition-colors group"
            >
              <FileText className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Window Sticker</h3>
              <p className="text-foreground/70 mb-4">
                Original window sticker reproduction with detailed vehicle information.
              </p>
              <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/unlimited-vin-reports"
              className="vintage-card p-6 border-2 border-primary/20 hover:bg-primary/5 transition-colors group"
            >
              <Store className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Dealer Plan</h3>
              <p className="text-foreground/70 mb-4">Special plans and bulk pricing for automotive dealers.</p>
              <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Our Mission and Vision</h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="vintage-card p-8 border-2 border-primary/20 text-center">
            <p className="text-foreground/80 leading-relaxed">
              Our mission and vision are to empower Toyota buyers, sellers, dealers, and enthusiasts with the ability to
              easily and swiftly access accurate and comprehensive vehicle information through our reliable VIN decoding
              service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Contact Us</h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="vintage-card p-8 border-2 border-primary/20 text-center">
            <p className="text-foreground/80 leading-relaxed mb-4">
              Do you have questions or feedback? Contact our friendly support team at{" "}
              <a href="mailto:info@toyotavindecoder.com" className="text-primary hover:underline">
                info@toyotavindecoder.com
              </a>{" "}
              or speak to us on live chat. We&apos;re here to assist you round the clock.
            </p>
            <p className="text-foreground/80 leading-relaxed font-semibold">
              Thank you for choosing ToyotaVinDecoder.com.
            </p>
          </div>
        </div>
      </section>

      {/* Source */}
      <SourceAndPartner/>
    </div>
  )
}