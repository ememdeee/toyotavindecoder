import { AlertTriangle, CheckCircle } from "lucide-react"

export function IncorrectVinSection() {
  const vinChecks = [
    {
      title: "Run the VIN online",
      description:
        "Use a reliable tool, like the one offered by toyotavindecoder.com to see if the history report lines up with the car's condition.",
    },
    {
      title: "Check for mismatched numbers",
      description: "Make sure the VIN on the car matches what's on the title or insurance papers.",
    },
    {
      title: "Look for physical tampering",
      description: "If the VIN plate looks scratched, dented, or altered in any way, that's a huge red flag.",
    },
  ]

  return (
    <section className="w-full py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">
          How to Detect Incorrect VIN Numbers
        </h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

        <div className="bg-white/70 backdrop-blur-sm p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-primary mr-4" />
            <p className="text-lg font-medium">You might be wondering, &apos;Can a VIN be wrong?&apos; Yes, it can!</p>
          </div>
          <p className="mb-6 text-foreground/80">
            Sometimes, people tamper with VIN numbers to cover up a car&apos;s true history, especially if the vehicle has
            been in an accident or has other issues. Here are some ways to spot an incorrect VIN:
          </p>
          <div className="space-y-4">
            {vinChecks.map((check, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-stone-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{check.title}</h3>
                  <p className="text-foreground/70">{check.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}