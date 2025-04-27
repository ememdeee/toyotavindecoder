import type React from "react"
import { ScrollText } from "lucide-react"

interface VinImportanceSectionProps {
  title?: string
  mainContent?: string
  highlightedContent?: string
}

const VinImportanceSection: React.FC<VinImportanceSectionProps> = ({
  title = "The Importance of Checking a Used Car's VIN",
  mainContent = "When you're buying a used car, the VIN is your best friend, and the window sticker can help confirm its specifications. Checking a car's VIN gives you access to its history, including accident reports, previous owners, and any recalls. By using a service like toyotavindecoder.com, you can generate a vehicle condition report. This report can reveal important things like whether the car was in an accident, how well it was maintained, or if it's ever been stolen.",
  highlightedContent = "If a seller can't provide the car's VIN, consider that a red flag. They may be hiding something about the car's history. It's always wise to check the VIN on the car itself—it's usually on the dashboard near the windshield—and run it through a service like Toyota VIN Decoder.",
}) => {
  return (
    <section className="w-full py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">{title}</h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

        <div className="bg-white/70 backdrop-blur-sm p-8 shadow-lg border-2 border-primary/20">
          <div className="flex items-start mb-6">
            <ScrollText className="w-12 h-12 text-primary mr-4 flex-shrink-0" />
            <p className="text-foreground/80 leading-relaxed">{mainContent}</p>
          </div>
          <div className="bg-primary/10 p-4">
            <p className="text-foreground/90 italic">{highlightedContent}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VinImportanceSection