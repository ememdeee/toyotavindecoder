import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import SiteForm from "../componenets-global/SiteForm"
import Image from "next/image"
import CustomButton from "./CustomButton"

interface HeroCta {
  text: string
  link: string
}

interface HeroProps {
  logoUrl?: string
  title?: string
  description?: string
  showForm?: boolean
  heroCta?: HeroCta[]
  reportType?: "VHR" | "WS" | "COLOR"
}

export default function HeroSection({
  logoUrl = "",
  title = "Free Toyota Decoder by VIN",
  description = "When it comes to understanding the complete history of a Toyota car, one of the biggest world manufacturers, utilizing a VIN decoder is crucial, allowing you to cross-check information in the database. A VIN, short for Vehicle Identification Number, is a unique code assigned to each vehicle manufactured, whether it be a Toyota, Ford, or Jeep. Get a Free Toyota VIN decoder and you can obtain comprehensive information about the specific vehicle you're interested in, such as the model, engine specifications, manufacturing details, and more. This includes details for Toyota's trucks and Jeep models, whether you're looking for a full vehicle history or specific VINs.",
  showForm = true,
  heroCta = [],
  reportType = "VHR",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 vintage-border text-primary font-serif rounded-none">
            Trusted by over 1,000,000 users
          </Badge>
          {logoUrl && (
            <Image
              src={logoUrl || "/placeholder.svg"}
              alt="Vehicle Lookup Logo"
              className="mx-auto mb-6"
              width={80}
              height={80}
            />
          )}
          <h1 className="text-4xl font-bold mb-6 text-primary font-serif">{title}</h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
          <div className="p-6">
            <p className="text-foreground/80 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Search Section */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-8">
            {(reportType === "VHR" || reportType === "WS") && <SiteForm reportType={reportType} />}
            {reportType === "COLOR" && "COLOR FORM"}
          </div>
        )}

        {/* CTA Buttons */}
        {heroCta && heroCta.length > 0 && (
          <div className="flex justify-center mt-6 space-x-4 mb-12">
            {heroCta.map((cta, index) => (
              <CustomButton key={index} text={cta.text} href={cta.link} />
            ))}
          </div>
        )}

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <div className="flex items-center space-x-2 p-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-primary fill-current" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.8/5</span>
            <span className="text-foreground/60">(600+ Reviews)</span>
          </div>
          <div className="flex gap-4">
            {["Forbes", "Reuters", "TopGear"].map((brand) => (
              <div key={brand} className="text-primary font-serif font-semibold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}