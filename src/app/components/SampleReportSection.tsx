import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import CustomButton from "./CustomButton"

interface SampleReportSectionProps {
  title: string
  imageSrc: string
  buttonLink: string
  buttonText: string
  quote?: string
}

export function SampleReportSection({ title, imageSrc, buttonLink, buttonText, quote }: SampleReportSectionProps) {
  return (
    <section className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">{title}</h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

        <Card className="vintage-card overflow-hidden rounded-none">
          <CardContent className="p-6">
            <div className="relative w-full h-auto mb-6 vintage-border">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                width={1920}
                height={1080}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="text-center">
              <CustomButton variant="secondary" size="small" text={buttonText} href={buttonLink} />
            </div>
          </CardContent>
        </Card>

        {quote && (
          <div className="mt-8 text-center">
            <p className="text-foreground/60 italic font-serif">&apos;{quote}&apos;</p>
          </div>
        )}
      </div>
    </section>
  )
}