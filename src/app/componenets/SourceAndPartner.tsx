import Image from "next/image"
import Link from "next/link"

const items = [
  {
    name: "ClearVIN",
    logo: "/clearvin-logo.webp",
    description:
      "An official NMVTIS report delivers a comprehensive vehicle history by aggregating data from trusted sources, ensuring you get the most complete and accurate picture of a vehicle's past.",
    link: "https://www.clearvin.com/?a_aid=b3a49a62",
    rel: "noopener noreferrer",
  },
  {
    name: "ChassisVIN",
    logo: "/ChassisVIN.webp",
    description:
      "Provides comprehensive vehicle history reports and VIN decoding services, offering detailed information about a vehicle's past and specifications.",
    link: "https://www.chassisvin.com/",
    rel: "noopener",
  },
  {
    name: "Auto VIN Lookup",
    logo: "/auto-vin-lookup-logo.webp",
    description:
      "Offers comprehensive vehicle history reports and VIN lookup services for thorough vehicle background checks.",
    link: "https://autovinlookup.com/",
    rel: "noopener",
  },
  {
    name: "Toyota VIN Decoder",
    logo: "/toyota-vin-decoder-logo.webp",
    description:
      "Specialized service for decoding Toyota vehicle identification numbers, providing detailed vehicle specifications and history.",
    link: "https://www.toyotavindecoder.com/",
    rel: "noopener",
  },
]

export default function SourceAndPartner() {
  return (
    <section className="w-full py-16 bg-secondary/30 font-serif">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">Our Data Sources & Partners</h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-12"></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Link key={index} href={item.link} target="_blank" rel={item.rel}>
              <div className="vintage-card p-6 border-2 border-primary/20 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="w-full h-24 relative mb-4">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={`${item.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.name}</h3>
                <p className="text-foreground/80 flex-grow mb-4">{item.description}</p>
                <span className="text-primary hover:underline mt-auto inline-block group">
                  Learn More
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}