import { Car, PenToolIcon as Tool, FileSearch, PaintBucket } from "lucide-react"

export function UsedCarGuideSection() {
  const steps = [
    {
      icon: FileSearch,
      title: "Check the VIN",
      description: "Start by checking the vehicle's history through the VIN.",
    },
    { icon: Tool, title: "Inspect the car", description: "Have a trusted mechanic inspect the car in person." },
    {
      icon: PaintBucket,
      title: "Look for damage",
      description: "Check for signs of previous damage, like mismatched paint or uneven tire wear.",
    },
    {
      icon: Car,
      title: "Ask for records",
      description: "Request service records to understand the car's maintenance history.",
    },
  ]

  return (
    <section className="w-full py-16 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">
          The Ultimate Used Car Buying Guide
        </h2>
        <h3 className="text-xl font-serif italic mb-6 text-center">So You Don&apos;t End Up Owning a Lemon</h3>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

        <div className="bg-white/70 backdrop-blur-sm p-8 shadow-lg">
          <p className="mb-8 text-foreground/80 leading-relaxed">
            Buying a used car can be tricky, but there are steps you can take to avoid getting stuck with a lemon.
            Follow these key steps to ensure you&apos;re making a smart purchase:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="vintage-card flex items-start p-4">
                <step.icon className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-foreground/80 italic">
            If the seller doesn&apos;t have the window sticker, you can easily generate one here. This will give you the
            original details of the car&apos;s features, so you know exactly what you&apos;re buying.
          </p>
        </div>
      </div>
    </section>
  )
}

