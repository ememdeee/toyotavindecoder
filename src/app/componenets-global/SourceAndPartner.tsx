import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const items = [
  {
    name: "ClearVIN",
    logo: "/global/clear-vin-logo.webp",
    description:
      "An official NMVTIS report delivers a comprehensive vehicle history by aggregating data from trusted sources, ensuring you get the most complete and accurate picture of a vehicle's past.",
    link: "https://www.clearvin.com/?a_aid=b3a49a62",
    rel: "noopener noreferrer",
  },
  {
    name: "ChassisVIN",
    logo: "/global/chassis-vin-logo.webp",
    description:
      "Provides comprehensive vehicle history reports and VIN decoding services, offering detailed information about a vehicle's past and specifications.",
    link: "https://www.chassisvin.com/",
    rel: "noopener",
  },
  {
    name: "Auto VIN Lookup",
    logo: "/global/auto-vin-lookup-logo.webp",
    description:
      "Offers comprehensive vehicle history reports and VIN lookup services for thorough vehicle background checks.",
    link: "https://autovinlookup.com/",
    rel: "noopener",
  },
  {
    name: "Toyota VIN Decoder",
    logo: "/global/toyota-vin-decoder-logo.webp",
    description:
      "Specialized service for decoding Toyota vehicle identification numbers, providing detailed vehicle specifications and history.",
    link: "https://www.toyotavindecoder.com/",
    rel: "noopener",
  },
]

export default function SourceAndPartner() {
  return (
    <div className="w-full py-12">
      <div className="px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl tracking-tighter mb-8">Our Data Sources & Partners</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Link key={index} href={item.link} target="_blank" rel={item.rel}>
              <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-full h-24 relative mb-4">
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                  <span
                    className="text-primary hover:underline mt-4 inline-block"
                  >
                    Learn More
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}