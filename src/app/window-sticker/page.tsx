import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FAQBasic from "../componenets/FAQBasic"
import { SampleReportSection } from "../componenets/SampleReportSection"
import ToyotaModelList from "../componenets/ToyotaModelList"
import { AlertCircle, AlertOctagon, CheckSquare, Clock, Key } from "lucide-react"
import { IncorrectVinSection } from "./IncorrectVinSection"
import { SalesHistorySection } from "./SalesHistorySection"
import { UsedCarGuideSection } from "./UsedCarGuideSection"
import VinImportanceSection from "../componenets/VinImportanceSection"
import HeroSection from "../componenets/HeroSection"
import { generateMetadataHelper } from "../componenets/MetaGenerator"
import { Metadata } from "next"
import { HoverToForm } from "../componenets/HoverToForm"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "Window Sticker | ChassisVIN",
    metaDescription: "View and print window stickers for your vehicle",
    canonical: "https://yourwebsite.com/window-sticker", 
    title: "Vehicle Window Sticker",
    description: "Get detailed information about your vehicle with our window sticker tool",
    imageUrl: "/window-sticker-og-image.png",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function WindowSticker() {
  const faqItems = [
      {
          question: "How can I get a Toyota window sticker by VIN?",
          answer: "You can get a Toyota window sticker by using your vehicle’s VIN on websites like monroneylabels.com, or by visiting a local Toyota dealer who can assist you in obtaining the original Monroney label.",
      },
      {
          question: "Why is it important to have the window sticker for my vehicle?",
          answer: "The window sticker provides detailed information about your vehicle, including features and packages, fuel economy ratings, and crash test ratings, which helps you make informed decisions regarding maintenance and resale value.",
      },
      {
          question: "Can I get a window sticker for an older vehicle?",
          answer: "Yes, you can often get a window sticker for older vehicles, especially if you have the VIN. However, the availability of the original sticker may vary, and you might need to check with a Toyota dealer or use an online window sticker tool.",
      },
      {
          question: "What details are included in the Toyota window sticker?",
          answer: "The Toyota window sticker includes various details such as the vehicle history, packages and options, fuel economy ratings, crash test ratings, and information about port installed accessories.",
      },
      {
          question: "Is there a charge to get a copy of the window sticker?",
          answer: "Generally, there may be a small charge associated with obtaining a copy of the window sticker from a Toyota dealer, but many online resources like monroneylabels.com allow you to print automotive window stickers for free.",
      },
      {
          question: "What if the window sticker doesn’t seem accurate?",
          answer: "If the window sticker appears inaccurate, you should verify the information with a Toyota dealer who can provide a more reliable vehicle history and assist in correcting any discrepancies.",
      },
      {
          question: "Can I access the window sticker for a used Toyota vehicle?",
          answer: "Yes, you can access the window sticker for a used Toyota vehicle using its VIN. This can be done through online tools or by requesting it from a Toyota dealer.",
      },
      {
          question: "What is a build sheet, and how is it related to the window sticker?",
          answer: "A build sheet is a detailed document that outlines all the features and options included in a specific vehicle. It is often available alongside the window sticker and provides additional insights into the vehicle’s configuration.",
      },
      {
          question: "How can I find the original Monroney sticker for a Toyota Sienna?",
          answer: "To find the original Monroney sticker for a Toyota Sienna, use the VIN on websites like monroneylabels.com, or contact a local Toyota dealer, who may be able to provide you with a copy.",
      },
      {
          question: "Where can I find more information about Toyota vehicles in general?",
          answer: "For more information about Toyota vehicles, you can visit forums, join the forum community, or check out general discussion threads focused on Toyota models, which often provide valuable insights and experiences from other owners.",
      },
  ];

  return (
    <>
      <HeroSection
        title="Toyota Window Sticker Lookup"
        description="Get detailed information about your Toyota vehicle's original specifications and features."
        reportType="WS"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="vintage-card overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-primary mb-6">Understanding Window Stickers</h2>
                <div className="w-32 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-primary mb-4">What is a Window Sticker?</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    A window sticker—also known as a Monroney sticker—is that label you often see on new cars sitting in
                    dealer lots. It lists out important information about the vehicle, including features, pricing, fuel
                    economy, safety ratings, and sometimes even warranty details.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    It&apos;s like a vehicle&apos;s resume, giving you an at-a-glance look at everything the manufacturer originally
                    included in that specific car. When the car is new, the window sticker is on display. But as time goes
                    on, it often gets lost. That&apos;s why getting a replacement window sticker, especially for a used Toyota,
                    is essential.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-primary mb-4">What is a Toyota Window Sticker?</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    A Toyota Window Sticker specifically details everything you&apos;d need to know about a Toyota vehicle when
                    it first left the factory. This includes the model, trim level, engine type, transmission, safety
                    features, and all the extra options that were added.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Many Toyota models come in different trims and with optional packages. Without the window sticker, it&apos;s
                    hard to know if the vehicle has a sunroof, leather seats, advanced safety systems, or upgraded stereo,
                    which can lead to a better experience for the buyer. That&apos;s where the VIN (Vehicle Identification
                    Number) comes into play—it&apos;s your key to unlocking all this information, including the monroney sticker.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-foreground/60 italic font-serif">
                  &apos;A window sticker is your vehicle&apos;s original birth certificate, revealing its true identity and features.&apos;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="vintage-card overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="relative">
                    <CardHeader className="p-0">
                      <CardTitle className="text-3xl font-serif text-primary mb-4">Special Features of a Toyota Window Sticker</CardTitle>
                    </CardHeader>
                    <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary"></div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    One thing that sets a Toyota window sticker apart is how detailed it can be, providing insights into the
                    vehicle&apos;s interior and features. It&apos;s not just a list of the basics. Here are some special features you
                    can find:
                  </p>
                  <ul className="list-none space-y-4">
                    {[
                      "Fuel economy: Exact EPA ratings for city and highway mileage.",
                      "Safety ratings: Crash-test results and airbag information.",
                      "Optional equipment: Navigation systems, off-road features, tech upgrades.",
                      "MSRP: Original price to compare with current market value."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 text-xl">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="relative">
                    <CardHeader className="p-0">
                      <CardTitle className="text-3xl font-serif text-primary mb-4">How to Get a Toyota Window Sticker by VIN?</CardTitle>
                    </CardHeader>
                    <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary"></div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Here&apos;s the good news: you can easily get a Toyota window sticker by VIN using online tools. All cars
                    have a unique Vehicle Identification Number (VIN). Think of the VIN like a car&apos;s fingerprint—it&apos;s unique
                    to each vehicle and holds a wealth of automotive information about it.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    You can use tools like the one at toyotavindecoder.com to quickly look up your Toyota&apos;s VIN and access
                    the window sticker. You simply need to enter the 17-digit VIN, and the system will generate a detailed
                    report for you.
                  </p>
                  <div className="mt-6">
                    <HoverToForm>
                      <Button className="vintage-border text-primary text-white hover:bg-accent hover:text-primary">
                        Get Your Toyota Window Sticker Now
                      </Button>
                    </HoverToForm>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-foreground/60 italic font-serif text-lg">
                  &apos;Unlock your Toyota&apos;s history with just a VIN - discover its original features and specifications today!&apos;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sample Report Section */}
      <SampleReportSection
        title="Sample Toyota Window Sticker Report"
        imageSrc="/Window-Sticker-Sample-Toyota-Vin-Decoder.avif"
        buttonLink="/Window-Sticker-Sample-Toyota-Vin-Decoder.avif"
        buttonText="Get a Sample Window Sticker"
        quote="Uncover your Toyota's story with our comprehensive Window Sticker."
      />

      <ToyotaModelList/>

      <VinImportanceSection/>

      <IncorrectVinSection/>

      <UsedCarGuideSection/>

      <section className="w-full py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">
            VIN of the Cars Manufactured Before the 80s
          </h2>
          <h3 className="text-xl font-serif italic mb-6 text-center">What to Do to Get Verified?</h3>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

          <div className="bg-white/70 backdrop-blur-sm p-8 shadow-lg border-2 border-dashed border-primary/30">
            <div className="flex items-start mb-6">
              <Clock className="w-12 h-12 text-primary mr-4 flex-shrink-0" />
              <div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Cars built before 1981 have shorter VINs, usually around 11 characters long. These older cars don&apos;t
                  follow the same standardized system we have today.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  So, if you&apos;re trying to verify the VIN of a classic Toyota or any other make from that era, your best
                  bet is to check with a local dealership or a classic car registry. They can often help you track down
                  the vehicle&apos;s information based on its production year and original window sticker.
                </p>
              </div>
            </div>
            <div className="alert-bg p-4 flex items-start">
              <AlertCircle className="w-6 h-6 text-stone-600 mr-3 flex-shrink-0 mt-1" />
              <p className="alert-text italic">
                Remember, verifying older VINs might require more detective work, but it&apos;s crucial for ensuring the
                authenticity of classic vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SalesHistorySection/>

      <section className="w-full py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">
            How to Check a Vehicle Title for a Lien
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

          <div className="bg-white/70 backdrop-blur-sm p-8 shadow-lg border-t-4 border-primary">
            <div className="flex items-start mb-6">
              <Key className="w-12 h-12 text-primary mr-4 flex-shrink-0" />
              <div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Before buying a used car, you should always check the title to see if there are any liens on it. A lien
                  means that the previous owner still owes money on the car, which you can often confirm through the
                  window sticker.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  If you buy a car with a lien, the lender could come after you for payment. To avoid this, run a VIN
                  check that will tell you if there are any outstanding liens or issues with the monroney label.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="vintage-card p-4">
                <h3 className="text-lg font-semibold mb-3 flex items-center text-stone-800">
                  <AlertOctagon className="w-6 h-6 text-stone-600 mr-2" />
                  Risks of Ignoring Liens
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  <li>Potential legal issues</li>
                  <li>Financial responsibility for unpaid debts</li>
                  <li>Difficulty transferring ownership</li>
                </ul>
              </div>
              <div className="vintage-card p-4">
                <h3 className="text-lg font-semibold mb-3 flex items-center text-stone-800">
                  <CheckSquare className="w-6 h-6 text-stone-600 mr-2" />
                  Benefits of Lien Checks
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  <li>Peace of mind in your purchase</li>
                  <li>Clear understanding of the car&apos;s financial status</li>
                  <li>Avoid unexpected financial burdens</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-foreground/80 italic">
              You can do this quickly by using the VIN lookup tool to verify the car&apos;s title and lien status before making
              any purchase decisions. It&apos;s a step many people overlook but can save you from major headaches later.
            </p>
          </div>
        </div>
      </section>

      <FAQBasic title="Frequently Asked Questions" items={faqItems} />
    </>
  )
}

