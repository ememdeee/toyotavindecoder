import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "./componenets/HeroSection"
import Image from "next/image"
import FAQBasic from "./componenets/FAQBasic"
// import UrlList from "./componenets/url-list"
import { SampleReportSection } from "./componenets/SampleReportSection"

export default function Home() {
  const faqItems = [
    {
      question: "What is an ChassisVIN Vehicle History Report?",
      answer: "An ChassisVIN Vehicle History Report provides detailed information about a vehicle's past, including accidents, ownership history, and more."
    },
    {
      question: "For whom do we provide Vehicle History Reports?",
      answer: "We provide Vehicle History Reports for car buyers, sellers, dealers, and anyone interested in learning about a vehicle's history."
    },
    {
      question: "What details are included in a vehicle history report?",
      answer: "A vehicle history report offers key information like accident records, title status, past ownership, service history, odometer readings, theft records, recall updates, and more. This data allows potential buyers to evaluate a vehicle's condition and make informed choices."
    },
    {
      question: "How can a vehicle report be beneficial?",
      answer: "A vehicle report is packed with essential data on a car's history, including accident history, title details, theft records, and service history. This comprehensive insight can help you make confident decisions when buying or selling, ensuring you know a vehicle's background."
    },
    {
      question: "Can I look up a car's accident history?",
      answer: "Yes, you can check a vehicle's accident history by using its VIN with a car history lookup tool. You can also access accident records using a license plate lookup. These tools reveal title issues, accident reports, and other hidden records to boost buyer confidence."
    },
    {
      question: "Is there a free vehicle history report available?",
      answer: "While some sites provide free vehicle specs, a full history report, including accidents and ownership details, typically requires a paid service. Our reports offer all the critical data you need to make well-informed vehicle decisions."
    },
    {
      question: "How can I access vehicle details with a VIN?",
      answer: "To access detailed vehicle history, simply enter the VIN into our tool. You'll receive a complete report covering ownership history, mileage, accident history, and more, giving you a full view of the car's past."
    },
    // Add more FAQ items as needed
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary font-serif mb-4">Toyota VIN Decoder Guide</h1>
          <div className="w-32 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="vintage-card">
          <CardContent className="p-6 sm:p-10">
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">How to Use a Toyota VIN Decoder</h2>
            <ol className="list-decimal list-inside space-y-4 mb-8 text-foreground/80">
              <li>Locate your Toyota&apos;s VIN on the driver&apos;s side door, windshield, or dashboard.</li>
              <li>Enter the 17-digit VIN in the decoder tool above.</li>
              <li>Click &apos;Decode VIN&apos; to get detailed information about your vehicle.</li>
            </ol>

            <div className="my-8 border-t border-b border-primary/20 py-6">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Comprehensive VIN Decoder Information</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our comprehensive guide provides full decoding of the Toyota VIN number, explaining what each digit
                represents. This allows you to understand your vehicle&apos;s specifications in detail, including:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-foreground/80">
                <li>Manufacturing plant</li>
                <li>Model year</li>
                <li>Engine type</li>
                <li>Body style</li>
                <li>Safety features</li>
                <li>And more...</li>
              </ul>
            </div>

            <div className="bg-accent/20 p-6 vintage-border">
              <h4 className="text-lg font-serif font-bold mb-2 text-primary">Did You Know?</h4>
              <p className="text-foreground/80 italic">
                The VIN system was standardized in 1981 across all manufacturers to ensure each vehicle has a unique
                identifier.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Toyota VIN Check Section */}
      <section className="w-full py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">
            Toyota VIN Check: What is a Toyota VIN?
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

          <Card className="vintage-card overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-foreground/80 space-y-4">
                  <p className="leading-relaxed">
                    A Toyota VIN, which stands for Vehicle Identification Number, is a unique 17-character or 17-digit
                    code assigned to every vehicle manufactured, including details about when the vehicle was manufactured
                    and often found on the driver&apos;s door tag.
                  </p>
                  <p className="leading-relaxed">
                    This alphanumeric code serves as the vehicle&apos;s fingerprint, containing crucial information about its
                    make, model year, specifications, manufacturing location, and more.
                  </p>
                  <p className="leading-relaxed">
                    By decoding a Toyota VIN, one can uncover the history and specifics of the vehicle, allowing for a
                    better understanding of its background and features.
                  </p>
                </div>
                <div className="relative w-full h-auto vintage-border">
                  <Image
                    src="/Vin-number-explanation.webp"
                    alt="VIN number explanation diagram"
                    width={800}
                    height={600}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-foreground/60 italic font-serif">
              &apos;Every Toyota tells a story, and the VIN is its opening chapter.&apos;
            </p>
          </div>
        </div>
      </section>

      {/* Sample Report Section */}
      <SampleReportSection
        title="Sample of the Toyota VIN Report"
        imageSrc="/Toyota-Avalon-Sample-Report.webp"
        buttonLink="/Toyota-VIN-Decoder-Sample-Report-4T1FZ1FB1LU051174.pdf"
        buttonText="Get a Sample Report"
        quote="Uncover your Toyota's story with our comprehensive VIN report."
      />

      {/* FAQ Section */}
      <FAQBasic title="Frequently Asked Questions" items={faqItems} />

      {/* Other Makes Section */}
      {/* <UrlList dataSource='makesList' urlPrefix='https://www.chassisvin.com/vin-decoder' /> */}
      {/* <UrlList dataSource='statesList' urlPrefix='https://www.chassisvin.com/license-plate-lookup' /> */}
    </>
  )
}
