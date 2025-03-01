import { FileText, ExternalLink } from 'lucide-react'

const features = [
  "DMV Title History",
  "Car Rating",
  "Ownership History",
  "Usage Type",
  "Emission Records",
  "Auction Sales History & Photos",
  "Photos & Pricing from Dealer Sales",
  "Junk & Salvage Information",
  "Mileage Progression & Odometer Events",
  "Insurance Total Loss",
  "Impound Records",
  "Undisclosed Lien & Historical Title Liens",
  "Theft Records",
  "Market Values",
  "Safety Recalls"
]

export default function ReportFeatures() {
  return (
    <section className="my-16 font-serif max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center mb-4">Features Accessible in the Reports</h2>
      <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
      <p className="text-lg text-primary mb-8 text-center italic">
        Our VIN report service comes packed with essential features, including:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="vintage-card p-4 shadow-md flex items-center">
            <FileText className="text-primary mr-3" />
            <span className="text-primary">{feature}</span>
          </div>
        ))}
      </div>
      <div className="bg-primary/10 border border-primary/30 p-6 mb-8">
        <p className="text-lg text-primary mb-4">
          Want to see the depth of our reports before subscribing? View a Sample Report to understand the extensive insights you&apos;ll gain.
        </p>
        <a href="#" className="inline-flex items-center text-primary hover:underline font-semibold">
          Sample Report <ExternalLink className="ml-2" size={18} />
        </a>
      </div>
      <div className="text-center space-y-6">
        <p className="text-lg text-primary">
          With our Unlimited VIN Report subscription, you gain access to a comprehensive suite of information that empowers you to make informed decisions as a dealer. Whether you are buying, selling, or managing your inventory, our service provides the tools you need to navigate the automotive market confidently.
        </p>
        <p className="text-xl text-primary font-semibold">
          Sign up today and unlock the full potential of vehicle history reports!
        </p>
        <button className="vintage-button px-8 py-3 text-lg font-semibold">
          Register Now For Free
        </button>
      </div>
    </section>
  )
}