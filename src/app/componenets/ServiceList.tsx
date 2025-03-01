import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Printer, FileText, Store, Shield, Palette, Compass, AlertTriangle } from 'lucide-react'
import Link from "next/link"

export default function ServiceList() {
  const services = [
    {
      title: "Window Sticker",
      description: "Generate and print an authentic window sticker for any Toyota vehicle using its VIN.",
      icon: Printer,
      path: "/window-sticker",
    },
    {
      title: "Build Sheet by VIN",
      description: "Obtain a comprehensive factory build sheet detailing all specifications for any Toyota using its VIN.",
      icon: FileText,
      path: "/build-sheet-by-vin",
    },
    {
      title: "Dealers",
      description: "Access unlimited vehicle history reports and detailed information for Toyota dealerships.",
      icon: Store,
      path: "/unlimited-vin-reports",
    },
    {
      title: "Paint Code by VIN",
      description: "Find the exact paint code and color details for a Toyota by VIN.",
      icon: Palette,
      path: "/paint-code-by-vin",
    },
    {
      title: "Option By VIN",
      description: "Look up factory-installed options and packages for any Toyota by VIN.",
      icon: Compass,
      path: "/options-by-vin",
    },
    {
      title: "Warranty Check",
      description: "Check the warranty status and coverage details of a Toyota by VIN.",
      icon: Shield,
      path: "/warranty-by-vin",
    },
    {
      title: "Specs By VIN",
      description: "Retrieve detailed specifications, including engine, transmission, and dimensions, for any Toyota by VIN.",
      icon: AlertTriangle,
      path: "/specs-by-vin",
    },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-6xl px-4 py-8 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-left">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Link href={service.path} key={index} className="block group">
              <Card className="h-full transition-all duration-300 hover:shadow-md border-100 overflow-hidden">
                <CardHeader className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-100 p-2 rounded-full">
                      <service.icon className="w-6 h-6 text-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold group-hover:text-600 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}