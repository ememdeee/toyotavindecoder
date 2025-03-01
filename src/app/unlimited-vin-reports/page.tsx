import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FAQBasic from "../componenets/FAQBasic"
import { SampleReportSection } from "../componenets/SampleReportSection"
import {AlertTriangle, BarChart, Car, Database, DollarSign, FileText, Info, Layers} from "lucide-react"
import ReportFeatures from "./ReportFeatures"
import VinImportanceSection from "../componenets/VinImportanceSection"
import HeroSection from "../componenets/HeroSection"
import CustomButton from "../componenets/CustomButton"
import { Metadata } from "next"
import { generateMetadataHelper } from "../componenets/MetaGenerator"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "Unlimited VIN Report For Dealers Subscription",
    metaDescription: "Unlimited VIN reports for dealers. Access vital vehicle history data to make informed decisions. Subscribe now for comprehensive insights!",
    canonical: "https://www.toyotavindecoder.com/unlimited-vin-reports", 
    title: "Unlimited VIN Report For Dealers Subscription",
    description: "Unlimited VIN reports for dealers. Access vital vehicle history data to make informed decisions. Subscribe now for comprehensive insights!",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function WindowSticker() {
  const faqItems = [
    {
      question: "What is an Unlimited VIN Report Subscription for Dealers?",
      answer:
        "Our Unlimited VIN Report subscription allows dealers to access unlimited vehicle history reports for the duration of their subscription. It provides crucial insights like title history, auction sales, theft records, and more, helping dealers make informed decisions when buying or selling vehicles.",
    },
    {
      question: "How many VINs can I check at once?",
      answer:
        "You can check up to 25 VINs simultaneously with our bulk access feature, making it efficient to evaluate multiple vehicles at once.",
    },
    {
      question: "Is there a contract or minimum purchase requirement for the subscription?",
      answer:
        "No, there are no contracts or minimum purchase requirements. You can enjoy complete flexibility and cancel anytime without penalties.",
    },
    {
      question: "What kind of information is included in the VIN reports?",
      answer:
        "The VIN reports include: vehicle theft and recovery history, past and active liens on title, safety recall descriptions (NHTSA), historical emission records, auction sales history and photos, odometer readings and rollback incidents, market valuation data from BlackBook, NMVTIS title records (ownership history, accidents, flood damage, lemon checks), and insurance total loss and salvage records. You can view a Sample Report to understand the extensive insights you'll gain.",
    },
    {
      question: "How reliable is the information provided in the reports?",
      answer:
        "Our reports are sourced from a trusted automotive database, NMVTIS, NHTSA, insurance companies, auction houses, and other reliable sources. This ensures that the information is precise and up-to-date.",
    },
    {
      question: "Why should I opt for an Unlimited VIN Report subscription as a dealer?",
      answer:
        "By subscribing, you get access to detailed vehicle history data without limitations. This enables you to: identify potential risks such as title issues, odometer fraud, or major accidents; evaluate vehicle worth accurately with market valuation insights; and streamline your purchasing decisions and confidently manage inventory.",
    },
    {
      question: "Are historical auction sale details included in the VIN reports?",
      answer:
        "Yes, the reports include auction sales history, car photos, damage reports, document types, and final bid amounts, giving you comprehensive insights into a vehicle's auction background.",
    },
    {
      question: "Do the reports provide market valuation data?",
      answer:
        "Our reports feature detailed retail and trade-in values from BlackBook, helping you determine the fair market value of a vehicle.",
    },
    {
      question: "Will I be able to see odometer rollback or mileage discrepancies?",
      answer:
        "Yes, our reports include odometer readings, historical mileage progression, and information about any rollback incidents to ensure transparency in the vehicle's history.",
    },
    {
      question: "Can I access vehicle emission records and safety recalls?",
      answer:
        "Yes, the reports include historical emission records and safety recall details provided by the NHTSA, ensuring the vehicle meets safety and environmental standards.",
    },
    {
      question: "How does this subscription benefit my dealership operations?",
      answer:
        "The subscription provides essential vehicle history data in real time, saving you time and effort. With unlimited reports and bulk access, you can evaluate vehicles efficiently, reduce risks, and improve your inventory decisions.",
    },
    {
      question: "Is the subscription suitable for all types of vehicles?",
      answer:
        "Yes, the service supports cars, trucks, motorcycles, and RVs, offering detailed VIN specs, standard features, and optional configurations.",
    },
    {
      question: "How can I cancel my subscription?",
      answer:
        "You can cancel your subscription anytime without penalties. There are no long-term commitments or hidden fees.",
    },
    {
      question: "Are insurance records like total loss declarations included?",
      answer:
        "Yes, the reports include insurance history, such as total loss declarations, junk/salvage title brands, and impound records.",
    },
    {
      question: "How can I start using the Unlimited VIN Report subscription?",
      answer:
        "Simply subscribe to our service, and you will gain instant access to comprehensive VIN reports. Start unlocking valuable vehicle history insights today!",
    },
  ]

  return (
    <>
      <HeroSection
        title="Unlimited VIN Report For Dealers Subscription"
        description="As a dealer, having access to accurate and detailed vehicle history information is crucial for making informed decisions. Our Unlimited VIN Report subscription offers you the ability to obtain extensive vehicle history reports, ensuring you have the insights needed to enhance your business operations. With this service, you can access unlimited VIN reports for the duration of your subscription, providing you with essential data at your fingertips."
        reportType="VHR"
        showForm={false}
        heroCta={[
          {
            text: "Register Now",
            link: "https://www.clearvin.com/dealer/login/?a_aid=b3a49a62",
          },
        ]}
      />

      <section className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Opt for Our VIN Report Service?</h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="vintage-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2" />
                Reliable Automotive Database
              </CardTitle>
            </CardHeader>
            <CardContent>
              Our extensive database is built on trustworthy and precise information, giving you confidence in the
              reports you receive.
            </CardContent>
          </Card>
          <Card className="vintage-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="mr-2" />
                Bulk Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              Effortlessly check up to 25 VINs simultaneously, allowing you to evaluate multiple vehicles quickly and
              efficiently.
            </CardContent>
          </Card>
          <Card className="vintage-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2" />
                No Monthly Purchase Minimum
              </CardTitle>
            </CardHeader>
            <CardContent>
              Enjoy the flexibility of accessing reports without the pressure of minimum purchase requirements.
            </CardContent>
          </Card>
          <Card className="vintage-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" />
                No Contracts or Obligations
              </CardTitle>
            </CardHeader>
            <CardContent>
              Our subscription is designed to be straightforward, allowing you to cancel at any time without incurring
              penalties.
            </CardContent>
          </Card>
          <Card className="vintage-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="mr-2" />
                Access Vital Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              Access vital details like Window Sticker, and Vehicle History Information to understand original vehicle
              features and options straight from the manufacturer.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">What Subscribers Receive</h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
        <p className="mb-8 text-primary text-lg italic">
          As a subscriber, you will gain access to a wealth of information that can significantly impact your
          vehicle-related decisions:
        </p>

        <div className="space-y-8">
          <div className="vintage-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
              <AlertTriangle className="mr-2" />
              Vehicle History and Safety
            </h3>
            <ul className="list-disc list-inside space-y-2 text-primary/80">
              <li>
                Vehicle Theft and Recovery History: Discover if a vehicle has been reported stolen and whether it has
                been recovered.
              </li>
              <li>
                Comprehensive Car Safety Recall Descriptions: Provided by the NHTSA, these details will inform you of
                any safety recalls that may affect the vehicle&apos;s performance and safety.
              </li>
              <li>
                Historical Emission Records: Review the vehicle&apos;s emission history to ensure it meets environmental
                standards.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="vintage-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-primary flex items-center">
                <DollarSign className="mr-2" />
                Financial Insights
              </h3>
              <p className="text-primary/80">
                Past and Active Liens on Title: Understand any financial claims against the vehicle, ensuring you are
                aware of potential liabilities.
              </p>
            </div>
            <div className="vintage-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-primary flex items-center">
                <Car className="mr-2" />
                Vehicle Specifications
              </h3>
              <p className="text-primary/80">
                VIN Specs, Standard and Optional Features: Access detailed specifications for cars, trucks, motorcycles,
                and RVs, helping you understand what features are included.
              </p>
            </div>
          </div>

          <div className="vintage-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
              <BarChart className="mr-2" />
              Market and Value Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary/80">
              <div>
                <h4 className="font-semibold mb-2">Auction Sales History</h4>
                <p>
                  Gain insights into past auction sales, including damage reports, document types, car photos, and final
                  bid amounts.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Detailed Market Valuation Data</h4>
                <p>
                  Receive retail and trade-in values from BlackBook, giving you a clear picture of the vehicle&apos;s worth.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="vintage-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-primary">Odometer Reading Information</h3>
              <p className="text-primary/80">
                Learn about actual miles driven, any odometer rollback incidents, and mileage records from previous
                owners.
              </p>
            </div>
            <div className="vintage-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-primary">NMVTIS Title Records</h3>
              <p className="text-primary/80">
                Access ownership history, major accidents, flood damage reports, and lemon brand checks to ensure you
                are fully informed.
              </p>
            </div>
            <div className="vintage-card p-6">
              <h3 className="text-lg font-semibold mb-2 text-primary">Insurance Records</h3>
              <p className="text-primary/80">
                Review total loss declarations and junk/salvage title brands to understand the vehicle&apos;s insurance
                history.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center my-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">Ready to Unlock Vehicle Insights?</h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
        <CustomButton text="Register Now For Free" href="#" variant="secondary"/>
      </section>

      <ReportFeatures/>
      
      {/* Sample Report Section */}
      <SampleReportSection
        title="Sample of the Toyota VIN Report"
        imageSrc="/Toyota-Avalon-Sample-Report.webp"
        buttonLink="/Toyota-VIN-Decoder-Sample-Report-4T1FZ1FB1LU051174.pdf"
        buttonText="Get a Sample Report"
        quote="Uncover your Toyota's story with our comprehensive VIN report."
      />

      <VinImportanceSection/>

      <FAQBasic title="Frequently Asked Questions" items={faqItems} />
    </>
  )
}