import { Mail, MapPin, Clock, MessageSquare } from "lucide-react"
import { Metadata } from "next"
import { generateMetadataHelper } from "../componenets-global/MetaGenerator"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "Contact Us | Get in Touch with Our Team",
    metaDescription: "Have questions or need assistance? Reach out to Toyota VIN Decoder's support team for expert help and quick responses.",
    canonical: "https://www.toyotavindecoder.com/contact-us", 
    title: "Contact Us | Get in Touch with Our Team",
    description: "Have questions or need assistance? Reach out to Toyota VIN Decoder's support team for expert help and quick responses.",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary text-center mb-6">Contact Us</h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="bg-white/70 backdrop-blur-sm p-8 border-2 border-primary/20 shadow-lg text-center">
            <p className="text-foreground/80 leading-relaxed text-lg mb-4">
              Have questions about our VIN decoder services? We&apos;re here to help!
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Our dedicated support team is ready to assist you with any inquiries about Toyota VIN decoding, window
              stickers, or dealer services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Section */}
            <div className="vintage-card p-8 border-2 border-primary/20">
              <div className="flex items-center mb-4">
                <Mail className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Email Us</h2>
              </div>
              <p className="text-foreground/80 mb-4">Send us an email anytime. We typically respond within 24 hours.</p>
              <a href="mailto:info@toyotavindecoder.com" className="text-primary hover:underline font-medium">
                info@toyotavindecoder.com
              </a>
            </div>

            {/* Visit Us Section */}
            <div className="vintage-card p-8 border-2 border-primary/20">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Visit Us</h2>
              </div>
              <p className="text-foreground/80 mb-2">1234 Automotive Drive</p>
              <p className="text-foreground/80">San Francisco, CA 94105</p>
            </div>

            {/* Business Hours */}
            <div className="vintage-card p-8 border-2 border-primary/20">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Business Hours</h2>
              </div>
              <div className="space-y-2 text-foreground/80">
                <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                <p>Saturday: 10:00 AM - 4:00 PM (PST)</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Live Chat */}
            <div className="vintage-card p-8 border-2 border-primary/20">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Live Chat</h2>
              </div>
              <p className="text-foreground/80 mb-4">
                Need immediate assistance? Chat with our support team during business hours.
              </p>
              <a href="mailto:info@toyotavindecoder.com">
                <button className="inline-block px-6 py-2 bg-primary/10 text-primary border-2 border-primary font-serif text-base font-semibold transition-all duration-300 ease-in-out hover:bg-primary/20 relative overflow-hidden group">
                  <span className="relative z-10">Start Chat</span>
                  <span className="absolute inset-0 bg-primary/5 transform -skew-x-12 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

